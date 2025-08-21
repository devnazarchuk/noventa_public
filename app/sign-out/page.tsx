'use client'

import { useClerk } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

export default function SignOutPage() {
  const { signOut } = useClerk()
  const router = useRouter()
  const [isSigningOut, setIsSigningOut] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const performSignOut = useCallback(async () => {
    try {
      setIsSigningOut(true)
      
    
      try {
        await signOut({ redirectUrl: '/' })
      } catch {
        console.log('Clerk sign out failed, trying manual clear')
      }

    
      if (typeof window !== 'undefined') {
        document.cookie.split(";").forEach((c) => {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
        })
        
        localStorage.clear()
        sessionStorage.clear()
      }

    
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)

    } catch {
      console.error('Sign out error')
      setError('Failed to sign out')
      setIsSigningOut(false)
    }
  }, [signOut])

  useEffect(() => {
    performSignOut()
  }, [performSignOut])

  const handleManualSignOut = () => {
    performSignOut()
  }

  const handleGoHome = () => {
    router.push('/')
  }

  if (isSigningOut) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72638] mx-auto"></div>
          <p className="text-lg font-medium">Signing out...</p>
          <p className="text-sm text-muted-foreground">Please wait</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center space-y-6">
        <div className="text-6xl">⚠️</div>
        <h1 className="text-2xl font-bold text-[#D72638] dark:text-[#FFA5A5]">
          Sign Out Failed
        </h1>
        {error && (
          <p className="text-red-600 dark:text-red-400">{error}</p>
        )}
        <p className="text-muted-foreground">
          There was an issue signing you out.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={handleManualSignOut}
            className="px-4 py-2 bg-[#D72638] text-white rounded-md hover:bg-[#B91C1C] transition-colors"
          >
            Try Again
          </button>
          <button 
            onClick={handleGoHome}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  )
} 