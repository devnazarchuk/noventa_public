'use client'

import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function LoginPage() {
  const { theme } = useTheme()

  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn
        redirectUrl="/reviews/callback?redirect_url=/reviews"
        appearance={{ baseTheme: theme === 'dark' ? dark : undefined }}
      />
    </div>
  )
}
