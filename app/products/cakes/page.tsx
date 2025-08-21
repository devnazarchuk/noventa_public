'use client'

import { motion } from 'framer-motion'
import { Award, Cake, Calendar, Eye,Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getProductsByCategory } from '@/app/data/products'
import { useLanguageStore } from '@/app/store/languageStore'

export default function CakesPage() {
  const { language } = useLanguageStore()
  

  const cakeProducts = getProductsByCategory('cakes').map((product, index) => ({
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
    popular: index < 3, // First 3 products are popular
    badge: index === 0 ? 'Beliebt' : index === 1 ? undefined : index === 2 ? 'Neu' : undefined,
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
              <Cake className="h-4 w-4 text-pink-600 dark:text-pink-400" />
              <span className="text-sm font-medium text-pink-700 dark:text-pink-300">
                {language === 'de' ? 'Individuelle Kuchen' : 'Custom Cakes'}
              </span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              {language === 'de' ? 'Individuelle Kuchen' : 'Custom Cakes'}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
              {language === 'de'
                ? 'Lassen Sie uns Ihre Träume in köstliche Realität verwandeln. Jeder Kuchen ist ein einzigartiges Kunstwerk, hergestellt mit Liebe und Kreativität.'
                : 'Let us turn your dreams into delicious reality. Every cake is a unique work of art, crafted with love and creativity.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>{language === 'de' ? 'Individuelles Design' : 'Custom design'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>{language === 'de' ? 'Premium Qualität' : 'Premium quality'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{language === 'de' ? 'Terminplanung' : 'Scheduling'}</span>
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
            {cakeProducts.map((product, index) => (
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
                      <span className="rounded-full bg-pink-500 px-3 py-1 text-xs font-medium text-white">
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
                    <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
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
                          <Star className="h-3 w-3 fill-current text-pink-500" />
                          <span>{detail}</span>
                        </div>
                      ),
                    )}
                  </div>

                  <motion.div
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-pink-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-pink-700 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link href={`/products/cakes/${product.slug}`} className="flex items-center gap-2">
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
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-16">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              {language === 'de' ? 'Bereit für Ihren Traumkuchen?' : 'Ready for your dream cake?'}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-pink-100">
              {language === 'de'
                ? 'Kontaktieren Sie uns für eine persönliche Beratung und lassen Sie uns gemeinsam Ihren perfekten Kuchen kreieren.'
                : "Contact us for a personal consultation and let's create your perfect cake together."}
            </p>
            <motion.button
              className="rounded-xl bg-white px-8 py-4 font-bold text-pink-600 transition-colors duration-200 hover:bg-pink-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'de' ? 'Kontakt aufnehmen' : 'Contact Us'}
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
