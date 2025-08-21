'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { PageWrapper } from '@/components/ui/PageWrapper'

interface Store {
  id: number
  name: string
  address: string
  city: string
  phone: string
  hours: string
  image?: string
  coordinates: {
    lat: number
    lng: number
  }
  description?: string
}

const stores: Store[] = [
  {
    id: 1,
    name: 'Bad Hersfeld, Kurpark',
    address: 'Am Kurpark 2, 36251 Bad Hersfeld',
    city: 'Bad Hersfeld',
    phone: '',
    hours: '',
    image: '/images/124_12.jpg',
    coordinates: { lat: 50.8706, lng: 9.7047 },
    description:
      'Hier gelingt der Spagat zwischen Tradition und Moderne. Am Traditionsstandort Café Bolender, haben wir ein Kaffeehaus auf zwei Etagen geschaffen, das einerseits ein klassischer Noventa ist - und gleichzeitig an die Geschichte erinnert.',
  },
  {
    id: 2,
    name: 'Kaiserwiesen',
    address: 'Keltenstraße 20/Apotheke div Gastronomie Reisebüro',
    city: 'Ganzweg',
    phone: '',
    hours: '',
    image: '/images/MG_3859.jpg',
    coordinates: { lat: 50.5558, lng: 9.6752 },
    description:
      'Im Einkaufszentrum Kaiserwiesen Ganzweg gibt es die ganze noventas-Welt an einem Ort. Neben dem Herzstück, der Bäckerei mit Café, präsentieren wir hier auch die Konzepte Rhöner Eismanufaktur, Noventa - zu Tisch und Noventa - Pizza & Pasta.',
  },
  {
    id: 3,
    name: 'Lauterbach',
    address: 'An d. Leimenkaute 1, 36341 Lauterbach (Hessen)',
    city: 'Lauterbach',
    phone: '',
    hours: '',
    image: '/images/W8C8811_klein.jpg',
    coordinates: { lat: 50.6342, lng: 9.3931 },
    description:
      'In Lauterbach haben wir ein echtes Schmuckstück unser 100. Fachgeschäft eröffnet. In einem modernen und gemütlichen Ambiente können Sie hier ihr Frühstück entspannt genießen.',
  },
  {
    id: 4,
    name: 'Schweinfurt-Hafen',
    address: 'Carl-Benz-Straße 5, 97424 Schweinfurt',
    city: 'Schweinfurt',
    phone: '',
    hours: '',
    image: '/images/AATA1360-768x1024.jpg',
    coordinates: { lat: 50.05, lng: 10.2333 },
    description:
      'Mitten im Industriegebiet von Schweinfurt-Hafen hat unser Fachgeschäft zwei gänzlich unterschiedliche Optionen: Am Drive-in geht es schnell. Innen drin haben wir ein tolles Wohnzimmer geschaffen mit einer gemütlichen Atmosphäre.',
  },
  {
    id: 5,
    name: 'Stammhaus',
    address: 'Georgstraße 15-17, 36163 Keinhausen (Wasserkuppe)',
    city: 'Keinhausen',
    phone: '',
    hours: '',
    image: '/images/Stammhaus_-4317-768x512.jpg',
    coordinates: { lat: 50.52, lng: 9.85 },
    description:
      'Hier ist der Ursprung der Bäckerei Noventa. Und deshalb ist unser Stammhaus in Keinhausen ein echtes Schmuckstück. Es besitzt einen Kamin außerdem Original-Erinnerungsstücke und eine Besonderheit auf dem WC.',
  },
  {
    id: 6,
    name: 'Vacha Café',
    address: 'Am Alten Kabelwerk 2b, 36404 Vacha',
    city: 'Vacha',
    phone: '',
    hours: '',
    image: '/images/ROBG6743-768x1024.jpg',
    coordinates: { lat: 50.8167, lng: 10.0333 },
    description:
      'Große Fenster und viel Platz - zum Sitzen, aber auch zum Sehen und Gesehen werden. Das Café in Vacha bietet in verschiedenen Sitzbereichen Möglichkeiten zum Entspannen und Genießen - zum Kaffeetrinken oder auch zum Essen.',
  },
]
export default function StoreLocatorPage({
  title = 'Unsere Filialen',
  description = '',
  heroImage = '/images/Stammhaus_-4317-768x512.jpg',
}: {
  title: string
  description: string
  heroImage: string
}) {
  return (
    <PageWrapper>
      {}
      <section className="relative mb-12 h-[40vh] w-full transition-colors duration-200">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            width={768}
            height={512}
            sizes="(max-width: 768px) 100vw, 768px"
            className="rounded-[25px] object-cover"
            priority
          />
          <div className="absolute inset-0 rounded-[25px] bg-black/40 transition-colors dark:bg-black/60" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-extrabold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-lg text-[#3A3A3A] transition-colors duration-200 dark:text-[#FFF5E1]"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {}
      <div className="px-4 transition-colors duration-200">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-[25px] bg-[#FFF6F6] shadow-[10px_10px_20px_#e4c6c6,_-10px_-10px_20px_#ffffff] transition-colors duration-200 dark:bg-[#232323] dark:shadow-[10px_10px_20px_#181818,_-10px_-10px_20px_#232323]"
            >
              {store.image && (
                <div className="relative h-48 w-full">
                  <Image
                    src={store.image}
                    alt={store.name}
                    width={400}
                    height={192}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#c60627] transition-colors duration-200 dark:text-[#EE0A24]">
                  {store.name}
                </h3>
                {store.description && (
                  <p className="mb-2 text-sm text-gray-700 transition-colors duration-200 dark:text-[#FFF5E1]">
                    {store.description}
                  </p>
                )}
                <div className="space-y-2 text-gray-600 transition-colors duration-200 dark:text-[#FFF5E1]">
                  <p>{store.address}</p>
                  <p>{store.city}</p>
                  {store.phone && <p className="font-semibold">Tel: {store.phone}</p>}
                  {store.hours && (
                    <p className="mt-4">
                      <span className="font-semibold">Opening Hours:</span>
                      <br />
                      {store.hours}
                    </p>
                  )}
                </div>
                <button
                  aria-label={`Route zu ${store.name}`}
                  className="mt-4 w-full rounded-[20px] bg-[#EE0A24] px-6 py-3 font-semibold text-white shadow-[6px_6px_12px_#e4c6c6,_-6px_-6px_12px_#ffffff] transition-all transition-colors hover:shadow-[4px_4px_8px_#e4c6c6,_-4px_-4px_8px_#ffffff] dark:bg-[#EE0A24] dark:text-white dark:shadow-[6px_6c_12px_#181818,_-6px_-6px_12px_#232323] dark:hover:bg-[#FF3B59] dark:hover:shadow-[4px_4px_8px_#181818,_-4px_-4px_8px_#232323]"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/search/?api=1&query=${store.coordinates.lat},${store.coordinates.lng}`,
                      '_blank',
                    )
                  }
                >
                  Get Directions
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}
