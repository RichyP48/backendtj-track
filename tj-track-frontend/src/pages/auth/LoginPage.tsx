import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card'
import { DemoCredentials } from '../../components/common/DemoCredentials'
import { useAuthStore } from '../../store/authStore'
import { authService } from '../../services/auth.service'
import { toast } from 'sonner'
import { isDevelopmentMode } from '../../lib/mockData'

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Mot de passe requis'),
  rememberMe: z.boolean().optional()
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuthStore()
  
  const from = location.state?.from?.pathname || '/dashboard'

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true)
    
    try {
      const response = await authService.login({
        email: data.email,
        password: data.password
      })

      if (response.success) {
        const { user, token } = response.data
        login(user, token)
        
        toast.success('Connexion réussie !')
        navigate(from, { replace: true })
      } else {
        toast.error(response.message || 'Erreur de connexion')
      }
    } catch (error: any) {
      const errorMessage = isDevelopmentMode 
        ? error.message 
        : error.response?.data?.message || 'Erreur de connexion'
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoCredentials = (email: string, password: string) => {
    const form = document.querySelector('form') as HTMLFormElement
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
    const passwordInput = form.querySelector('input[type="password"]') as HTMLInputElement
    
    emailInput.value = email
    passwordInput.value = password
    
    // Déclencher la validation du formulaire
    emailInput.dispatchEvent(new Event('input', { bubbles: true }))
    passwordInput.dispatchEvent(new Event('input', { bubbles: true }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className="shadow-elegant-lg">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-foreground">
            Connexion
          </CardTitle>
          <p className="text-muted-foreground">
            Connectez-vous à votre compte TJ-Track
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  className="pl-10"
                  {...register('email')}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            {/* Mot de passe */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Votre mot de passe"
                  className="pl-10 pr-10"
                  {...register('password')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password.message}</p>
              )}
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-input"
                  {...register('rememberMe')}
                />
                <span className="text-sm text-muted-foreground">
                  Se souvenir de moi
                </span>
              </label>
              
              <Link
                to="/auth/reset-password"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Bouton de connexion */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>

          {/* Lien inscription */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Pas encore de compte ?{' '}
              <Link
                to="/auth/register"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Créer un compte
              </Link>
            </p>
          </div>

          {/* Séparateur */}
          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Ou continuer avec
              </span>
            </div>
          </div>

          {/* Comptes de démonstration */}
          {isDevelopmentMode && (
            <DemoCredentials onSelectCredentials={handleDemoCredentials} />
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}