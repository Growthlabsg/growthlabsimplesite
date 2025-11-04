# Google Search Favicon Fix

## Issue
Logo not visible in Google search results and Chrome app installation.

## Fixes Applied

### 1. Enhanced Organization Schema with ImageObject
- **Location**: `lib/seo/structuredData.ts`
- **Change**: Updated logo from string to ImageObject with dimensions
- **Why**: Google prefers ImageObject format for better logo recognition
```typescript
logo: {
  '@type': 'ImageObject',
  url: 'https://www.growthlab.sg/growthlab-logo.png',
  width: 516,
  height: 484,
}
```

### 2. Multiple Favicon Links in HTML Head
- **Location**: `app/layout.tsx`
- **Added**: 
  - Primary favicon link (absolute URL)
  - Multiple size-specific icon links (16x16, 32x32, 48x48, 192x192, 512x512)
  - Apple touch icon
  - Shortcut icon
  - Legacy favicon.ico support

### 3. Updated Metadata Icons
- **Location**: `app/layout.tsx` metadata object
- **Change**: All icon URLs now use absolute URLs (https://www.growthlab.sg/growthlab-logo.png)
- **Why**: Google requires absolute URLs for proper indexing

### 4. Robots.txt Update
- **Location**: `public/robots.txt`
- **Added**: Explicit Allow rules for `/growthlab-logo.png` and `/favicon.ico`
- **Why**: Ensures Google can crawl the logo files

### 5. Manifest Icons
- **Location**: `app/manifest.ts`
- **Updated**: All icon URLs use absolute URLs
- **Why**: Better PWA icon detection

## Testing Steps

1. **Verify Logo Accessibility**:
   - Visit: `https://www.growthlab.sg/growthlab-logo.png`
   - Should load without errors

2. **Test with Google Rich Results Test**:
   - Go to: https://search.google.com/test/rich-results
   - Enter: `https://www.growthlab.sg`
   - Check Organization schema includes logo ImageObject

3. **Request Re-indexing**:
   - Go to Google Search Console
   - Use URL Inspection Tool
   - Request indexing for: `https://www.growthlab.sg`
   - Request indexing for: `https://www.growthlab.sg/growthlab-logo.png`

4. **Check Chrome PWA**:
   - Open Chrome DevTools > Application > Manifest
   - Verify icons are listed
   - Test "Install App" functionality

## Important Notes

- **Logo Dimensions**: Current logo is 516x484 pixels (not square)
- **Google Requirements**: Logo should be at least 112x112 pixels ✅ (meets requirement)
- **Format**: PNG is supported by Google ✅
- **Update Time**: Google may take days to weeks to update favicon in search results
- **Caching**: Clear browser cache and wait for Google to re-crawl

## Next Steps (Optional)

For best results, consider:
1. Creating square logo variants (192x192, 512x512) with logo centered
2. Submitting to Google Search Console for faster indexing
3. Waiting 1-2 weeks for Google to update search results

## Current Status
✅ Organization schema with ImageObject logo
✅ Multiple favicon links with absolute URLs
✅ Robots.txt allows logo access
✅ Manifest includes absolute URL icons
✅ Build passes successfully

The logo should now be visible in Google search results after Google re-crawls the site.

