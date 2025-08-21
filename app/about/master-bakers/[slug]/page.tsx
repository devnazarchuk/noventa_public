'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import {
  FaArrowLeft,
  FaAward,
  FaBreadSlice,
  FaCalendar,
  FaGraduationCap,
  FaHeart,
  FaStar,
  FaUsers,
  FaUserTie,
} from 'react-icons/fa'

import { useLanguageStore } from '@/app/store/languageStore'

import { bakers, slugify } from '../bakers-data'

type Translations = {
  de: {
    backToOverview: string
    department: string
    since: string
    masterSince: string
    roles: {
      management: string
    }
    departments: {
      nightShift: string
      dayShift: string
      bread: string
      breadNightShift: string
      breadDayShift: string
      rolls: string
      pastry: string
      confectionery: string
    }
    statements: {
      jobLove: string
      noventaLove: string
      masterExam: string
    }
    statementTexts: {
      [key: string]: {
        jobLove: string
        noventaLove: string
        masterExam: string
      }
    }
  }
  en: {
    backToOverview: string
    department: string
    since: string
    masterSince: string
    roles: {
      management: string
    }
    departments: {
      nightShift: string
      dayShift: string
      bread: string
      breadNightShift: string
      breadDayShift: string
      rolls: string
      pastry: string
      confectionery: string
    }
    statements: {
      jobLove: string
      noventaLove: string
      masterExam: string
    }
    statementTexts: {
      [key: string]: {
        jobLove: string
        noventaLove: string
        masterExam: string
      }
    }
  }
}

