import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
      
        'bg-[#FFF6F6] rounded-[16px] shadow-[inset_4px_4px_8px_#e4c6c6,_inset_-4px_-4px_8px_#ffffff] px-4 py-2 text-base border-none focus:outline-none focus:ring-2 focus:ring-[#EE0A24] transition-all duration-200',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
