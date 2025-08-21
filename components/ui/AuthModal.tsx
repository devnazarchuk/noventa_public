'use client'

import { SignIn, SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'

import { Button } from '@/lib/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/lib/components/ui/dialog'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  mode?: 'signin' | 'signup'
  onSuccess?: () => void
}

export default function AuthModal({ isOpen, onClose, mode = 'signin' }: AuthModalProps) {
  const { theme } = useTheme()
  const [currentMode, setCurrentMode] = useState<'signin' | 'signup'>(mode)



  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">
              {currentMode === 'signin' ? 'Sign In' : 'Create Account'}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="p-6 pt-4">
          {currentMode === 'signin' ? (
            <SignIn
              forceRedirectUrl="/reviews"
              appearance={{ 
                baseTheme: theme === 'dark' ? dark : undefined,
                elements: {
                  formButtonPrimary: 'bg-[#D72638] hover:bg-[#B91C1C] text-white',
                  card: 'shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsBlockButton: 'bg-white border border-gray-300 hover:bg-gray-50',
                  formFieldInput: 'border border-gray-300 focus:border-[#D72638] focus:ring-[#D72638]',
                  footerActionLink: 'text-[#D72638] hover:text-[#B91C1C]'
                }
              }}
              afterSignInUrl="/reviews"
              redirectUrl="/reviews"
            />
          ) : (
            <SignUp
              forceRedirectUrl="/reviews"
              appearance={{ 
                baseTheme: theme === 'dark' ? dark : undefined,
                elements: {
                  formButtonPrimary: 'bg-[#D72638] hover:bg-[#B91C1C] text-white',
                  card: 'shadow-none',
                  headerTitle: 'hidden',
                  headerSubtitle: 'hidden',
                  socialButtonsBlockButton: 'bg-white border border-gray-300 hover:bg-gray-50',
                  formFieldInput: 'border border-gray-300 focus:border-[#D72638] focus:ring-[#D72638]',
                  footerActionLink: 'text-[#D72638] hover:text-[#B91C1C]'
                }
              }}
              afterSignUpUrl="/reviews"
              redirectUrl="/reviews"
            />
          )}
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {currentMode === 'signin' ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setCurrentMode(currentMode === 'signin' ? 'signup' : 'signin')}
                className="text-[#D72638] hover:text-[#B91C1C] font-medium"
              >
                {currentMode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 