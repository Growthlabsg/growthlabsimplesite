# Luma Calendar Integration - Free Alternatives

## The Problem

Luma now requires a **Luma Plus subscription ($59/month)** to access their API. If you don't want to pay, here are free alternatives:

## Solution 1: Use Luma's Free Embed Widget (Recommended)

Luma provides a free embed widget that doesn't require API access. You can embed your entire calendar directly on your events page.

### Implementation:

Add this to your `app/events/client.tsx` or create a separate embed section:

```tsx
// Add this component to show Luma embed when API fails
<div className="mt-8">
  <iframe 
    src={`https://lu.ma/embed-calendar/growthlab.sg`}
    width="100%" 
    height="800" 
    frameBorder="0"
    className="rounded-lg"
  />
</div>
```

### Or use Luma's JavaScript Widget:

```html
<script src="https://embed.lu.ma/checkout-button.js"></script>
<script>
lumawidget.init({
  targetSelector: '#luma-widget',
  calendarId: 'growthlab.sg',
});
</script>
```

## Solution 2: Link to Your Luma Calendar

Simply redirect users to your public Luma calendar page:

```tsx
<a 
  href="https://lu.ma/growthlab.sg" 
  target="_blank"
  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg"
>
  View All Events on Luma
  <ExternalLink size={18} />
</a>
```

## Solution 3: Manual Event Management

Keep your current fallback events system and manually update them:

1. When you create events on Luma, also add them to your `fallbackEvents` array
2. This gives you full control over which events show on your site
3. No API needed, just manual updates when events change

## Solution 4: RSS Feed (if Luma provides one)

Some calendar platforms provide RSS feeds. Check if Luma has one for your calendar.

## What Your API Key Would Look Like

Luma API keys are typically:
- Long alphanumeric strings (32+ characters)
- Format: Usually starts with something like `lum_live_...` or similar
- Found in: Settings → Options → API Keys

**Note:** Even if you have an old API key, it might not work anymore if:
- Your subscription expired
- Luma changed their API requirements
- The key was for a different calendar

## Recommended Approach

For a free solution, I recommend **Solution 1 (Embed Widget)** - it's:
- ✅ Free
- ✅ Always up-to-date
- ✅ No API key needed
- ✅ Users can register directly
- ✅ Shows all your Luma events

Would you like me to update your events page to include the Luma embed widget as a fallback?

