'use client'

import { lazy, Suspense, useEffect, useState } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { Hero } from '@/components/sections/Hero'

// Simple loading fallback component
function SectionLoader() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="w-full max-w-4xl animate-pulse space-y-4">
        <div className="mx-auto h-8 w-3/4 rounded-lg bg-gray-200"></div>
        <div className="mx-auto h-4 w-1/2 rounded bg-gray-200"></div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-48 rounded-lg bg-gray-200"></div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Lazy load non-critical sections for better performance
const Categories = lazy(() =>
  import('@/components/sections/Categories').then((mod) => ({ default: mod.Categories })),
)
const Services = lazy(() =>
  import('@/components/sections/Services').then((mod) => ({ default: mod.Services })),
)
const Contact = lazy(() =>
  import('@/components/sections/Contact').then((mod) => ({ default: mod.Contact })),
)

export default function HomePage() {
  const [isHydrated, setIsHydrated] = useState(false)


  useEffect(() => {
    const persist = (useLanguageStore as { persist?: { onFinishHydration?: (cb: () => void) => () => void; hasHydrated?: () => boolean; rehydrate?: () => void } })?.persist
    const unsubscribe = persist?.onFinishHydration?.(() => setIsHydrated(true))
    if (persist?.hasHydrated?.()) {
      setIsHydrated(true)
    }
    return unsubscribe
  }, [])


  useEffect(() => {
    import('@/components/sections/Categories')
    import('@/components/sections/Services')
    import('@/components/sections/Contact')
  }, [])

  return (
    <div className="min-h-screen">
      {}
      <Hero />

      {}
      {isHydrated && (
        <>
          <Suspense fallback={<SectionLoader />}>
            <Categories />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Services />
          </Suspense>

          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </>
      )}
    </div>
  )
}
