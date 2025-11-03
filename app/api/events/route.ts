import { NextRequest, NextResponse } from 'next/server'
import type { LumaCalendarEventsResponse, TransformedEvent } from '@/lib/types/luma'

// Get Luma API key and calendar slug from environment variables
const LUMA_API_KEY = process.env.LUMA_API_KEY
const LUMA_CALENDAR_SLUG = process.env.LUMA_CALENDAR_SLUG || 'growthlab.sg'
const LUMA_API_BASE_URL = 'https://api.lu.ma/public/v1'

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
    // Check if API key is configured
    if (!LUMA_API_KEY) {
      console.warn('LUMA_API_KEY is not configured. Returning empty events array.')
      return NextResponse.json({ events: [], error: 'Luma API key not configured' }, { status: 200 })
    }

    // Fetch events from Luma API
    const url = `${LUMA_API_BASE_URL}/calendar/${LUMA_CALENDAR_SLUG}/events?limit=50&status=published`
    
    const response = await fetch(url, {
      headers: {
        'x-luma-api-key': LUMA_API_KEY,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      console.error('Luma API error:', response.status, await response.text())
      // Return empty array instead of error to prevent UI breakage
      return NextResponse.json({ events: [], error: 'Failed to fetch events from Luma' }, { status: 200 })
    }

    const data: LumaCalendarEventsResponse = await response.json()
    
    // Transform events to our format
    const transformedEvents: TransformedEvent[] = data.entries
      .map(transformEvent)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    return NextResponse.json({ events: transformedEvents })
  } catch (error) {
    console.error('Error fetching Luma events:', error)
    // Return empty array on error to prevent UI breakage
    return NextResponse.json({ events: [], error: 'Internal server error' }, { status: 200 })
  }
}

