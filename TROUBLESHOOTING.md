# Troubleshooting Guide

## Site Not Loading Issues

### Issue: Port Already in Use
If you get `EADDRINUSE` error:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or kill all Next.js processes
pkill -f "next dev"
```

### Issue: PostCSS/Tailwind CSS Errors
If you see "Module parse failed: Unexpected character '@'":

1. Make sure `postcss.config.js` exists in the root:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

2. Clear the Next.js cache:
```bash
rm -rf .next
npm run dev
```

### Issue: NODE_ENV Warning
If you see a warning about non-standard NODE_ENV:

```bash
# Unset NODE_ENV or set it properly
unset NODE_ENV
npm run dev
```

### Issue: Build Errors
If the build fails:

1. Clear cache and reinstall:
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## Quick Fix Commands

```bash
# Complete reset
cd /Users/arulv97/growthlab
pkill -f "next dev"
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## Common Issues

1. **Server won't start**: Check if port 3000 is in use
2. **CSS not loading**: Verify postcss.config.js exists
3. **Build errors**: Clear .next folder and rebuild
4. **Module errors**: Reinstall node_modules

## Getting Help

If issues persist:
1. Check the terminal output for specific error messages
2. Verify all dependencies are installed: `npm list`
3. Try a clean install: Remove node_modules and reinstall

