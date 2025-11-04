'use client'

import StructuredData from './StructuredData'
import { getPersonSchema } from '@/lib/seo/structuredData'

export default function FounderSchema() {
  const personSchema = getPersonSchema()
  return <StructuredData data={personSchema} />
}

