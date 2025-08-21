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
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        className={`flex flex-col items-center rounded-[25px] bg-[#FFF6F6] p-6 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors transition-shadow duration-200 hover:shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323] dark:hover:shadow-[8px_8px_16px_#181818,_-8px_-8px_16px_#232323] ${className || ''}`}
        style={{
          fontFamily: 'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
        }}
      >
        {image && (
          <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="mb-4 rounded-full bg-[#FFF5E1] p-4 transition-colors dark:bg-[#181818]">
          {icon}
        </div>
        <h3
          className="mb-2 text-center text-xl font-bold text-[#c60627] transition-colors dark:text-[#FFA5A5]"
          style={{
            fontFamily:
              'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
          }}
        >
          {title}
        </h3>
        {description && (
          <p
            className="text-center text-sm text-gray-600 transition-colors dark:text-[#FAD2E1]"
            style={{
              fontFamily:
                'SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif',
            }}
          >
            {description}
          </p>
        )}
      </motion.div>
    </Link>
  )
}
