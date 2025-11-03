// Authentication configuration structure
// This will be used with NextAuth.js for secure authentication

export const authConfig = {
  // Configuration will be added here when setting up NextAuth
  // Example:
  // providers: [...],
  // pages: { signIn: '/login' },
  // callbacks: {...}
}

export const roles = {
  FOUNDER: 'founder',
  INVESTOR: 'investor',
  ENTERPRISE: 'enterprise',
  ADMIN: 'admin',
} as const

export type UserRole = typeof roles[keyof typeof roles]

