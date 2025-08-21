import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SoftCardProps {
  title: string
  description?: string
  icon?: React.ReactNode
  href: string
  className?: string
  image?: string
}

export function SoftCard({ title, description, icon, href, className, image }: SoftCardProps) {
  return (
    <Link
      href={href}
      aria-label={`${title}${description ? ` - ${description}` : ''}`}
      prefetch={false}
      className="block"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className={`flex h-full min-h-[120px] w-full flex-col items-center overflow-hidden rounded-[25px] bg-[#FFF6F6] p-2 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-shadow duration-200 hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] md:min-h-[180px] md:p-4 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a] dark:hover:shadow-[6px_6px_12px_#181818,_-6px_-6px_12px_#2a2a2a] ${className || ''}`}
        role="button"
        tabIndex={0}
        aria-label={title}
      >
        {image && (
          <div className="relative mb-3 h-24 w-full overflow-hidden rounded-2xl md:mb-6 md:h-40">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="eager"
              fetchPriority="high"
              quality={85}
            />
          </div>
        )}
        <div className="mb-2 rounded-full bg-[#FFF5E1] p-2 md:mb-4 md:p-4 dark:bg-[#2a2a2a]">
          {icon}
        </div>
        <h3 className="mb-1 text-center text-[13px] font-bold text-[#D72638] md:mb-2 md:text-base dark:text-[#FFA5A5]">
          {}
          {title}
        </h3>
        {description && (
          <p className="flex-1 overflow-hidden text-center text-[12px] text-gray-700 md:text-sm dark:text-[#FFF5E1]">
            {}
            {description}
          </p>
        )}
      </motion.div>
    </Link>
  )
}
