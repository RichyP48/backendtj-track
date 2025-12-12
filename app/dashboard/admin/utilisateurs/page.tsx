"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Users, Search, MoreVertical, UserCheck, UserX, Mail, Store, Truck, ShieldCheck, Loader2 } from "lucide-react"
import { useAllUsers, useApproveUser } from "@/hooks/use-api"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/hooks/use-toast"

const roleConfig = {
  CLIENT: { label: "Client", icon: Users, color: "bg-blue-500" },
  COMMERCANT: { label: "Commerçant", icon: Store, color: "bg-green-500" },
  FOURNISSEUR: { label: "Fournisseur", icon: Truck, color: "bg-orange-500" },
  ADMIN: { label: "Admin", icon: ShieldCheck, color: "bg-purple-500" },
}

export default function AdminUsersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { toast } = useToast()
  const { user } = useAuth()

  const { data: users = [], isLoading, error, refetch } = useAllUsers()
  const approveUserMutation = useApproveUser()

  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleApprove = async (userId: string) => {
    try {
      await approveUserMutation.mutateAsync({ userId, approvedBy: user?.email || "admin" })
      toast({
        title: "Utilisateur approuvé",
        description: "Le compte a été activé avec succès",
      })
      refetch()
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible d'approuver l'utilisateur",
        variant: "destructive",
      })
    }
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
      <div className="text-center py-12">
        <p className="text-destructive">Erreur lors du chargement des utilisateurs</p>
        <Button variant="outline" onClick={() => refetch()} className="mt-4">
          Réessayer
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Gestion des Utilisateurs</h1>
        <p className="text-muted-foreground">Administrez les comptes utilisateurs</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {Object.entries(roleConfig).map(([role, config]) => {
          const count = users.filter((u) => u.roles?.includes(role)).length
          return (
            <Card key={role} className="glass-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${config.color}/10`}>
                    <config.icon className={`h-5 w-5 ${config.color.replace("bg-", "text-")}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{config.label}s</p>
                    <p className="text-2xl font-bold">{count}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Search */}
      <Card className="glass-card">
        <CardContent className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher un utilisateur..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Tous les utilisateurs ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Utilisateur</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead className="text-center">Vérifié</TableHead>
                <TableHead className="text-center">Approuvé</TableHead>
                <TableHead>Inscription</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((userItem) => {
                const primaryRole = userItem.roles?.[0] || 'CLIENT'
                const roleInfo = roleConfig[primaryRole as keyof typeof roleConfig] || roleConfig.CLIENT
                return (
                  <TableRow key={String(userItem.userId || userItem.email)}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-sm font-medium">
                            {String(userItem.name || userItem.email || "U").charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{String(userItem.name || "N/A")}</p>
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {String(userItem.email || "")}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {userItem.roles?.map((role) => {
                          const config = roleConfig[String(role) as keyof typeof roleConfig] || roleConfig.CLIENT
                          return (
                            <Badge key={String(role)} variant="secondary" className="gap-1">
                              <config.icon className="h-3 w-3" />
                              {config.label}
                            </Badge>
                          )
                        })}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {userItem.isAccountVerified ? (
                        <UserCheck className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <UserX className="h-5 w-5 text-muted-foreground mx-auto" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {userItem.isApproved ? (
                        <Badge variant="default" className="bg-green-500">
                          Oui
                        </Badge>
                      ) : (
                        <Badge variant="outline">Non</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {userItem.createdAt ? new Date(String(userItem.createdAt)).toLocaleDateString() : "N/A"}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Voir le profil</DropdownMenuItem>
                          <DropdownMenuItem>Modifier</DropdownMenuItem>
                          {!userItem.isApproved && (
                            <DropdownMenuItem
                              className="text-green-600"
                              onClick={() => handleApprove(String(userItem.userId || userItem.email))}
                            >
                              Approuver
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-destructive">Désactiver</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                )
              })}
              {filteredUsers.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Aucun utilisateur trouvé
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
