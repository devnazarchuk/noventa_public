'use client'

import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'

export default function SSOCallbackPage() {
  const { user, isSignedIn } = useUser()
  const router = useRouter()
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

    
      router.push('/reviews')
    }
  }, [isSignedIn, user, router])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72638] mx-auto mb-4"></div>
        <p className="text-lg font-medium">{language === 'de' ? 'Angemeldet...' : 'Signed in...'}</p>
        <p className="text-sm text-gray-600 mt-2">{language === 'de' ? 'Weiterleitung zur Bewertungsseite' : 'Redirecting to reviews page'}</p>
      </div>
    </div>
  )
} 