export interface LumaEvent {
  event: {
    id: string
    name: string
    description: string
    slug: string
    url: string
    start_at: string
    end_at: string | null
    status: string
    location: {
      name: string
      address: string
      city: string
      country: string
      type: 'in_person' | 'online' | 'hybrid'
    } | null
    image_url: string | null
    cover_url: string | null
    host: {
      name: string
      username: string
    }
    attendee_count: number
    capacity: number | null
    ticket_count: number
    is_external: boolean
    timezone: string
    created_at: string
    updated_at: string
  }
}

export interface LumaCalendarEventsResponse {
  entries: LumaEvent[]
  has_more: boolean
  cursor: string | null
}

export interface TransformedEvent {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  type: string
  attendees: string
  link: string
  imageUrl: string | null
  featured: boolean
}

