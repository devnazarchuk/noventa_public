'use client'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  de: {
    title: 'Meine Bewertungen',
    subtitle: 'Verwalten Sie Ihre Bewertungen und Kommentare',
    writeReview: 'Bewertung schreiben',
    shareExperience: 'Teilen Sie Ihre Erfahrung',
    create: 'Erstellen',
    allReviews: 'Alle Bewertungen',
    lookAtAllReviews: 'Alle Bewertungen ansehen',
    myComments: 'Meine Kommentare',
    commentsHistory: 'Kommentarverlauf',
  },
  en: {
    title: 'My reviews',
    subtitle: 'Manage your reviews and comments',
    writeReview: 'Write a review',
    shareExperience: 'Share your experience',
    create: 'Create',
    allReviews: 'All reviews',
    lookAtAllReviews: 'Look at all reviews',
    myComments: 'My comments',
    commentsHistory: 'History of comments',
  },
}

export function MyReviewsTranslations() {
  const { language } = useLanguageStore()
  const t = translations[language]

  return {
    Title: () => <>{t.title}</>,
    Subtitle: () => <>{t.subtitle}</>,
    WriteReview: () => <>{t.writeReview}</>,
    ShareExperience: () => <>{t.shareExperience}</>,
    Create: () => <>{t.create}</>,
    AllReviews: () => <>{t.allReviews}</>,
    LookAtAllReviews: () => <>{t.lookAtAllReviews}</>,
    MyComments: () => <>{t.myComments}</>,
    CommentsHistory: () => <>{t.commentsHistory}</>,
  }
} 