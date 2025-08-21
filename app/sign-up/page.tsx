'use client'

import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function SignUpPage() {
  const { theme } = useTheme()

  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp
        forceRedirectUrl="/reviews"
        appearance={{ baseTheme: theme === 'dark' ? dark : undefined }}
      />
    </div>
  )
} 