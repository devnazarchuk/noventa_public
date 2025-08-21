'use client'

import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SSOCallbackPage() {
  const router = useRouter()

  useEffect(() => {
  
    const timeout = setTimeout(() => {
      router.push('/reviews')
    }, 10000)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D72638] mx-auto"></div>
        <p className="text-lg font-medium">Authenticating...</p>
        <p className="text-sm text-muted-foreground">Please wait while we complete your sign-in</p>
      </div>
      <AuthenticateWithRedirectCallback />
    </div>
  )
} 