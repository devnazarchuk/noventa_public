'use client'

import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

import { SignInButton } from './SignInButton'
import { SignUpButton } from './SignUpButton'
import { UserProfile } from './UserProfile'

export function AuthButtons() {
  const { isSignedIn, isLoaded } = useUser()
  const pathname = usePathname()

  if (!isLoaded) {
    return (
      <div className="flex gap-2">
        <div className="h-9 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        <div className="h-9 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    )
  }

  if (isSignedIn) {
    return <UserProfile />
  }


  if (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) {
    return null
  }

  return (
    <div className="flex gap-2">
      <SignInButton variant="ghost" size="sm">
        Sign In
      </SignInButton>
      <SignUpButton variant="default" size="sm">
        Sign Up
      </SignUpButton>
    </div>
  )
} 