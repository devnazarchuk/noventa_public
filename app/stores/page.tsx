'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaCar,
  FaClock,
  FaFilter,
  FaList,
  FaLocationArrow,
  FaMap,
  FaMapMarkerAlt,
  FaPhone,
  FaSearch,
  FaStar,
} from 'react-icons/fa'
import { GiSlicedBread } from 'react-icons/gi'

import { useLanguageStore } from '@/app/store/languageStore'

import { storesTranslations } from './stores-translations'

const MapClient = dynamic(() => import('./MapClient'), { ssr: false })

export default function StoresPage() {
  const { language } = useLanguageStore()
  const t = storesTranslations[language]
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [visibleStores, setVisibleStores] = useState(3)
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null)
  const [searchQuery, setSearchQuery] = useState('')


  const filteredStores = t.stores.filter((store) => {
    if (!searchQuery) return true
    const query = searchQuery.toLowerCase()
    return (
      store.name.toLowerCase().includes(query) ||
      store.address.toLowerCase().includes(query) ||
      store.description.toLowerCase().includes(query)
    )
  })


  useEffect(() => {
    setVisibleStores(3)
  }, [searchQuery])

  const handleLoadMore = () => {
    setVisibleStores((prev) => Math.min(prev + 10, filteredStores.length))
  }

  const handleMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation([latitude, longitude])
        },
        (error) => {
          console.error('Error getting location:', error)
          alert(
            language === 'de'
              ? 'Standort konnte nicht ermittelt werden'
              : 'Could not get your location',
          )
        },
      )
    } else {
      alert(
        language === 'de' ? 'Geolocation wird nicht unterstützt' : 'Geolocation is not supported',
      )
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 py-6 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] transition-colors duration-200 md:py-12 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="relative">
              <GiSlicedBread className="h-16 w-16 text-orange-600 drop-shadow-lg md:h-20 md:w-20 dark:text-orange-400" />
              <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                {filteredStores.length}
              </div>
            </div>
          </motion.div>

          <h1 className="mb-4 text-4xl font-bold text-neutral-900 md:text-5xl lg:text-6xl dark:text-white">
            {t.title}
          </h1>

          <p className="mb-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300">
            {t.description}
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="h-4 w-4 text-orange-500" />
              <span>{language === 'de' ? 'Über 160 Filialen' : 'Over 160 stores'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="h-4 w-4 text-orange-500" />
              <span>{language === 'de' ? 'Frische Backwaren' : 'Fresh baked goods'}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCar className="h-4 w-4 text-orange-500" />
              <span>{language === 'de' ? 'Kostenlose Parkplätze' : 'Free parking'}</span>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {}
            <div className="flex rounded-xl border border-neutral-200 bg-white p-1 shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  viewMode === 'map'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <FaMap className="h-4 w-4" />
                {language === 'de' ? 'Karte' : 'Map'}
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  viewMode === 'list'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
                }`}
              >
                <FaList className="h-4 w-4" />
                {language === 'de' ? 'Liste' : 'List'}
              </button>
            </div>

            {}
            <div className="flex gap-3">
              <div className="relative max-w-md flex-1">
                <FaSearch className="absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    language === 'de'
                      ? 'Nach Stadt oder PLZ suchen...'
                      : 'Search by city or postal code...'
                  }
                  className="w-full rounded-xl border border-neutral-200 bg-white px-12 py-3 text-neutral-900 placeholder-neutral-500 shadow-sm transition-all focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    ×
                  </button>
                )}
              </div>

              <button
                onClick={handleMyLocation}
                className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
              >
                <FaLocationArrow className="h-4 w-4" />
                {language === 'de' ? 'Meine Position' : 'My Location'}
              </button>

              <button className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-orange-500 hover:text-orange-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-orange-500 dark:hover:text-orange-400">
                <FaFilter className="h-4 w-4" />
                {language === 'de' ? 'Filter' : 'Filter'}
              </button>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <Link href="/stores/locator">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transition-transform group-hover:scale-110">
                  <FaMapMarkerAlt className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {language === 'de' ? 'Filialfinder' : 'Store Locator'}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    {language === 'de'
                      ? 'Finde die nächste Filiale in deiner Nähe mit detaillierten Informationen'
                      : 'Find the nearest store in your area with detailed information'}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>

          <Link href="/stores/contact">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-lg transition-all hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transition-transform group-hover:scale-110">
                  <FaPhone className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {language === 'de' ? 'Kontakt' : 'Contact'}
                  </h3>
                  <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                    {language === 'de'
                      ? 'Kontaktiere uns für Fragen, Feedback und individuelle Beratung'
                      : 'Contact us for questions, feedback and individual consultation'}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {}
        {viewMode === 'map' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="h-[600px] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
          >
            <MapClient
              storeLocations={filteredStores
                .filter(
                  (store) =>
                    Array.isArray(store.coordinates) &&
                    store.coordinates.length === 2 &&
                    typeof store.coordinates[0] === 'number' &&
                    typeof store.coordinates[1] === 'number' &&
                    !isNaN(store.coordinates[0]) &&
                    !isNaN(store.coordinates[1]),
                )
                .map((store, index) => ({
                  id: index + 1,
                  name: store.name,
                  address: store.address,
                  coordinates: { lat: store.coordinates[0], lng: store.coordinates[1] },
                  description: store.description,
                  phone: store.phone,
                  hours: store.hours,
                  rating: store.rating,
                }))}
              userLocation={userLocation}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {language === 'de' ? 'Filialen' : 'Stores'}
              </h2>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                {visibleStores} / {filteredStores.length}{' '}
                {language === 'de' ? 'Standorte' : 'locations'}
              </span>
            </div>

            {filteredStores.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-neutral-500 dark:text-neutral-400">
                  {language === 'de' ? 'Keine Filialen gefunden' : 'No stores found'}
                </p>
              </div>
            ) : (
              filteredStores.slice(0, visibleStores).map((store, idx) => (
                <motion.div
                  key={store.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                          {store.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <FaStar className="h-3 w-3 text-yellow-400" />
                          <span className="text-xs text-neutral-500 dark:text-neutral-400">
                            {store.rating || 4.8}
                          </span>
                        </div>
                      </div>

                      <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-300">
                        {store.address}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                        <div className="flex items-center gap-1">
                          <FaClock className="h-3 w-3" />
                          <span>{store.hours || (language === 'de' ? 'Geöffnet' : 'Open')}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaCar className="h-3 w-3" />
                          <span>{language === 'de' ? 'Parkplatz' : 'Parking'}</span>
                        </div>
                      </div>

                      {store.features && store.features.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {store.features.slice(0, 2).map((feature, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}

                      {store.description && (
                        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                          {store.description}
                        </p>
                      )}
                    </div>

                    <div className="ml-4 flex flex-col items-end gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <button className="rounded-lg bg-orange-500 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
                        {language === 'de' ? 'Route' : 'Route'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}

            {}
            {visibleStores < filteredStores.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center pt-6"
              >
                <button
                  onClick={handleLoadMore}
                  className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
                >
                  {language === 'de' ? `+10 weitere anzeigen` : `+10 more stores`}
                </button>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </main>
  )
}
