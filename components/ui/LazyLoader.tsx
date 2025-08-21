'use client'

import { ComponentType, lazy, Suspense } from 'react'

interface LazyLoaderProps {
  component: () => Promise<{ default: ComponentType<Record<string, unknown>> }>
  fallback?: React.ReactNode
  [key: string]: unknown
}


export function LazyLoader({ component, fallback, ...props }: LazyLoaderProps) {
  const LazyComponent = lazy(component)

  return (
    <Suspense fallback={fallback || <div className="h-32 animate-pulse rounded-lg bg-gray-200" />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}


export function preloadComponent(
  component: () => Promise<{ default: ComponentType<Record<string, unknown>> }>,
) {
  return () => {
  
    component()
    return null
  }
}
