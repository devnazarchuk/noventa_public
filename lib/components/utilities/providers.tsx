'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes'

import { TooltipProvider } from '@/lib/components/ui/tooltip'

export const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ClerkProvider>
      <NextThemesProvider {...props}>
        <TooltipProvider>{children}</TooltipProvider>
      </NextThemesProvider>
    </ClerkProvider>
  )
}
