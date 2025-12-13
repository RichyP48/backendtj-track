"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Package, Search, AlertTriangle, TrendingUp, TrendingDown, ArrowUpDown, Loader2, Plus, BarChart3, ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useMerchantArticles, useAjusterStockMerchant, useAjouterArticleMerchant, useAllCategories } from "@/hooks/use-api"
import { useAuth } from "@/contexts/auth-context"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StockAnalytics } from "@/components/stock/stock-analytics"
import { ReorderSuggestions } from "@/components/stock/reorder-suggestions"
import { MovementAnalytics } from "@/components/stock/movement-analytics"

export default function MerchantStockPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [adjustDialog, setAdjustDialog] = useState<{
    open: boolean
    article: Record<string, unknown> | null
    type: "add" | "remove"
  }>({ open: false, article: null, type: "add" })
  const [adjustQuantity, setAdjustQuantity] = useState("")
  const [adjustMotif, setAdjustMotif] = useState("")
  const [addDialog, setAddDialog] = useState(false)
  const [newArticle, setNewArticle] = useState({
    designation: "",
    description: "",
    prixUnitaireHt: "",
    quantiteStock: "",
    seuilAlerte: "5",
    categorieId: ""
  })
  const { toast } = useToast()
  const { user } = useAuth()

  const { data: stockResponse, isLoading, error, refetch } = useMerchantArticles(user?.id || user?.email || "")
  const { data: categoriesResponse } = useAllCategories()
  const adjustStockMutation = useAjusterStockMerchant()
  const addArticleMutation = useAjouterArticleMerchant()
  
  const categories = categoriesResponse?.data || []

  // Extract stock from response
  const stock = stockResponse?.data || stockResponse || []

  const filteredStock = Array.isArray(stock)
    ? stock.filter(
        (s) =>
          s.designation?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.codeArticle?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  const handleAdjust = async () => {
    if (!adjustDialog.article || !adjustQuantity || !adjustMotif) return

    const qty = Number.parseInt(adjustQuantity)
    const finalQty = adjustDialog.type === "add" ? qty : -qty

    try {
      await adjustStockMutation.mutateAsync({
        id: adjustDialog.article.id as number,
        quantite: finalQty,
        motif: adjustMotif,
        userId: user?.id || user?.email || "",
      })

      toast({
        title: "Stock ajusté",
        description: `${adjustDialog.type === "add" ? "Ajout" : "Retrait"} de ${qty} unités effectué`,
      })

      setAdjustDialog({ open: false, article: null, type: "add" })
      setAdjustQuantity("")
      setAdjustMotif("")
      refetch()
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible d'ajuster le stock",
        variant: "destructive",
      })
    }
  }

  const handleAddArticle = async () => {
    if (!newArticle.designation || !newArticle.prixUnitaireHt || !newArticle.quantiteStock) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires",
        variant: "destructive"
      })
      return
    }

    try {
      await addArticleMutation.mutateAsync({
        userId: user?.id || user?.email || "",
        data: {
          designation: newArticle.designation,
          description: newArticle.description,
          prixUnitaireHt: parseFloat(newArticle.prixUnitaireHt),
          prixUnitaireTtc: parseFloat(newArticle.prixUnitaireHt) * 1.2,
          quantiteStock: parseInt(newArticle.quantiteStock),
          seuilAlerte: parseInt(newArticle.seuilAlerte),
          categorieId: newArticle.categorieId ? parseInt(newArticle.categorieId) : null
        }
      })

      toast({
        title: "Article ajouté",
        description: "L'article a été ajouté avec succès"
      })

      setAddDialog(false)
      setNewArticle({
        designation: "",
        description: "",
        prixUnitaireHt: "",
        quantiteStock: "",
        seuilAlerte: "5",
        categorieId: ""
      })
      refetch()
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible d'ajouter l'article",
        variant: "destructive"
      })
    }
  }

  const getStockStatus = (item: Record<string, unknown>) => {
    const qty = (item.quantiteStock as number) || 0
    const threshold = (item.seuilAlerte as number) || 5
    if (qty === 0) return { label: "Rupture", variant: "destructive" as const }
    if (qty <= threshold) return { label: "Faible", variant: "outline" as const }
    return { label: "OK", variant: "secondary" as const }
  }

  const formatPrice = (price: number) => new Intl.NumberFormat("fr-FR").format(price) + " XAF"

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Erreur lors du chargement du stock</p>
        <Button variant="outline" onClick={() => refetch()} className="mt-4">
          Réessayer
        </Button>
      </div>
    )
  }

  const totalValue = filteredStock.reduce(
    (sum, s) => sum + ((s.quantiteStock as number) || 0) * ((s.prixUnitaireHt as number) || 0),
    0,
  )
  const lowStockCount = filteredStock.filter(
    (s) =>
      ((s.quantiteStock as number) || 0) <= ((s.seuilAlerte as number) || 5) && ((s.quantiteStock as number) || 0) > 0,
  ).length
  const outOfStockCount = filteredStock.filter((s) => ((s.quantiteStock as number) || 0) === 0).length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mon Stock</h1>
        <p className="text-muted-foreground">Gérez votre inventaire avec des outils avancés</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Package className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Articles</p>
                <p className="text-2xl font-bold">{filteredStock.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Valeur Stock</p>
                <p className="text-xl font-bold">{formatPrice(totalValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-orange-500/10">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Stock faible</p>
                <p className="text-2xl font-bold">{lowStockCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-red-500/10">
                <TrendingDown className="h-5 w-5 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ruptures</p>
                <p className="text-2xl font-bold">{outOfStockCount}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search & Add */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher un article..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button onClick={() => setAddDialog(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Ajouter Article
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs pour différentes vues */}
      <Tabs defaultValue="inventory" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="inventory" className="flex items-center gap-2">
            <Package className="h-4 w-4" />
            Inventaire
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reorder" className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4" />
            Réappro
          </TabsTrigger>
          <TabsTrigger value="movements" className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4" />
            Mouvements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inventory">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Inventaire</CardTitle>
            </CardHeader>
            <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Désignation</TableHead>
                <TableHead className="text-center">Stock</TableHead>
                <TableHead className="text-center">Seuil</TableHead>
                <TableHead className="text-center">Statut</TableHead>
                <TableHead className="text-right">Valeur</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStock.map((item) => {
                const status = getStockStatus(item)
                const qty = (item.quantiteStock as number) || 0
                const threshold = (item.seuilAlerte as number) || 5
                const max = (item.stockMax as number) || 100
                const price = (item.prixUnitaireHt as number) || 0
                return (
                  <TableRow key={item.id as number}>
                    <TableCell className="font-mono text-sm">{item.codeArticle as string}</TableCell>
                    <TableCell className="font-medium">{item.designation as string}</TableCell>
                    <TableCell className="text-center">
                      <span className={qty <= threshold ? "text-orange-500 font-bold" : ""}>{qty}</span>
                      <span className="text-muted-foreground">/{max}</span>
                    </TableCell>
                    <TableCell className="text-center">{threshold}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={status.variant}>{status.label}</Badge>
                    </TableCell>
                    <TableCell className="text-right">{formatPrice(qty * price)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setAdjustDialog({ open: true, article: item, type: "add" })}
                        >
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Entrée
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setAdjustDialog({ open: true, article: item, type: "remove" })}
                        >
                          <TrendingDown className="h-3 w-3 mr-1" />
                          Sortie
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
              {filteredStock.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    Aucun article trouvé
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <StockAnalytics articles={filteredStock} />
        </TabsContent>

        <TabsContent value="reorder">
          <ReorderSuggestions articles={filteredStock} />
        </TabsContent>

        <TabsContent value="movements">
          <MovementAnalytics mouvements={[]} />
        </TabsContent>
      </Tabs>

      {/* Adjust Dialog */}
      <Dialog open={adjustDialog.open} onOpenChange={(open) => setAdjustDialog({ ...adjustDialog, open })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{adjustDialog.type === "add" ? "Entrée de stock" : "Sortie de stock"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-3 rounded-lg bg-muted">
              <p className="font-medium">{adjustDialog.article?.designation as string}</p>
              <p className="text-sm text-muted-foreground">
                Stock actuel: {(adjustDialog.article?.quantiteStock as number) || 0} unités
              </p>
            </div>
            <div className="space-y-2">
              <Label>Quantité</Label>
              <Input
                type="number"
                min="1"
                value={adjustQuantity}
                onChange={(e) => setAdjustQuantity(e.target.value)}
                placeholder="Entrez la quantité"
              />
            </div>
            <div className="space-y-2">
              <Label>Motif</Label>
              <Textarea
                value={adjustMotif}
                onChange={(e) => setAdjustMotif(e.target.value)}
                placeholder="Raison de l'ajustement..."
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAdjustDialog({ open: false, article: null, type: "add" })}>
              Annuler
            </Button>
            <Button onClick={handleAdjust} disabled={!adjustQuantity || !adjustMotif || adjustStockMutation.isPending}>
              {adjustStockMutation.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Confirmer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Article Dialog */}
      <Dialog open={addDialog} onOpenChange={setAddDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Ajouter un Article</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Désignation *</Label>
                <Input
                  value={newArticle.designation}
                  onChange={(e) => setNewArticle({ ...newArticle, designation: e.target.value })}
                  placeholder="Nom de l'article"
                />
              </div>
              <div className="space-y-2">
                <Label>Catégorie</Label>
                <Select value={newArticle.categorieId} onValueChange={(value) => setNewArticle({ ...newArticle, categorieId: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat: any) => (
                      <SelectItem key={cat.id} value={cat.id.toString()}>
                        {cat.designation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={newArticle.description}
                onChange={(e) => setNewArticle({ ...newArticle, description: e.target.value })}
                placeholder="Description de l'article"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Prix HT (XAF) *</Label>
                <Input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newArticle.prixUnitaireHt}
                  onChange={(e) => setNewArticle({ ...newArticle, prixUnitaireHt: e.target.value })}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label>Quantité initiale *</Label>
                <Input
                  type="number"
                  min="0"
                  value={newArticle.quantiteStock}
                  onChange={(e) => setNewArticle({ ...newArticle, quantiteStock: e.target.value })}
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <Label>Seuil d'alerte</Label>
                <Input
                  type="number"
                  min="0"
                  value={newArticle.seuilAlerte}
                  onChange={(e) => setNewArticle({ ...newArticle, seuilAlerte: e.target.value })}
                  placeholder="5"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDialog(false)}>
              Annuler
            </Button>
            <Button onClick={handleAddArticle} disabled={addArticleMutation.isPending}>
              {addArticleMutation.isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              <Plus className="h-4 w-4 mr-2" />
              Ajouter
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
