import { Language } from '@/app/store/languageStore'

interface BakerTranslation {
  role: string
  department: string
  statements: {
    job: {
      label: string
      text: string
    }
    company: {
      label: string
      text: string
    }
    master: {
      label: string
      text: string
    }
  }
}

export const bakersTranslations: Record<Language, Record<string, BakerTranslation>> = {
  de: {
    'Wolfgang Weber': {
      role: 'Mitglied der Geschäftsleitung',
      department: 'Leitung Nachtschicht',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'In meinem Beruf als Bäckermeister liebe ich es, Verantwortung zu übernehmen und jeden Tag hochwertige Backwaren für unsere Gäste herzustellen. Dabei ist es natürlich auch sehr spannend neue Produkte für unser Sortiment zu entwickeln.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Es ist schön für ein Familienunternehmen arbeiten zu können, bei dem wir alle per du sind. Es finden Mitarbeiterevents statt, die uns als noventas-Familie noch enger zusammenschweißen. Zusätzlich bringt mein Beruf immer wieder neue Herausforderungen mit sich, sodass es jederzeit eine gute Abwechslung gibt.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Neben den Vorteilen der persönlichen Weiterentwicklung, wollte ich einfach mein Fachwissen an die nächste Generation weitergeben.',
        },
      },
    },
    'Martin Schiller': {
      role: 'Mitglied der Geschäftsleitung',
      department: 'Leitung Tagschicht',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'Als Bäcker gibt es einfach keinen Stillstand. Ganz im Gegenteil: Mein Beruf lebt von ständigem Fortschritt, da die Kundenerwartungen an unser Backwaren-Sortiment unverändert hoch sind. Wir haben somit immer wieder neue spannende Möglichkeiten und Chancen.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Ganz einfach gesagt: weil es nie bei uns langweilig wird. Man merkt einfach, dass in unserer Backstube alles Hand in Hand geht und jeder alles für unser Handwerk gibt, um die Brötchen, Brote & Co. von morgen mit viel Liebe herzustellen.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Natürlich ist eine Weiterbildung wie die Meisterprüfung ein ambitioniertes Ziel, um in Zukunft auch sein Gehalt aufzubessern. Neben dem finanziellen Aspekt, hat mich aber auch die Herausforderung gereizt, um mein Wissen noch weiter zu vertiefen.',
        },
      },
    },
    'Thilo Müller': {
      role: '',
      department: 'Brot Nachtschicht',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'In unserem Bäckerhandwerk bieten wir nicht nur eine reichhaltige Auswahl an beliebten Backwaren, sondern überraschen unsere Kunden auch mit ständig neuen, kreativen Produkten. Diese kontinuierliche Innovationsfreude schafft nicht nur eine spannende Vielfalt, sondern stellt uns als Bäckermeister auch vor fortlaufend spannende Herausforderungen. Es wird als Bäcker also nie langweilig!',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Ich schätze die Arbeit hier sehr. Wir scheuen als Bäckerei nicht davor zurück, in unserer Backstube kreativ zu werden und neue Backwaren zu kreieren. Besonders beeindruckend finde ich, dass sich unsere Bäckerei nicht nur ambitionierte Ziele setzt, sondern diese mit echtem Teamgeist und Entschlossenheit auch konsequent umsetzt. Noventa geht überdies weit über den beruflichen Rahmen hinaus und setzt sich auch aktiv für das Wohlbefinden seiner Mitarbeiter ein – ein schönes Beispiel dafür ist unser traditionelles Oktoberfest, das nicht nur ein geselliges Highlight ist, sondern auch den Zusammenhalt unter uns Kollegen stärkt.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Das Absolvieren meiner Meisterprüfung war für mich eine persönliche Herausforderung, angetrieben von dem Wunsch, meine fachlichen Qualifikationen als Bäcker so zu erweitern, um mehr Verantwortung in unserer Backstube zu übernehmen.',
        },
      },
    },
    'Bernd Gerhardt': {
      role: '',
      department: 'Brötchen',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'Ich liebe es, Bäcker zu sein, weil der Beruf ständig hohe Ansprüche an meine Fähigkeiten stellt. Man ist also immer gefordert! Er erfordert aber nicht nur handwerkliches Geschick, sondern auch ein gutes Gespür für Geschmack und Qualität.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Mit über 150 Fachgeschäften und knapp 1.900 Mitarbeitern zählt noventas vermutlich zu den größeren Unternehmen in der Region. Das bringt für mich als Mitarbeiter eine gewisse berufliche und private Sicherheit. Außerdem schätze ich die Tradition, die mit unserer Familienbäckerei seit 1928 verbunden ist. Es ist etwas Besonderes, Teil einer langjährigen Geschichte zu sein und unser Handwerk immer wieder neuen jungen Generationen weiterzugeben.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Die Entscheidung, die Meisterprüfung abzulegen, war für mich eine Investition in meine berufliche Zukunft. Die Weiterbildung bot mir nochmals ein tieferes Verständnis für die feinen Nuancen unserer Backwaren, sondern auch die Möglichkeit, meine Fähigkeiten und Kenntnisse als Bäcker auf ein noch höheres Level zu bringen.',
        },
      },
    },
    'Bernd Müller': {
      role: '',
      department: 'Leitung Brot Tagschicht',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'Es gibt viele Gründe, warum ich gerne Bäcker bin. Zum einen erfordert es eine gewisse Kreativität, aber auch viel Verständnis für Handwerk und fachliches Wissen, um Brot, Gebäck und andere Backwaren herzustellen.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Das Verhältnis zwischen den Kollegen und der Geschäftsleitung ist einfach sehr positiv. Es wird viel Wert darauf gelegt, auch neue Projekte und Ideen zu fördern. Außerdem wird man bei der beruflichen Weiterbildung unterstützt – bei mir zum Beispiel als Brotsommelier im Jahr 2020. Es ist toll, Teil eines Familienunternehmens zu sein, das sich immer Ziele setzt und dabei in ihre Mitarbeiter investiert.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Neben dem persönlichen Aspekt, dass ich mich gerne weiterbilde, trage ich auch als Bäckermeister zur Erhaltung und Weitergabe traditioneller Backtechniken sowie Rezepten bei. Zudem kann ich mit der Meisterprüfung die Qualität von handwerklich hergestellten Backwaren nochmals fördern.',
        },
      },
    },
    'Thorsten Weber': {
      role: '',
      department: 'Feingebäck',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'Mich faszinieren einfach die großen Stückzahlen, die wir täglich in unserer Backstube für unsere Gäste produzieren dürfen. Hierzu bedarf es regelmäßig einer sorgfältigen Organisation und Planung im Vorfeld.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Das persönliche Verhältnis zu Kollegen geht sogar bis hoch in die Geschäftsführung. Man spürt einfach, das Noventa wirklich ein Familienunternehmen ist. Hinzu kommt das große Angebot an Mitarbeiter-Benefits, die ich wirklich gerne in Anspruch nehme.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Mit der Meisterprüfung konnte ich meine Fähigkeiten sowie Expertise im Bäckerhandwerk erweitern. Das bietet mir nicht nur bessere berufliche Chancen, sondern ich konnte auch noch mehr Verantwortung bei Noventa übernehmen.',
        },
      },
    },
    'Florian Martin': {
      role: '',
      department: 'Leitung Konditorei',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'Das Arbeiten in einem funktionierenden Team sowie die Planung und Organisation der Produktionsabläufe.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Bei Noventa wird Familienunternehmen gelebt und man kann aktiv an der Gestaltung der Zukunft teilhaben.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Nachdem ich die Konditor- und Bäcker-Ausbildung abgeschlossen hatte, hatte ich bereits mit meinen Anfang 20 Jahren die Chance bekommen als Abteilungsleiter zu arbeiten. So war für mich der nächste logische Schritt die Meisterprüfung zu machen, um mich fachlich und persönlich weiterzubilden.',
        },
      },
    },
    'Sebastian Wiegand': {
      role: '',
      department: 'Brot Nachtschicht',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'Mich fasziniert das Ergebnis, welches man am Ende des Tages sieht. Es ist schön zu wissen, dass wir Menschen mit unseren Backwaren glücklich machen.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Der lockere Umgang mit Kollegen und Vorgesetzten, sowie die täglich Herausforderungen in meinem Job.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Es war eine wunderbare Möglichkeit, mein bereits vorhandenes Wissen im Bäckerhandwerk weiter zu vertiefen und mir zugleich viel Neues anzueignen. Natürlich erfüllt es mich auch mit Stolz, meine Expertise als Bäckermeister künftig an die kommenden Generationen weiterzugeben. Zudem freue ich mich darauf, mehr Verantwortung im Team zu übernehmen und meine Fachkompetenz zum Wohle des Unternehmens einzubringen.',
        },
      },
    },
    'Maximilian Noventa': {
      role: '',
      department: 'Brot',
      statements: {
        job: {
          label: 'Was mag ich besonders an meinem Job:',
          text: 'Was ich an meinem Job als Bäcker besonders liebe, ist die unglaubliche Vielseitigkeit. Kein Tag gleicht dem anderen, und wir haben die Möglichkeit, in unserer Arbeit in der Backstube wirklich kreativ zu sein. Es ist einfach toll, das Ergebnis unserer Mühe direkt vor Augen zu haben – unsere gebackenen Brote. Und mal ehrlich: Es riecht hier nicht nur unglaublich gut, es schmeckt auch einfach.',
        },
        company: {
          label: 'Warum arbeite ich gerne bei Noventa:',
          text: 'Kurzum: Weil wir ein Familienunternehmen nicht nur auf dem Papier sind, sondern es wirklich leben. Mein Vater Bernd ist bereits die 7. Generation von Bäckern der noventaschen Familien, und für mich war es selbstverständlich, dann auch in diese Fußstapfen zu treten. Es fühlt sich einfach richtig an, ein Teil dieser Geschichte zu sein und das Handwerk, das unsere Familie schon so lange prägt, mit Leidenschaft weiterzuführen.',
        },
        master: {
          label: 'Was hat mich dazu bewegt meine Meisterprüfung abzulegen:',
          text: 'Die Entscheidung, die Meisterprüfung abzulegen, kam für mich aus dem Wunsch heraus, meine Fähigkeiten und Kenntnisse weiter zu verbessern. Ich wollte mich der Herausforderung stellen und noch tiefer in das Handwerk eintauchen. Unser Beruf entwickelt sich ständig weiter, und es ist mir wichtig, immer auf dem neuesten Stand zu sein. Die Meisterprüfung war aber auch ein toller Schritt für mich persönlich, um das Beste aus mir und meiner Arbeit herauszuholen.',
        },
      },
    },
  },
  en: {
    'Wolfgang Weber': {
      role: 'Member of Management',
      department: 'Night Shift Management',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: "As a master baker, I love taking responsibility and producing high-quality baked goods for our customers every day. It's also very exciting to develop new products for our range.",
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: "It's great to work for a family business where we're all on a first-name basis. There are employee events that bring us closer together as the noventas family. Additionally, my job always brings new challenges, so there's always good variety.",
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: 'Besides the advantages of personal development, I simply wanted to pass on my expertise to the next generation.',
        },
      },
    },
    'Martin Schiller': {
      role: 'Member of Management',
      department: 'Day Shift Management',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: "As a baker, there's never a standstill. Quite the opposite: my profession thrives on constant progress, as customer expectations for our baked goods range remain high. We thus always have new exciting opportunities and chances.",
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: "Simply put: because it never gets boring here. You can really feel that everything in our bakery works hand in hand, and everyone gives their all for our craft to produce tomorrow's rolls, bread & more with lots of love.",
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: "Of course, further education like the master's examination is an ambitious goal to improve one's salary in the future. Besides the financial aspect, I was also attracted by the challenge to deepen my knowledge further.",
        },
      },
    },
    'Thilo Müller': {
      role: '',
      department: 'Bread Night Shift',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: 'In our bakery craft, we not only offer a rich selection of popular baked goods but also surprise our customers with constantly new, creative products. This continuous joy of innovation not only creates exciting variety but also presents us master bakers with ongoing exciting challenges. It never gets boring as a baker!',
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: "I really appreciate the work here. As a bakery, we're not afraid to be creative in our bakery and create new baked goods. I find it particularly impressive that our bakery not only sets ambitious goals but also consistently implements them with real team spirit and determination. Noventa goes far beyond the professional framework and actively promotes the well-being of its employees – a beautiful example of this is our traditional Oktoberfest, which is not only a social highlight but also strengthens the cohesion among us colleagues.",
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: "Taking my master's examination was a personal challenge for me, driven by the desire to expand my professional qualifications as a baker to take on more responsibility in our bakery.",
        },
      },
    },
    'Bernd Gerhardt': {
      role: '',
      department: 'Rolls',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: "I love being a baker because the profession constantly demands high standards of my abilities. You're always challenged! It requires not only craftsmanship but also a good sense of taste and quality.",
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: "With over 150 specialty stores and nearly 1,900 employees, noventas is probably one of the larger companies in the region. This brings a certain professional and private security for me as an employee. I also appreciate the tradition associated with our family bakery since 1928. It's something special to be part of a long history and to pass on our craft to new young generations time and again.",
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: "The decision to take the master's examination was an investment in my professional future. The further education not only offered me a deeper understanding of the fine nuances of our baked goods but also the opportunity to bring my abilities and knowledge as a baker to an even higher level.",
        },
      },
    },
    'Bernd Müller': {
      role: '',
      department: 'Bread Day Shift Management',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: 'There are many reasons why I enjoy being a baker. On one hand, it requires a certain creativity, but also a lot of understanding of craftsmanship and professional knowledge to produce bread, pastries, and other baked goods.',
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: "The relationship between colleagues and management is simply very positive. There's a lot of emphasis on promoting new projects and ideas. Additionally, you're supported in professional development – in my case, for example, as a bread sommelier in 2020. It's great to be part of a family business that always sets goals and invests in its employees.",
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: "Besides the personal aspect of wanting to further my education, as a master baker I also contribute to preserving and passing on traditional baking techniques and recipes. Moreover, with the master's examination, I can further promote the quality of handcrafted baked goods.",
        },
      },
    },
    'Thorsten Weber': {
      role: '',
      department: 'Pastries',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: "I'm simply fascinated by the large quantities we get to produce daily in our bakery for our customers. This regularly requires careful organization and planning in advance.",
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: "The personal relationship with colleagues goes all the way up to management. You can really feel that Noventa is truly a family business. Additionally, there's the great range of employee benefits that I really enjoy taking advantage of.",
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: "With the master's examination, I was able to expand my abilities and expertise in the bakery craft. This not only offers me better professional opportunities but also allowed me to take on more responsibility at Noventa.",
        },
      },
    },
    'Florian Martin': {
      role: '',
      department: 'Pastry Management',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: 'Working in a functioning team as well as planning and organizing production processes.',
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: 'At Noventa, family business is lived and you can actively participate in shaping the future.',
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: "After completing my pastry chef and baker training, I already had the chance to work as a department head in my early 20s. So for me, the next logical step was to take the master's examination to further my professional and personal development.",
        },
      },
    },
    'Sebastian Wiegand': {
      role: '',
      department: 'Bread Night Shift',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: "I'm fascinated by the result you see at the end of the day. It's nice to know that we make people happy with our baked goods.",
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: 'The relaxed relationship with colleagues and superiors, as well as the daily challenges in my job.',
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: 'It was a wonderful opportunity to further deepen my existing knowledge in the bakery craft while also learning many new things. Of course, it also fills me with pride to pass on my expertise as a master baker to future generations. Moreover, I look forward to taking on more responsibility in the team and contributing my professional competence for the benefit of the company.',
        },
      },
    },
    'Maximilian Noventa': {
      role: '',
      department: 'Bread',
      statements: {
        job: {
          label: 'What I particularly like about my job:',
          text: "What I particularly love about my job as a baker is the incredible variety. No day is the same, and we have the opportunity to be really creative in our work in the bakery. It's simply great to see the result of our efforts directly before our eyes – our baked breads. And honestly: it not only smells incredibly good here, it also tastes simply amazing.",
        },
        company: {
          label: 'Why I enjoy working at Noventa:',
          text: "In short: because we're not just a family business on paper, but we really live it. My father Bernd is already the 7th generation of bakers in the Noventa family, and for me it was natural to follow in these footsteps. It simply feels right to be part of this history and to passionately continue the craft that has shaped our family for so long.",
        },
        master: {
          label: "What motivated me to take my master's examination:",
          text: "The decision to take the master's examination came from my desire to further improve my abilities and knowledge. I wanted to face the challenge and dive even deeper into the craft. Our profession is constantly evolving, and it's important to me to always be up to date. The master's examination was also a great step for me personally to get the best out of myself and my work.",
        },
      },
    },
  },
}
