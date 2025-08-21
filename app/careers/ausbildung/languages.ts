import type { Language } from '@/app/store/languageStore'

export interface AusbildungTranslations {
  title: string
  subtitle: string
  applyNow: string
  initiativeTitle: string
  initiativeDesc: string
  expressApply: string
}

export const ausbildungTranslations: Record<Language, AusbildungTranslations> = {
  de: {
    title: 'Ausbildung & Praktikum',
    subtitle:
      'Starte deine Karriere bei Noventa mit einer Ausbildung oder einem Praktikum. Wir begleiten dich auf deinem Weg ins Berufsleben!',
    applyNow: 'Jetzt bewerben',
    initiativeTitle: 'Initiativbewerbung',
    initiativeDesc:
      'Du findest keine passende Ausbildungsstelle? Bewirb dich initiativ – wir freuen uns auf dich!',
    expressApply: 'Express bewerben',
  },
  en: {
    title: 'Training & Internship',
    subtitle:
      "Start your career at Noventa with training or an internship. We'll guide you on your path to professional life!",
    applyNow: 'Apply now',
    initiativeTitle: 'Initiative Application',
    initiativeDesc:
      "Can't find a suitable training position? Apply on your own initiative – we look forward to meeting you!",
    expressApply: 'Express apply',
  },
}

export const ausbildungJobs = [
  {
    title: {
      de: 'Ausbildung Konditor (m/w/d)',
      en: 'Pastry Chef Training (m/f/d)',
    },
    location: '01234 Musterland',
    img: '/soft-images/job-kondi.jpg',
  },
  {
    title: {
      de: 'Ausbildung Fachkraft für Lagerlogistik (m/w/d)',
      en: 'Warehouse Logistics Specialist Training (m/f/d)',
    },
    location: '01234 Musterland',
    img: '/soft-images/job-lager.jpg',
  },
  {
    title: {
      de: 'Ausbildung Bäcker (m/w/d)',
      en: 'Baker Training (m/f/d)',
    },
    location: '01234 Musterland',
    img: '/soft-images/job-aus-backer.jpg',
  },
  {
    title: {
      de: 'Ausbildung Fachverkäufer (m/w/d) im Lebensmittelhandwerk',
      en: 'Food Retail Specialist Training (m/f/d)',
    },
    location: '63450 Hanau',
    img: '/soft-images/job-fach-sales.jpg',
  },
  {
    title: {
      de: 'Ausbildung Gebäudereiniger (m/w/d)',
      en: 'Building Cleaner Training (m/f/d)',
    },
    location: '01234 Musterland',
    img: '/soft-images/job-clear.jpg',
  },
]
