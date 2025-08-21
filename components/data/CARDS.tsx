import {
  Briefcase,
  CreditCard,
  Dumbbell,
  Gift,
  Mail,
  MapPin,
  Megaphone,
  ShoppingBag,
  Users,
} from 'lucide-react'
import React from 'react'

import { homeTranslations } from '@/app/languages'
import { useLanguageStore } from '@/app/store/languageStore'

// Card roles
export type Role = 'Customer' | 'Employee' | 'All' | 'Categories'

// Card item type
export interface CardItem {
  id: string
  title: string
  description: string
  role: Role
  icon?: () => React.ReactElement
  image?: string
}

// Static card data for homepage role selector
export const CARDS: CardItem[] = [
  {
    id: 'produkte',
    title: 'Produkte',
    description: 'Entdecke unser vielfältiges Sortiment an Brot, Brötchen, Feingebäck, etc.',
    role: 'Customer',
  },
  {
    id: 'ueber-uns',
    title: 'Über uns',
    description: 'Unsere Geschichte, Werte, Marken und Nachhaltigkeit.',
    role: 'All',
  },
  {
    id: 'fitnessbaecker',
    title: 'FitnessBäcker',
    description: 'Erlebe unser Fitness-Programm, Events und gesunde Backwaren.',
    role: 'All',
  },
  {
    id: 'karriere',
    title: 'Karriere',
    description: 'Werde Teil unseres Teams – entdecke offene Stellen und Ausbildung.',
    role: 'Employee',
  },
  {
    id: 'services',
    title: 'Services',
    description: 'Kundenkarte, App, NoventaPlus und mehr Vorteile für dich.',
    role: 'Customer',
  },
  {
    id: 'filialfinder',
    title: 'Filialfinder',
    description: 'Finde eine Noventas-Filiale in deiner Nähe.',
    role: 'Customer',
  },
  {
    id: 'coupons-aktionen',
    title: 'Coupons Aktionen',
    description: 'Sichere dir aktuelle Rabatte und Gutscheine.',
    role: 'Customer',
  },
  {
    id: 'news-presse',
    title: 'News Presse',
    description: 'Bleibe auf dem Laufenden mit Neuigkeiten und Presse.',
    role: 'All',
  },
  {
    id: 'kontakt-clubs',
    title: 'Kontakt Clubs',
    description: 'Nimm Kontakt auf oder entdecke unsere Vereinsangebote.',
    role: 'All',
  },
]

// CTA cards for homepage highlights (used in CTAGrid and other places)
export function useCTACards() {
  const { language } = useLanguageStore()
  const t = homeTranslations[language].cards

  return [
    {
      title: t.products.title,
      description: t.products.description,
      href: '/products',
      icon: () => <ShoppingBag size={40} className="text-[#D72638]" />,
    },
    {
      title: t.about.title,
      description: t.about.description,
      href: '/about',
      icon: () => <Users size={40} className="text-[#D72638]" />,
    },
    {
      title: t.fitnessBaker.title,
      description: t.fitnessBaker.description,
      href: '/fitness-baker',
      icon: () => <Dumbbell size={40} className="text-[#D72638]" />,
    },
    {
      title: t.career.title,
      description: t.career.description,
      href: '/careers',
      icon: () => <Briefcase size={40} className="text-[#D72638]" />,
    },
    {
      title: t.services.title,
      description: t.services.description,
      href: '/services',
      icon: () => <CreditCard size={40} className="text-[#D72638]" />,
    },
    {
      title: t.storeLocator.title,
      description: t.storeLocator.description,
      href: '/stores/locator',
      icon: () => <MapPin size={40} className="text-[#D72638]" />,
    },
    {
      title: t.coupons.title,
      description: t.coupons.description,
      href: '/services/gutscheine',
      icon: () => <Gift size={40} className="text-[#D72638]" />,
    },
    {
      title: t.news.title,
      description: t.news.description,
      href: '/about/press',
      icon: () => <Megaphone size={40} className="text-[#D72638]" />,
    },
    {
      title: t.contact.title,
      description: t.contact.description,
      href: '/contact',
      icon: () => <Mail size={40} className="text-[#D72638]" />,
    },
  ]
}

// Role-specific cards for the slider
export const ROLE_CARDS = {
  Customer: [
    {
      id: 'products',
      title: 'Produkte',
      description: 'Entdecke unser vielfältiges Sortiment',
      role: 'Customer',
      icon: () => <ShoppingBag className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/customer.jpg',
    },
    {
      id: 'services',
      title: 'Services',
      description: 'Kundenkarte, App und mehr Vorteile',
      role: 'Customer',
      icon: () => <CreditCard className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/services.jpg',
    },
    {
      id: 'locations',
      title: 'Filialfinder',
      description: 'Finde eine Filiale in deiner Nähe',
      role: 'Customer',
      icon: () => <MapPin className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/locations.jpg',
    },
  ],
  Employee: [
    {
      id: 'career',
      title: 'Karriere',
      description: 'Werde Teil unseres Teams',
      role: 'Employee',
      icon: () => <Briefcase className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/job-chef.jpg',
    },
    {
      id: 'training',
      title: 'Ausbildung',
      description: 'Entdecke unsere Ausbildungsmöglichkeiten',
      role: 'Employee',
      icon: () => <Users className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/training.jpg',
    },
    {
      id: 'benefits',
      title: 'Vorteile',
      description: 'Deine Vorteile als Mitarbeiter',
      role: 'Employee',
      icon: () => <Gift className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/benefits.jpg',
    },
  ],
  Categories: [
    {
      id: 'bread',
      title: 'Brot',
      description: 'Unsere Brotspezialitäten',
      role: 'Categories',
      icon: () => <ShoppingBag className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/bread.jpg',
    },
    {
      id: 'pastries',
      title: 'Feingebäck',
      description: 'Süße und herzhafte Backwaren',
      role: 'Categories',
      icon: () => <Gift className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/pastries.jpg',
    },
    {
      id: 'specialties',
      title: 'Spezialitäten',
      description: 'Unsere besonderen Kreationen',
      role: 'Categories',
      icon: () => <Megaphone className="h-8 w-8 text-white" />,
      bgImage: '/soft-images/specialties.jpg',
    },
  ],
}
