'use client'

import { SignInButton as ClerkSignInButton } from '@clerk/nextjs'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/lib/components/ui/button'

interface SignInButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children?: React.ReactNode
  redirectUrl?: string
}

export function SignInButton({ 
  variant = 'default', 
  size = 'default', 
  className = '',
  children,
  redirectUrl = '/reviews'
}: SignInButtonProps) {
  return (
    <ClerkSignInButton mode="modal">
      <Button
        variant={variant}
        size={size}
        className={className}
        asChild
      >
        <Link href={`/sign-in?redirect_url=${encodeURIComponent(redirectUrl)}`}>
          <LogIn className="h-4 w-4 mr-2" />
          {children || 'Sign In'}
        </Link>
      </Button>
    </ClerkSignInButton>
  )
} 