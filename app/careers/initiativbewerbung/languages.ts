import type { Language } from '@/app/store/languageStore'

export interface InitiativbewerbungTranslations {
  title: string
  subtitle: string
  description: string
  formTitle: string
  formSubtitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  positionLabel: string
  positionPlaceholder: string
  experienceLabel: string
  experiencePlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  cvLabel: string
  cvButton: string
  submitButton: string
  successMessage: string
  errorMessage: string
}

export const initiativbewerbungTranslations: Record<Language, InitiativbewerbungTranslations> = {
  de: {
    title: 'Initiativbewerbung',
    subtitle: 'Keine passende Stelle gefunden? Bewirb dich initiativ!',
    description:
      'Wir freuen uns über jede Initiativbewerbung! Auch wenn aktuell keine passende Stelle ausgeschrieben ist, können wir dein Profil in unserem Talentpool speichern.',
    formTitle: 'Bewerbungsformular',
    formSubtitle: 'Fülle das Formular aus und wir melden uns bei dir.',
    nameLabel: 'Name',
    namePlaceholder: 'Dein vollständiger Name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'deine@email.de',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+49 123 456789',
    positionLabel: 'Gewünschte Position',
    positionPlaceholder: 'z.B. Bäckereiverkäufer, Produktionshelfer...',
    experienceLabel: 'Berufserfahrung',
    experiencePlaceholder: 'Beschreibe deine relevanten Erfahrungen...',
    messageLabel: 'Motivationsschreiben',
    messagePlaceholder: 'Warum möchtest du bei Noventa arbeiten?',
    cvLabel: 'Lebenslauf',
    cvButton: 'Datei auswählen',
    submitButton: 'Bewerbung absenden',
    successMessage: 'Vielen Dank für deine Initiativbewerbung! Wir melden uns in Kürze bei dir.',
    errorMessage: 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
  },
  en: {
    title: 'Initiative Application',
    subtitle: "Can't find a suitable position? Apply on your own initiative!",
    description:
      'We welcome every initiative application! Even if no suitable position is currently advertised, we can save your profile in our talent pool.',
    formTitle: 'Application Form',
    formSubtitle: 'Fill out the form and we will get back to you.',
    nameLabel: 'Name',
    namePlaceholder: 'Your full name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+49 123 456789',
    positionLabel: 'Desired Position',
    positionPlaceholder: 'e.g. Bakery Salesperson, Production Assistant...',
    experienceLabel: 'Work Experience',
    experiencePlaceholder: 'Describe your relevant experience...',
    messageLabel: 'Motivation Letter',
    messagePlaceholder: 'Why do you want to work at Noventa?',
    cvLabel: 'CV',
    cvButton: 'Choose File',
    submitButton: 'Submit Application',
    successMessage: 'Thank you for your initiative application! We will contact you soon.',
    errorMessage: 'An error occurred. Please try again later.',
  },
}
