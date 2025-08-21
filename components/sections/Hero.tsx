'use client'

import { motion } from 'framer-motion'
import { Cake, Coffee, Croissant, Heart, MapPin, Star, Wheat } from 'lucide-react'
import Link from 'next/link'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'
import { Button } from '@/components/ui/Button'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Star animation variants
const starAnimation = {
  initial: { scale: 0, rotate: -180 },
  animate: { scale: 1, rotate: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const ratingStarAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
}

export function Hero() {
  const { language } = useLanguageStore()
  const t = translations[language]

  return (
    <section className="from-primary-50 to-primary-50 overflow-hidden bg-gradient-to-br via-white pt-16 pb-12 sm:pt-20 sm:pb-16 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="container-responsive">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-6 sm:space-y-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-4 sm:space-y-6">
              <div className="bg-primary-100 dark:bg-primary-900/30 border-primary-200 dark:border-primary-700/50 inline-flex items-center gap-2 rounded-full border px-3 py-2 sm:px-4">
                <motion.div
                  variants={starAnimation}
                  whileHover={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                    transition: { duration: 0.6, ease: 'easeInOut' },
                  }}
                  className="cursor-pointer"
                >
                  <Star className="text-primary-600 dark:text-primary-400 h-3 w-3 fill-current sm:h-4 sm:w-4" />
                </motion.div>
                <span className="text-primary-700 dark:text-primary-300 text-break-words text-xs font-medium sm:text-sm">
                  {t.hero.badge}
                </span>
              </div>

              <h1 className="font-display text-responsive-3xl sm:text-responsive-4xl lg:text-responsive-5xl leading-tight font-bold">
                <span className="text-gradient from-primary-600 to-primary-800 text-break-words bg-gradient-to-r bg-clip-text text-transparent">
                  {t.hero.title}
                </span>
                <br />
                <span className="text-break-words text-neutral-800 dark:text-neutral-200">
                  {t.hero.subtitle}
                </span>
              </h1>

              <p className="text-responsive-base sm:text-responsive-lg text-break-words max-w-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {t.hero.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button variant="ghost" size="lg" className="group">
                <Link href="/products" className="text-break-words flex items-center gap-2">
                  <Coffee className="h-4 w-4 transition-transform group-hover:rotate-12 sm:h-5 sm:w-5" />
                  <span className="text-break-words">{t.hero.exploreMenu}</span>
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Link href="/stores" className="text-break-words flex items-center gap-2">
                  <MapPin className="group-hover:bounce h-4 w-4 transition-transform sm:h-5 sm:w-5" />
                  <span className="text-break-words">{t.hero.findLocations}</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <motion.div
                className="group flex cursor-pointer items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = '/about/master-bakers')}
              >
                <div className="flex -space-x-2">
                  {[
                    { emoji: '👨‍🍳', bg: 'bg-blue-100' },
                    { emoji: '👩‍🍳', bg: 'bg-pink-100' },
                    { emoji: '👨‍🍳', bg: 'bg-green-100' },
                    { emoji: '👩‍🍳', bg: 'bg-yellow-100' },
                  ].map((baker, i) => (
                    <motion.div
                      key={i}
                      className={`h-8 w-8 rounded-full sm:h-10 sm:w-10 ${baker.bg} flex items-center justify-center border-2 border-white shadow-sm transition-all duration-200 group-hover:shadow-md`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 + i * 0.1, type: 'spring', stiffness: 200 }}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.3 },
                      }}
                    >
                      <span className="text-xs sm:text-sm">{baker.emoji}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-break-words group-hover:text-primary-600 dark:group-hover:text-primary-400 text-xs font-medium text-neutral-800 transition-colors sm:text-sm dark:text-neutral-200">
                    {t.hero.masterBakers}
                  </p>
                  <p className="text-break-words text-xs text-neutral-500 dark:text-neutral-400">
                    {t.hero.craftingExcellence}
                  </p>
                </div>
              </motion.div>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      variants={ratingStarAnimation}
                      initial="initial"
                      animate="animate"
                      whileHover={{
                        scale: [1, 1.3, 1],
                        y: [0, -5, 0],
                        transition: { duration: 0.4, ease: 'easeInOut' },
                      }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      className="cursor-pointer"
                    >
                      <Star className="h-3 w-3 fill-current text-yellow-400 sm:h-4 sm:w-4" />
                    </motion.div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-medium text-neutral-800 sm:text-sm dark:text-neutral-200">
                    {t.hero.rating}
                  </p>
                  <p className="text-break-words text-xs text-neutral-500 dark:text-neutral-400">
                    {t.hero.reviews}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-96 w-full lg:h-[500px]">
              {}
              <div className="from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 absolute inset-0 rotate-3 transform rounded-3xl bg-gradient-to-br opacity-50"></div>

              {}
              <div className="relative rounded-3xl border border-white/50 bg-white p-6 shadow-xl lg:p-8 dark:border-neutral-700/50 dark:bg-neutral-800">
                <div className="grid h-full grid-cols-2 gap-3 lg:gap-4">
                  <div className="space-y-3 lg:space-y-4">
                    <motion.div
                      className="group flex h-20 cursor-pointer items-center justify-center rounded-2xl bg-orange-50 p-4 lg:h-24 lg:p-6 dark:bg-orange-900/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Croissant className="h-8 w-8 text-orange-600 transition-transform group-hover:rotate-12 lg:h-12 lg:w-12 dark:text-orange-400" />
                    </motion.div>
                    <motion.div
                      className="group flex h-20 cursor-pointer items-center justify-center rounded-2xl bg-yellow-50 p-4 lg:h-24 lg:p-6 dark:bg-yellow-900/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Cake className="group-hover:bounce h-8 w-8 text-yellow-600 transition-transform lg:h-12 lg:w-12 dark:text-yellow-400" />
                    </motion.div>
                    <motion.div
                      className="group flex h-20 cursor-pointer items-center justify-center rounded-2xl bg-blue-50 p-4 lg:h-24 lg:p-6 dark:bg-blue-900/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Coffee className="h-8 w-8 text-blue-600 transition-transform group-hover:rotate-12 lg:h-12 lg:w-12 dark:text-blue-400" />
                    </motion.div>
                  </div>
                  <div className="space-y-3 lg:space-y-4">
                    <motion.div
                      className="group flex h-28 cursor-pointer items-center justify-center rounded-2xl bg-green-50 p-4 lg:h-32 lg:p-6 dark:bg-green-900/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Wheat className="h-12 w-12 text-green-600 transition-transform group-hover:rotate-6 lg:h-16 lg:w-16 dark:text-green-400" />
                    </motion.div>
                    <motion.div
                      className="group flex h-28 cursor-pointer items-center justify-center rounded-2xl bg-pink-50 p-4 lg:h-32 lg:p-6 dark:bg-pink-900/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart className="h-12 w-12 fill-current text-pink-600 transition-transform group-hover:scale-110 lg:h-16 lg:w-16 dark:text-pink-400" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {}
              <motion.div
                className="absolute -top-2 -right-2 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-yellow-100 shadow-lg lg:-top-4 lg:-right-4 lg:h-16 lg:w-16 dark:border-neutral-700 dark:bg-yellow-900/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-lg lg:text-2xl">🥖</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -left-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-pink-100 shadow-lg lg:-bottom-4 lg:-left-4 lg:h-12 lg:w-12 dark:border-neutral-700 dark:bg-pink-900/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-base lg:text-xl">🧁</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-orange-100 shadow-lg lg:-left-6 lg:h-10 lg:w-10 dark:border-neutral-700 dark:bg-orange-900/30"
                animate={{ x: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <span className="text-sm lg:text-lg">🥐</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
