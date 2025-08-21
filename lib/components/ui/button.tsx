import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(

  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[20px] font-semibold text-base px-6 py-3 bg-[#FFF6F6] text-[#3A3A3A] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-all duration-200 hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#EE0A24]",
  {
    variants: {
      variant: {
        default: 'bg-[#EE0A24] text-white',
        destructive: 'bg-[#FF3B59] text-white',
        outline: 'border-2 border-[#EE0A24] bg-[#FFF6F6] text-[#EE0A24]',
        secondary: 'bg-[#FFA5A5] text-[#3A3A3A]',
        ghost: 'bg-transparent text-[#EE0A24] hover:bg-[#FFF5E1]',
        link: 'text-[#EE0A24] underline-offset-4 hover:underline bg-transparent',
        ghost1: 'bg-transparent text-[#EE0A24] hover:bg-[#FFFA24] shadow-[8px_8px_14px_#ffffff,_-8px_-8px_14px_#ffffff] transition-all duration-200 hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] ',
      },
      size: {
        default: 'h-11 px-6 py-3',
        sm: 'h-9 rounded-[16px] px-4 py-2',
        lg: 'h-14 rounded-[25px] px-8 py-4',
        icon: 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
