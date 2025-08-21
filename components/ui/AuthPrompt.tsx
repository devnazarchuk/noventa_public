'use client'

import { LogIn, UserPlus } from 'lucide-react'

import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'

interface AuthPromptProps {
  title?: string
  message?: string
  showSignUp?: boolean
  className?: string
}

export default function AuthPrompt({ 
  title = "Sign In Required", 
  message = "You need to sign in to interact with reviews and other user content.",
  showSignUp = true,
  className = ""
}: AuthPromptProps) {
  return (
    <Card className={`w-full max-w-md mx-auto ${className}`}>
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-muted-foreground">
          {message}
        </p>
        <div className="flex gap-2 justify-center">
          <Button 
            onClick={() => window.location.href = '/sign-in'}
            className="flex items-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
          {showSignUp && (
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/sign-up'}
              className="flex items-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
} 