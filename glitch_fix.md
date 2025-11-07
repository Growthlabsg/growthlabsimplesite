# Anti-Glitch Animation Pattern Reference

This document outlines the systematic approach to fixing animation glitches and performance issues in React components using Framer Motion.

## Problem Identification

### Common Glitch Symptoms

- **Flickering during scroll** - Components flash or stutter while scrolling
- **Laggy animations** - Animations feel choppy or delayed
- **Layout shifts** - Content jumps or repositions unexpectedly
- **Performance drops** - Page becomes unresponsive during animations
- **Background blur artifacts** - Blurred elements cause visual artifacts

### Root Causes

1. **Complex Framer Motion animations** conflicting with CSS transitions
2. **Background blur effects** (`blur()` CSS filters) causing expensive repaints
3. **Multiple simultaneous hover animations** triggering layout recalculations
4. **Missing GPU acceleration** causing animations to run on main thread
5. **Excessive animation complexity** (rotateY, perspective, shine effects)

## The Anti-Glitch Pattern (5-Step Process)

### Step 1: Remove Background Blur Effects

```tsx
// ❌ Before (causes glitches)
<div className="backdrop-blur-sm bg-white/80" />
<div className="blur-3xl bg-primary/5" />

// ✅ After (smooth performance)
<div className="bg-white" />
<div className="bg-primary/5" />
```

### Step 2: Simplify Framer Motion Animations

```tsx
// ❌ Before (complex animations)
initial={{ opacity: 0, x: -40, rotateY: -15 }}
animate={{ opacity: 1, x: 0, rotateY: 0 }}
whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}

// ✅ After (entrance-only animations)
initial={{ opacity: 0, y: 20, scale: 0.95 }}
animate={{ opacity: 1, y: 0, scale: 1 }}
// Remove whileHover completely
```

### Step 3: Add GPU Acceleration

```tsx
// ✅ Add to all motion elements
style={{
  willChange: "transform, opacity",
  backfaceVisibility: "hidden",
  transform: "translateZ(0)",
}}
```

### Step 4: Replace Framer Motion Hovers with CSS

```tsx
// ❌ Before (Framer Motion hover)
<motion.div whileHover={{ scale: 1.05, y: -4 }}>

// ✅ After (CSS transitions)
<div className="transition-transform duration-300 hover:scale-105 hover:-translate-y-1">
```

### Step 5: Optimize Animation Timing

```tsx
// ✅ Consistent timing patterns
transition={{
  duration: 0.5,        // Standard duration
  delay: index * 0.05,  // Staggered delays (0.05-0.1)
  ease: "easeOut",      // Smooth easing
}}
```

## Implementation Checklist

### Before Starting

- [ ] Identify all Framer Motion `whileHover` animations
- [ ] Locate `blur()` CSS effects and `backdrop-blur` classes
- [ ] Find complex animation chains or 3D transforms
- [ ] Note performance issues during scroll testing

### During Implementation

- [ ] Remove `blur-3xl`, `backdrop-blur-sm` classes
- [ ] Replace `whileHover` with CSS `hover:` classes
- [ ] Add GPU acceleration styles to motion elements
- [ ] Simplify `initial`/`animate` to y-axis + scale only
- [ ] Standardize timing: 0.5-0.6s duration, easeOut
- [ ] Use staggered delays: `index * 0.05` or `index * 0.1`

### After Implementation

- [ ] Test scroll performance on different devices
- [ ] Verify animations still look smooth and polished
- [ ] Ensure no functionality is broken
- [ ] Validate consistent timing across components

## Specific Pattern Applications

### Card Components (.map iterations)

```tsx
// Standard pattern for card grids
{
  items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="group transition-all duration-300 hover:scale-105"
      style={{
        willChange: "transform, opacity",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      {/* Content */}
    </motion.div>
  ));
}
```

### Header Sections

```tsx
// Pattern for section headers
<motion.div
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  style={{
    willChange: "transform, opacity",
    backfaceVisibility: "hidden",
    transform: "translateZ(0)",
  }}
>
```

### Stats/Grid Components

```tsx
// Pattern for statistical displays
{stats.map((stat, index) => (
  <motion.div
    key={stat.label}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut",
    }}
    style={{
      willChange: "transform, opacity",
      backfaceVisibility: "hidden",
      transform: "translateZ(0)",
    }}
  >
```

## CSS Transition Alternatives

### Hover Effects

```css
/* Replace whileHover with these classes */
.hover-lift {
  @apply transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg;
}

.hover-scale {
  @apply transition-transform duration-300 hover:scale-105;
}

.hover-fade {
  @apply transition-opacity duration-300 hover:opacity-80;
}
```

### Background Effects

```css
/* Replace backdrop-blur with solid backgrounds */
.card-bg {
  @apply bg-white border border-slate-200 shadow-lg;
}

.overlay-bg {
  @apply bg-gradient-to-t from-black/60 via-transparent to-transparent;
}
```

## Performance Testing

### Before/After Comparison

1. **Open DevTools Performance tab**
2. **Record scroll performance** through components
3. **Check for**:
   - Frame drops (should be <16.7ms per frame)
   - Layout/paint operations during scroll
   - GPU usage indicators
   - Memory consumption

### Success Metrics

- ✅ Smooth 60fps scrolling
- ✅ No visible flickering or stuttering
- ✅ Reduced paint/layout operations
- ✅ Consistent animation timing
- ✅ Maintained visual quality

## Component Examples (Fixed)

### Successfully Optimized Components

1. **Announcements.tsx** - Card grid with staggered entrance
2. **CommunityGalleryCompact.tsx** - Image gallery with modal
3. **CommunityFeed.tsx** - Social feed with masonry layout
4. **EventsPreview.tsx** - Event cards with hover effects
5. **StatsSection.tsx** - Animated statistics display
6. **Partners.tsx** - Partner logo grid
7. **Testimonials.tsx** - Customer testimonial cards
8. **FAQ.tsx** - Accordion-style FAQ items
9. **CommunityGallery.tsx** - Full gallery with lightbox

## Quick Reference Commands

### Find Components with Issues

```bash
# Search for problematic patterns
grep -r "blur-3xl\|backdrop-blur\|whileHover" components/
grep -r "rotateY\|perspective" components/
```

### Standard Replacements

```bash
# Common find/replace patterns
blur-3xl → (remove)
backdrop-blur-sm → (remove or replace with solid bg)
whileHover={{ → className="transition-all duration-300 hover:
initial={{ opacity: 0, x: → initial={{ opacity: 0, y: 20, scale: 0.95 }}
animate={{ opacity: 1, x: → animate={{ opacity: 1, y: 0, scale: 1 }}
```

## Notes

- **Always test on multiple devices** - Mobile performance often differs
- **Preserve functionality** - Ensure interactive elements still work
- **Maintain visual quality** - The goal is smooth performance without visual compromise
- **Use consistent timing** - Standardized durations create cohesive feel
- **GPU acceleration is key** - Always include willChange and transform properties
