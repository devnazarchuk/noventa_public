'use client'

import { HTMLMotionProps, motion } from 'framer-motion'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  interactive?: boolean
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, interactive = false, hover = true, ...props }, ref) => {
    const baseClasses =
      'bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-700 shadow-soft transition-all duration-300 overflow-hidden'
    const interactiveClasses = interactive
      ? 'cursor-pointer hover:shadow-soft-lg hover:-translate-y-1'
      : ''
    const hoverClasses = hover ? 'hover:shadow-md' : ''

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, interactiveClasses, hoverClasses, className)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  },
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4 pb-0 sm:p-6', className)} {...props} />
  ),
)
CardHeader.displayName = 'CardHeader'

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4 sm:p-6', className)} {...props} />
  ),
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-4 pt-0 sm:p-6', className)} {...props} />
  ),
)
CardFooter.displayName = 'CardFooter'

export { Card, CardContent, CardFooter, CardHeader }
