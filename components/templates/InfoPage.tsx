'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { PageWrapper } from '@/components/ui/PageWrapper'

export interface InfoSection {
  title: string
  content: string
  image?: string
  imagePosition?: 'left' | 'right'
  details?: string[]
}

interface InfoPageProps {
  title: string
  description: string
  heroImage: string
  sections: InfoSection[]
}

export default function InfoPage({ title, description, heroImage, sections }: InfoPageProps) {
  return (
    <PageWrapper>
      {}
      <section className="relative mb-12 h-[32vh] min-h-[220px] w-full md:h-[40vh] md:min-h-[320px]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="rounded-[25px] object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-[25px] bg-black/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-extrabold !text-white drop-shadow-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-white drop-shadow-lg"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {}
      <div className="space-y-16 px-4">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col ${section.image ? 'md:flex-row' : ''} items-center gap-8 ${
              section.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
            }`}
          >
            {section.image && (
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[300px] overflow-hidden rounded-[25px] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-all duration-300 md:h-[400px] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
                >
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              </div>
            )}
            <div className={`w-full ${section.image ? 'md:w-1/2' : ''}`}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-[25px] bg-white/80 p-8 shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-all duration-300 dark:bg-[#232323]/80 dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#2a2a2a]"
              >
                <h2 className="mb-4 text-2xl font-bold text-[#EE0A24] dark:text-[#EE0A24]">
                  {section.title}
                </h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300">{section.content}</p>
                {section.details && (
                  <ul className="space-y-2">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-[#EE0A24] dark:text-[#EE0A24]">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>
    </PageWrapper>
  )
}
