interface KundenkarteTranslations {
  de: {
    title: string
    subtitle: string
    description: string
    benefits: string[]
    howToGet: string
    howToUse: string
    ctaButton: string
  }
  en: {
    title: string
    subtitle: string
    description: string
    benefits: string[]
    howToGet: string
    howToUse: string
    ctaButton: string
  }
}

export const kundenkarteTranslations: KundenkarteTranslations = {
  de: {
    title: 'Noventas Kundenkarte',
    subtitle: 'Sammle Punkte und spare bei jedem Einkauf',
    description:
      'Mit der Noventas Kundenkarte sammelst du bei jedem Einkauf wertvolle Punkte, die du gegen attraktive Rabatte und exklusive Angebote einlösen kannst.',
    benefits: [
      'Punkte bei jedem Einkauf sammeln',
      'Attraktive Rabatte einlösen',
      'Exklusive Angebote erhalten',
      'Geburtstagsgutscheine',
      'Früher Zugang zu Aktionen',
      'Persönliche Beratung',
    ],
    howToGet: 'Kostenlos in jeder Filiale erhältlich - einfach nach der Kundenkarte fragen!',
    howToUse:
      'Bei jedem Einkauf vorzeigen und Punkte sammeln. Ab 100 Punkten kannst du Rabatte einlösen.',
    ctaButton: 'Jetzt Kundenkarte holen',
  },
  en: {
    title: 'Noventas Customer Card',
    subtitle: 'Collect points and save on every purchase',
    description:
      'With the Noventas customer card, you collect valuable points with every purchase that you can redeem for attractive discounts and exclusive offers.',
    benefits: [
      'Collect points with every purchase',
      'Redeem attractive discounts',
      'Receive exclusive offers',
      'Birthday vouchers',
      'Early access to promotions',
      'Personal consultation',
    ],
    howToGet: 'Available free of charge in every branch - simply ask for the customer card!',
    howToUse:
      'Present at every purchase and collect points. From 100 points you can redeem discounts.',
    ctaButton: 'Get Customer Card Now',
  },
}
