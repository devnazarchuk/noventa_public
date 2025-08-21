import type { Language } from '@/app/store/languageStore'

export interface TeamTranslations {
  title: string
  subtitle: string
  teamInAction: string
  teamVoices: string
  yourCareers: string
  sectionTitle: string
  sectionContent: string
  teamMembers: {
    name: string
    position: string
    description: string
  }[]
}

export const teamTranslations: Record<Language, TeamTranslations> = {
  de: {
    title: 'Unser Team',
    subtitle:
      'Entdecken Sie die Menschen hinter Noventa und erfahren Sie, warum sie gerne Teil unseres Teams sind.',
    teamInAction: 'Unser Team in Aktion',
    teamVoices: 'Stimmen aus unserem Team',
    yourCareers: 'Deine Berufswelten',
    sectionTitle: 'Unsere Führungskräfte',
    sectionContent:
      'Unser Team besteht aus erfahrenen Fachleuten, die ihre Leidenschaft für Qualität und Innovation in jeden Aspekt unserer Arbeit einbringen.',
    teamMembers: [
      {
        name: 'Bernd Müller',
        position: 'Geschäftsführer',
        description:
          'Mit über 20 Jahren Erfahrung in der Backbranche führt Bernd unser Unternehmen mit Leidenschaft und Vision.',
      },
      {
        name: 'Patricia Nensel',
        position: 'Personalabteilung',
        description:
          'Patricia kümmert sich um unser wertvollstes Gut - unsere Mitarbeiter. Sie sorgt dafür, dass jeder bei Noventa seine beste Leistung erbringen kann.',
      },
      {
        name: 'Manfred Mustername',
        position: 'Produktionsleiter',
        description:
          'Manfred überwacht unsere Produktionsprozesse und stellt sicher, dass jedes Produkt unseren hohen Qualitätsstandards entspricht.',
      },
    ],
  },
  en: {
    title: 'Our Team',
    subtitle: 'Meet the people behind Noventa and discover why they love being part of our team.',
    teamInAction: 'Our Team in Action',
    teamVoices: 'Voices from our Team',
    yourCareers: 'Your Career Paths',
    sectionTitle: 'Our Leadership',
    sectionContent:
      'Our team consists of experienced professionals who bring their passion for quality and innovation to every aspect of our work.',
    teamMembers: [
      {
        name: 'Bernd Müller',
        position: 'Managing Director',
        description:
          'With over 20 years of experience in the baking industry, Bernd leads our company with passion and vision.',
      },
      {
        name: 'Patricia Nensel',
        position: 'Human Resources',
        description:
          'Patricia takes care of our most valuable asset - our employees. She ensures that everyone at Noventa can perform at their best.',
      },
      {
        name: 'Manfred Mustername',
        position: 'Production Manager',
        description:
          'Manfred oversees our production processes and ensures that every product meets our high quality standards.',
      },
    ],
  },
}
