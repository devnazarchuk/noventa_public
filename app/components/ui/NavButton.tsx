import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface NavButtonProps {
  href?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  'aria-label'?: string
  'aria-current'?: string
}

export function NavButton({ href, children, className = '', ...rest }: NavButtonProps) {
  const base =
    'inline-flex items-center justify-center whitespace-nowrap truncate rounded-lg shadow-md font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD6D6] bg-gradient-to-b from-[#FFF5E1] to-[#FFE2E2] text-[#D72638] dark:from-[#3A3A3A] dark:to-[#1A1A1A] dark:text-[#FFF5E1] hover:scale-105 hover:bg-opacity-80 !px-3 !py-1.5 sm:!px-4 sm:!py-2'
  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, className)}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    )
  }
  return (
    <button className={cn(base, className)} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
