# Fix for Site Not Loading

## The Problem
The site isn't loading due to a PostCSS/Tailwind CSS configuration issue with Next.js.

## Quick Fix

Run this command in your terminal:

```bash
cd /Users/arulv97/growthlab
./fix-and-run.sh
```

Or manually:

```bash
cd /Users/arulv97/growthlab

# 1. Kill any running servers
pkill -f "next dev"

# 2. Unset NODE_ENV (it's set to production which causes issues)
unset NODE_ENV

# 3. Clear cache
rm -rf .next

# 4. Start server
npm run dev
```

## Alternative: Use a Different Port

If port 3000 is still busy:

```bash
PORT=3001 npm run dev
```

Then visit http://localhost:3001

## Root Cause

The issue is:
1. **NODE_ENV is set to "production"** - This causes Next.js to behave differently
2. **PostCSS processing** - Next.js isn't properly processing the Tailwind CSS directives

## Permanent Fix

Add this to your `~/.zshrc` or `~/.bash_profile`:

```bash
# For GrowthLab development
alias growthlab-dev='cd /Users/arulv97/growthlab && unset NODE_ENV && npm run dev'
```

Then just run:
```bash
growthlab-dev
```

## Still Not Working?

1. Check if port is free: `lsof -ti:3000`
2. Kill process: `lsof -ti:3000 | xargs kill -9`
3. Reinstall: `rm -rf node_modules && npm install`
4. Try again: `unset NODE_ENV && npm run dev`

