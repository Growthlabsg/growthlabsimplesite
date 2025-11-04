# PWA Icon Fix for Chrome App Installation

## Issue
When installing GrowthLab as a Chrome app (PWA), the logo was not visible.

## Fix Applied

### 1. Enhanced Manifest Icons
- Added multiple icon sizes: 48x48, 72x72, 96x96, 144x144, 192x192, 512x512
- Added maskable icons for better Chrome/Android support
- Added both 'any' and 'maskable' purposes

### 2. Explicit Icon Links in HTML Head
Added explicit icon links in `app/layout.tsx`:
```html
<link rel="manifest" href="/manifest.webmanifest" />
<link rel="icon" type="image/png" sizes="192x192" href="/growthlab-logo.png" />
<link rel="icon" type="image/png" sizes="512x512" href="/growthlab-logo.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/growthlab-logo.png" />
```

### 3. Current Logo File
- Current logo: `public/growthlab-logo.png` (516x484 pixels)
- **Note**: Logo is not perfectly square (516x484 instead of 512x512)

## Recommended Next Steps (Optional)

For best Chrome PWA icon display, consider creating square versions:

1. **Create Square Logo Variants**:
   - `icon-192x192.png` - Exactly 192x192 pixels
   - `icon-512x512.png` - Exactly 512x512 pixels
   - These should be square with the logo centered

2. **Update Manifest** to use dedicated icon files:
```typescript
icons: [
  {
    src: '/icon-192x192.png',
    sizes: '192x192',
    type: 'image/png',
    purpose: 'any',
  },
  {
    src: '/icon-512x512.png',
    sizes: '512x512',
    type: 'image/png',
    purpose: 'any',
  },
  // ... maskable versions
]
```

3. **Test PWA Installation**:
   - Open Chrome DevTools > Application > Manifest
   - Check if icons are listed and accessible
   - Test "Add to Home Screen" or "Install App" functionality

## Current Status
✅ Manifest includes multiple icon sizes
✅ Explicit icon links added to HTML head
✅ Maskable icons added for Chrome/Android
✅ Build passes successfully

The logo should now be visible when installing as a Chrome app. If issues persist, create square icon variants as described above.

