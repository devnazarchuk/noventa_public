'use client'

import { useSyncUser } from '@/lib/hooks/useSyncUser'

export default function UserSync() {
  useSyncUser()
  return null
} 