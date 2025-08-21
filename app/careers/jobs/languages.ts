import type { Language } from '@/app/store/languageStore'

export interface JobsTranslations {
  title: string
  subtitle: string
  applyNow: string
  initiativeTitle: string
  initiativeDesc: string
  expressApply: string
}

export const jobsTranslations: Record<Language, JobsTranslations> = {
  de: {
    title: 'Offene Stellen',
    subtitle: 'Entdecke unsere aktuellen Jobangebote und werde Teil des Noventa-Teams!',
    applyNow: 'Jetzt bewerben',
    initiativeTitle: 'Initiativbewerbung',
    initiativeDesc:
      'Keine passende Stelle gefunden? Bewirb dich initiativ – wir freuen uns auf dich!',
    expressApply: 'Express bewerben',
  },
  en: {
    title: 'Open Positions',
    subtitle: 'Discover our current job openings and become part of the Noventa team!',
    applyNow: 'Apply now',
    initiativeTitle: 'Initiative Application',
    initiativeDesc:
      'No suitable position found? Apply on your own initiative – we look forward to meeting you!',
    expressApply: 'Express apply',
  },
}

export const jobCards = [
  {
    title: {
      de: 'Personalsachbearbeiter (m/w/d)',
      en: 'HR Administrator (m/f/d)',
    },
    img: '/soft-images/job-hr.jpg',
    desc: {
      de: 'Verstärke unser HR-Team und betreue unsere Mitarbeitenden mit Herz und Organisationstalent.',
      en: 'Join our HR team and support our employees with heart and organizational talent.',
    },
  },
  {
    title: {
      de: 'Immobilienkaufmann (m/w/d)',
      en: 'Real Estate Agent (m/f/d)',
    },
    img: '/soft-images/job-immobilen.jpg',
    desc: {
      de: 'Verwalte und entwickle unsere Immobilienprojekte mit Weitblick und Engagement.',
      en: 'Manage and develop our real estate projects with foresight and commitment.',
    },
  },
  {
    title: {
      de: 'Produktionshelfer (m/w/d)',
      en: 'Production Assistant (m/f/d)',
    },
    img: '/soft-images/job-products.jpg',
    desc: {
      de: 'Unterstütze unser Produktionsteam bei der Herstellung unserer Backwaren.',
      en: 'Support our production team in the manufacturing of our baked goods.',
    },
  },
  {
    title: {
      de: 'Bäckereiverkäufer (m/w/d)',
      en: 'Bakery Salesperson (m/f/d)',
    },
    img: '/soft-images/job-saler.jpg',
    desc: {
      de: 'Berate unsere Kunden freundlich und verkaufe unsere Backwaren.',
      en: 'Advise our customers friendly and sell our baked goods.',
    },
  },
  {
    title: {
      de: 'Fachkraft für Lagerlogistik (m/w/d)',
      en: 'Warehouse Logistics Specialist (m/f/d)',
    },
    img: '/soft-images/job-logistik.jpg',
    desc: {
      de: 'Sorge für einen reibungslosen Ablauf im Lager.',
      en: 'Ensure smooth operations in the warehouse.',
    },
  },
  {
    title: {
      de: 'Reinigungskraft (m/w/d)',
      en: 'Cleaning Staff (m/f/d)',
    },
    img: '/soft-images/job-clear.jpg',
    desc: {
      de: 'Halte unsere Filialen und Produktionsstätten sauber und ordentlich.',
      en: 'Keep our branches and production facilities clean and tidy.',
    },
  },
  {
    title: {
      de: 'Anlagen- und Maschinenführer (m/w/d)',
      en: 'Plant and Machine Operator (m/f/d)',
    },
    img: '/soft-images/job-mechaniker.jpg',
    desc: {
      de: 'Bediene und überwache unsere modernen Produktionsanlagen.',
      en: 'Operate and monitor our modern production facilities.',
    },
  },
  {
    title: {
      de: 'Mitarbeiter Personalentwicklung (m/w/d)',
      en: 'HR Development Staff (m/f/d)',
    },
    img: '/soft-images/job-hr-dev.jpg',
    desc: {
      de: 'Gestalte die Entwicklung unserer Mitarbeitenden aktiv mit.',
      en: 'Actively shape the development of our employees.',
    },
  },
  {
    title: {
      de: 'Teamleiter (m/w/d)',
      en: 'Team Leader (m/f/d)',
    },
    img: '/soft-images/job-chef.jpg',
    desc: {
      de: 'Führe ein Team mit Leidenschaft und Verantwortungsbewusstsein.',
      en: 'Lead a team with passion and responsibility.',
    },
  },
  {
    title: {
      de: 'Reinigungsfachkraft (m/w/d)',
      en: 'Cleaning Specialist (m/f/d)',
    },
    img: '/soft-images/job-clearn.jpg',
    desc: {
      de: 'Sorge für Sauberkeit und Hygiene in unseren Betrieben.',
      en: 'Ensure cleanliness and hygiene in our facilities.',
    },
  },
]
