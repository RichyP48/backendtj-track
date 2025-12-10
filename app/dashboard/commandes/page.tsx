"use client"

import { useState } from "react"
import {
  Search,
  Filter,
  Eye,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  Package,
  CreditCard,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCommandesMerchant } from "@/hooks/use-api"
import { useAuth } from "@/contexts/auth-context"

interface Commande {
  id: number
  numeroCommande: string
  client: string
  email: string
  dateCommande: string
  statut: "EN_ATTENTE" | "CONFIRMEE" | "EN_PREPARATION" | "EXPEDIEE" | "LIVREE" | "ANNULEE"
  statutPaiement: "EN_ATTENTE" | "PAYE" | "ECHEC" | "REMBOURSE"
  montantTotal: number
  fraisLivraison: number
  articles: number
  adresse: string
}

const statutStyles = {
  EN_ATTENTE: { label: "En attente", variant: "secondary" as const, icon: Clock },
  CONFIRMEE: { label: "Confirmée", variant: "default" as const, icon: CheckCircle },
  EN_PREPARATION: { label: "En préparation", variant: "default" as const, icon: Package },
  EXPEDIEE: { label: "Expédiée", variant: "default" as const, icon: Truck },
  LIVREE: { label: "Livrée", variant: "default" as const, icon: CheckCircle },
  ANNULEE: { label: "Annulée", variant: "destructive" as const, icon: XCircle },
}

const paiementStyles = {
  EN_ATTENTE: { label: "En attente", className: "bg-amber-500/10 text-amber-500" },
  PAYE: { label: "Payé", className: "bg-emerald-500/10 text-emerald-500" },
  ECHEC: { label: "Échec", className: "bg-red-500/10 text-red-500" },
  REMBOURSE: { label: "Remboursé", className: "bg-blue-500/10 text-blue-500" },
}

