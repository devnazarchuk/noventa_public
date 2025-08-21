'use client'

import { useCallback, useEffect } from 'react'


export function usePerformance() {
  const reportMetric = useCallback((name: string, value: number) => {
  
  
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, eventName: string, params: Record<string, unknown>) => void }).gtag) {
    
      ;(window as unknown as { gtag: (command: string, eventName: string, params: Record<string, unknown>) => void }).gtag('event', name, {
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        metric_id: name,
        metric_value: value,
        metric_delta: 0,
      })
    }

  
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${name}:`, value)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

  
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint')
      if (fcpEntry) {
        reportMetric('FCP', fcpEntry.startTime)
      }
    })
    fcpObserver.observe({ entryTypes: ['paint'] })

  
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      if (lastEntry) {
        reportMetric('LCP', lastEntry.startTime)
      }
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

  
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const firstInputEntry = entry as PerformanceEntry & { processingStart?: number }
        if (firstInputEntry.processingStart) {
          reportMetric('FID', firstInputEntry.processingStart - entry.startTime)
        }
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

  
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: PerformanceEntry & { hadRecentInput?: boolean; value?: number }) => {
        if (!entry.hadRecentInput && entry.value !== undefined) {
          clsValue += entry.value
          reportMetric('CLS', clsValue)
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

  
    const navigationEntry = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      reportMetric('TTFB', ttfb)
    }

  
    return () => {
      fcpObserver.disconnect()
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [reportMetric])

  return null
}


export function useRenderPerformance(componentName: string) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const startTime = performance.now()

      return () => {
        const endTime = performance.now()
        const renderTime = endTime - startTime
        console.log(`⚡ ${componentName} render time:`, renderTime.toFixed(2), 'ms')
      }
    }
  }, [componentName])
}
