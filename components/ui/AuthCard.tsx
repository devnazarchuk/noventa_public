'use client'

import { SignIn, SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import { Button } from '@/lib/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/lib/components/ui/card'

interface AuthCardProps {
  isOpen: boolean
  onClose: () => void
  mode?: 'signin' | 'signup'
}

export default function AuthCard({ isOpen, onClose, mode = 'signin' }: AuthCardProps) {
  const { theme } = useTheme()
  const [currentMode] = useState<'signin' | 'signup'>(mode)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-0">
      <Card className="w-full max-w-md mx-auto shadow-dramatic dark:shadow-intense border border-border-light dark:border-border-light">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-semibold text-foreground">
            {currentMode === 'signin' ? 'Sign in' : 'Sign up'}
          </CardTitle>
          <Button
            variant="ghost1"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          {currentMode === 'signin' ? (
            <SignIn
              redirectUrl="/reviews/callback?redirect_url=/reviews"
              appearance={{ 
                baseTheme: theme === 'dark' ? dark : undefined,
                elements: {
                  card: 'shadow-none bg-transparent',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                }
              }}
            />
          ) : (
            <SignUp
              redirectUrl="/reviews/callback?redirect_url=/reviews"
              appearance={{ 
                baseTheme: theme === 'dark' ? dark : undefined,
                elements: {
                  card: 'shadow-none bg-transparent',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                }
              }}
            />
          )}
          
        </CardContent>
      </Card>
    </div>
  )
} 