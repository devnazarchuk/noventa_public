'use client'

import { motion } from 'framer-motion'
import { Clock, Eye, Heart, Shield, Sparkles, Star, Wheat } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getProductsByCategory } from '@/app/data/products'
import { useLanguageStore } from '@/app/store/languageStore'

export default function FruhstucksgebaeckPage() {
  const { language } = useLanguageStore()
  

  const fruhstucksgebaeckProducts = getProductsByCategory('fruehstuecksgebaeck').map((product, index) => ({
    id: index + 1,
    name: product.name,
    nameDe: product.nameDe || product.name,
    slug: product.slug,
    emoji: '🥐',
    description: product.description,
    descriptionDe: product.descriptionDe || product.description,
    price: product.price,
    priceDe: `${product.price.toFixed(2).replace('.', ',')} €`,
    image: product.imageUrl,
    details: product.tags.slice(0, 4),
    detailsDe: product.tags.slice(0, 4), // You can add German translations later
    popular: index < 2, // First 2 products are popular
    badge: index === 0 ? 'Bestseller' : index === 1 ? 'Neu' : undefined,
    icon: index % 2 === 0 ? Wheat : index % 3 === 0 ? Shield : index % 4 === 0 ? Sparkles : Heart,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-neutral-900 dark:to-neutral-800">
      {}
      <section className="relative my-5 overflow-hidden py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20" />
        <div className="container-responsive relative py-16 sm:py-20 lg:py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-100 px-4 py-2 dark:border-pink-700/50 dark:bg-pink-900/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Star className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                {language === 'de' ? 'Regional' : 'Regional'}
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              🥐 {language === 'de' ? 'Frühstücksgebäck' : 'Breakfast Pastries'}
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-3xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {language === 'de'
                ? 'Vom Milchhörnchen bis hin zum Rosinenbrötchen: Auch hier ist regional unser Rezept. Mehl, Milch & Co. kommen bevorzugt aus der Umgebung. Für Geschmack, den man auch in unserem Frühstücksgebäck schmeckt.'
                : 'From milk croissants to raisin rolls: Here too, regional is our recipe. Flour, milk & Co. preferably come from the surrounding area. For taste that you can also taste in our breakfast pastries.'}
            </motion.p>

            {}
            <motion.div
              className="mb-8 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 dark:bg-green-900/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Shield className="h-3 w-3 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-300">
                  {language === 'de' ? 'Regionales Mehl' : 'Regional Flour'}
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 dark:bg-blue-900/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-medium text-blue-700 dark:text-blue-300">
                  {language === 'de' ? 'Regionale Milch' : 'Regional Milk'}
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 dark:bg-purple-900/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-medium text-purple-700 dark:text-purple-300">
                  {language === 'de' ? 'Bevorzugt aus der Umgebung' : 'Preferably from Surroundings'}
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="container-responsive py-16 sm:py-20">
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {fruhstucksgebaeckProducts.map((product) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-pink-800/30 dark:bg-neutral-800"
                whileHover={{ y: -8, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * product.id }}
              >
                {}
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <Image
                    src={product.image}
                    alt={language === 'de' ? product.nameDe : product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {product.popular && (
                    <motion.div
                      className="absolute top-3 left-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-lg">
                        <Star className="h-3 w-3" />
                        {product.badge}
                      </span>
                    </motion.div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {}
                  <motion.div
                    className="absolute top-3 right-3 text-2xl"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {product.emoji}
                  </motion.div>
                </div>

                {}
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        {language === 'de' ? product.nameDe : product.name}
                      </h3>
                    </div>
                    <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
                      {language === 'de' ? product.priceDe : `$${product.price}`}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {language === 'de' ? product.descriptionDe : product.description}
                  </p>

                  {}
                  <div className="mb-6 space-y-2">
                    {product.details.map((detail, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                        <span className="text-neutral-600 dark:text-neutral-400">
                          {language === 'de' ? product.detailsDe[index] : detail}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {}
                  <motion.div
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 px-4 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:from-pink-700 hover:to-purple-700 hover:shadow-xl cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href={`/products/fruehstuecksgebaeck/${product.slug}`} className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {language === 'de' ? 'Produkt ansehen' : 'View Product'}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {}
      <section className="container-responsive py-16 sm:py-20">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-600 to-purple-600 p-8 text-center text-white sm:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-4xl">🥐</div>
            <div className="absolute top-8 right-8 text-3xl">🍞</div>
            <div className="absolute bottom-8 left-8 text-3xl">🌾</div>
            <div className="absolute right-4 bottom-4 text-4xl">🥐</div>
          </div>

          <div className="relative z-10">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              {language === 'de' ? 'Bereit für regionales Frühstücksgebäck?' : 'Ready for Regional Breakfast Pastries?'}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-pink-100">
              {language === 'de'
                ? 'Erleben Sie den Geschmack von regionalen Zutaten in unserem Frühstücksgebäck - von Milchhörnchen bis Rosinenbrötchen.'
                : 'Experience the taste of regional ingredients in our breakfast pastries - from milk croissants to raisin rolls.'}
            </p>
            <motion.button
              className="mx-auto flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-pink-600 shadow-lg transition-colors duration-200 hover:bg-pink-50 hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="h-5 w-5" />
              {language === 'de' ? 'Frühstück genießen' : 'Enjoy Breakfast'}
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  )
} 