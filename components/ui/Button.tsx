'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow-md',
      secondary:
        'bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 shadow-sm hover:shadow-md',
      ghost:
        'text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30',
      outline:
        'border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-500',
    }

    const sizes = {
      sm: 'px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-lg',
      md: 'px-3 sm:px-4 py-1.5 sm:py-2 text-sm rounded-xl',
      lg: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-xl',
    }

    if (asChild) {
      return (
        <motion.div
          className={cn(baseClasses, variants[variant], sizes[size], className)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={props.onClick}
        disabled={props.disabled}
        type={props.type}
      >
        {children}
      </motion.button>
    )
  },
)

Button.displayName = 'Button'

export { Button }
