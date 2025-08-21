export type Language = 'de' | 'en'

type FitnessBaeckerTranslations = {
  [key in Language]: {
    hero: {
      title: string
      subtitle: string
      description: string
    }
    intro: {
      title: string
      description: string
      features: string[]
    }
    trainerTeam: {
      title: string
      description: string
      caption: string
      button: string
    }
    calendar: {
      title: string
      events: {
        runningSchool: {
          title: string
          start: string
          description: string
          image: string
          link: string
        }
        fullBodyWorkout: {
          title: string
          start: string
          description: string
          image: string
          link: string
        }
        backTraining: {
          title: string
          start: string
          description: string
          image: string
          link: string
        }
        alpineTour: {
          title: string
          start: string
          description: string
          image: string
          link: string
        }
        mtbKidsCamp: {
          title: string
          start: string
          description: string
          image: string
          link: string
        }
        bikeDay: {
          title: string
          start: string
          description: string
          image: string
          link: string
        }
        ebikePower: {
          title: string
          start: string
          description: string
          image: string
          link: string
        }
      }
      button: string
    }
    alpineTour: {
      title: string
      subtitle: string
      intro: {
        title: string
        description: string
        maxParticipants: string
        period: string
      }
      info: {
        title: string
        start: string
        trainer: string
        price: string
        button: string
      }
    }
    backTraining: {
      title: string
      subtitle: string
      intro: {
        title: string
        description: string
        maxParticipants: string
      }
      details: {
        title: string
        start: string
        location: string
        trainer: string
        price: string
        button: string
      }
      schedule: {
        title: string
        note: string
      }
    }
    fullBodyWorkout: {
      title: string
      subtitle: string
      description: string
      intro: {
        title: string
        description: string
        maxParticipants: string
      }
      details: {
        title: string
        start: string
        time: string
        location: string
        trainer: string
        price: string
        button: string
        capacity: string
        requirements: string[]
      }
      schedule: {
        title: string
        note: string
      }
      requirementsTitle: string
      highlightsTitle: string
      highlights: string[]
      button: string
    }
    bikeDay: {
      title: string
      description: string
      details: {
        date: string
        time: string
        location: string
        capacity: string
        price: string
        requirements: string[]
      }
      highlights: string[]
    }
    registration: {
      title: string
      subtitle: string
      form: {
        event: string
        firstName: string
        lastName: string
        address: string
        addressExtra: string
        city: string
        zip: string
        phone: string
        mobile: string
        email: string
        birthDate: string
        size: string
        transfer: string
        transferOptions: {
          yes: string
          no: string
        }
        privacy: string
        cancellation: string
        submit: string
      }
      success: {
        title: string
        message: string
        newRegistration: string
      }
      notes: {
        confirmation: string
        cancellation: {
          title: string
          thirtyDays: string
          tenDays: string
          note: string
        }
      }
    }
    runningSchool: {
      title: string
      subtitle: string
      description: string
      details: {
        start: string
        location: string
        trainer: string
        price: string
        button: string
      }
      schedule: {
        title: string
        note: string
      }
      months: {
        april: string
        may: string
        june: string
        july: string
        august: string
        september: string
      }
      events: {
        kickoff: string
        basis: string
        rhonRun: string
        experienceRun: string
        endurance: string
        technique: string
        strength: string
        speed: string
        rhonEnergy: string
        ganzwegMarathon: string
        finale: string
      }
    }
    trainers: {
      title: string
      description: string
      trainers: {
        harald: {
          name: string
          title: string
          bio: string
          image: string
          specialties: {
            ebike: {
              name: string
              description: string
            }
            endurance: {
              name: string
              description: string
            }
            group: {
              name: string
              description: string
            }
          }
          certifications: string[]
        }
        maria: {
          name: string
          title: string
          bio: string
          image: string
          specialties: {
            running: {
              name: string
              description: string
            }
            nutrition: {
              name: string
              description: string
            }
            marathon: {
              name: string
              description: string
            }
          }
          certifications: string[]
        }
        thomas: {
          name: string
          title: string
          bio: string
          image: string
          specialties: {
            functional: {
              name: string
              description: string
            }
            rehab: {
              name: string
              description: string
            }
            core: {
              name: string
              description: string
            }
          }
          certifications: string[]
        }
      }
    }
    backTrainingSummer: {
      title: string
      description: string
      maxParticipants: string
    }
    ebikePower: {
      title: string
      description: string
      detailsTitle: string
      dateLabel: string
      date: string
      timeLabel: string
      time: string
      locationLabel: string
      location: string
      capacityLabel: string
      capacity: string
      priceLabel: string
      price: string
      requirementsTitle: string
      requirements: string[]
      highlightsTitle: string
      highlights: string[]
      button: string
    }
    mtbKidsCamp: {
      title: string
      subtitle: string
      intro: {
        title: string
        description: string
        maxParticipants: string
        requirements: string
      }
      details: {
        title: string
        start: string
        location: string
        trainer: string
        price: string
        button: string
      }
      schedule: {
        title: string
        note: string
        dates: {
          group: string
          events: {
            date: string
            time: string
            location: string
            theme: string
          }[]
        }[]
      }
    }
  }
}

