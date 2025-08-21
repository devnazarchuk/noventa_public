'use client'

import { FaGavel, FaInfoCircle, FaUserShield, FaUserTie } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  en: {
    title: 'PRIVACY POLICY',
    sections: [
      {
        icon: FaUserShield,
        title: 'Introduction',
        content:
          'We are pleased about your visit to our website and your interest in our company. The protection of your personal data is an important concern for us. Personal data is individual information about personal or factual circumstances of a specific or identifiable natural person. This includes information such as civil name, address, telephone number and date of birth.\n\nSince this data enjoys special protection, it is only collected by us to the technically necessary extent. Below we explain what information we collect during your visit to our website and how this is used.\n\nOur data protection practice is in accordance with the regulations of the Federal Data Protection Act (BDSG) and the Digital Services Act (DDG). We will only collect, process and store your personal data for processing inquiries and, if necessary, for processing orders/contracts. Only if you have previously given your consent separately, your data will also be used for further purposes, precisely defined in the consent, e.g. for information about offers via newsletter, etc.',
      },
      {
        icon: FaUserTie,
        title: 'Responsible Person',
        content:
          'The responsible party in terms of data protection law is:\n\nnoventas GmbH\nMuster-Straße 38\n01234 Musterland\nTel.: 06658 960 10\nEmail: service@noventas.de\n\nCommercial Register/No.: AG Ganzweg HRA 5364\nManaging Directors: Bernd Noventa, Manfred Mustername',
      },
      {
        icon: FaUserShield,
        title: 'Data Protection Officer',
        content:
          'Dipl. Ökonom Valentin Rehnert\nGrasberg 10\n36163 Keinhausen\nTel.: 06658 91 9680',
      },
      {
        icon: FaGavel,
        title: 'Supervisory Authority for Data Protection',
        content: 'The Hessian Data Protection Commissioner\nPostfach 3163\n65021 Wiesbaden',
      },
      {
        icon: FaInfoCircle,
        title: 'Last Updated',
        content: 'As of: 23.05.2025',
      },
    ],
  },
  de: {
    title: 'DATENSCHUTZERKLÄRUNG',
    sections: [
      {
        icon: FaUserShield,
        title: 'Einleitung',
        content:
          'Wir freuen uns über Ihren Besuch auf unserer Internetseite und Ihrem Interesse an unserem Unternehmen. Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Personenbezogene Daten sind Einzelangaben über persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person. Darunter fallen Informationen wie der bürgerliche Name, die Anschrift, die Telefonnummer und das Geburtsdatum.\n\nDa diese Daten besonderen Schutz genießen, werden sie bei uns nur im technisch erforderlichen Umfang erhoben. Nachfolgend stellen wir dar, welche Informationen wir während Ihres Besuches auf unserer Internetseite erfassen und wie diese genutzt werden.\n\nUnsere Datenschutzpraxis steht im Einklang mit den Regelungen des Bundesdatenschutzgesetzes (BDSG) und des Digitale Dienste Gesetz (DDG). Wir werden Ihre personenbezogenen Daten ausschließlich zur Bearbeitung von Anfragen und ggf. zur Abwicklung von Bestellungen / Verträgen erheben, verarbeiten und speichern. Nur wenn Sie zuvor Ihre Einwilligung gesondert erteilt haben, erfolgt eine Nutzung Ihrer Daten auch für weitergehende, in der Einwilligung genau bestimmte Zwecke, z.B. für Informationen über Angebote per Newsletter, etc.',
      },
      {
        icon: FaUserTie,
        title: 'Verantwortlicher',
        content:
          'Verantwortliche Stelle im Sinne des Datenschutzrechts ist:\n\nnoventas GmbH\nMuster-Straße 38\n01234 Musterland\nTel.: 06658 960 10\nE-Mailadresse: service@noventas.de\n\nHandelsregister/Nr.: AG Ganzweg HRA 5364\nGeschäftsführer: Bernd Noventa, Manfred Mustername',
      },
      {
        icon: FaUserShield,
        title: 'Datenschutzbeauftragter',
        content:
          'Dipl. Ökonom Valentin Rehnert\nGrasberg 10\n36163 Keinhausen\nTel.: 06658 91 9680',
      },
      {
        icon: FaGavel,
        title: 'Zuständige Aufsichtsbehörde für Datenschutz',
        content: 'Der Hessische Datenschutzbeauftragte\nPostfach 3163\n65021 Wiesbaden',
      },
      {
        icon: FaInfoCircle,
        title: 'Stand',
        content: 'Stand: 23.05.2025',
      },
    ],
  },
}

export default function Datenschutz() {
  const { language } = useLanguageStore()
  const t = translations[language]
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-[#D72638] dark:text-[#FFA5A5]">{t.title}</h1>
      <div className="space-y-8 text-[#3A3A3A] dark:text-[#FDEEEE]">
        {t.sections.map((section) => (
          <section key={section.title}>
            <div className="mb-4 flex items-center gap-3">
              <section.icon className="h-7 w-7 text-[#D72638] dark:text-[#FFA5A5]" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="whitespace-pre-line">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
