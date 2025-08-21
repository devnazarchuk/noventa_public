// Data types for bakers
export interface BakerStatement {
  label: string
  text: string
}
export interface Baker {
  name: string
  role: string
  since: string
  department: string
  masterSince: string
  image: string
  alt: string
  statements: BakerStatement[]
}

export const bakers: Baker[] = [
  {
    name: 'Wolfgang Weber',
    role: 'Mitglied der Geschäftsleitung',
    since: '1984',
    department: 'Leitung Nachtschicht',
    masterSince: '1991',
    image: '/images/Meister_Wolfgang_Weber_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Wolfgang Weber – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'In meinem Beruf als Bäckermeister liebe ich es, Verantwortung zu übernehmen und jeden Tag hochwertige Backwaren für unsere Gäste herzustellen. Dabei ist es natürlich auch sehr spannend neue Produkte für unser Sortiment zu entwickeln.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Es ist schön für ein Familienunternehmen arbeiten zu können, bei dem wir alle per du sind. Es finden Mitarbeiterevents statt, die uns als noventas-Familie noch enger zusammenschweißen. Zusätzlich bringt mein Beruf immer wieder neue Herausforderungen mit sich, sodass es jederzeit eine gute Abwechslung gibt.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Neben den Vorteilen der persönlichen Weiterentwicklung, wollte ich einfach mein Fachwissen an die nächste Generation weitergeben.',
      },
    ],
  },
  {
    name: 'Martin Schiller',
    role: 'Mitglied der Geschäftsleitung',
    since: '2008',
    department: 'Leitung Tagschicht',
    masterSince: '2003',
    image: '/images/Meister_Martin_Schiller_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Martin Schiller – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'Als Bäcker gibt es einfach keinen Stillstand. Ganz im Gegenteil: Mein Beruf lebt von ständigem Fortschritt, da die Kundenerwartungen an unser Backwaren-Sortiment unverändert hoch sind. Wir haben somit immer wieder neue spannende Möglichkeiten und Chancen.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Ganz einfach gesagt: weil es nie bei uns langweilig wird. Man merkt einfach, dass in unserer Backstube alles Hand in Hand geht und jeder alles für unser Handwerk gibt, um die Brötchen, Brote & Co. von morgen mit viel Liebe herzustellen.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Natürlich ist eine Weiterbildung wie die Meisterprüfung ein ambitioniertes Ziel, um in Zukunft auch sein Gehalt aufzubessern. Neben dem finanziellen Aspekt, hat mich aber auch die Herausforderung gereizt, um mein Wissen noch weiter zu vertiefen.',
      },
    ],
  },
  {
    name: 'Thilo Müller',
    role: '',
    since: '1987',
    department: 'Brot Nachtschicht',
    masterSince: '1991',
    image: '/images/Meister_Thilo_Mueller_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Thilo Müller – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'In unserem Bäckerhandwerk bieten wir nicht nur eine reichhaltige Auswahl an beliebten Backwaren, sondern überraschen unsere Kunden auch mit ständig neuen, kreativen Produkten. Diese kontinuierliche Innovationsfreude schafft nicht nur eine spannende Vielfalt, sondern stellt uns als Bäckermeister auch vor fortlaufend spannende Herausforderungen. Es wird als Bäcker also nie langweilig!',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Ich schätze die Arbeit hier sehr. Wir scheuen als Bäckerei nicht davor zurück, in unserer Backstube kreativ zu werden und neue Backwaren zu kreieren. Besonders beeindruckend finde ich, dass sich unsere Bäckerei nicht nur ambitionierte Ziele setzt, sondern diese mit echtem Teamgeist und Entschlossenheit auch konsequent umsetzt. Noventa geht überdies weit über den beruflichen Rahmen hinaus und setzt sich auch aktiv für das Wohlbefinden seiner Mitarbeiter ein – ein schönes Beispiel dafür ist unser traditionelles Oktoberfest, das nicht nur ein geselliges Highlight ist, sondern auch den Zusammenhalt unter uns Kollegen stärkt.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Das Absolvieren meiner Meisterprüfung war für mich eine persönliche Herausforderung, angetrieben von dem Wunsch, meine fachlichen Qualifikationen als Bäcker so zu erweitern, um mehr Verantwortung in unserer Backstube zu übernehmen.',
      },
    ],
  },
  {
    name: 'Bernd Gerhardt',
    role: '',
    since: '2015',
    department: 'Brötchen',
    masterSince: '1992',
    image: '/images/Meister_Bernd_Gerhardt_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Bernd Gerhardt – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'Ich liebe es, Bäcker zu sein, weil der Beruf ständig hohe Ansprüche an meine Fähigkeiten stellt. Man ist also immer gefordert! Er erfordert aber nicht nur handwerkliches Geschick, sondern auch ein gutes Gespür für Geschmack und Qualität.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Mit über 150 Fachgeschäften und knapp 1.900 Mitarbeitern zählt noventas vermutlich zu den größeren Unternehmen in der Region. Das bringt für mich als Mitarbeiter eine gewisse berufliche und private Sicherheit. Außerdem schätze ich die Tradition, die mit unserer Familienbäckerei seit 1928 verbunden ist. Es ist etwas Besonderes, Teil einer langjährigen Geschichte zu sein und unser Handwerk immer wieder neuen jungen Generationen weiterzugeben.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Die Entscheidung, die Meisterprüfung abzulegen, war für mich eine Investition in meine berufliche Zukunft. Die Weiterbildung bot mir nochmals ein tieferes Verständnis für die feinen Nuancen unserer Backwaren, sondern auch die Möglichkeit, meine Fähigkeiten und Kenntnisse als Bäcker auf ein noch höheres Level zu bringen.',
      },
    ],
  },
  {
    name: 'Bernd Müller',
    role: '',
    since: '2008',
    department: 'Leitung Brot Tagschicht',
    masterSince: '2007',
    image: '/images/Meister_Bernd_Mueller_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Bernd Müller – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'Es gibt viele Gründe, warum ich gerne Bäcker bin. Zum einen erfordert es eine gewisse Kreativität, aber auch viel Verständnis für Handwerk und fachliches Wissen, um Brot, Gebäck und andere Backwaren herzustellen.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Das Verhältnis zwischen den Kollegen und der Geschäftsleitung ist einfach sehr positiv. Es wird viel Wert darauf gelegt, auch neue Projekte und Ideen zu fördern. Außerdem wird man bei der beruflichen Weiterbildung unterstützt – bei mir zum Beispiel als Brotsommelier im Jahr 2020. Es ist toll, Teil eines Familienunternehmens zu sein, das sich immer Ziele setzt und dabei in ihre Mitarbeiter investiert.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Neben dem persönlichen Aspekt, dass ich mich gerne weiterbilde, trage ich auch als Bäckermeister zur Erhaltung und Weitergabe traditioneller Backtechniken sowie Rezepten bei. Zudem kann ich mit der Meisterprüfung die Qualität von handwerklich hergestellten Backwaren nochmals fördern.',
      },
    ],
  },
  {
    name: 'Thorsten Weber',
    role: '',
    since: '2014',
    department: 'Feingebäck',
    masterSince: '2008',
    image: '/images/Meister_Thorsten_Weber_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Thorsten Weber – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'Mich faszinieren einfach die großen Stückzahlen, die wir täglich in unserer Backstube für unsere Gäste produzieren dürfen. Hierzu bedarf es regelmäßig einer sorgfältigen Organisation und Planung im Vorfeld.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Das persönliche Verhältnis zu Kollegen geht sogar bis hoch in die Geschäftsführung. Man spürt einfach, das Noventa wirklich ein Familienunternehmen ist. Hinzu kommt das große Angebot an Mitarbeiter-Benefits, die ich wirklich gerne in Anspruch nehme.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Mit der Meisterprüfung konnte ich meine Fähigkeiten sowie Expertise im Bäckerhandwerk erweitern. Das bietet mir nicht nur bessere berufliche Chancen, sondern ich konnte auch noch mehr Verantwortung bei Noventa übernehmen.',
      },
    ],
  },
  {
    name: 'Florian Martin',
    role: '',
    since: '2004',
    department: 'Leitung Konditorei',
    masterSince: '2016',
    image: '/images/Meister_Florian_Martin_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Florian Martin – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'Das Arbeiten in einem funktionierenden Team sowie die Planung und Organisation der Produktionsabläufe.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Bei Noventa wird Familienunternehmen gelebt und man kann aktiv an der Gestaltung der Zukunft teilhaben.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Nachdem ich die Konditor- und Bäcker-Ausbildung abgeschlossen hatte, hatte ich bereits mit meinen Anfang 20 Jahren die Chance bekommen als Abteilungsleiter zu arbeiten. So war für mich der nächste logische Schritt die Meisterprüfung zu machen, um mich fachlich und persönlich weiterzubilden.',
      },
    ],
  },
  {
    name: 'Sebastian Wiegand',
    role: '',
    since: '2016',
    department: 'Brot Nachtschicht',
    masterSince: '2023',
    image: '/images/Meister_Sebastian_Wiegand_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Sebastian Wiegand – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'Mich fasziniert das Ergebnis, welches man am Ende des Tages sieht. Es ist schön zu wissen, dass wir Menschen mit unseren Backwaren glücklich machen.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Der lockere Umgang mit Kollegen und Vorgesetzten, sowie die täglich Herausforderungen in meinem Job.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Es war eine wunderbare Möglichkeit, mein bereits vorhandenes Wissen im Bäckerhandwerk weiter zu vertiefen und mir zugleich viel Neues anzueignen. Natürlich erfüllt es mich auch mit Stolz, meine Expertise als Bäckermeister künftig an die kommenden Generationen weiterzugeben. Zudem freue ich mich darauf, mehr Verantwortung im Team zu übernehmen und meine Fachkompetenz zum Wohle des Unternehmens einzubringen.',
      },
    ],
  },
  {
    name: 'Maximilian Noventa',
    role: '',
    since: '2018',
    department: 'Brot',
    masterSince: '2024',
    image: '/images/Meister_Max_Noventa_der_Baeckerei_Noventa_aus_Poppenhausen-1536x1248.jpg',
    alt: 'Max Noventa – Bäckermeister der Bäckerei Noventa aus Keinhausen',
    statements: [
      {
        label: 'Was mag ich besonders an meinem Job:',
        text: 'Was ich an meinem Job als Bäcker besonders liebe, ist die unglaubliche Vielseitigkeit. Kein Tag gleicht dem anderen, und wir haben die Möglichkeit, in unserer Arbeit in der Backstube wirklich kreativ zu sein. Es ist einfach toll, das Ergebnis unserer Mühe direkt vor Augen zu haben – unsere gebackenen Brote. Und mal ehrlich: Es riecht hier nicht nur unglaublich gut, es schmeckt auch einfach.',
      },
      {
        label: 'Warum arbeite ich gerne bei Noventa:',
        text: 'Kurzum: Weil wir ein Familienunternehmen nicht nur auf dem Papier sind, sondern es wirklich leben. Mein Vater Bernd ist bereits die 7. Generation von Bäckern der noventaschen Familien, und für mich war es selbstverständlich, dann auch in diese Fußstapfen zu treten. Es fühlt sich einfach richtig an, ein Teil dieser Geschichte zu sein und das Handwerk, das unsere Familie schon so lange prägt, mit Leidenschaft weiterzuführen.',
      },
      {
        label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
        text: 'Die Entscheidung, die Meisterprüfung abzulegen, kam für mich aus dem Wunsch heraus, meine Fähigkeiten und Kenntnisse weiter zu verbessern. Ich wollte mich der Herausforderung stellen und noch tiefer in das Handwerk eintauchen. Unser Beruf entwickelt sich ständig weiter, und es ist mir wichtig, immer auf dem neuesten Stand zu sein. Die Meisterprüfung war aber auch ein toller Schritt für mich persönlich, um das Beste aus mir und meiner Arbeit herauszuholen.',
      },
    ],
  },
]

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Import translations
import { Language } from '@/app/store/languageStore'

import { bakersTranslations } from './bakers-translations'

// Function to get translated baker data
export function getTranslatedBaker(baker: Baker, language: Language): Baker {
  const translation = bakersTranslations[language][baker.name]
  if (!translation) return baker

  return {
    ...baker,
    role: translation.role,
    department: translation.department,
    statements: [
      {
        label: translation.statements.job.label,
        text: translation.statements.job.text,
      },
      {
        label: translation.statements.company.label,
        text: translation.statements.company.text,
      },
      {
        label: translation.statements.master.label,
        text: translation.statements.master.text,
      },
    ],
  }
}
