'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cake, Heart, Leaf, Star, Wheat } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { getProductCountByCategory } from '@/app/data/products'
import { useLanguageStore } from '@/app/store/languageStore'

export default function ProductsPage() {
  const { language } = useLanguageStore()

  const productCategories = [
    {
      name: language === 'de' ? 'Brot' : 'Bread',
      nameDe: 'Brot',
      slug: 'brot',
      description: language === 'de' 
        ? 'Für einzigartiges Aroma und vollen Geschmack vereinen wir modernstes Handwerk mit bewährter Tradition. Unsere Brote reifen mit hauseigenem Sauerteig und werden auf Schamottstein gebacken - wie früher, nur noch besser.'
        : 'For unique aroma and full flavor, we combine the most modern craftsmanship with proven tradition. Our breads mature with house-made sourdough and are baked on fireclay stone - like before, only better.',
      descriptionDe: 'Für einzigartiges Aroma und vollen Geschmack vereinen wir modernstes Handwerk mit bewährter Tradition. Unsere Brote reifen mit hauseigenem Sauerteig und werden auf Schamottstein gebacken - wie früher, nur noch besser.',
      image: 'https://www.papperts.de/fileadmin/user_upload/papperts/sortiment/brote/brote_von_der_baeckerei_pappert.jpg',
      icon: Wheat,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      count: getProductCountByCategory('brot'),
      popular: true,
    },
    {
      name: language === 'de' ? 'Brötchen' : 'Rolls',
      nameDe: 'Brötchen',
      slug: 'broetchen',
      description: language === 'de'
        ? 'Von Musterland aus in deine Hand. Unsere Brötchen werden im Noventa Backhaus hergestellt und direkt in unseren Fachgeschäften frisch gebacken. Dieses Konzept sorgt bei unseren Brötchen für die bestmögliche Frische.'
        : 'From Musterland to your hand. Our rolls are made in the Noventa bakery and baked fresh directly in our specialty shops. This concept ensures the best possible freshness for our rolls.',
      descriptionDe: 'Von Musterland aus in deine Hand. Unsere Brötchen werden im Noventa Backhaus hergestellt und direkt in unseren Fachgeschäften frisch gebacken. Dieses Konzept sorgt bei unseren Brötchen für die bestmögliche Frische.',
      image: 'https://www.papperts.de/fileadmin/user_upload/papperts/sortiment/broetchen/broetchen_von_der_baeckerei_pappert.jpg',
      icon: Wheat,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      count: getProductCountByCategory('broetchen'),
      popular: true,
    },
    {
      name: language === 'de' ? 'Frühstücksgebäck' : 'Breakfast Pastries',
      nameDe: 'Frühstücksgebäck',
      slug: 'fruehstuecksgebaeck',
      description: language === 'de'
        ? 'Vom Milchhörnchen bis hin zum Rosinenbrötchen: Auch hier ist regional unser Rezept. Mehl, Milch & Co. kommen bevorzugt aus der Umgebung. Für Geschmack, den man auch in unserem Frühstücksgebäck schmeckt.'
        : 'From milk croissants to raisin rolls: Here too, regional is our recipe. Flour, milk & Co. preferably come from the surrounding area. For taste that you can also taste in our breakfast pastries.',
      descriptionDe: 'Vom Milchhörnchen bis hin zum Rosinenbrötchen: Auch hier ist regional unser Rezept. Mehl, Milch & Co. kommen bevorzugt aus der Umgebung. Für Geschmack, den man auch in unserem Frühstücksgebäck schmeckt.',
      image: 'https://www.papperts.de/fileadmin/user_upload/papperts/sortiment/gebaeck/gebaeck_von_der_baeckerei_pappert.jpg',
      icon: Star,
      color: 'from-pink-500 to-purple-500',
      bgColor: 'from-pink-50 to-purple-50',
      count: getProductCountByCategory('fruehstuecksgebaeck'),
      popular: false,
    },
    {
      name: language === 'de' ? 'Feingebäck' : 'Fine Pastries',
      nameDe: 'Feingebäck',
      slug: 'feingebaeck',
      description: language === 'de'
        ? 'Fruchtig, nussig oder cremig! Unser Feingebäck bei Noventa verbindet zarten Teig mit feinen Füllungen, die auch je nach Saison überraschen. Die süßen Teilchen schmecken zu jedem Moment: morgens, mittags und am Nachmittag.'
        : 'Fruity, nutty or creamy! Our fine pastries at Noventa combine delicate dough with fine fillings that also surprise depending on the season. The sweet treats taste good at any moment: morning, noon and afternoon.',
      descriptionDe: 'Fruchtig, nussig oder cremig! Unser Feingebäck bei Noventa verbindet zarten Teig mit feinen Füllungen, die auch je nach Saison überraschen. Die süßen Teilchen schmecken zu jedem Moment: morgens, mittags und am Nachmittag.',
      image: 'https://www.papperts.de/fileadmin/user_upload/papperts/sortiment/fruehstuecksgebaeck/waehle-jetzt-dein-feingebaeck-bei-der-baeckerei-pappert.jpg',
      icon: Cake,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      count: getProductCountByCategory('feingebaeck'),
      popular: false,
    },
    {
      name: language === 'de' ? 'Snack' : 'Snacks',
      nameDe: 'Snack',
      slug: 'snack',
      description: language === 'de'
        ? 'Einfach reinbeißen und genießen. Unsere Snacks machen schon beim Anschauen Lust auf mehr. Frisch belegt in unseren noventas-Fachgeschäften stillen sie jeden Hunger, wenn der Magen nach etwas Herzhaftem verlangt.'
        : 'Simply bite in and enjoy. Our snacks make you want more just by looking at them. Freshly prepared in our noventas specialty shops, they satisfy any hunger when the stomach craves something hearty.',
      descriptionDe: 'Einfach reinbeißen und genießen. Unsere Snacks machen schon beim Anschauen Lust auf mehr. Frisch belegt in unseren noventas-Fachgeschäften stillen sie jeden Hunger, wenn der Magen nach etwas Herzhaftem verlangt.',
      image: 'https://www.papperts.de/fileadmin/user_upload/papperts/sortiment/snacks/waehle-deinen-snack-bei-der-baeckerei-pappert.jpg',
      icon: Heart,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      count: getProductCountByCategory('snack'),
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-gray-50 dark:from-neutral-900 dark:to-neutral-800">
      {}
      <section className="relative my-5 overflow-hidden py-5">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-600/10 to-gray-600/10" />
        <div className="container-responsive relative py-16 sm:py-20 lg:py-24">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-100 px-4 py-2 dark:border-neutral-700/50 dark:bg-neutral-800/50"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Wheat className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {language === 'de' ? 'UNSER SORTIMENT' : 'OUR ASSORTMENT'}
              </span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white">
              {language === 'de' ? 'UNSER SORTIMENT' : 'OUR ASSORTMENT'}
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 sm:text-xl dark:text-neutral-300">
              {language === 'de'
                ? 'Entdecken Sie unsere vielfältige Auswahl an handgemachten Backwaren, von traditionellem Brot bis zu feinen Gebäckkreationen.'
                : 'Discover our diverse selection of handcrafted baked goods, from traditional bread to fine pastry creations.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span>{language === 'de' ? 'Handgemacht' : 'Handcrafted'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                <span>{language === 'de' ? 'Regional' : 'Regional'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4" />
                <span>{language === 'de' ? 'Traditionell' : 'Traditional'}</span>
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
            {productCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <motion.div
                  key={category.slug}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-neutral-800"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={language === 'de' ? category.nameDe : category.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {category.popular && (
                      <motion.div
                        className="absolute top-4 left-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-2 py-1 text-xs font-medium text-white shadow-lg">
                          <Star className="h-3 w-3" />
                          {language === 'de' ? 'Beliebt' : 'Popular'}
                        </span>
                      </motion.div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {}
                    <motion.div
                      className={`absolute top-4 right-4 rounded-full bg-gradient-to-r ${category.color} p-2 text-white shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent className="h-5 w-5" />
                    </motion.div>
                  </div>

                  {}
                  <div className="p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                        {language === 'de' ? category.nameDe : category.name}
                      </h3>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {category.count} {language === 'de' ? 'Produkte' : 'Products'}
                      </span>
                    </div>

                    <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                      {language === 'de' ? category.descriptionDe : category.description}
                    </p>

                    {}
                    <motion.div
                      className={`flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${category.color} px-4 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl cursor-pointer`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link href={`/products/${category.slug}`} className="flex items-center gap-2">
                        {language === 'de' ? 'Kategorie ansehen' : 'View Category'}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {}
      <section className="bg-gradient-to-r from-neutral-600 to-gray-600 py-16">
        <div className="container-responsive text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              {language === 'de' ? 'Bereit für köstliche Backwaren?' : 'Ready for delicious baked goods?'}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-neutral-100">
              {language === 'de'
                ? 'Besuchen Sie eine unserer Filialen oder bestellen Sie online. Frische, handgemachte Backwaren sind nur einen Klick entfernt.'
                : 'Visit one of our locations or order online. Fresh, handcrafted baked goods are just a click away.'}
            </p>
            <motion.button
              className="rounded-xl bg-white px-8 py-4 font-bold text-neutral-600 transition-colors duration-200 hover:bg-neutral-50"
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
