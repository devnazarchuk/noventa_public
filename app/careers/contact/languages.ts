import type { Language } from '@/app/store/languageStore'

export interface ContactTranslations {
  title: string
  subtitle: string
  formTitle: string
  formSubtitle: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  phoneLabel: string
  phonePlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submitButton: string
  successMessage: string
  errorMessage: string
  contactPerson: string
}

export const contactTranslations: Record<Language, ContactTranslations> = {
  de: {
    title: 'Kontakt',
    subtitle: 'Deine Ansprechpartnerin für alle Fragen rund um die Bewerbung.',
    formTitle: 'Kontaktformular',
    formSubtitle: 'Fülle das Formular aus und wir melden uns bei dir.',
    nameLabel: 'Name',
    namePlaceholder: 'Dein Name',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'deine@email.de',
    phoneLabel: 'Telefon',
    phonePlaceholder: '+49 123 456789',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Deine Nachricht an uns...',
    submitButton: 'Absenden',
    successMessage: 'Vielen Dank für deine Nachricht! Wir melden uns in Kürze bei dir.',
    errorMessage: 'Es ist ein Fehler aufgetreten. Bitte versuche es später erneut.',
    contactPerson: 'Patricia Nensel - Personalabteilung',
  },
  en: {
    title: 'Contact',
    subtitle: 'Your contact person for all questions about applications.',
    formTitle: 'Contact Form',
    formSubtitle: 'Fill out the form and we will get back to you.',
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+49 123 456789',
    messageLabel: 'Message',
    messagePlaceholder: 'Your message to us...',
    submitButton: 'Submit',
    successMessage: 'Thank you for your message! We will get back to you soon.',
    errorMessage: 'An error occurred. Please try again later.',
    contactPerson: 'Patricia Nensel - Human Resources',
  },
}