export const fitnessBaeckerTranslations: FitnessBaeckerTranslations = {
  de: {
    hero: {
      title: 'BEWEGUNG UND ERNÄHRUNG',
      subtitle: 'Entdecken Sie unsere vielfältigen Fitnessprogramme',
      description:
        'Von Laufschule bis Alpentour - bei uns finden Sie das perfekte Training für Ihre Ziele',
    },
    intro: {
      title: 'FITNESSBÄCKER',
      description:
        'Bewegung und Ernährung: Damit befassen wir uns tagtäglich, um unsere Kunden fit und gesund zu halten. Darum haben wir uns in den letzten Jahren als Fitnessbäcker immer stärker auf eine Kombination dieser beiden Pfeiler eines optimalen Lebensstils konzentriert. Und das möchten wir natürlich an Sie weiter geben. Über den Fitnessbäcker haben wir dazu den optimalen Weg gefunden!',
      features: [
        'Professionelle Trainer',
        'Vielfältige Programme',
        'Gemeinschaftserlebnis',
        'Gesunde Ernährung',
      ],
    },
    trainerTeam: {
      title: 'UNSERE TRAINER',
      description:
        'Nicht nur bei unseren Backwaren setzen wir auf Qualität, sondern auch bei unseren Mitarbeitern. Und natürlich auch bei unseren Trainern für den Fitnessbäcker.',
      caption:
        'v. l. n. r.: Sascha Wingenfeld, Markus Hofmann, Verena Schmelz, Julia Herbert, Mandana Hoffmann, Nicole Knacker, Elke Seng, Tanja Böhm. Es fehlen: Wolfgang Obermahr, Reiner Menz, Mario Henning',
      button: 'mehr Lesen',
    },
    calendar: {
      title: 'Kalender',
      events: {
        runningSchool: {
          title: 'Laufschule',
          start: 'Start: 24. April, 19.00 Uhr, Treffpunkt wechselnd',
          description:
            'Bei unserer Laufschule treffen wir uns jeden Donnerstag an verschiedenen Orten, um zu trainieren. Alle Gruppen werden von erfahrenen Lauf-Trainern betreut. Jede Einheit steht unter einem besonderen Motto, um etwa Technik oder Schnelligkeit zu verbessern.',
          image: '/images/Laufschule-Fitnessbaecker-Baeckerei-Noventa-1.jpg',
          link: '/fitness-baker/running-school',
        },
        fullBodyWorkout: {
          title: 'Full-Body-Workout',
          start: 'Start: 04. Juni, 19.45 Uhr, Sportplatz Weyhers',
          description:
            'Power-Workout unter freiem Himmel. Im Zirkeltraining gibt es pures Training und sportliche Herausforderung. Wichtigstes Trainingsgerät ist der eigene Körper – dazu kommen einfache, aber effiziente Hilfsmittel wie Kettlebell, TRX und Medizinbälle.',
          image: '/images/Zirkeltraining-Fitnessbaecker-Baeckerei-Noventa-1-768x463.jpg',
          link: '/fitness-baker/full-body-workout',
        },
        backTraining: {
          title: 'Rückentraining 2.0 Sommer',
          start: 'Start: 04. Juni, 18.30 Uhr, Sportplatz Weyhers',
          description:
            'In unserem Sommerkurs findet nicht das klassische Rückentraining statt. Wir verlagern die Übungen ins TRX, sodass mit Hilfe eines Seil- und Schlingensystems die Koordination geschult wird. So heben wir das Rückentraining auf ein neues Level.',
          image: '/images/rucken-traning.jpg',
          link: '/fitness-baker/back-training-summer',
        },
        alpineTour: {
          title: 'Alpentour 2025',
          start: 'Tour-Zeitraum: 22. bis 27. Juni 2025',
          description:
            'Unsere sechstägige Alpentour 2025 startet von der Gamsstadt Kitzbühel und führt über die Kitzbüheler Alpen und den Nationalpark Hohe Tauern in die Sonnenstadt Lienz – hier sind die Dolomiten zum Greifen nah.',
          image: '/images/Baeckerei_Noventa_veranstaltet_Alpentour_2025-768x512.jpg',
          link: '/fitness-baker/alpine-tour-2025',
        },
        mtbKidsCamp: {
          title: 'MTB-Kids-Camps 2025',
          start: 'Start: 11. August, 9.00 Uhr, Sportplatz Keinhausen',
          description:
            'Unter professioneller Anleitung heizen wir zwei Tage lang durch eine große Cross-Strecke mit Trails, Rampen und Hindernissen. Um die Sicherheit zu verbessern, gibt es Geschicklichkeitsparcours und Bremstraining. Das gibt den Kindern auch für den Alltag ein sicheres Fahrgefühl. Für die bestmögliche Betreuung teilen wir die Termine in zwei Altersgruppen auf.',
          image: '/images/MTB-Kids-Camp-Fitnessbaecker-Baeckerei-Noventa-1-768x463.jpg',
          link: '/fitness-baker/mtb-kids-camp',
        },
        bikeDay: {
          title: 'Fitnessbäcker-Bike-Day',
          start: 'Start: 30. August, 14.00 Uhr, Sportplatz Keinhausen',
          description:
            "Erst heißt's: Techniktraining auf einem Parcours, mit Paletten, Rampen & Co. Hier feilen wir gemeinsam an Skills und Sicherheit. Danach geht's direkt raus auf eine abwechslungsreiche Tour rund um Keinhausen. Im Anschluss lassen wir den Fitnessbäcker-Bike-Day ganz entspannt bei einem leckeren BBQ ausklingen.",
          image: '/images/MTB-Fitness-Camp-Fitnessbaecker-Baeckerei-Noventa-768x463.jpg',
          link: '/fitness-baker/bike-day',
        },
        ebikePower: {
          title: 'E-Bike Power',
          start: 'Start: 06. September, 10.00 Uhr, Sportplatz Keinhausen',
          description:
            'Lernen Sie von E-Bike-Experte Harald Döppner und entdecken Sie die wunderschöne Rhön-Region auf modernsten Elektrofahrrädern. Perfekt für Anfänger und erfahrene Radfahrer.',
          image: '/images/E-Bike-Power-Baeckerei-Noventa-1-768x469.jpg',
          link: '/fitness-baker/ebike-power',
        },
      },
      button: 'Alle Veranstaltungen anzeigen',
    },
    alpineTour: {
      title: 'Alpentour 2025',
      subtitle: 'Kitzbühel → Lienz · 6 Tage · Für fitte 15–60-Jährige',
      intro: {
        title: 'Sechstägige Alpentour: Kitzbühel – Lienz',
        description:
          'Unsere sechstägige Alpentour 2025 startet von der Gamsstadt Kitzbühel und führt über die Kitzbüheler Alpen und den Nationalpark Hohe Tauern in die Sonnenstadt Lienz – hier sind die Dolomiten zum Greifen nah. Unsere Teilnehmer erwarten wieder beeindruckende Panoramen und eine abwechslungsreiche Natur, die sicherlich jedem in Erinnerung bleiben wird. Von blumenreichen Wiesen bis hin zu schroffen Felswänden ist hier alles zu sehen. Geeignet ist die Tour für fitte 15-Jährige bis trainierte 60-Jährige. Sehr gute Kondition und Ausdauer sowie Trittsicherheit und zweckmäßige Kleidung und Ausrüstung sind notwendige Voraussetzungen für diese Tour.',
        maxParticipants: 'Max. 18 Teilnehmer',
        period: 'Zeitraum: So. 22.06. bis Fr. 27.06.2025',
      },
      info: {
        title: 'Informationen',
        start: 'Start: 22. Juni 2025',
        trainer: 'Trainer: wird noch bekannt gegeben',
        price:
          'Preis: 995 Euro/Person (inkl. 5 Übernachtungen im Hotel bzw. Berghütten, Halbpension, Transfers, Bergführergebühr und einem Teilnehmerpräsent)',
        button: 'JETZT ANMELDEN',
      },
    },
    backTraining: {
      title: 'Rückentraining 2.0 Sommer',
      subtitle: 'Work-Fit-Balance: Ein Ausgleich zum Alltag',
      intro: {
        title: 'Work-Fit-Balance: Ein Ausgleich zum Alltag',
        description:
          'Ein Ausgleich zum Alltag mit unserem Rückentraining 2.0. Gezieltes Rückentraining ist extrem wichtig. Gerade für Berufstätige, die viel sitzen, ist es ein Muss, um im Alter keine chronischen Beschwerden zu bekommen. Neben dem klassischen Rückentraining mit dem eigenen Körpergewicht verlagern wir die Übungen ins TRX, sodass mit Hilfe eines Seil- und Schlingensystems die Koordination und Flexibilität geschult werden. So heben wir das Rückentraining auf ein neues Level.',
        maxParticipants: 'Max. 14 Teilnehmer',
      },
      details: {
        title: 'Rückentraining 2.0 Sommer',
        start: 'Start: 04. Juni 2025',
        location: 'Ort: Sportplatz Weyhers',
        trainer: 'Trainer: Sascha Wingenfeld',
        price: 'Preis: 55 Euro für 4 von 6 Terminen, jeder weitere Termin 12 Euro',
        button: 'Anmeldung Fitnessbäcker',
      },
      schedule: {
        title: 'Termine 2025',
        note: 'Alle Termine und Details auf Anfrage oder vor Ort.',
      },
    },
    fullBodyWorkout: {
      title: 'Full-Body-Workout',
      subtitle: 'Power-Workout unter freiem Himmel',
      description:
        'Im Zirkeltraining gibt es pures Training und sportliche Herausforderung. Wichtigstes Trainingsgerät ist der eigene Körper – dazu kommen einfache, aber effiziente Hilfsmittel wie Kettlebell, TRX und Medizinbälle.',
      intro: {
        title: 'Über den Kurs',
        description:
          'Im Zirkeltraining gibt es pures Training und sportliche Herausforderung. Wichtigstes Trainingsgerät ist der eigene Körper – dazu kommen einfache, aber effiziente Hilfsmittel wie Kettlebell, TRX und Medizinbälle.',
        maxParticipants: 'Max. 20 Teilnehmer',
      },
      details: {
        title: 'Details',
        start: 'Start: 04. Juni, 19:45 Uhr, Sportplatz Weyhers',
        time: 'Zeit: 19:45 – 21:00 Uhr',
        location: 'Ort: Sportplatz Weyhers',
        trainer: 'Trainer: Harald Döppner',
        price: 'Preis: 10 € pro Einheit',
        button: 'Jetzt anmelden',
        capacity: 'Max. 20 Teilnehmer',
        requirements: [
          'Grundlegende Fitness',
          'Bequeme Sportkleidung',
          'Wasserflasche',
          'Handtuch',
        ],
      },
      schedule: {
        title: 'Ablauf',
        note: 'Jeden Dienstag, 19:45 – 21:00 Uhr, von Juni bis September.',
      },
      requirementsTitle: 'Anforderungen',
      highlightsTitle: 'Highlights',
      highlights: [
        'Ganzkörpertraining',
        'Outdoor-Training',
        'Professionelle Betreuung',
        'Kleine Gruppen',
      ],
      button: 'Jetzt anmelden',
    },
    bikeDay: {
      title: 'Fitnessbäcker-Bike-Day',
      description:
        'Ein spannender Tag mit Radaktivitäten, inklusive Geschicklichkeitsparcours, geführter Tour und einem geselligen BBQ zum Ausklang. Perfekt für Familien und Radfahrer aller Leistungsstufen.',
      details: {
        date: '30. August 2025',
        time: '14:00 - 20:00 Uhr',
        location: 'Sportplatz Keinhausen',
        capacity: '50 Teilnehmer',
        price: '39 Euro pro Person (inkl. BBQ)',
        requirements: [
          'Eigenes Fahrrad (beliebiger Typ)',
          'Helm Pflicht',
          'Grundlegende Fahrradfähigkeiten',
          'Kinder unter 14 Jahren müssen von einem Erwachsenen begleitet werden',
        ],
      },
      highlights: [
        'Spaßiger Geschicklichkeitsparcours mit Hindernissen und Herausforderungen',
        'Geführte Tour durch malerische lokale Routen',
        'Fahrradwartungsworkshop',
        'Sicherheitstipps von Radsportexperten',
        'Abendliches BBQ mit anderen Radfahrern',
        'Preise für Geschicklichkeitsparcours-Gewinner',
        'Familienfreundliche Aktivitäten',
        'Professionelle Fotos der Veranstaltung',
      ],
    },
    registration: {
      title: 'Fitnessbäcker Anmeldung',
      subtitle: 'Werde Teil unserer Fitness-Community!',
      form: {
        event: 'Veranstaltung',
        firstName: 'Vorname*',
        lastName: 'Nachname*',
        address: 'Anschrift*',
        addressExtra: 'Anschrift Zusatz',
        city: 'Ort*',
        zip: 'PLZ*',
        phone: 'Telefon*',
        mobile: 'Mobile',
        email: 'E-Mail*',
        birthDate: 'Geb. Datum (TT/MM/JJJJ)*',
        size: 'Konfektionsgröße*',
        transfer: 'Ich benötige einen Transfer (Hin- und Rückreise)*',
        transferOptions: {
          yes: 'JA',
          no: 'NEIN',
        },
        privacy:
          'Ich stimme der Speicherung und Weiterverarbeitung meiner Angaben zu. Zudem stimme ich der Datenschutzvereinbarung dieser Webseite zu.',
        cancellation:
          'Ich akzeptiere die Stornobedingungen zur Alpentour 2025. (Bei Absage der Teilnahme fallen folgende Stornogebühren an: bis 3 Monate vor Tourbeginn 25%; ab 3 Monaten bis zum 20. Tag vor Tourbeginn 50 %; ab 19. bis 2. Tag vor Tourbeginn 75 %; ab 1. Tag vor Reisebeginn oder bei Nichtantritt 90% des Reisepreises)',
        submit: 'Absenden',
      },
      success: {
        title: 'Vielen Dank für deine Anmeldung!',
        message: 'Wir melden uns zeitnah bei dir. Willkommen bei den Fitnessbäckern!',
        newRegistration: 'Neue Anmeldung',
      },
      notes: {
        confirmation:
          'Die Anmeldung zum Fitnessbäcker ist erst nach einer Bestätigung unsererseits verbindlich. Über die jeweiligen Teilnahmegebühren erhalten Sie nach Bearbeitung Ihrer Anmeldung eine Rechnung.',
        cancellation: {
          title: 'Bei Absage der Teilnahme fallen folgende Stornogebühren* an:',
          thirtyDays: '30 Tage vorher: Volle Erstattung der Kosten',
          tenDays: '10 Tage vorher: 50 % Erstattung der Kosten',
          note: '*Hinweis: Für Alpentour und Rennrad-Camp auf Mallorca gelten gesonderte Stornogebühren.',
        },
      },
    },
    runningSchool: {
      title: 'Laufschule',
      subtitle: 'Jeden Donnerstag: Lauftechnik, Ausdauer, Kraft & Erlebnisläufe',
      description:
        'Jeden Donnerstag treffen wir uns an verschiedenen Orten, um eure gesamte Laufperformance zu verbessern. Die Läufer werden in leistungsentsprechende Gruppen eingeteilt. Alle Gruppen werden von erfahrenen Lauf-Trainern betreut, die die verschiedenen Einheiten Technik, Schnelligkeit, Kraft und Ausdauer genau unter die Lupe nehmen werden. Auch für Nordic Walking gibt es eine Gruppe. Besonderheit der Laufschule sind unsere Erlebnisläufe am Ende des Monats auf die Kuppen der Rhön. Von Gersfeld aus geht´s beispielsweise auf den Simmelsberg. Neben viel Spaß und der Gemeinschaft haben wir gemeinsame Ziele: die RhönEnergie-Challenge im Juni und den Ganzweg-Marathon im September. Kostenlos und ohne Anmeldung!',
      details: {
        start: 'Start: 24. April 2025',
        location: 'Ort: wechselnd',
        trainer: 'Trainer: Sascha Wingenfeld und Team',
        price: 'Preis: kostenfrei, keine Anmeldung notwendig',
        button: 'Anmeldung',
      },
      schedule: {
        title: 'Termine 2025',
        note: 'Alle Termine und Details auf Anfrage oder vor Ort.',
      },
      months: {
        april: 'April',
        may: 'Mai',
        june: 'Juni',
        july: 'Juli',
        august: 'August',
        september: 'September',
      },
      events: {
        kickoff: 'Auftakt | Basis festlegen',
        basis: 'Basis festlegen',
        rhonRun: 'Rhönlauf (mit Anmeldung)',
        experienceRun: 'Erlebnis-Lauf',
        endurance: 'Ausdauer aufbauen',
        technique: 'Technik',
        strength: 'Kraft',
        speed: 'Schneller werden',
        rhonEnergy: 'RhönEnergie Challenge (mit Anmeldung)',
        ganzwegMarathon: 'Ganzweg-Marathon (mit Anmeldung)',
        finale: 'Abschluss',
      },
    },
    trainers: {
      title: 'Unsere Expertentrainer',
      description:
        'Lernen Sie unser Team zertifizierter Fitnessprofis kennen, die Ihnen helfen, Ihre Gesundheits- und Fitnessziele zu erreichen.',
      trainers: {
        harald: {
          name: 'Harald Döppner',
          title: 'Cheftrainer & E-Bike-Spezialist',
          bio: 'Mit über 15 Jahren Erfahrung im Radsport und Fitnesstraining leitet Harald unsere E-Bike-Programme und ist spezialisiert auf Ausdauertraining für alle Fitnesslevel.',
          image: '/soft-images/mann.jpg',
          specialties: {
            ebike: {
              name: 'E-Bike-Training',
              description:
                'Experte für E-Bike-Techniken, Sicherheit und Tourenplanung für alle Könnerstufen.',
            },
            endurance: {
              name: 'Ausdauertraining',
              description:
                'Spezialisiert auf den Aufbau von Ausdauer und die Verbesserung der kardiovaskulären Fitness.',
            },
            group: {
              name: 'Gruppendynamik',
              description:
                'Erfahren in der Leitung von Gruppenfahrten und der Schaffung inklusiver Trainingsumgebungen.',
            },
          },
          certifications: [
            'Zertifizierter E-Bike-Instruktor',
            'Lizenzierter Radsport-Coach',
            'Erste-Hilfe-Spezialist',
            'Mountainbike-Guide',
          ],
        },
        maria: {
          name: 'Maria Schmidt',
          title: 'Laufcoach & Ernährungsspezialistin',
          bio: 'Als ehemalige Wettkampfläuferin und heutige Trainerin verbindet Maria ihre Leidenschaft fürs Laufen mit Expertise in Sporternährung, um Kunden bei der Erreichung ihrer Fitnessziele zu unterstützen.',
          image: '/soft-images/frau.jpg',
          specialties: {
            running: {
              name: 'Lauftechnik',
              description:
                'Expertin für die Verbesserung der Lauftechnik und Verletzungsprävention.',
            },
            nutrition: {
              name: 'Sporternährung',
              description:
                'Spezialisiert auf die Erstellung von Ernährungsplänen für Sportler und Fitnessbegeisterte.',
            },
            marathon: {
              name: 'Marathon-Training',
              description:
                'Erfahren in der Vorbereitung von Läufern auf Langstreckenveranstaltungen.',
            },
          },
          certifications: [
            'Zertifizierte Laufcoach',
            'Sporternährungsspezialistin',
            'Marathon-Trainingsexpertin',
            'Zertifikat in Trainingsphysiologie',
          ],
        },
        thomas: {
          name: 'Thomas Weber',
          title: 'Kraft- & Konditionstrainer',
          bio: 'Thomas ist spezialisiert auf funktionelles Training und Rehabilitation und hilft Kunden durch gezielte Trainingsprogramme, Kraft aufzubauen und die Mobilität zu verbessern.',
          image: '/soft-images/mann1.jpg',
          specialties: {
            functional: {
              name: 'Funktionelles Training',
              description: 'Experte für Körpergewichtsübungen und funktionelle Bewegungsmuster.',
            },
            rehab: {
              name: 'Rehabilitation',
              description:
                'Spezialisiert auf die Genesung nach Verletzungen und Rückkehr zum Sport.',
            },
            core: {
              name: 'Core-Training',
              description: 'Fokus auf den Aufbau der Rumpfkraft und die Verbesserung der Haltung.',
            },
          },
          certifications: [
            'Zertifizierter Kraft- & Konditionstrainer',
            'Rehabilitationstherapie-Zertifikat',
            'Experte für funktionelles Training',
            'TRX-zertifizierter Trainer',
          ],
        },
      },
    },
    backTrainingSummer: {
      title: 'Rückentraining 2.0 Sommer',
      description:
        'Ein Ausgleich zum Alltag mit unserem Rückentraining 2.0. Gezieltes Rückentraining ist extrem wichtig. Gerade für Berufstätige, die viel sitzen, ist es ein Muss, um im Alter keine chronischen Beschwerden zu bekommen. Neben dem klassischen Rückentraining mit dem eigenen Körpergewicht verlagern wir die Übungen ins TRX, sodass mit Hilfe eines Seil- und Schlingensystems die Koordination und Flexibilität geschult werden. So heben wir das Rückentraining auf ein neues Level.',
      maxParticipants: 'Max. 14 Teilnehmer',
    },
    ebikePower: {
      title: 'E-Bike Power',
      description:
        'Lernen Sie von E-Bike-Experte Harald Döppner und entdecken Sie die wunderschöne Rhön-Region auf modernsten Elektrofahrrädern. Perfekt für Anfänger und erfahrene Radfahrer.',
      detailsTitle: 'Veranstaltungsdetails',
      dateLabel: 'Datum',
      date: '6. September 2025',
      timeLabel: 'Uhrzeit',
      time: '10:00 - 16:00 Uhr',
      locationLabel: 'Ort',
      location: 'Sportplatz Keinhausen',
      capacityLabel: 'Kapazität',
      capacity: '20 Teilnehmer',
      priceLabel: 'Preis',
      price: '79€ pro Person',
      requirementsTitle: 'Voraussetzungen',
      requirements: [
        'Grundlegende Fahrradkenntnisse',
        'Vertraut mit grundlegenden Verkehrsregeln',
        'Mindestalter: 16 Jahre',
        'Wettergerechte Kleidung',
      ],
      highlightsTitle: 'Highlights',
      highlights: [
        'Professionelle Anleitung von E-Bike-Experte Harald Döppner',
        'Geführte Tour durch malerische Rhön-Routen',
        'E-Bike-Verleih inklusive',
        'Sicherheits- und Handhabungsworkshop',
        'Energieeffiziente Fahrtechniken',
        'Mittagspause mit gesunden Snacks',
        'Fotodokumentation',
        'Teilnahmezertifikat',
      ],
      button: 'Jetzt anmelden',
    },
    mtbKidsCamp: {
      title: 'MTB-Kids-Camps 2025',
      subtitle: 'MTB-Kids-Camps 2025',
      intro: {
        title: 'MTB-Kids-Camps 2025',
        description:
          'Unter professioneller Anleitung heizen wir zwei Tage lang durch eine große Cross-Strecke mit Trails, Rampen und Hindernissen. Um die Sicherheit zu verbessern, gibt es Geschicklichkeitsparcours und Bremstraining. Das gibt den Kindern auch für den Alltag ein sicheres Fahrgefühl. Für die bestmögliche Betreuung teilen wir die Termine in zwei Altersgruppen auf.',
        maxParticipants: 'Max. 20 Kinder pro Camp',
        requirements:
          'Funktionstüchtiges MTB (keine E-Bikes) und Helm (sonstige Schutzausrüstung optional) sind Voraussetzungen.',
      },
      details: {
        title: 'MTB-Kids-Camps 2025',
        start: 'Start: 11. August 2025',
        location: 'Ort: Sportplatz Keinhausen',
        trainer: 'Trainer: Sascha Wingenfeld & Team',
        price: 'Preis: 65 Euro/Kind (inkl. Verpflegung, Teilnehmerpräsent und Trainerbetreuung)',
        button: 'Jetzt anmelden',
      },
      schedule: {
        title: 'Termine 2025',
        note: 'Alle Termine und Details auf Anfrage oder vor Ort.',
        dates: [
          {
            group: 'Camp 1 (8-10 Jahre)',
            events: [
              {
                date: '11.08.2025 - 12.08.2025',
                time: '09:00 - 16:00 Uhr',
                location: 'Sportplatz Keinhausen',
                theme: 'Für Kinder zwischen 8-10 Jahren',
              },
            ],
          },
          {
            group: 'Camp 2 (11-13 Jahre)',
            events: [
              {
                date: '13.08.2025 - 14.08.2025',
                time: '09:00 - 16:00 Uhr',
                location: 'Sportplatz Keinhausen',
                theme: 'Für Kinder zwischen 11-13 Jahren',
              },
            ],
          },
        ],
      },
    },
  },
  en: {
    hero: {
      title: 'MOVEMENT AND NUTRITION',
      subtitle: 'Discover our diverse fitness programs',
      description: 'From running school to alpine tours - find the perfect training for your goals',
    },
    intro: {
      title: 'FITNESS BAKER',
      description:
        "Movement and nutrition: We deal with these daily to keep our customers fit and healthy. That's why we have increasingly focused on a combination of these two pillars of an optimal lifestyle as Fitness Baker in recent years. And of course, we want to pass this on to you. Through the Fitness Baker, we have found the optimal way to do this!",
      features: [
        'Professional Trainers',
        'Diverse Programs',
        'Community Experience',
        'Healthy Nutrition',
      ],
    },
    trainerTeam: {
      title: 'OUR TRAINERS',
      description:
        'We focus on quality not only in our baked goods but also in our employees. And of course, also in our trainers for the Fitness Baker.',
      caption:
        'from left to right: Sascha Wingenfeld, Markus Hofmann, Verena Schmelz, Julia Herbert, Mandana Hoffmann, Nicole Knacker, Elke Seng, Tanja Böhm. Missing: Wolfgang Obermahr, Reiner Menz, Mario Henning',
      button: 'Read More',
    },
    calendar: {
      title: 'Calendar',
      events: {
        runningSchool: {
          title: 'Running School',
          start: '2025-01-15',
          description:
            'At our running school, we meet every Thursday at different locations to train. All groups are supervised by experienced running trainers. Each session has a special theme to improve technique or speed.',
          image: '/images/Laufschule-Fitnessbaecker-Baeckerei-Noventa-1.jpg',
          link: '/fitness-baker/running-school',
        },
        fullBodyWorkout: {
          title: 'Full Body Workout',
          start: '2025-02-01',
          description:
            'Power workout under the open sky. In circuit training, there is pure training and athletic challenge. The most important training tool is your own body - plus simple but efficient aids like kettlebells, TRX, and medicine balls.',
          image: '/images/Zirkeltraining-Fitnessbaecker-Baeckerei-Noventa-1-768x463.jpg',
          link: '/fitness-baker/full-body-workout',
        },
        backTraining: {
          title: 'Back Training',
          start: '2025-02-15',
          description:
            "In our summer course, we don't do classic back training. We move the exercises to TRX, so that coordination is trained with the help of a rope and suspension system. This takes back training to a new level.",
          image: '/images/rucken-traning.jpg',
          link: '/fitness-baker/back-training',
        },
        alpineTour: {
          title: 'Alpine Tour',
          start: '2025-07-01',
          description:
            'Our six-day Alpine Tour 2025 starts from the chamois city of Kitzbühel and leads through the Kitzbühel Alps and the Hohe Tauern National Park to the sun city of Lienz - here the Dolomites are within reach.',
          image: '/images/Baeckerei_Noventa_veranstaltet_Alpentour_2025-768x512.jpg',
          link: '/fitness-baker/alpine-tour',
        },
        mtbKidsCamp: {
          title: 'MTB Kids Camp',
          start: '2025-08-01',
          description:
            "In 2025, we're starting again with our popular MTB Kids Camps. Under professional guidance, we'll race through a large cross-country course with trails, ramps, and obstacles for two days. To improve safety, there are skill courses and braking training.",
          image: '/images/MTB-Kids-Camp-Fitnessbaecker-Baeckerei-Noventa-1-768x463.jpg',
          link: '/fitness-baker/mtb-kids-camp',
        },
        bikeDay: {
          title: 'Bike Day',
          start: '2025-09-01',
          description:
            "First, it's all about technique training on a course with pallets, ramps, and more. Here we work together on skills and safety. Then we go straight out on a varied tour around Keinhausen. Afterwards, we'll end the Fitnessbäcker Bike Day relaxed with a delicious BBQ.",
          image: '/images/MTB-Fitness-Camp-Fitnessbaecker-Baeckerei-Noventa-768x463.jpg',
          link: '/fitness-baker/bike-day',
        },
        ebikePower: {
          title: 'E-Bike Power',
          start: '2025-09-06',
          description:
            "Together with E-Bike pro Harald Döppner, there's lots of fun, action, technique training, kilometers, and altitude meters on the tachometer. The day event for men and women combines technical skills with the direct application of what you've learned on a tour through the Rhön.",
          image: '/images/E-Bike-Power-Baeckerei-Noventa-1-768x469.jpg',
          link: '/fitness-baker/ebike-power',
        },
      },
      button: 'View All Events',
    },
    alpineTour: {
      title: 'Alpine Tour 2025',
      subtitle: 'Kitzbühel → Lienz · 6 Days · For fit 15-60 year olds',
      intro: {
        title: 'Six-Day Alpine Tour: Kitzbühel – Lienz',
        description:
          "Our six-day Alpine tour 2025 starts from the chamois city of Kitzbühel and leads through the Kitzbühel Alps and the Hohe Tauern National Park to the sun city of Lienz – where the Dolomites are within reach. Our participants can expect impressive panoramas and varied nature that will certainly remain in everyone's memory. From flower-rich meadows to rugged rock faces, everything can be seen here. The tour is suitable for fit 15-year-olds to trained 60-year-olds. Very good condition and endurance as well as surefootedness and appropriate clothing and equipment are necessary prerequisites for this tour.",
        maxParticipants: 'Max. 18 participants',
        period: 'Period: Sun. 22.06. to Fri. 27.06.2025',
      },
      info: {
        title: 'Information',
        start: 'Start: June 22, 2025',
        trainer: 'Trainer: to be announced',
        price:
          'Price: 995 euros/person (incl. 5 overnight stays in hotels or mountain huts, half board, transfers, mountain guide fee, and a participant gift)',
        button: 'REGISTER NOW',
      },
    },
    backTraining: {
      title: 'Back Training 2.0 Summer',
      subtitle: 'Work-Fit-Balance: A balance to everyday life',
      intro: {
        title: 'Work-Fit-Balance: A balance to everyday life',
        description:
          'A balance to everyday life with our Back Training 2.0. Targeted back training is extremely important. Especially for working people who sit a lot, it is a must to avoid chronic complaints in old age. In addition to classic back training with your own body weight, we move the exercises to TRX, so that coordination and flexibility are trained with the help of a rope and suspension system. This takes back training to a new level.',
        maxParticipants: 'Max. 14 participants',
      },
      details: {
        title: 'Rückentraining 2.0 Sommer',
        start: 'Start: June 4, 2025',
        location: 'Location: Weyhers Sports Field',
        trainer: 'Trainer: Sascha Wingenfeld',
        price: 'Price: 55 euros for 4 out of 6 dates, each additional date 12 euros',
        button: 'Register Fitness Baker',
      },
      schedule: {
        title: 'Dates 2025',
        note: 'All dates and details on request or on site.',
      },
    },
    fullBodyWorkout: {
      title: 'Full Body Workout',
      subtitle: 'Power-Workout under the open sky',
      description:
        'In circuit training, there is pure training and athletic challenge. The most important training tool is your own body – plus simple but efficient aids like kettlebells, TRX, and medicine balls.',
      intro: {
        title: 'About the course',
        description:
          'In circuit training, there is pure training and athletic challenge. The most important training tool is your own body – plus simple but efficient aids like kettlebells, TRX, and medicine balls.',
        maxParticipants: 'Max. 20 participants',
      },
      details: {
        title: 'Details',
        start: 'Start: 04 June, 19:45, Sportplatz Weyhers',
        time: 'Time: 19:45 – 21:00',
        location: 'Location: Sportplatz Weyhers',
        trainer: 'Trainer: Harald Döppner',
        price: 'Price: 10 € per session',
        button: 'Register now',
        capacity: 'Max. 20 participants',
        requirements: ['Basic fitness level', 'Comfortable sportswear', 'Water bottle', 'Towel'],
      },
      schedule: {
        title: 'Schedule',
        note: 'Every Tuesday, 19:45 – 21:00, from June to September.',
      },
      requirementsTitle: 'Requirements',
      highlightsTitle: 'Highlights',
      highlights: [
        'Full body workout',
        'Outdoor training',
        'Professional guidance',
        'Small groups',
      ],
      button: 'Register now',
    },
    bikeDay: {
      title: 'Fitness Baker Bike Day',
      description:
        'Join us for an exciting day of cycling activities, including a skill course, guided tour, and a social BBQ to end the day. Perfect for families and cyclists of all levels.',
      details: {
        date: 'August 30, 2025',
        time: '2:00 PM - 8:00 PM',
        location: 'Keinhausen Sports Field',
        capacity: '50 participants',
        price: '€39 per person (includes BBQ)',
        requirements: [
          'Own bicycle (any type)',
          'Helmet mandatory',
          'Basic cycling ability',
          'Children under 14 must be accompanied by an adult',
        ],
      },
      highlights: [
        'Fun skill course with obstacles and challenges',
        'Guided tour through scenic local routes',
        'Bike maintenance workshop',
        'Safety tips from cycling experts',
        'Evening BBQ with fellow cyclists',
        'Prizes for skill course winners',
        'Family-friendly activities',
        'Professional photos of the event',
      ],
    },
    registration: {
      title: 'Fitness Baker Registration',
      subtitle: 'Become part of our fitness community!',
      form: {
        event: 'Event',
        firstName: 'First Name*',
        lastName: 'Last Name*',
        address: 'Address*',
        addressExtra: 'Address Extra',
        city: 'City*',
        zip: 'ZIP*',
        phone: 'Phone*',
        mobile: 'Mobile',
        email: 'Email*',
        birthDate: 'Birth Date (DD/MM/YYYY)*',
        size: 'Size*',
        transfer: 'I need a transfer (round trip)*',
        transferOptions: {
          yes: 'YES',
          no: 'NO',
        },
        privacy:
          'I agree to the storage and processing of my information. I also agree to the privacy policy of this website.',
        cancellation:
          'I accept the cancellation conditions for the Alpine Tour 2025. (The following cancellation fees apply: up to 3 months before tour start 25%; from 3 months to 20 days before tour start 50%; from 19 to 2 days before tour start 75%; from 1 day before trip start or no-show 90% of the trip price)',
        submit: 'Submit',
      },
      success: {
        title: 'Thank you for your registration!',
        message: 'We will contact you soon. Welcome to the Fitness Bakers!',
        newRegistration: 'New Registration',
      },
      notes: {
        confirmation:
          'Registration for the Fitness Baker is only binding after our confirmation. You will receive an invoice for the respective participation fees after processing your registration.',
        cancellation: {
          title: 'The following cancellation fees apply*:',
          thirtyDays: '30 days before: Full refund of costs',
          tenDays: '10 days before: 50% refund of costs',
          note: '*Note: Special cancellation fees apply for Alpine Tour and Road Bike Camp in Mallorca.',
        },
      },
    },
    runningSchool: {
      title: 'Running School',
      subtitle: 'Every Thursday: Running Technique, Endurance, Strength & Experience Runs',
      description:
        'Every Thursday we meet at different locations to improve your overall running performance. Runners are divided into performance-appropriate groups. All groups are supervised by experienced running trainers who will closely examine the various units of technique, speed, strength, and endurance. There is also a group for Nordic Walking. A special feature of the running school is our experience runs at the end of the month to the peaks of the Rhön. From Gersfeld, for example, we go to Simmelsberg. Besides lots of fun and community, we have common goals: the RhönEnergy-Challenge in June and the Ganzweg-Marathon in September. Free and no registration required!',
      details: {
        start: 'Start: April 24, 2025',
        location: 'Location: Varies',
        trainer: 'Trainer: Sascha Wingenfeld and Team',
        price: 'Price: Free, no registration necessary',
        button: 'Anmeldung',
      },
      schedule: {
        title: 'Schedule 2025',
        note: 'All dates and details on request or on site.',
      },
      months: {
        april: 'April',
        may: 'May',
        june: 'June',
        july: 'July',
        august: 'August',
        september: 'September',
      },
      events: {
        kickoff: 'Kickoff | Set Basis',
        basis: 'Set Basis',
        rhonRun: 'Rhön Run (with registration)',
        experienceRun: 'Experience Run',
        endurance: 'Build Endurance',
        technique: 'Technique',
        strength: 'Strength',
        speed: 'Get Faster',
        rhonEnergy: 'Rhön Energy Challenge (with registration)',
        ganzwegMarathon: 'Ganzweg Marathon (with registration)',
        finale: 'Finale',
      },
    },
    trainers: {
      title: 'Our Expert Trainers',
      description:
        'Meet our team of certified fitness professionals dedicated to helping you achieve your health and fitness goals.',
      trainers: {
        harald: {
          name: 'Harald Döppner',
          title: 'Head Trainer & E-Bike Specialist',
          bio: 'With over 15 years of experience in cycling and fitness training, Harald leads our E-Bike programs and specializes in endurance training for all fitness levels.',
          image: '/soft-images/mann.jpg',
          specialties: {
            ebike: {
              name: 'E-Bike Training',
              description:
                'Expert in E-Bike techniques, safety, and tour planning for all skill levels.',
            },
            endurance: {
              name: 'Endurance Training',
              description: 'Specialized in building stamina and improving cardiovascular fitness.',
            },
            group: {
              name: 'Group Dynamics',
              description:
                'Experienced in leading group rides and creating inclusive training environments.',
            },
          },
          certifications: [
            'Certified E-Bike Instructor',
            'Licensed Cycling Coach',
            'First Aid Specialist',
            'Mountain Bike Guide',
          ],
        },
        maria: {
          name: 'Maria Schmidt',
          title: 'Running Coach & Nutrition Specialist',
          bio: 'A former competitive runner turned coach, Maria combines her passion for running with expertise in sports nutrition to help clients achieve their fitness goals.',
          image: '/soft-images/frau.jpg',
          specialties: {
            running: {
              name: 'Running Technique',
              description: 'Expert in improving running form and preventing injuries.',
            },
            nutrition: {
              name: 'Sports Nutrition',
              description:
                'Specialized in creating nutrition plans for athletes and fitness enthusiasts.',
            },
            marathon: {
              name: 'Marathon Training',
              description: 'Experienced in preparing runners for long-distance events.',
            },
          },
          certifications: [
            'Certified Running Coach',
            'Sports Nutrition Specialist',
            'Marathon Training Expert',
            'Exercise Physiology Certificate',
          ],
        },
        thomas: {
          name: 'Thomas Weber',
          title: 'Strength & Conditioning Coach',
          bio: 'Thomas specializes in functional training and rehabilitation, helping clients build strength and improve mobility through targeted exercise programs.',
          image: '/soft-images/mann1.jpg',
          specialties: {
            functional: {
              name: 'Functional Training',
              description: 'Expert in bodyweight exercises and functional movement patterns.',
            },
            rehab: {
              name: 'Rehabilitation',
              description: 'Specialized in post-injury recovery and return to sport programs.',
            },
            core: {
              name: 'Core Training',
              description: 'Focus on building core strength and improving posture.',
            },
          },
          certifications: [
            'Certified Strength & Conditioning Specialist',
            'Rehabilitation Therapy Certificate',
            'Functional Training Expert',
            'TRX Certified Trainer',
          ],
        },
      },
    },
    backTrainingSummer: {
      title: 'Back Training 2.0 Summer',
      description:
        'A balance to everyday life with our Back Training 2.0. Targeted back training is extremely important. Especially for working people who sit a lot, it is a must to avoid chronic complaints in old age. In addition to classic back training with your own body weight, we move the exercises to TRX, so that coordination and flexibility are trained with the help of a rope and suspension system. This takes back training to a new level.',
      maxParticipants: 'Max. 14 participants',
    },
    ebikePower: {
      title: 'E-Bike Power',
      description:
        'Learn from E-Bike expert Harald Döppner and discover the beautiful Rhön region on state-of-the-art electric bikes. Perfect for both beginners and experienced cyclists.',
      detailsTitle: 'Event Details',
      dateLabel: 'Date',
      date: 'September 6, 2025',
      timeLabel: 'Time',
      time: '10:00 AM - 4:00 PM',
      locationLabel: 'Location',
      location: 'Keinhausen Sports Field',
      capacityLabel: 'Capacity',
      capacity: '20 participants',
      priceLabel: 'Price',
      price: '€79 per person',
      requirementsTitle: 'Requirements',
      requirements: [
        'Basic cycling ability',
        'Comfortable with basic traffic rules',
        'Minimum age: 16 years',
        'Weather-appropriate clothing',
      ],
      highlightsTitle: 'Highlights',
      highlights: [
        'Professional instruction from E-Bike expert Harald Döppner',
        'Guided tour through scenic Rhön routes',
        'E-Bike rental included',
        'Safety and handling workshop',
        'Energy-efficient riding techniques',
        'Lunch break with healthy snacks',
        'Photo documentation',
        'Certificate of participation',
      ],
      button: 'Register Now',
    },
    mtbKidsCamp: {
      title: 'MTB Kids Camp',
      subtitle: 'MTB Kids Camp',
      intro: {
        title: 'MTB Kids Camp',
        description: 'MTB Kids Camp',
        maxParticipants: 'Max. 20 children per camp',
        requirements:
          'Functional MTB (no e-bikes) and helmet (other protective equipment optional) are prerequisites.',
      },
      details: {
        title: 'MTB Kids Camp',
        start: 'Start: 11. August 2025',
        location: 'Ort: Sportplatz Keinhausen',
        trainer: 'Trainer: Sascha Wingenfeld & Team',
        price: 'Preis: 65 Euro/Kind (inkl. Verpflegung, Teilnehmerpräsent und Trainerbetreuung)',
        button: 'Jetzt anmelden',
      },
      schedule: {
        title: 'Termine 2025',
        note: 'Alle Termine und Details auf Anfrage oder vor Ort.',
        dates: [
          {
            group: 'Camp 1 (8-10 Jahre)',
            events: [
              {
                date: '11.08.2025 - 12.08.2025',
                time: '09:00 - 16:00 Uhr',
                location: 'Sportplatz Keinhausen',
                theme: 'Für Kinder zwischen 8-10 Jahren',
              },
            ],
          },
          {
            group: 'Camp 2 (11-13 Jahre)',
            events: [
              {
                date: '13.08.2025 - 14.08.2025',
                time: '09:00 - 16:00 Uhr',
                location: 'Sportplatz Keinhausen',
                theme: 'Für Kinder zwischen 11-13 Jahren',
              },
            ],
          },
        ],
      },
    },
  },
}
