'use client'

import { SignUpButton as ClerkSignUpButton } from '@clerk/nextjs'
import { UserPlus } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/lib/components/ui/button'

interface SignUpButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children?: React.ReactNode
  redirectUrl?: string
}

export function SignUpButton({ 
  variant = 'outline', 
  size = 'default', 
  className = '',
  children,
  redirectUrl = '/reviews'
}: SignUpButtonProps) {
  return (
    <ClerkSignUpButton mode="modal">
      <Button
        variant={variant}
        size={size}
        className={className}
        asChild
      >
        <Link href={`/sign-up?redirect_url=${encodeURIComponent(redirectUrl)}`}>
          <UserPlus className="h-4 w-4 mr-2" />
          {children || 'Sign Up'}
        </Link>
      </Button>
    </ClerkSignUpButton>
  )
} 