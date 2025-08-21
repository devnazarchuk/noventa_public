'use client'

import { formatDistanceToNow } from 'date-fns'
import { de, enUS } from 'date-fns/locale'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  de: {
    verified: 'Verifiziert',
    memberSince: 'Mitglied seit',
    reviews: 'Bewertungen',
    average: 'Durchschnitt',
    likes: 'Likes',
    dislikes: 'Dislikes',
    reviewsBy: 'Bewertungen von',
  },
  en: {
    verified: 'Verified',
    memberSince: 'Member since',
    reviews: 'Reviews',
    average: 'Average',
    likes: 'Likes',
    dislikes: 'Dislikes',
    reviewsBy: 'Reviews by',
  },
}

export function Verified() {
  const { language } = useLanguageStore()
  return <>{translations[language].verified}</>
}

export function MemberSince() {
  const { language } = useLanguageStore()
  return <>{translations[language].memberSince}</>
}

export function Reviews() {
  const { language } = useLanguageStore()
  return <>{translations[language].reviews}</>
}

export function Average() {
  const { language } = useLanguageStore()
  return <>{translations[language].average}</>
}

export function Likes() {
  const { language } = useLanguageStore()
  return <>{translations[language].likes}</>
}

export function Dislikes() {
  const { language } = useLanguageStore()
  return <>{translations[language].dislikes}</>
}

export function ReviewsBy() {
  const { language } = useLanguageStore()
  return <>{translations[language].reviewsBy}</>
}

export function DateFormatter({ date }: { date: string }) {
  const { language } = useLanguageStore()
  const locale = language === 'de' ? de : enUS
  return <>{formatDistanceToNow(new Date(date), { addSuffix: true, locale })}</>
} 