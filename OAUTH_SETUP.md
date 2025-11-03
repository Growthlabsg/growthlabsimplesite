# OAuth Setup Guide for GrowthLab

This guide will help you set up Google, LinkedIn, and Apple OAuth authentication for your GrowthLab platform.

## Prerequisites

- NextAuth.js is already installed
- You need OAuth credentials from each provider

## Step 1: Create `.env.local` File

Create a `.env.local` file in the root directory with the following variables:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# LinkedIn OAuth
LINKEDIN_CLIENT_ID=your-linkedin-client-id
LINKEDIN_CLIENT_SECRET=your-linkedin-client-secret

# Apple OAuth
APPLE_ID=your-apple-client-id
APPLE_SECRET=your-apple-client-secret
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

## Step 2: Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable Google+ API
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Configure consent screen:
   - User Type: External
   - App name: GrowthLab
   - Support email: your email
6. Create OAuth client:
   - Application type: Web application
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google` (development)
     - `https://yourdomain.com/api/auth/callback/google` (production)
7. Copy Client ID and Client Secret to `.env.local`

## Step 3: LinkedIn OAuth Setup

1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/)
2. Create a new app
3. In **Auth** tab:
   - Add redirect URL: `http://localhost:3000/api/auth/callback/linkedin`
   - Add redirect URL: `https://yourdomain.com/api/auth/callback/linkedin` (production)
4. Request access to required scopes: `r_liteprofile`, `r_emailaddress`
5. Copy Client ID and Client Secret to `.env.local`

## Step 4: Apple OAuth Setup

1. Go to [Apple Developer Portal](https://developer.apple.com/)
2. Create a Services ID
3. Configure Sign in with Apple:
   - Add domain: `yourdomain.com`
   - Add redirect URL: `https://yourdomain.com/api/auth/callback/apple`
4. Download the private key (.p8 file)
5. Get your Team ID and Key ID
6. Create client secret (JWT token) - you'll need to generate this
7. Add to `.env.local`:
   - `APPLE_ID`: Your Services ID
   - `APPLE_SECRET`: Your client secret (JWT)

**Note:** Apple Sign In requires HTTPS in production and is more complex. You may want to set this up later.

## Step 5: Production URLs

When deploying to production:

1. Update `NEXTAUTH_URL` to your production domain
2. Add production redirect URIs to each OAuth provider:
   - `https://yourdomain.com/api/auth/callback/google`
   - `https://yourdomain.com/api/auth/callback/linkedin`
   - `https://yourdomain.com/api/auth/callback/apple`

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/login` or `http://localhost:3000/register`

3. Click on any OAuth button to test

## Troubleshooting

### "Invalid credentials" error
- Check that your environment variables are set correctly
- Verify redirect URIs match exactly (including trailing slashes)
- Check OAuth provider dashboards for any errors

### Redirect mismatch
- Ensure redirect URIs in OAuth provider settings match exactly
- Include both http and https versions during development

### Apple Sign In not working
- Apple requires HTTPS in production
- Verify your Services ID and client secret are correct
- Check that you've configured the redirect URL correctly

## Next Steps

1. **Database Integration**: Connect a database (Prisma recommended) to store user accounts
2. **Email/Password Auth**: Implement the credentials provider logic in `app/api/auth/[...nextauth]/route.ts`
3. **User Management**: Create pages for profile management, password reset, etc.
4. **Session Management**: Add logout functionality and session checking

## Security Notes

- Never commit `.env.local` to git
- Use strong, unique secrets for production
- Enable 2FA on your OAuth provider accounts
- Regularly rotate OAuth secrets
- Use HTTPS in production

