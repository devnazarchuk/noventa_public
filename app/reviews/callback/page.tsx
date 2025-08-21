'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'

function CallbackContent() {
  const { user, isSignedIn } = useUser()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { language } = useLanguageStore()

  useEffect(() => {
    if (isSignedIn && user) {
    
      fetch('/api/sync-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(error => {
        console.error('Failed to sync user:', error)
      })

    
      const redirectUrl = searchParams.get('redirect_url') || '/reviews'
      router.push(redirectUrl)
    }
  }, [isSignedIn, user, router, searchParams])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72638] mx-auto mb-4"></div>
        <p className="text-lg font-medium">{language === 'de' ? 'Angemeldet...' : 'Signed in...'}</p>
        <p className="text-sm text-gray-600 mt-2">{language === 'de' ? 'Weiterleitung...' : 'Redirecting...'}</p>
      </div>
    </div>
  )
}

export default function CallbackPage() {
  const { language } = useLanguageStore()
  
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72638] mx-auto mb-4"></div>
          <p className="text-lg font-medium">{language === 'de' ? 'Laden...' : 'Loading...'}</p>
        </div>
      </div>
    }>
      <CallbackContent />
    </Suspense>
  )
} 