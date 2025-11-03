import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from 'next-auth/providers/linkedin'
import AppleProvider from 'next-auth/providers/apple'
import CredentialsProvider from 'next-auth/providers/credentials'

export const roles = {
  FOUNDER: 'founder',
  INVESTOR: 'investor',
  ENTERPRISE: 'enterprise',
  ADMIN: 'admin',
} as const

export type UserRole = typeof roles[keyof typeof roles]

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || '',
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID || '',
      clientSecret: process.env.APPLE_SECRET || '',
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // TODO: Implement your email/password authentication logic here
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        // Add your database authentication logic here
        return null
      },
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/',
    error: '/login',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token
        token.provider = account.provider
        token.role = (user as any).role || 'founder'
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).id = token.sub
        ;(session.user as any).role = token.role || 'founder'
        ;(session.user as any).provider = token.provider
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
}
