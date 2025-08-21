import { motion } from 'framer-motion';
import React from 'react';

export function PageWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen w-full px-4 py-8 md:px-8 md:py-12 flex flex-col items-center justify-center bg-[#FDEEEE] dark:bg-[#232323] ${className || ''}`}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {children}
    </motion.div>
  );
} 