export default function CommandesPage() {
  const [search, setSearch] = useState("")
  const [statutFilter, setStatutFilter] = useState("all")
  const [selectedCommande, setSelectedCommande] = useState<Commande | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const { user } = useAuth()
  const { data: commandesResponse, isLoading, error, refetch } = useCommandesMerchant(user?.userId || "")
  const commandesData = commandesResponse?.data || []

  // Map API response to expected format
  const commandes: Commande[] = (commandesData as unknown[]).map((cmd: unknown) => {
    const c = cmd as Record<string, unknown>
    return {
      id: (c.id as number) || 0,
      numeroCommande: (c.code as string) || (c.numeroCommande as string) || `CMD-${c.id}`,
      client: (c.clientNom as string) || (c.client as string) || "Client",
      email: (c.clientEmail as string) || (c.email as string) || "",
      dateCommande: (c.dateCommande as string) || new Date().toISOString(),
      statut: ((c.statut as string) || "EN_ATTENTE") as Commande["statut"],
      statutPaiement: ((c.statutPaiement as string) || "EN_ATTENTE") as Commande["statutPaiement"],
      montantTotal: (c.montantTotal as number) || (c.totalTtc as number) || 0,
      fraisLivraison: (c.fraisLivraison as number) || 0,
      articles: (c.nombreArticles as number) || (c.articles as number) || 0,
      adresse: (c.adresseLivraison as string) || (c.adresse as string) || "",
    }
  })

  const filteredCommandes = commandes.filter((cmd) => {
    const matchSearch =
      cmd.numeroCommande.toLowerCase().includes(search.toLowerCase()) ||
      cmd.client.toLowerCase().includes(search.toLowerCase())
    const matchStatut = statutFilter === "all" || cmd.statut === statutFilter
    return matchSearch && matchStatut
  })

  const totalPages = Math.ceil(filteredCommandes.length / itemsPerPage)
  const paginatedCommandes = filteredCommandes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Stats
  const stats = {
    total: commandes.length,
    enAttente: commandes.filter((c) => c.statut === "EN_ATTENTE").length,
    enCours: commandes.filter((c) => ["CONFIRMEE", "EN_PREPARATION", "EXPEDIEE"].includes(c.statut)).length,
    livrees: commandes.filter((c) => c.statut === "LIVREE").length,
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <p className="text-destructive">Erreur lors du chargement des commandes</p>
        <Button onClick={() => refetch()}>Réessayer</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Commandes Clients</h1>
          <p className="text-muted-foreground">Gérez et suivez les commandes de vos clients</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Commandes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">En Attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-amber-500">{stats.enAttente}</div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">En Cours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{stats.enCours}</div>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Livrées</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-emerald-500">{stats.livrees}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher par numéro ou client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statutFilter} onValueChange={setStatutFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Statut" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous les statuts</SelectItem>
            <SelectItem value="EN_ATTENTE">En attente</SelectItem>
            <SelectItem value="CONFIRMEE">Confirmée</SelectItem>
            <SelectItem value="EN_PREPARATION">En préparation</SelectItem>
            <SelectItem value="EXPEDIEE">Expédiée</SelectItem>
            <SelectItem value="LIVREE">Livrée</SelectItem>
            <SelectItem value="ANNULEE">Annulée</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card className="glass-card">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Commande</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Paiement</TableHead>
                <TableHead className="text-right">Montant</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCommandes.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                    Aucune commande trouvée
                  </TableCell>
                </TableRow>
              ) : (
                paginatedCommandes.map((commande) => {
                  const statut = statutStyles[commande.statut] || statutStyles.EN_ATTENTE
                  const paiement = paiementStyles[commande.statutPaiement] || paiementStyles.EN_ATTENTE
                  const StatutIcon = statut.icon

                  return (
                    <TableRow key={commande.id}>
                      <TableCell>
                        <div className="font-medium">{commande.numeroCommande}</div>
                        <div className="text-xs text-muted-foreground">{commande.articles} article(s)</div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{commande.client}</div>
                        <div className="text-xs text-muted-foreground">{commande.email}</div>
                      </TableCell>
                      <TableCell>
                        {new Date(commande.dateCommande).toLocaleDateString("fr-FR", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                      <TableCell>
                        <Badge variant={statut.variant} className="gap-1">
                          <StatutIcon className="h-3 w-3" />
                          {statut.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${paiement.className}`}
                        >
                          <CreditCard className="h-3 w-3" />
                          {paiement.label}
                        </span>
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        {commande.montantTotal.toLocaleString("fr-FR")} XAF
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setSelectedCommande(commande)}>
                              <Eye className="h-4 w-4 mr-2" />
                              Voir détails
                            </DropdownMenuItem>
                            {commande.statut === "CONFIRMEE" && (
                              <DropdownMenuItem>
                                <Package className="h-4 w-4 mr-2" />
                                Préparer
                              </DropdownMenuItem>
                            )}
                            {commande.statut === "EN_PREPARATION" && (
                              <DropdownMenuItem>
                                <Truck className="h-4 w-4 mr-2" />
                                Expédier
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-4 border-t">
            <div className="text-sm text-muted-foreground">{filteredCommandes.length} commande(s)</div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm">
                Page {currentPage} sur {totalPages || 1}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detail Dialog */}
      <Dialog open={!!selectedCommande} onOpenChange={() => setSelectedCommande(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Détails de la commande</DialogTitle>
            <DialogDescription>{selectedCommande?.numeroCommande}</DialogDescription>
          </DialogHeader>
          {selectedCommande && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Client</p>
                  <p className="font-medium">{selectedCommande.client}</p>
                  <p className="text-sm text-muted-foreground">{selectedCommande.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{new Date(selectedCommande.dateCommande).toLocaleDateString("fr-FR")}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Adresse de livraison</p>
                <p className="font-medium">{selectedCommande.adresse || "Non renseignée"}</p>
              </div>
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Frais de livraison</p>
                  <p className="font-medium">{selectedCommande.fraisLivraison.toLocaleString("fr-FR")} XAF</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-xl font-bold text-primary">
                    {selectedCommande.montantTotal.toLocaleString("fr-FR")} XAF
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
