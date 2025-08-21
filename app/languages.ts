import { Language } from '@/app/store/languageStore'

interface CardTranslation {
  title: string
  description: string
}

interface HomeTranslations {
  highlights: string
  brands: {
    title: string
    subtitle: string
  }
  cards: {
    products: CardTranslation
    about: CardTranslation
    fitnessBaker: CardTranslation
    career: CardTranslation
    services: CardTranslation
    storeLocator: CardTranslation
    coupons: CardTranslation
    news: CardTranslation
    contact: CardTranslation
  }
}

export const homeTranslations: Record<Language, HomeTranslations> = {
  de: {
    highlights: 'Direkt zu unseren Highlights',
    brands: {
      title: 'UNSERE MARKEN',
      subtitle: 'UNSERE VIELFALT',
    },
    cards: {
      products: {
        title: 'Produkte',
        description:
          'Entdecke unser vielfältiges Sortiment an Brot, Brötchen, Feingebäck, Kaffee und mehr.',
      },
      about: {
        title: 'Über uns',
        description: 'Unsere Geschichte, Werte, Marken und Nachhaltigkeit.',
      },
      fitnessBaker: {
        title: 'FitnessBäcker',
        description: 'Erlebe unser Fitness-Programm, Events und gesunde Backwaren für Aktive.',
      },
      career: {
        title: 'Karriere',
        description: 'Werde Teil unseres Teams – entdecke offene Stellen und Ausbildung.',
      },
      services: {
        title: 'Services',
        description: 'Kundenkarte, App, NoventaPlus und mehr Vorteile für dich.',
      },
      storeLocator: {
        title: 'Filialfinder',
        description:
          'Finde eine Noventas-Filiale in deiner Nähe und entdecke unsere Angebote vor Ort.',
      },
      coupons: {
        title: 'Coupons Aktionen',
        description: 'Sichere dir aktuelle Rabatte und Gutscheine für deinen Einkauf.',
      },
      news: {
        title: 'News Presse',
        description: 'Bleibe auf dem Laufenden mit unseren Neuigkeiten und Pressemitteilungen.',
      },
      contact: {
        title: 'Kontakt',
        description: 'Nimm Kontakt auf oder entdecke unsere Vereinsangebote.',
      },
    },
  },
  en: {
    highlights: 'Direct to our Highlights',
    brands: {
      title: 'OUR BRANDS',
      subtitle: 'OUR DIVERSITY',
    },
    cards: {
      products: {
        title: 'Products',
        description: 'Discover our diverse range of bread, rolls, pastries, coffee, and more.',
      },
      about: {
        title: 'About Us',
        description: 'Our history, values, brands, and sustainability.',
      },
      fitnessBaker: {
        title: 'Fitness Baker',
        description:
          'Experience our fitness program, events, and healthy baked goods for active people.',
      },
      career: {
        title: 'Career',
        description: 'Join our team – discover open positions and training opportunities.',
      },
      services: {
        title: 'Services',
        description: 'Customer card, app, NoventaPlus, and more benefits for you.',
      },
      storeLocator: {
        title: 'Store Locator',
        description: 'Find a Noventas store near you and discover our local offerings.',
      },
      coupons: {
        title: 'Coupons Promotions',
        description: 'Secure current discounts and vouchers for your purchase.',
      },
      news: {
        title: 'News Press',
        description: 'Stay up to date with our news and press releases.',
      },
      contact: {
        title: 'Contact',
        description: 'Get in touch or discover our club offerings.',
      },
    },
  },
}
