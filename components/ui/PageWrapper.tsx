import { motion } from 'framer-motion'
import React from 'react'

export function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-[#FFF6F6] to-[#FFE2E2] px-4 py-8 transition-colors duration-200 md:px-8 md:py-12 dark:from-[#181818] dark:to-[#232323] ${className || ''}`}
      style={{
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      {children}
    </motion.div>
  )
}
