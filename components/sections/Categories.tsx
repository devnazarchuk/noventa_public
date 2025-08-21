'use client'

import { motion } from 'framer-motion'
import {
  Award,
  ChevronRight,
  Clock,
  Cookie,
  Croissant,
  Heart,
  Star,
  Wheat,
} from 'lucide-react'
import { useMemo } from 'react'

import { useLanguageStore } from '@/app/store/languageStore'
import { translations } from '@/app/translations'
import { Card } from '@/components/ui/Card'

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

export function Categories() {
  const { language } = useLanguageStore()
  const t = translations[language]

  const categories = useMemo(
    () => [
      {
        id: 'brot',
        icon: Wheat,
        title: language === 'de' ? 'Brot' : 'Bread',
        description:
          language === 'de'
            ? 'Traditionelle Roggen- und Weizenbrote nach alten Rezepten'
            : 'Traditional rye and wheat breads from old recipes',
        color: 'bg-amber-50 text-amber-600 border-amber-100',
        count: language === 'de' ? '15 Sorten' : '15 Varieties',
        popular: true,
        href: '/products/brot',
      },
      {
        id: 'broetchen',
        icon: Wheat,
        title: language === 'de' ? 'Brötchen' : 'Rolls',
        description: language === 'de'
          ? 'Frische Brötchen und Kleingebäck für jeden Tag'
          : 'Fresh rolls and small pastries for every day',
        color: 'bg-orange-50 text-orange-600 border-orange-100',
        count: language === 'de' ? '17 Sorten' : '17 Varieties',
        popular: true,
        href: '/products/broetchen',
      },
      {
        id: 'fruehstuecksgebaeck',
        icon: Croissant,
        title: language === 'de' ? 'Frühstücksgebäck' : 'Breakfast Pastries',
        description: language === 'de'
          ? 'Klassisches Frühstücksgebäck wie Brezeln und Croissants'
          : 'Classic breakfast pastries like pretzels and croissants',
        color: 'bg-pink-50 text-pink-600 border-pink-100',
        count: language === 'de' ? '6 Sorten' : '6 Varieties',
        popular: false,
        href: '/products/fruehstuecksgebaeck',
      },
      {
        id: 'feingebaeck',
        icon: Cookie,
        title: language === 'de' ? 'Feingebäck' : 'Fine Pastries',
        description: language === 'de'
          ? 'Süße Köstlichkeiten und feine Backwaren'
          : 'Sweet delicacies and fine pastries',
        color: 'bg-purple-50 text-purple-600 border-purple-100',
        count: language === 'de' ? '10 Sorten' : '10 Varieties',
        popular: false,
        href: '/products/feingebaeck',
      },
      {
        id: 'snack',
        icon: Heart,
        title: language === 'de' ? 'Snacks & Bowls' : 'Snacks & Bowls',
        description: language === 'de'
          ? 'Herzhafte Snacks, Fladen und gesunde Bowls'
          : 'Savory snacks, flatbreads and healthy bowls',
        color: 'bg-green-50 text-green-600 border-green-100',
        count: language === 'de' ? '10 Sorten' : '10 Varieties',
        popular: false,
        href: '/products/snack',
      },
      {
        id: 'all-products',
        icon: Award,
        title: language === 'de' ? 'Alle Produkte' : 'All Products',
        description: language === 'de'
          ? 'Entdecken Sie unsere vollständige Produktpalette'
          : 'Discover our complete product range',
        color: 'bg-blue-50 text-blue-600 border-blue-100',
        count: language === 'de' ? '58 Sorten' : '58 Varieties',
        popular: true,
        href: '/products',
      },
    ],
    [language],
  )

  return (
    <section className="bg-white/50 py-12 sm:py-16 lg:py-20 dark:bg-neutral-900/50" key={language}>
      <div className="container-responsive" key={`container-${language}`}>
        <motion.div
          className="mb-12 text-center sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          key={`header-${language}`}
        >
          <motion.div
            className="bg-primary-100 dark:bg-primary-900/30 border-primary-200 dark:border-primary-700/50 mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 sm:mb-6 sm:px-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Star className="text-primary-600 dark:text-primary-400 h-3 w-3 fill-current sm:h-4 sm:w-4" />
            <span
              className="text-primary-700 dark:text-primary-300 text-break-words text-xs font-medium sm:text-sm"
              key={`badge-${language}`}
            >
              {t.categories.badge}
            </span>
          </motion.div>

          <h2
            className="font-display text-responsive-2xl sm:text-responsive-3xl lg:text-responsive-4xl text-gradient from-primary-600 to-primary-800 text-break-words mb-4 bg-gradient-to-r bg-clip-text font-bold text-transparent sm:mb-6"
            key={`main-title-${language}`}
          >
            {t.categories.title}
          </h2>
          <p
            className="text-responsive-base sm:text-responsive-lg text-break-words mx-auto max-w-3xl px-4 leading-relaxed text-neutral-600 dark:text-neutral-400"
            key={`main-desc-${language}`}
          >
            {t.categories.description}
          </p>
        </motion.div>

        <motion.div
          className="grid-responsive-3 grid gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          key={language}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={fadeInUp} className="group">
              <a href={category.href} className="block" key={`link-${category.id}-${language}`}>
                <Card
                  interactive
                  className="relative h-full overflow-hidden bg-white p-4 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-xl sm:p-6 dark:bg-neutral-800"
                  key={`card-${category.id}-${language}`}
                >
                  {category.popular && (
                    <div
                      className="bg-primary-600 text-break-words absolute top-3 right-3 rounded-full px-2 py-1 text-xs font-medium text-white sm:top-4 sm:right-4"
                      key={`popular-${category.id}-${language}`}
                    >
                      {language === 'de' ? 'Beliebt' : 'Popular'}
                    </div>
                  )}

                  <div
                    className={`h-12 w-12 rounded-2xl sm:h-14 sm:w-14 ${category.color} mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:mb-6`}
                  >
                    <category.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                  </div>

                  <h3
                    className="font-display group-hover:text-primary-600 dark:group-hover:text-primary-400 text-break-words mb-2 text-lg font-bold text-neutral-800 transition-colors sm:mb-3 sm:text-xl dark:text-neutral-200"
                    key={`title-${category.id}-${language}`}
                  >
                    {category.title}
                  </h3>

                  <p
                    className="text-break-words mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                    key={`desc-${category.id}-${language}`}
                  >
                    {category.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-neutral-400 sm:h-4 sm:w-4" />
                      <span
                        className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 border-primary-100 dark:border-primary-700/50 text-break-words rounded-full border px-2 py-1 text-xs font-medium sm:px-3"
                        key={`count-${category.id}-${language}`}
                      >
                        {category.count}
                      </span>
                    </div>
                    <ChevronRight className="group-hover:text-primary-600 dark:group-hover:text-primary-400 h-4 w-4 text-neutral-400 transition-all duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5 dark:text-neutral-500" />
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 text-center sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          key={`cta-${language}`}
        >
          <motion.a
            href="/products"
            className="bg-primary-600 hover:bg-primary-700 group text-break-words inline-flex items-center gap-2 rounded-xl px-4 py-3 font-medium text-black/80 shadow-lg transition-colors sm:px-6 dark:text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={`button-${language}`}
          >
            <span className="text-break-words" key={`text-${language}`}>
              {t.categories.viewAllProducts}
            </span>
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
