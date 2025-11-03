import { NextRequest, NextResponse } from 'next/server'
import type { LumaCalendarEventsResponse, TransformedEvent } from '@/lib/types/luma'

// Get Luma API key and calendar slug from environment variables
const LUMA_API_KEY = process.env.LUMA_API_KEY
const LUMA_CALENDAR_SLUG = process.env.LUMA_CALENDAR_SLUG || 'growthlab.sg'
const LUMA_API_BASE_URL = 'https://api.lu.ma/public/v1'

// Alternative: Use Luma's public calendar page scraping (no API key needed)
// This works by fetching the public calendar HTML and parsing events
async function fetchEventsFromPublicCalendar() {
  try {
    // Luma public calendar URL format
    const publicUrl = `https://lu.ma/${LUMA_CALENDAR_SLUG}`
    
    // Try to fetch the public calendar page
    const response = await fetch(publicUrl, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch calendar page: ${response.status}`)
    }

    const html = await response.text()
    
    // Luma embeds event data in JSON-LD or script tags
    // Try to extract events from the page
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)
    
    if (jsonLdMatch) {
      try {
        const data = JSON.parse(jsonLdMatch[1])
        // Parse structured data if available
        console.log('Found JSON-LD data on calendar page')
      } catch (e) {
        console.warn('Could not parse JSON-LD data')
      }
    }

    // Alternative: Return empty and show fallback
    // The best approach is to use Luma's embed widget instead
    return []
  } catch (error) {
    console.error('Error fetching public calendar:', error)
    return []
  }
}

// Helper function to transform Luma event to our format
function transformEvent(lumaEvent: any): TransformedEvent {
  const startDate = new Date(lumaEvent.event.start_at)
  const endDate = lumaEvent.event.end_at ? new Date(lumaEvent.event.end_at) : null
  
  // Format date
  const date = startDate.toISOString().split('T')[0]
  
  // Format time
  let time = startDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
  if (endDate) {
    time += ` - ${endDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })}`
  } else {
    time = 'All Day'
  }
  
  // Format location
  let location = 'Online'
  if (lumaEvent.event.location) {
    const loc = lumaEvent.event.location
    if (loc.type === 'hybrid') {
      location = `${loc.city || loc.name} • Hybrid`
    } else if (loc.type === 'in_person') {
      location = loc.city || loc.name || 'In Person'
    } else {
      location = 'Online'
    }
  }
  
  // Determine event type based on name or category
  const title = lumaEvent.event.name.toLowerCase()
  let type = 'Event'
  if (title.includes('networking') || title.includes('mixer')) {
    type = 'Networking'
  } else if (title.includes('workshop') || title.includes('bootcamp')) {
    type = 'Workshop'
  } else if (title.includes('conference') || title.includes('summit')) {
    type = 'Conference'
  } else if (title.includes('talk') || title.includes('speaker')) {
    type = 'Talk'
  } else if (title.includes('program') || title.includes('course')) {
    type = 'Program'
  }
  
  // Format attendees count
  const attendees = lumaEvent.event.attendee_count > 0
    ? `${lumaEvent.event.attendee_count}+`
    : 'Coming soon'
  
  return {
    id: lumaEvent.event.id,
    title: lumaEvent.event.name,
    description: lumaEvent.event.description || 'Join us for this exciting event!',
    date,
    time,
    location,
    type,
    attendees,
    link: lumaEvent.event.url,
    imageUrl: lumaEvent.event.cover_url || lumaEvent.event.image_url || null,
    featured: lumaEvent.event.attendee_count > 50 || type === 'Conference',
  }
}

export async function GET(request: NextRequest) {
  try {
    // Option 1: Try API if key is available (requires Luma Plus - $59/month)
    if (LUMA_API_KEY) {
      const url = `${LUMA_API_BASE_URL}/calendar/${LUMA_CALENDAR_SLUG}/events?limit=50&status=published`
      
      console.log('Fetching events from Luma API:', { url, calendarSlug: LUMA_CALENDAR_SLUG })
      
      const response = await fetch(url, {
        headers: {
          'x-luma-api-key': LUMA_API_KEY,
          'Content-Type': 'application/json',
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      })

      if (response.ok) {
        const data: LumaCalendarEventsResponse = await response.json()
        
        if (data.entries && data.entries.length > 0) {
          const transformedEvents: TransformedEvent[] = data.entries
            .map(transformEvent)
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

          console.log('Successfully fetched', transformedEvents.length, 'events from Luma API')
          return NextResponse.json({ events: transformedEvents })
        }
      } else {
        const errorText = await response.text()
        console.error('Luma API error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText
        })
      }
    }

    // Option 2: No API key - return instructions for embed widget
    // Luma provides a free embed widget that doesn't require API access
    return NextResponse.json({ 
      events: [], 
      error: 'Luma API requires Luma Plus subscription ($59/month). Use the embed widget instead - see instructions in console.',
      embedInstructions: {
        method: 'Add this iframe to your page:',
        code: `<iframe src="https://lu.ma/embed-calendar/${LUMA_CALENDAR_SLUG}" width="100%" height="600" frameborder="0"></iframe>`,
        directLink: `https://lu.ma/${LUMA_CALENDAR_SLUG}`
      },
      debug: { 
        hasKey: !!LUMA_API_KEY, 
        calendarSlug: LUMA_CALENDAR_SLUG,
        note: 'Luma API is now a paid feature. Consider using the embed widget or manually updating events.'
      }
    }, { status: 200 })
  } catch (error) {
    console.error('Error fetching Luma events:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ 
      events: [], 
      error: `Internal server error: ${errorMessage}`,
      debug: { error: errorMessage }
    }, { status: 200 })
  }
}
