'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  FaArrowLeft,
  FaCar,
  FaClock,
  FaDirections,
  FaList,
  FaLocationArrow,
  FaMap,
  FaPhone,
  FaSearch,
  FaStar,
} from 'react-icons/fa'
import { GiSlicedBread } from 'react-icons/gi'

import { useLanguageStore } from '@/app/store/languageStore'

import { storesTranslations } from '../stores-translations'

const MapClient = dynamic(() => import('../MapClient'), { ssr: false })

export default function StoreLocatorPage() {
  const { language } = useLanguageStore()
  const t = storesTranslations[language]
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map')
  const [visibleStores, setVisibleStores] = useState(10)
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
    setVisibleStores(10)
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
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 font-[SF_Pro_Display,SF_Pro_Icons,Helvetica_Neue,Helvetica,Arial,sans-serif] transition-colors duration-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      {}
      <div className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-700 dark:bg-neutral-900/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/stores"
              className="flex items-center gap-3 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              <FaArrowLeft className="h-4 w-4" />
              <span className="font-medium">
                {language === 'de' ? 'Zurück zu Filialen' : 'Back to Stores'}
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <GiSlicedBread className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
                {language === 'de' ? 'Filialfinder' : 'Store Locator'}
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {filteredStores.length} {language === 'de' ? 'Standorte' : 'locations'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
          </div>
        </div>
      </div>

      {}
      <div className="container mx-auto px-4 pt-12 pb-8">
        {viewMode === 'map' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="h-[calc(100vh-200px)] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
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
                  features: store.features,
                }))}
              userLocation={userLocation}
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="mb-10 flex items-center justify-between">
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
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredStores.slice(0, visibleStores).map((store, idx) => (
                  <motion.div
                    key={store.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group cursor-pointer rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
                  >
                    <div className="mb-3 flex items-start justify-between">
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
                      </div>

                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>

                    <div className="mb-3 flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
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
                      <div className="mb-3 flex flex-wrap gap-1">
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

                    <div className="flex gap-2">
                      {store.phone && (
                        <a
                          href={`tel:${store.phone}`}
                          className="flex items-center gap-1 rounded-lg bg-orange-500 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-orange-600"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaPhone className="h-3 w-3" />
                          {language === 'de' ? 'Anrufen' : 'Call'}
                        </a>
                      )}

                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${store.coordinates[0]},${store.coordinates[1]}`}
                        target="_blank"
                        rel="noopener"
                        className="flex items-center gap-1 rounded-lg bg-blue-500 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-600"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaDirections className="h-3 w-3" />
                        {language === 'de' ? 'Route' : 'Route'}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {}
            {visibleStores < filteredStores.length && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-center pt-12"
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
