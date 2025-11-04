# Quick Upload Reference Card

## 🚀 Fast Way to Add Event Images

### 3 Simple Steps:

1. **Copy images** to: `public/gallery/images/`
   - Name: `event-YYYY-MM-DD-N.jpg` (e.g., `event-2025-12-05-1.jpg`)

2. **Edit** `lib/data/gallery.ts`
   - Add entry in `galleryImages` array:
   ```typescript
   {
     id: 16, // Next number
     src: '/gallery/images/event-2025-12-05-1.jpg',
     alt: 'Event description',
     category: 'Events', // or 'Workshops' or 'Networking'
     title: 'Event Title',
     description: 'Brief description',
     date: '2025-12-05', // Optional
     location: 'Singapore', // Optional
   },
   ```

3. **Commit & Push**
   ```bash
   git add public/gallery/images/ lib/data/gallery.ts
   git commit -m "feat: add [Event Name] images"
   git push
   ```

## 📁 Folder Structure
```
public/
  gallery/
    images/
      event-2025-12-05-1.jpg
      event-2025-12-05-2.jpg
      event-2026-01-10-1.jpg
```

## 💡 Tips
- Optimize images: max 2MB, 1200x1200px recommended
- Use sequential numbers for same event: `-1.jpg`, `-2.jpg`, `-3.jpg`
- Keep filenames consistent: `event-YYYY-MM-DD-N.jpg`

## 📖 Full Guide
See `GALLERY_UPLOAD_GUIDE.md` for detailed instructions.

