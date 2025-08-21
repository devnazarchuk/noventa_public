interface ProduktsetTranslations {
  de: {
    title: string
    subtitle: string
    description: string
    features: string[]
    howItWorks: string[]
    ctaButton: string
  }
  en: {
    title: string
    subtitle: string
    description: string
    features: string[]
    howItWorks: string[]
    ctaButton: string
  }
}

export const produktsetTranslations: ProduktsetTranslations = {
  de: {
    title: 'Produktset erstellen',
    subtitle: 'Individuelle Zusammenstellung für jeden Anlass',
    description:
      'Erstellen Sie Ihr persönliches Produktset aus unseren frischen Backwaren. Perfekt für Events, Geschenke oder besondere Anlässe.',
    features: [
      'Individuelle Zusammenstellung',
      'Frische Backwaren',
      'Professionelle Verpackung',
      'Flexible Größen',
      'Persönliche Beratung',
      'Lieferung möglich',
    ],
    howItWorks: [
      'Wählen Sie Ihre Lieblingsprodukte',
      'Bestimmen Sie die gewünschte Menge',
      'Wählen Sie die Verpackung',
      'Wir erstellen Ihr persönliches Set',
      'Abholung oder Lieferung',
    ],
    ctaButton: 'Jetzt Produktset erstellen',
  },
  en: {
    title: 'Create Product Set',
    subtitle: 'Individual compilation for every occasion',
    description:
      'Create your personal product set from our fresh baked goods. Perfect for events, gifts, or special occasions.',
    features: [
      'Individual compilation',
      'Fresh baked goods',
      'Professional packaging',
      'Flexible sizes',
      'Personal consultation',
      'Delivery available',
    ],
    howItWorks: [
      'Choose your favorite products',
      'Determine the desired quantity',
      'Choose the packaging',
      'We create your personal set',
      'Pickup or delivery',
    ],
    ctaButton: 'Create Product Set Now',
  },
}
