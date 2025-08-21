'use client'

import { useClerk } from '@clerk/nextjs'
import { LogOut } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/lib/components/ui/button'

interface SignOutButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  className?: string
  children?: React.ReactNode
  redirectUrl?: string
}

export function SignOutButton({ 
  variant = 'outline', 
  size = 'default', 
  className = '',
  children,
  redirectUrl = '/'
}: SignOutButtonProps) {
  const { signOut } = useClerk()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    try {
      setIsLoading(true)
      
    
      try {
        await signOut({ redirectUrl })
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
        window.location.href = redirectUrl
      }, 500)
      
    } catch {
      console.error('Sign out error')
      setIsLoading(false)
      
    
      window.location.href = redirectUrl
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleSignOut}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
      ) : (
        <LogOut className="h-4 w-4 mr-2" />
      )}
      {children || 'Sign Out'}
    </Button>
  )
} 