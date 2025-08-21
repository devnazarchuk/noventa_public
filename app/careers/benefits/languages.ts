import type { Language } from '@/app/store/languageStore'

export interface BenefitsTranslations {
  title: string
  subtitle: string
}

export const benefitsTranslations: Record<Language, BenefitsTranslations> = {
  de: {
    title: 'Benefits & Kultur',
    subtitle:
      'Entdecke die Vorteile und die besondere Unternehmenskultur bei Noventa. Wir bieten dir mehr als nur einen Job!',
  },
  en: {
    title: 'Benefits & Culture',
    subtitle:
      'Discover the advantages and special corporate culture at Noventa. We offer you more than just a job!',
  },
}

export const benefits = [
  {
    title: {
      de: 'Gehalt',
      en: 'Salary',
    },
    desc: {
      de: 'Ohne Moos nichts los. Wir bezahlen mehr als branchenüblich. Es gibt unbefristete Arbeitsverträge, erweiterte Urlaubstage sowie Sonn- und Feiertagszuschläge.',
      en: 'No money, no honey. We pay above industry standards. We offer permanent contracts, extended vacation days, and Sunday and holiday bonuses.',
    },
    img: '/svg-icons/Gehalt-Icon-Karriere-bei-der-Baeckerei-Noventa.svg',
  },
  {
    title: {
      de: 'Gratis',
      en: 'Freebies',
    },
    desc: {
      de: "Weil's bei Noventa so gut schmeckt, gibt es monatlich eine Brotflatrate in Gutscheinform, das passende Arbeitsoutfit und Geschenke zu Weihnachten und Ostern.",
      en: 'Because Noventa tastes so good, you get a monthly bread subscription in voucher form, the appropriate work outfit, and gifts at Christmas and Easter.',
    },
    img: '/svg-icons/Einkaufskontingent-Icon-Karriere-bei-der-Baeckerei-Noventa.svg',
  },
  {
    title: {
      de: 'Happy Life',
      en: 'Happy Life',
    },
    desc: {
      de: 'Als Fitnessbäcker kümmern wir uns um Deine Gesundheit und Dein Wohlbefinden. Passend dazu gibt es tolle Events und Veranstaltungen für alle Mitarbeiter.',
      en: 'As fitness bakers, we care about your health and well-being. We offer great events and activities for all employees.',
    },
    img: '/svg-icons/Happy-Life-Icon-Ausbildung-bei-der-Baeckerei-Noventa.svg',
  },
  {
    title: {
      de: 'Fahrradwelt',
      en: 'Bike World',
    },
    desc: {
      de: 'Wir lieben nicht nur Brötchen, sondern auch Fahrräder. Deshalb gibt es bei Noventa ein attraktives E-Bike-Leasing.',
      en: "We love not only rolls but also bicycles. That's why Noventa offers attractive e-bike leasing.",
    },
    img: '/svg-icons/eBike-Leasing-Benefits-Baeckerei-Noventa.svg',
  },
  {
    title: {
      de: 'Unser Plus',
      en: 'Our Plus',
    },
    desc: {
      de: 'Und weil Du Deinen Job so magst, haben wir noch ein extra Plus für Dich. Attraktive Angebote von zahlreichen Marken.',
      en: 'And because you love your job, we have an extra plus for you. Attractive offers from numerous brands.',
    },
    img: '/svg-icons/Unser-Plus-Rabatte-auf-viele-Marken-Baeckerei-Noventa.svg',
  },
  {
    title: {
      de: 'Trinkgeld',
      en: 'Tips',
    },
    desc: {
      de: 'Und weil Du es Dir verdient hast, wird bei Noventa das Trinkgeld vollständig an Dich ausgezahlt.',
      en: "And because you've earned it, tips at Noventa are fully paid out to you.",
    },
    img: '/svg-icons/Trinkgeld-Benefit-Baeckerei-Noventa.svg',
  },
  {
    title: {
      de: 'Vorwärts',
      en: 'Forward',
    },
    desc: {
      de: 'Wir wollen, dass Du vorwärtskommst. Deshalb bieten wir Dir berufliche Weiterbildungsmöglichkeiten.',
      en: "We want you to move forward. That's why we offer professional development opportunities.",
    },
    img: '/svg-icons/Aufstieg-Icon-Karriere-bei-der-Baeckerei-Noventa.svg',
  },
]