const translations: Translations = {
  de: {
    backToOverview: 'Zurück zur Übersicht',
    department: 'Abteilung',
    since: 'Bei Noventa seit',
    masterSince: 'Bäckermeister seit',
    roles: {
      management: 'Mitglied der Geschäftsleitung',
    },
    departments: {
      nightShift: 'Leitung Nachtschicht',
      dayShift: 'Leitung Tagschicht',
      bread: 'Brot',
      breadNightShift: 'Brot Nachtschicht',
      breadDayShift: 'Leitung Brot Tagschicht',
      rolls: 'Brötchen',
      pastry: 'Feingebäck',
      confectionery: 'Leitung Konditorei',
    },
    statements: {
      jobLove: 'Was mag ich besonders an meinem Job',
      noventaLove: 'Warum arbeite ich gerne bei Noventa',
      masterExam: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen',
    },
    statementTexts: {
      'Wolfgang Weber': {
        jobLove:
          'In meinem Beruf als Bäckermeister liebe ich es, Verantwortung zu übernehmen und jeden Tag hochwertige Backwaren für unsere Gäste herzustellen. Dabei ist es natürlich auch sehr spannend neue Produkte für unser Sortiment zu entwickeln.',
        noventaLove:
          'Es ist schön für ein Familienunternehmen arbeiten zu können, bei dem wir alle per du sind. Es finden Mitarbeiterevents statt, die uns als noventas-Familie noch enger zusammenschweißen. Zusätzlich bringt mein Beruf immer wieder neue Herausforderungen mit sich, sodass es jederzeit eine gute Abwechslung gibt.',
        masterExam:
          'Neben den Vorteilen der persönlichen Weiterentwicklung, wollte ich einfach mein Fachwissen an die nächste Generation weitergeben.',
      },
      'Martin Schiller': {
        jobLove:
          'Als Bäcker gibt es einfach keinen Stillstand. Ganz im Gegenteil: Mein Beruf lebt von ständigem Fortschritt, da die Kundenerwartungen an unser Backwaren-Sortiment unverändert hoch sind. Wir haben somit immer wieder neue spannende Möglichkeiten und Chancen.',
        noventaLove:
          'Ganz einfach gesagt: weil es nie bei uns langweilig wird. Man merkt einfach, dass in unserer Backstube alles Hand in Hand geht und jeder alles für unser Handwerk gibt, um die Brötchen, Brote & Co. von morgen mit viel Liebe herzustellen.',
        masterExam:
          'Natürlich ist eine Weiterbildung wie die Meisterprüfung ein ambitioniertes Ziel, um in Zukunft auch sein Gehalt aufzubessern. Neben dem finanziellen Aspekt, hat mich aber auch die Herausforderung gereizt, um mein Wissen noch weiter zu vertiefen.',
      },
      'Thilo Müller': {
        jobLove:
          'In unserem Bäckerhandwerk bieten wir nicht nur eine reichhaltige Auswahl an beliebten Backwaren, sondern überraschen unsere Kunden auch mit ständig neuen, kreativen Produkten. Diese kontinuierliche Innovationsfreude schafft nicht nur eine spannende Vielfalt, sondern stellt uns als Bäckermeister auch vor fortlaufend spannende Herausforderungen. Es wird als Bäcker also nie langweilig!',
        noventaLove:
          'Ich schätze die Arbeit hier sehr. Wir scheuen als Bäckerei nicht davor zurück, in unserer Backstube kreativ zu werden und neue Backwaren zu kreieren. Besonders beeindruckend finde ich, dass sich unsere Bäckerei nicht nur ambitionierte Ziele setzt, sondern diese mit echtem Teamgeist und Entschlossenheit auch konsequent umsetzt. Noventa geht überdies weit über den beruflichen Rahmen hinaus und setzt sich auch aktiv für das Wohlbefinden seiner Mitarbeiter ein – ein schönes Beispiel dafür ist unser traditionelles Oktoberfest, das nicht nur ein geselliges Highlight ist, sondern auch den Zusammenhalt unter uns Kollegen stärkt.',
        masterExam:
          'Das Absolvieren meiner Meisterprüfung war für mich eine persönliche Herausforderung, angetrieben von dem Wunsch, meine fachlichen Qualifikationen als Bäcker so zu erweitern, um mehr Verantwortung in unserer Backstube zu übernehmen.',
      },
      'Bernd Gerhardt': {
        jobLove:
          'Ich liebe es, Bäcker zu sein, weil der Beruf ständig hohe Ansprüche an meine Fähigkeiten stellt. Man ist also immer gefordert! Er erfordert aber nicht nur handwerkliches Geschick, sondern auch ein gutes Gespür für Geschmack und Qualität.',
        noventaLove:
          'Mit über 150 Fachgeschäften und knapp 1.900 Mitarbeitern zählt noventas vermutlich zu den größeren Unternehmen in der Region. Das bringt für mich als Mitarbeiter eine gewisse berufliche und private Sicherheit. Außerdem schätze ich die Tradition, die mit unserer Familienbäckerei seit 1928 verbunden ist. Es ist etwas Besonderes, Teil einer langjährigen Geschichte zu sein und unser Handwerk immer wieder neuen jungen Generationen weiterzugeben.',
        masterExam:
          'Die Entscheidung, die Meisterprüfung abzulegen, war für mich eine Investition in meine berufliche Zukunft. Die Weiterbildung bot mir nochmals ein tieferes Verständnis für die feinen Nuancen unserer Backwaren, sondern auch die Möglichkeit, meine Fähigkeiten und Kenntnisse als Bäcker auf ein noch höheres Level zu bringen.',
      },
      'Bernd Müller': {
        jobLove:
          'Es gibt viele Gründe, warum ich gerne Bäcker bin. Zum einen erfordert es eine gewisse Kreativität, aber auch viel Verständnis für Handwerk und fachliches Wissen, um Brot, Gebäck und andere Backwaren herzustellen.',
        noventaLove:
          'Das Verhältnis zwischen den Kollegen und der Geschäftsleitung ist einfach sehr positiv. Es wird viel Wert darauf gelegt, auch neue Projekte und Ideen zu fördern. Außerdem wird man bei der beruflichen Weiterbildung unterstützt – bei mir zum Beispiel als Brotsommelier im Jahr 2020. Es ist toll, Teil eines Familienunternehmens zu sein, das sich immer Ziele setzt und dabei in ihre Mitarbeiter investiert.',
        masterExam:
          'Neben dem persönlichen Aspekt, dass ich mich gerne weiterbilde, trage ich auch als Bäckermeister zur Erhaltung und Weitergabe traditioneller Backtechniken sowie Rezepten bei. Zudem kann ich mit der Meisterprüfung die Qualität von handwerklich hergestellten Backwaren nochmals fördern.',
      },
      'Thorsten Weber': {
        jobLove:
          'Mich faszinieren einfach die großen Stückzahlen, die wir täglich in unserer Backstube für unsere Gäste produzieren dürfen. Hierzu bedarf es regelmäßig einer sorgfältigen Organisation und Planung im Vorfeld.',
        noventaLove:
          'Das persönliche Verhältnis zu Kollegen geht sogar bis hoch in die Geschäftsführung. Man spürt einfach, das Noventa wirklich ein Familienunternehmen ist. Hinzu kommt das große Angebot an Mitarbeiter-Benefits, die ich wirklich gerne in Anspruch nehme.',
        masterExam:
          'Mit der Meisterprüfung konnte ich meine Fähigkeiten sowie Expertise im Bäckerhandwerk erweitern. Das bietet mir nicht nur bessere berufliche Chancen, sondern ich konnte auch noch mehr Verantwortung bei Noventa übernehmen.',
      },
      'Florian Martin': {
        jobLove:
          'Das Arbeiten in einem funktionierenden Team sowie die Planung und Organisation der Produktionsabläufe.',
        noventaLove:
          'Bei Noventa wird Familienunternehmen gelebt und man kann aktiv an der Gestaltung der Zukunft teilhaben.',
        masterExam:
          'Nachdem ich die Konditor- und Bäcker-Ausbildung abgeschlossen hatte, hatte ich bereits mit meinen Anfang 20 Jahren die Chance bekommen als Abteilungsleiter zu arbeiten. So war für mich der nächste logische Schritt die Meisterprüfung zu machen, um mich fachlich und persönlich weiterzubilden.',
      },
      'Sebastian Wiegand': {
        jobLove:
          'Mich fasziniert das Ergebnis, welches man am Ende des Tages sieht. Es ist schön zu wissen, dass wir Menschen mit unseren Backwaren glücklich machen.',
        noventaLove:
          'Der lockere Umgang mit Kollegen und Vorgesetzten, sowie die täglich Herausforderungen in meinem Job.',
        masterExam:
          'Es war eine wunderbare Möglichkeit, mein bereits vorhandenes Wissen im Bäckerhandwerk weiter zu vertiefen und mir zugleich viel Neues anzueignen. Natürlich erfüllt es mich auch mit Stolz, meine Expertise als Bäckermeister künftig an die kommenden Generationen weiterzugeben. Zudem freue ich mich darauf, mehr Verantwortung im Team zu übernehmen und meine Fachkompetenz zum Wohle des Unternehmens einzubringen.',
      },
      'Maximilian Noventa': {
        jobLove:
          'Was ich an meinem Job als Bäcker besonders liebe, ist die unglaubliche Vielseitigkeit. Kein Tag gleicht dem anderen, und wir haben die Möglichkeit, in unserer Arbeit in der Backstube wirklich kreativ zu sein. Es ist einfach toll, das Ergebnis unserer Mühe direkt vor Augen zu haben – unsere gebackenen Brote. Und mal ehrlich: Es riecht hier nicht nur unglaublich gut, es schmeckt auch einfach.',
        noventaLove:
          'Kurzum: Weil wir ein Familienunternehmen nicht nur auf dem Papier sind, sondern es wirklich leben. Mein Vater Bernd ist bereits die 7. Generation von Bäckern der noventaschen Familien, und für mich war es selbstverständlich, dann auch in diese Fußstapfen zu treten. Es fühlt sich einfach richtig an, ein Teil dieser Geschichte zu sein und das Handwerk, das unsere Familie schon so lange prägt, mit Leidenschaft weiterzuführen.',
        masterExam:
          'Die Entscheidung, die Meisterprüfung abzulegen, kam für mich aus dem Wunsch heraus, meine Fähigkeiten und Kenntnisse weiter zu verbessern. Ich wollte mich der Herausforderung stellen und noch tiefer in das Handwerk eintauchen. Unser Beruf entwickelt sich ständig weiter, und es ist mir wichtig, immer auf dem neuesten Stand zu sein. Die Meisterprüfung war aber auch ein toller Schritt für mich persönlich, um das Beste aus mir und meiner Arbeit herauszuholen.',
      },
    },
  },
  en: {
    backToOverview: 'Back to Overview',
    department: 'Department',
    since: 'At Noventa since',
    masterSince: 'Master Baker since',
    roles: {
      management: 'Member of Management',
    },
    departments: {
      nightShift: 'Night Shift Management',
      dayShift: 'Day Shift Management',
      bread: 'Bread',
      breadNightShift: 'Bread Night Shift',
      breadDayShift: 'Bread Day Shift Management',
      rolls: 'Rolls',
      pastry: 'Pastry',
      confectionery: 'Confectionery Management',
    },
    statements: {
      jobLove: 'What I particularly love about my job',
      noventaLove: 'Why I enjoy working at Noventa',
      masterExam: 'What motivated me to take the master exam',
    },
    statementTexts: {
      'Wolfgang Weber': {
        jobLove:
          "As a master baker, I love taking responsibility and producing high-quality baked goods for our guests every day. It's also very exciting to develop new products for our range.",
        noventaLove:
          "It's great to work for a family business where we're all on first-name terms. There are employee events that bring us closer together as the noventas family. Additionally, my job always brings new challenges, so there's always good variety.",
        masterExam:
          'Besides the advantages of personal development, I simply wanted to pass on my expertise to the next generation.',
      },
      'Martin Schiller': {
        jobLove:
          "As a baker, there's simply no standstill. Quite the opposite: my profession thrives on constant progress, as customer expectations for our baked goods range remain high. This gives us exciting new opportunities and chances time and again.",
        noventaLove:
          "Simply put: because it never gets boring here. You can really feel that everything in our bakery works hand in hand, and everyone gives their all for our craft to make tomorrow's rolls, bread & co. with lots of love.",
        masterExam:
          "Of course, further education like the master exam is an ambitious goal to improve one's salary in the future. Besides the financial aspect, I was also attracted by the challenge to deepen my knowledge even further.",
      },
      'Thilo Müller': {
        jobLove:
          'In our baking craft, we not only offer a rich selection of popular baked goods but also surprise our customers with constantly new, creative products. This continuous joy of innovation not only creates exciting variety but also presents us as master bakers with continuously exciting challenges. It never gets boring as a baker!',
        noventaLove:
          "I really value the work here. As a bakery, we're not afraid to be creative in our bakery and create new baked goods. I'm particularly impressed that our bakery not only sets ambitious goals but also implements them consistently with real team spirit and determination. Noventa goes far beyond the professional framework and actively promotes the well-being of its employees – a beautiful example of this is our traditional Oktoberfest, which is not only a social highlight but also strengthens the cohesion among us colleagues.",
        masterExam:
          'Completing my master exam was a personal challenge for me, driven by the desire to expand my professional qualifications as a baker to take on more responsibility in our bakery.',
      },
      'Bernd Gerhardt': {
        jobLove:
          "I love being a baker because the profession constantly demands high standards of my abilities. You're always challenged! But it requires not only craftsmanship but also a good sense of taste and quality.",
        noventaLove:
          "With over 150 specialty stores and nearly 1,900 employees, noventas is probably one of the larger companies in the region. This brings a certain professional and private security for me as an employee. I also appreciate the tradition associated with our family bakery since 1928. It's something special to be part of a long history and to pass on our craft to new young generations time and again.",
        masterExam:
          'The decision to take the master exam was an investment in my professional future. The further education not only gave me a deeper understanding of the fine nuances of our baked goods but also the opportunity to take my skills and knowledge as a baker to an even higher level.',
      },
      'Bernd Müller': {
        jobLove:
          'There are many reasons why I enjoy being a baker. On one hand, it requires creativity, but also a lot of understanding of craftsmanship and technical knowledge to make bread, pastries, and other baked goods.',
        noventaLove:
          "The relationship between colleagues and management is simply very positive. There's a lot of emphasis on promoting new projects and ideas. Additionally, you're supported in professional development – in my case, for example, as a bread sommelier in 2020. It's great to be part of a family business that always sets goals and invests in its employees.",
        masterExam:
          'Besides the personal aspect of wanting to further my education, as a master baker I also contribute to preserving and passing on traditional baking techniques and recipes. Moreover, with the master exam, I can further promote the quality of handcrafted baked goods.',
      },
      'Thorsten Weber': {
        jobLove:
          "I'm simply fascinated by the large quantities we get to produce daily in our bakery for our guests. This regularly requires careful organization and planning in advance.",
        noventaLove:
          "The personal relationship with colleagues goes all the way up to management. You can really feel that Noventa is truly a family business. Additionally, there's the great range of employee benefits that I really enjoy taking advantage of.",
        masterExam:
          'With the master exam, I was able to expand my skills and expertise in the baking craft. This not only offers me better career opportunities but also allowed me to take on more responsibility at Noventa.',
      },
      'Florian Martin': {
        jobLove:
          'Working in a functioning team as well as planning and organizing production processes.',
        noventaLove:
          'At Noventa, family business is lived and you can actively participate in shaping the future.',
        masterExam:
          'After completing my confectioner and baker training, I already had the chance to work as a department head in my early 20s. So the next logical step for me was to take the master exam to further my education professionally and personally.',
      },
      'Sebastian Wiegand': {
        jobLove:
          "I'm fascinated by the result you see at the end of the day. It's nice to know that we make people happy with our baked goods.",
        noventaLove:
          'The relaxed relationship with colleagues and superiors, as well as the daily challenges in my job.',
        masterExam:
          'It was a wonderful opportunity to further deepen my existing knowledge in the baking craft while also learning much new. Of course, it also fills me with pride to pass on my expertise as a master baker to future generations. Moreover, I look forward to taking on more responsibility in the team and contributing my expertise for the benefit of the company.',
      },
      'Maximilian Noventa': {
        jobLove:
          "What I particularly love about my job as a baker is the incredible variety. No day is the same, and we have the opportunity to be really creative in our work in the bakery. It's simply great to have the result of our efforts right before our eyes – our baked breads. And honestly: it not only smells incredibly good here, it also tastes simply amazing.",
        noventaLove:
          "In short: because we're not just a family business on paper, but we really live it. My father Bernd is already the 7th generation of bakers in the Noventa family, and for me it was natural to follow in these footsteps. It simply feels right to be part of this history and to continue the craft that has shaped our family for so long with passion.",
        masterExam:
          "The decision to take the master exam came from my desire to further improve my skills and knowledge. I wanted to face the challenge and dive even deeper into the craft. Our profession is constantly evolving, and it's important to me to always be up to date. The master exam was also a great step for me personally to get the best out of myself and my work.",
      },
    },
  },
}

