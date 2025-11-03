# Luma Calendar API Setup Guide

## Problem: Events Not Loading

If events aren't showing up from your Luma calendar, follow these steps:

## Step 1: Get Your Luma API Key

1. Go to https://lu.ma
2. Sign in to your account
3. Navigate to your calendar settings
4. Go to **Settings** → **Options** → **API Keys**
5. Copy your API key
6. **Note**: You need a **Luma Plus subscription** to access the API

## Step 2: Create `.env.local` File

Create a file named `.env.local` in the root of your project:

```bash
cd /Users/arulv97/growthlab
touch .env.local
```

## Step 3: Add Your API Key

Add these lines to `.env.local`:

```bash
# Luma Calendar API Integration
LUMA_API_KEY=your_actual_api_key_here
LUMA_CALENDAR_SLUG=growthlab.sg
```

Replace:
- `your_actual_api_key_here` with your actual Luma API key
- `growthlab.sg` with your Luma calendar slug (the part after lu.ma/ in your calendar URL)

## Step 4: Find Your Calendar Slug

Your calendar slug is the part of your Luma calendar URL:
- If your calendar URL is: `https://lu.ma/growthlab.sg`
- Then your slug is: `growthlab.sg`

## Step 5: Restart Your Development Server

After adding the environment variables:

```bash
# Stop your current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 6: Check the Console

1. Open your browser's Developer Console (F12)
2. Go to the Events page
3. Check for any error messages
4. Look for console logs that show:
   - "Successfully loaded X events from Luma" (success)
   - Or error messages explaining what went wrong

## Troubleshooting

### Error: "Luma API key not configured"
- Make sure `.env.local` exists in the project root
- Make sure the file contains `LUMA_API_KEY=...`
- Restart your development server after adding the key

### Error: "Failed to fetch events from Luma: 401"
- Your API key is invalid or expired
- Check that you have Luma Plus subscription
- Get a new API key from Luma settings

### Error: "Failed to fetch events from Luma: 404"
- Your calendar slug is incorrect
- Check your Luma calendar URL and update `LUMA_CALENDAR_SLUG`

### Error: "No events found in calendar"
- Your calendar exists but has no published events
- Make sure your events are published (not drafts)
- Check your Luma calendar has events

### Events still not showing?
1. Check browser console for detailed error messages
2. Check terminal/server logs for API errors
3. Verify your API key has the correct permissions
4. Make sure your events are published and not in the past (if only showing upcoming)

## Testing the API

You can test your API key directly using curl:

```bash
curl -H "x-luma-api-key: YOUR_API_KEY" \
  "https://api.lu.ma/public/v1/calendar/growthlab.sg/events?limit=10&status=published"
```

Replace `YOUR_API_KEY` and `growthlab.sg` with your actual values.

## Production Deployment

For production (Vercel, etc.):
1. Add the environment variables in your hosting platform's dashboard
2. Set `LUMA_API_KEY` and `LUMA_CALENDAR_SLUG` in your deployment settings
3. Redeploy your application

