import { ProfileResponse, UserRole } from '../types/api'

// Données de démonstration
export const mockUsers = {
  'client@demo.com': {
    password: 'demo123',
    user: {
      userId: 'client-1',
      name: 'Jean Dupont',
      email: 'client@demo.com',
      isAccountVerified: true,
      isApproved: true,
      roles: [UserRole.CLIENT],
      phoneNumber: '+33123456789',
      town: 'Paris',
      address: '123 Rue de la Paix'
    } as ProfileResponse,
    token: 'mock-jwt-token-client'
  },
  'merchant@demo.com': {
    password: 'demo123',
    user: {
      userId: 'merchant-1',
      name: 'Marie Martin',
      email: 'merchant@demo.com',
      isAccountVerified: true,
      isApproved: true,
      roles: [UserRole.COMMERCANT],
      phoneNumber: '+33123456790',
      enterpriseName: 'Boutique Martin',
      town: 'Lyon',
      address: '456 Avenue des Commerçants'
    } as ProfileResponse,
    token: 'mock-jwt-token-merchant'
  },
  'supplier@demo.com': {
    password: 'demo123',
    user: {
      userId: 'supplier-1',
      name: 'Pierre Fournisseur',
      email: 'supplier@demo.com',
      isAccountVerified: true,
      isApproved: true,
      roles: [UserRole.FOURNISSEUR],
      phoneNumber: '+33123456791',
      enterpriseName: 'Fournitures Pro',
      town: 'Marseille',
      address: '789 Boulevard des Fournisseurs'
    } as ProfileResponse,
    token: 'mock-jwt-token-supplier'
  },
  'admin@demo.com': {
    password: 'demo123',
    user: {
      userId: 'admin-1',
      name: 'Admin TJ-Track',
      email: 'admin@demo.com',
      isAccountVerified: true,
      isApproved: true,
      roles: [UserRole.ADMIN],
      phoneNumber: '+33123456792',
      town: 'Paris',
      address: 'Siège Social TJ-Track'
    } as ProfileResponse,
    token: 'mock-jwt-token-admin'
  }
}

export const isDevelopmentMode = import.meta.env.DEV