export default function BakerDetailPage() {
  const { slug } = useParams() as { slug: string }
  const language = useLanguageStore((state) => state.language)
  const baker = bakers.find((b) => slugify(b.name) === slug)
  if (!baker) return notFound()

  const getTranslatedRole = (role: string) => {
    if (role === 'Mitglied der Geschäftsleitung') {
      return translations[language].roles.management
    }
    return role
  }

  const getTranslatedDepartment = (department: string) => {
    const deptMap: Record<string, keyof typeof translations.de.departments> = {
      'Leitung Nachtschicht': 'nightShift',
      'Leitung Tagschicht': 'dayShift',
      Brot: 'bread',
      'Brot Nachtschicht': 'breadNightShift',
      'Leitung Brot Tagschicht': 'breadDayShift',
      Brötchen: 'rolls',
      Feingebäck: 'pastry',
      'Leitung Konditorei': 'confectionery',
    }
    return translations[language].departments[deptMap[department] || 'bread']
  }

  const getTranslatedStatementLabel = (label: string) => {
    if (label.includes('Was mag ich besonders an meinem Job')) {
      return translations[language].statements.jobLove
    }
    if (label.includes('Warum arbeite ich gerne bei Noventa')) {
      return translations[language].statements.noventaLove
    }
    if (label.includes('Was hat mich dazu bewegt meine Meisterprüfung abzulegen')) {
      return translations[language].statements.masterExam
    }
    return label
  }

  const getTranslatedStatementText = (name: string, label: string) => {
    const bakerTranslations = translations[language].statementTexts[name]
    if (!bakerTranslations) return ''

    if (label.includes('Was mag ich besonders an meinem Job')) {
      return bakerTranslations.jobLove
    }
    if (label.includes('Warum arbeite ich gerne bei Noventa')) {
      return bakerTranslations.noventaLove
    }
    if (label.includes('Was hat mich dazu bewegt meine Meisterprüfung abzulegen')) {
      return bakerTranslations.masterExam
    }
    return ''
  }

  const getStatementIcon = (label: string) => {
    if (label.includes('Was mag ich besonders an meinem Job')) {
      return <FaHeart className="h-5 w-5" />
    }
    if (label.includes('Warum arbeite ich gerne bei Noventa')) {
      return <FaStar className="h-5 w-5" />
    }
    if (label.includes('Was hat mich dazu bewegt meine Meisterprüfung abzulegen')) {
      return <FaGraduationCap className="h-5 w-5" />
    }
    return <FaBreadSlice className="h-5 w-5" />
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-12 transition-colors duration-200 md:px-6 lg:px-8 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"
    >
      <div className="mx-auto max-w-4xl">
        {}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/about/master-bakers"
            className="group inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[#059669] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-800/80 dark:text-[#10b981]"
            aria-label={translations[language].backToOverview}
          >
            <FaArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            {translations[language].backToOverview}
          </Link>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="overflow-hidden rounded-3xl bg-white/90 shadow-2xl dark:bg-neutral-800/90"
        >
          {}
          <div className="relative h-64 bg-gradient-to-br from-green-100/30 via-emerald-100/25 to-teal-100/30 sm:from-green-100 sm:via-emerald-50 sm:to-teal-100 md:h-80 dark:from-green-900/15 dark:via-emerald-900/10 dark:to-teal-900/15 sm:dark:from-green-900/20 sm:dark:via-emerald-900/10 sm:dark:to-teal-900/20">
            {}
            <div className="absolute top-1/2 left-6 -translate-y-1/2">
              <div className="flex flex-col gap-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-green-400/40 to-emerald-400/40 opacity-60 shadow-lg sm:from-green-400 sm:to-emerald-400"></div>
                <div className="h-7 w-7 rounded-full bg-gradient-to-r from-green-300/35 to-emerald-300/35 opacity-40 shadow-md sm:from-green-300 sm:to-emerald-300"></div>
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-green-500/45 to-emerald-500/45 opacity-80 shadow-lg sm:from-green-500 sm:to-emerald-500"></div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-400/40 to-teal-400/40 opacity-50 shadow-md sm:from-emerald-400 sm:to-teal-400"></div>
              </div>
            </div>

            {}
            <div className="absolute top-1/2 right-6 -translate-y-1/2">
              <div className="flex flex-col gap-6">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-400/40 to-green-400/40 opacity-50 shadow-lg sm:from-emerald-400 sm:to-green-400"></div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-emerald-300/35 to-green-300/35 opacity-30 shadow-md sm:from-emerald-300 sm:to-green-300"></div>
                <div className="h-9 w-9 rounded-full bg-gradient-to-r from-emerald-500/45 to-green-500/45 opacity-70 shadow-lg sm:from-emerald-500 sm:to-green-500"></div>
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-teal-400/40 to-emerald-400/40 opacity-60 shadow-md sm:from-teal-400 sm:to-emerald-400"></div>
              </div>
            </div>

            {}
            <div className="relative mx-auto h-full w-[90%] max-w-2xl sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
              <Image
                src={baker.image}
                alt={baker.alt}
                fill
                className="rounded-2xl object-cover shadow-2xl"
                sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 60vw, 50vw"
                priority={baker.name === 'Wolfgang Weber'}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />

              {}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4">
                <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-1 text-xs font-semibold text-white shadow-lg sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2">
                  🎓 Master Baker
                </div>
              </div>

              {}
              <motion.div
                className="absolute top-4 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-yellow-100 shadow-lg sm:top-5 sm:-right-2 sm:h-8 sm:w-8 sm:border-3 md:h-10 md:w-10 md:border-4 lg:top-7 lg:-right-4 lg:h-14 lg:w-14 dark:border-neutral-700 dark:bg-yellow-900/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-xs sm:text-sm md:text-base lg:text-xl">🥖</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-1 -left-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-pink-100 shadow-lg sm:-bottom-2 sm:-left-2 sm:h-8 sm:w-8 sm:border-3 md:h-10 md:w-10 md:border-4 lg:-bottom-4 lg:-left-4 lg:h-12 lg:w-12 dark:border-neutral-700 dark:bg-pink-900/30"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <span className="text-xs sm:text-sm md:text-base lg:text-xl">🧁</span>
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-amber-100 shadow-lg sm:-right-4 sm:h-7 sm:w-7 sm:border-3 md:-right-6 md:h-9 md:w-9 md:border-4 lg:-right-8 lg:h-11 lg:w-11 dark:border-neutral-700 dark:bg-amber-900/30"
                animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              >
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">🍞</span>
              </motion.div>

              <motion.div
                className="absolute bottom-1/4 -left-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-red-100 shadow-lg sm:-left-6 sm:h-6 sm:w-6 sm:border-3 md:-left-8 md:h-7 md:w-7 md:border-4 lg:-left-10 lg:h-9 lg:w-9 dark:border-neutral-700 dark:bg-red-900/30"
                animate={{ x: [0, -3, 0], y: [0, -4, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              >
                <span className="text-xs sm:text-xs md:text-sm lg:text-base">🥨</span>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-6 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-purple-100 shadow-lg sm:-right-8 sm:h-6 sm:w-6 sm:border-3 md:-right-10 md:h-8 md:w-8 md:border-4 lg:-right-12 lg:h-10 lg:w-10 dark:border-neutral-700 dark:bg-purple-900/30"
                animate={{ y: [0, -7, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 2.3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              >
                <span className="text-xs sm:text-xs md:text-sm lg:text-lg">🥯</span>
              </motion.div>

              <motion.div
                className="absolute bottom-1/3 -left-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green-100 shadow-lg sm:-left-4 sm:h-7 sm:w-7 sm:border-3 md:-left-6 md:h-9 md:w-9 md:border-4 lg:-left-8 lg:h-11 lg:w-11 dark:border-neutral-700 dark:bg-green-900/30"
                animate={{ x: [0, -4, 0], y: [0, -5, 0] }}
                transition={{ duration: 2.7, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              >
                <span className="text-xs sm:text-sm md:text-base lg:text-lg">🥖</span>
              </motion.div>

              <motion.div
                className="absolute top-2/3 -right-4 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-blue-100 shadow-lg sm:-right-6 sm:h-5 sm:w-5 sm:border-3 md:-right-8 md:h-6 md:w-6 md:border-4 lg:-right-10 lg:h-8 lg:w-8 dark:border-neutral-700 dark:bg-blue-900/30"
                animate={{ y: [0, -6, 0], rotate: [0, 4, 0] }}
                transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
              >
                <span className="text-xs sm:text-xs md:text-xs lg:text-sm">🥨</span>
              </motion.div>

              <motion.div
                className="absolute bottom-1/2 flex h-4 w-4 -translate-y-7 items-center justify-center rounded-full border-2 border-white bg-yellow-100 shadow-lg sm:-left-4 sm:h-5 sm:w-5 sm:border-3 md:-left-6 md:h-7 md:w-7 md:border-4 lg:-left-14 lg:h-9 lg:w-9 dark:border-neutral-700 dark:bg-yellow-900/30"
                animate={{ x: [0, -6, 0], y: [0, -3, 0] }}
                transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
              >
                <span className="text-xs sm:text-xs md:text-xs lg:text-sm">🥐</span>
              </motion.div>
            </div>

            {}
            <div className="absolute top-6 left-12">
              <div className="h-4 w-4 animate-pulse rounded-full bg-green-400/35 opacity-30 shadow-md sm:bg-green-400"></div>
            </div>
            <div className="absolute bottom-12 left-16">
              <div
                className="h-3 w-3 animate-pulse rounded-full bg-emerald-400/35 opacity-40 sm:bg-emerald-400"
                style={{ animationDelay: '0.5s' }}
              ></div>
            </div>
            <div className="absolute top-12 right-12">
              <div
                className="h-5 w-5 animate-pulse rounded-full bg-teal-400/35 opacity-35 sm:bg-teal-400"
                style={{ animationDelay: '0.8s' }}
              ></div>
            </div>
            <div className="absolute right-16 bottom-6">
              <div
                className="h-4 w-4 animate-pulse rounded-full bg-green-400/35 opacity-25 sm:bg-green-400"
                style={{ animationDelay: '1.2s' }}
              ></div>
            </div>

            {}
            <div className="absolute top-1/4 left-20 opacity-20">
              <div className="h-2 w-2 rounded-full bg-green-500/35 sm:bg-green-500"></div>
            </div>
            <div className="absolute bottom-1/4 left-24 opacity-15">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500/35 sm:bg-emerald-500"></div>
            </div>
            <div className="absolute top-1/3 right-20 opacity-25">
              <div className="h-1 w-1 rounded-full bg-teal-500/35 sm:bg-teal-500"></div>
            </div>
            <div className="absolute right-24 bottom-1/3 opacity-20">
              <div className="h-2.5 w-2.5 rounded-full bg-green-400/35 sm:bg-green-400"></div>
            </div>

            {}
            <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-green-100/20 to-transparent sm:from-green-100 dark:from-green-900/15 sm:dark:from-green-900/20"></div>
            <div className="absolute top-0 right-0 h-full w-1/4 bg-gradient-to-l from-teal-100/20 to-transparent sm:from-teal-100 dark:from-teal-900/15 sm:dark:from-teal-900/20"></div>
          </div>

          {}
          <div className="p-8">
            {}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h1
                className="mb-4 text-4xl font-bold text-[#059669] transition-colors duration-200 md:text-5xl lg:text-6xl dark:text-[#10b981]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {baker.name}
              </h1>

              {baker.role && (
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    <FaUserTie className="h-5 w-5" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {getTranslatedRole(baker.role)}
                  </p>
                </div>
              )}

              {}
              <div className="grid gap-4 md:grid-cols-3">
                {baker.department && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-4 dark:from-green-900/20 dark:to-emerald-900/20"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <FaUsers className="h-5 w-5 text-[#059669] dark:text-[#10b981]" />
                      <span className="font-semibold text-[#059669] dark:text-[#10b981]">
                        {translations[language].department}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {getTranslatedDepartment(baker.department)}
                    </p>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-4 dark:from-green-900/20 dark:to-emerald-900/20"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <FaCalendar className="h-5 w-5 text-[#059669] dark:text-[#10b981]" />
                    <span className="font-semibold text-[#059669] dark:text-[#10b981]">
                      {translations[language].since}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{baker.since}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-4 dark:from-green-900/20 dark:to-emerald-900/20"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <FaAward className="h-5 w-5 text-[#059669] dark:text-[#10b981]" />
                    <span className="font-semibold text-[#059669] dark:text-[#10b981]">
                      {translations[language].masterSince}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{baker.masterSince}</p>
                </motion.div>
              </div>
            </motion.div>

            {}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-[#059669] dark:text-[#10b981]">
                {language === 'de' ? 'Persönliche Einblicke' : 'Personal Insights'}
              </h2>

              {baker.statements.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  className="rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 shadow-lg dark:from-green-900/20 dark:to-emerald-900/20"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      {getStatementIcon(s.label)}
                    </div>
                    <h3 className="text-lg font-semibold text-[#059669] dark:text-[#10b981]">
                      {getTranslatedStatementLabel(s.label)}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {getTranslatedStatementText(baker.name, s.label)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
