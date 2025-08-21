'use client'

import { motion } from 'framer-motion'
import { Eye,Heart, Leaf, Shield, Sprout, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getProductsByCategory } from '@/app/data/products'
import { useLanguageStore } from '@/app/store/languageStore'

export default function HealthyPage() {
  const { language } = useLanguageStore()
  

  const healthyProducts = getProductsByCategory('healthy').map((product, index) => ({
    id: index + 1,
    name: product.name,
    nameDe: product.nameDe || product.name,
    slug: product.slug,
    description: product.description,
    descriptionDe: product.descriptionDe || product.description,
    price: product.price,
    priceDe: `${product.price.toFixed(2).replace('.', ',')} €`,
    image: product.imageUrl,
    details: product.tags.slice(0, 4),
    detailsDe: product.tags.slice(0, 4), // You can add German translations later
    popular: index < 2, // First 2 products are popular
    badge: index === 0 ? 'Beliebt' : index === 1 ? 'Neu' : undefined,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-neutral-900 dark:to-neutral-800">
      {}
      <section className="relative my-5 overflow-hidden py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20" />
        <div className="container-responsive relative py-16 sm:py-20 lg:py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-4 py-2 dark:border-green-700/50 dark:bg-green-900/30"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Leaf className="h-4 w-4 text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                {language === 'de' ? 'Gesunde Optionen' : 'Healthy Options'}
              </span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              {language === 'de' ? 'Gesunde Ernährung' : 'Healthy Eating'}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
              {language === 'de'
                ? 'Entdecken Sie unsere Auswahl an gesunden Alternativen, hergestellt mit Bio-Zutaten und für verschiedene Ernährungsbedürfnisse.'
                : 'Discover our selection of healthy alternatives, made with organic ingredients and designed for various dietary needs.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Sprout className="h-4 w-4" />
                <span>{language === 'de' ? 'Bio-Zutaten' : 'Organic ingredients'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>{language === 'de' ? 'Zertifiziert' : 'Certified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>{language === 'de' ? 'Gesund' : 'Healthy'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {}
      <section className="py-16 sm:py-20">
        <div className="container-responsive">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {healthyProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-800"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                {}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={language === 'de' ? product.nameDe : product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.popular && (
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-medium text-white">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {}
                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {language === 'de' ? product.nameDe : product.name}
                    </h3>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {language === 'de' ? product.priceDe : `$${product.price}`}
                    </span>
                  </div>

                  <p className="mb-4 text-neutral-600 dark:text-neutral-300">
                    {language === 'de' ? product.descriptionDe : product.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    {(language === 'de' ? product.detailsDe : product.details).map(
                      (detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400"
                        >
                          <Star className="h-3 w-3 fill-current text-green-500" />
                          <span>{detail}</span>
                        </div>
                      ),
                    )}
                  </div>

                  <motion.div
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-green-700 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href={`/products/healthy/${product.slug}`} className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {language === 'de' ? 'Produkt ansehen' : 'View Product'}
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 py-16">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              {language === 'de' ? 'Bereit für gesunde Ernährung?' : 'Ready for healthy eating?'}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-green-100">
              {language === 'de'
                ? 'Entdecken Sie unsere gesunden Alternativen und finden Sie die perfekte Wahl für Ihre Ernährungsbedürfnisse.'
                : 'Discover our healthy alternatives and find the perfect choice for your dietary needs.'}
            </p>
            <motion.button
              className="rounded-xl bg-white px-8 py-4 font-bold text-green-600 transition-colors duration-200 hover:bg-green-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'de' ? 'Standorte finden' : 'Find Locations'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
