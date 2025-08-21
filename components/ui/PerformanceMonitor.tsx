'use client'

import { usePerformance } from '@/lib/hooks/usePerformance'


export function PerformanceMonitor() {
  usePerformance()
  return null
}
