# Gallery Upload Guide

## Quick Start: Adding Event Images to Community Gallery

### Step 1: Prepare Your Images
1. **Optimize images** (recommended):
   - Resize to max 1920px width
   - Compress with tools like [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Save as JPG (quality 80-85%) or WebP format

### Step 2: Add Images to Project
1. Create folder if it doesn't exist: `public/gallery/images/`
2. Copy your images to: `public/gallery/images/`
3. **Naming convention**: `event-YYYY-MM-DD-N.jpg`
   - Example: `event-2025-12-05-1.jpg`, `event-2025-12-05-2.jpg`
   - Use sequential numbers (1, 2, 3...) for multiple images from same event

### Step 3: Add Event Information
1. Open `lib/data/gallery.ts`
2. Add new entry to `galleryImages` array:

```typescript
{
  id: 16, // Next available ID (check highest ID in file)
  src: '/gallery/images/event-2025-12-05-1.jpg', // Path to your image
  alt: 'Rooftop Sunset Mixer - Startup Surge Kickoff', // Descriptive alt text
  category: 'Events', // 'Events', 'Workshops', or 'Networking'
  title: 'Rooftop Sunset Mixer', // Event title
  description: 'Kick off Startup Surge Fridays with GrowthLab at Singapore\'s highest private rooftop mixer', // Brief description
  date: '2025-12-05', // Event date (YYYY-MM-DD)
  location: 'Skysuites@Anson, Singapore', // Event location (optional)
}
```

### Step 4: Commit and Push
```bash
git add public/gallery/images/ lib/data/gallery.ts
git commit -m "feat: add event images for [Event Name]"
git push
```

## Video Upload (Optional)

For videos, you can:
1. Upload to YouTube or Vimeo
2. Add `videoUrl` field to the entry:
```typescript
{
  id: 17,
  src: '/gallery/images/event-thumbnail.jpg', // Thumbnail image
  videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID', // YouTube URL
  // ... other fields
}
```

## Bulk Upload Workflow

### For Multiple Events:
1. **Organize by event**: Create subfolders in `public/gallery/images/`
   - Example: `public/gallery/images/rooftop-mixer-2025-12-05/`
2. **Add all images** to the folder
3. **Update `gallery.ts`** with all entries at once
4. **Commit everything together**

### Example Structure:
```
public/
  gallery/
    images/
      event-2025-12-05-1.jpg
      event-2025-12-05-2.jpg
      event-2025-12-05-3.jpg
      event-2026-01-10-1.jpg
      event-2026-01-10-2.jpg
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended max 2MB per image (optimized)
- **Dimensions**: 
  - Square (1:1) or landscape (16:9) work best
  - Minimum: 800x800px
  - Ideal: 1200x1200px or 1920x1080px
- **Quality**: Compressed for web (80-85% quality)

## Tips

- **Batch processing**: Use tools like ImageOptim or Photoshop batch actions
- **Naming**: Keep descriptive but consistent names
- **Backup**: Keep originals in a separate folder before optimizing
- **Testing**: Test locally before pushing to ensure images load correctly

## Troubleshooting

**Image not showing?**
- Check path is correct (starts with `/gallery/images/`)
- Verify file exists in `public/gallery/images/`
- Check image format is supported (JPG, PNG, WebP)

**Images too large?**
- Use image optimization tools
- Consider using WebP format for better compression
- Resize images before uploading

**Need to update an event?**
- Edit the entry in `lib/data/gallery.ts`
- Replace image file if needed (keep same filename or update path)
- Commit changes

