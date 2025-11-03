import type { Metadata } from "next"

import { CalendarPageClient } from "./client"

export const metadata: Metadata = {
  title: "My Calendar | GrowthLab",
  description: "Manage your schedule, events, and appointments in one place.",
}

export default function CalendarPage() {
  return <CalendarPageClient />
}

