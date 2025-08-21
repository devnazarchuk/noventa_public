'use client'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  de: {
    title: 'Mein Profil',
    subtitle: 'Verwalten Sie Ihr Profil und Ihre Aktivität',
    myReviews: 'Meine Bewertungen',
    myReviewsSubtitle: 'Meine Bewertungen ansehen und bearbeiten',
    myComments: 'Meine Kommentare',
    commentsHistory: 'Kommentarverlauf',
    settings: 'Einstellungen',
    securityPrivacy: 'Sicherheit und Datenschutz',
    activityStatistics: 'Aktivitätsstatistiken',
    reviews: 'Bewertungen',
    comments: 'Kommentare',
    likes: 'Likes',
    daysInSystem: 'Tage im System',
  },
  en: {
    title: 'My profile',
    subtitle: 'Manage your profile and activity',
    myReviews: 'My reviews',
    myReviewsSubtitle: 'Look at my reviews and edit them',
    myComments: 'My comments',
    commentsHistory: 'History of comments',
    settings: 'Settings',
    securityPrivacy: 'Security and privacy',
    activityStatistics: 'Activity statistics',
    reviews: 'Reviews',
    comments: 'Comments',
    likes: 'Likes',
    daysInSystem: 'Days in system',
  },
}

export function ProfileTranslations() {
  const { language } = useLanguageStore()
  const t = translations[language]

  return {
    Title: () => <>{t.title}</>,
    Subtitle: () => <>{t.subtitle}</>,
    MyReviews: () => <>{t.myReviews}</>,
    MyReviewsSubtitle: () => <>{t.myReviewsSubtitle}</>,
    MyComments: () => <>{t.myComments}</>,
    CommentsHistory: () => <>{t.commentsHistory}</>,
    Settings: () => <>{t.settings}</>,
    SecurityPrivacy: () => <>{t.securityPrivacy}</>,
    ActivityStatistics: () => <>{t.activityStatistics}</>,
    Reviews: () => <>{t.reviews}</>,
    Comments: () => <>{t.comments}</>,
    Likes: () => <>{t.likes}</>,
    DaysInSystem: () => <>{t.daysInSystem}</>,
  }
} 