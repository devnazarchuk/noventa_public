'use client'
import { FaBalanceScale, FaBullseye,FaLeaf, FaUsers } from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

const translations = {
  en: {
    title: 'ESG - SUSTAINABILITY',
    sections: [
      {
        icon: FaLeaf,
        title: 'Environment (Environmental)',
        content: 'As a bakery, we place special emphasis on sustainable production and environmental protection:\n\n• Energy-efficient production facilities\n• Reduction of CO2 emissions\n• Sustainable packaging solutions\n• Regional raw material procurement\n• Waste separation and recycling',
      },
      {
        icon: FaUsers,
        title: 'Social',
        content: 'Our social commitment includes:\n\n• Fair working conditions\n• Training and further education\n• Health promotion\n• Support for local initiatives\n• Diversity and inclusion',
      },
      {
        icon: FaBalanceScale,
        title: 'Corporate Governance',
        content: 'Our corporate governance is based on:\n\n• Transparent decision-making processes\n• Ethical business practices\n• Risk management\n• Compliance and regulation\n• Sustainable supply chains',
      },
      {
        icon: FaBullseye,
        title: 'Our Goals',
        content: 'We have set ambitious goals to continuously improve our sustainability strategy:\n\n• Climate neutrality by 2030\n• 100% renewable energy\n• Zero waste in production\n• Promotion of circular economy\n• Strengthening regional value creation',
      },
    ],
  },
  de: {
    title: 'ESG - NACHHALTIGKEIT',
    sections: [
      {
        icon: FaLeaf,
        title: 'Umwelt (Environmental)',
        content: 'Als Bäckerei legen wir besonderen Wert auf nachhaltige Produktion und Umweltschutz:\n\n• Energieeffiziente Produktionsanlagen\n• Reduzierung von CO2-Emissionen\n• Nachhaltige Verpackungslösungen\n• Regionale Rohstoffbeschaffung\n• Mülltrennung und Recycling',
      },
      {
        icon: FaUsers,
        title: 'Soziales (Social)',
        content: 'Unser soziales Engagement umfasst:\n\n• Faire Arbeitsbedingungen\n• Ausbildung und Weiterbildung\n• Gesundheitsförderung\n• Unterstützung lokaler Initiativen\n• Vielfalt und Inklusion',
      },
      {
        icon: FaBalanceScale,
        title: 'Unternehmensführung (Governance)',
        content: 'Unsere Unternehmensführung basiert auf:\n\n• Transparente Entscheidungsprozesse\n• Ethische Geschäftspraktiken\n• Risikomanagement\n• Compliance und Regulierung\n• Nachhaltige Lieferketten',
      },
      {
        icon: FaBullseye,
        title: 'Unsere Ziele',
        content: 'Wir haben uns ambitionierte Ziele gesetzt, um unsere Nachhaltigkeitsstrategie kontinuierlich zu verbessern:\n\n• Klimaneutralität bis 2030\n• 100% erneuerbare Energien\n• Zero Waste in der Produktion\n• Förderung der Kreislaufwirtschaft\n• Stärkung der regionalen Wertschöpfung',
      },
    ],
  },
}

export default function ESG() {
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
