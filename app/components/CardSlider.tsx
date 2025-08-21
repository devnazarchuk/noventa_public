import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

import { useAccessibilityStore } from '@/app/store/accessibilityStore'
import { useLanguageStore } from '@/app/store/languageStore'
import { Role } from '@/components/data/CARDS'

import { roleTranslations } from './data/translations'

interface CardSliderProps {
  cards: Array<{
    id: string
    title: string
    description: string
    icon?: string
  }>
  role: Role
}

export default function CardSlider({ cards, role }: CardSliderProps) {
  const { language } = useLanguageStore()
  const { fontSize } = useAccessibilityStore()

  const getCardSize = () => {
  
    switch (fontSize) {
      case 'medium':
        return {
          container: 'w-[280px] h-[320px]',
          center: 'w-[320px] h-[360px]',
          side: 'w-[240px] h-[280px]',
          text: 'text-lg', // >= 18px
          button: 'text-base', // >= 16px
        }
      case 'large':
        return {
          container: 'w-[320px] h-[360px]',
          center: 'w-[360px] h-[400px]',
          side: 'w-[280px] h-[320px]',
          text: 'text-xl', // >= 20px
          button: 'text-lg', // >= 18px
        }
      default:
        return {
          container: 'w-[240px] h-[280px]',
          center: 'w-[280px] h-[320px]',
          side: 'w-[200px] h-[240px]',
          text: 'text-base', // 16px
          button: 'text-base', // 16px (was text-sm)
        }
    }
  }

  const size = getCardSize()

  const handleCardClick = (index: number) => {
  
    console.log('Card clicked:', index)
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center gap-4">
        {cards.map((card, index) => {
          const isCenter = index === 1
          const roleTranslation = roleTranslations[language][role] || {
            title: card.title,
            description: card.description,
            button: 'Learn more',
          }

          return (
            <motion.div
              key={card.id}
              className={`relative ${
                isCenter ? size.center : size.side
              } overflow-hidden rounded-xl bg-[var(--card-bg)] shadow-[var(--card-shadow)] transition-all duration-300 dark:bg-[var(--card-bg)] dark:shadow-[var(--card-shadow)]`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex h-full flex-col p-6">
                {card.icon && (
                  <div className="mb-4">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={48}
                      height={48}
                      className="h-12 w-12"
                    />
                  </div>
                )}
                <h3
                  className={`mb-2 font-bold ${size.text} text-[var(--primary-accent)]`}
                  aria-label={roleTranslation.title}
                >
                  {}
                  {roleTranslation.title}
                </h3>
                <p
                  className={`mb-4 text-[var(--text-secondary)] dark:text-[var(--text-primary)] ${size.text}`}
                >
                  {}
                  {roleTranslation.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleCardClick(index)
                  }}
                  className="flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center gap-2 rounded-full bg-[#FFF5E1] px-4 py-2 text-sm font-bold text-[#D72638] shadow-[var(--card-shadow)] transition-all select-none hover:scale-105 hover:shadow-[var(--card-shadow-hover)] dark:bg-[#FFF5E1] dark:text-[#D72638]"
                  aria-label={`${roleTranslation.button} - ${roleTranslation.title}`}
                  title={roleTranslation.button}
                >
                  {}
                  {roleTranslation.button}
                  <ArrowDown className="h-3 w-3" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
