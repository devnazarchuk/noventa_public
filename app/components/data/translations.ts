import type { Language } from '@/app/store/languageStore'

export interface RoleCardTranslations {
  title: string
  description: string
  button: string
}

export interface RoleTranslations {
  [key: string]: RoleCardTranslations
}

export const roleTranslations: Record<Language, RoleTranslations> = {
  de: {
    Customer: {
      title: 'Kunde',
      description: 'Entdecken Sie unsere Produkte und Dienstleistungen.',
      button: 'Mehr erfahren',
    },
    Categories: {
      title: 'Kategorien',
      description: 'Entdecken Sie unsere verschiedenen Berufsfelder.',
      button: 'Mehr erfahren',
    },
    Employee: {
      title: 'Mitarbeiter',
      description: 'Werden Sie Teil unseres Teams.',
      button: 'Mehr erfahren',
    },
  },
  en: {
    Customer: {
      title: 'Customer',
      description: 'Discover our products and services.',
      button: 'Learn more',
    },
    Categories: {
      title: 'Categories',
      description: 'Discover our various career fields.',
      button: 'Learn more',
    },
    Employee: {
      title: 'Employee',
      description: 'Join our team.',
      button: 'Learn more',
    },
  },
}
