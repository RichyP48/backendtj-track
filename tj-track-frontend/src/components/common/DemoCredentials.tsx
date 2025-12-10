import { Button } from '../ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { Badge } from '../ui/Badge'

interface DemoCredentialsProps {
  onSelectCredentials: (email: string, password: string) => void
}

export function DemoCredentials({ onSelectCredentials }: DemoCredentialsProps) {
  const demoAccounts = [
    {
      role: 'Client',
      email: 'client@demo.com',
      password: 'demo123',
      description: 'Accès catalogue, panier, commandes',
      variant: 'default' as const
    },
    {
      role: 'Commerçant',
      email: 'merchant@demo.com',
      password: 'demo123',
      description: 'Gestion produits, stock, ventes',
      variant: 'secondary' as const
    },
    {
      role: 'Fournisseur',
      email: 'supplier@demo.com',
      password: 'demo123',
      description: 'Gestion articles, commandes B2B',
      variant: 'outline' as const
    },
    {
      role: 'Admin',
      email: 'admin@demo.com',
      password: 'demo123',
      description: 'Accès complet, gestion utilisateurs',
      variant: 'destructive' as const
    }
  ]

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          🚀 Comptes de démonstration
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Cliquez sur un compte pour vous connecter automatiquement
        </p>
      </CardHeader>
      <CardContent className="space-y-3">
        {demoAccounts.map((account) => (
          <div
            key={account.email}
            className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant={account.variant}>{account.role}</Badge>
                <span className="font-medium text-sm">{account.email}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {account.description}
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onSelectCredentials(account.email, account.password)}
            >
              Utiliser
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}