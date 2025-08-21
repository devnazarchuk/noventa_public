export type Language = 'de' | 'en'

type FitnessBaeckerTranslations = {
  de: {
    hero: {
      title: string
    }
    intro: {
      title: string
      description: string
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
        }
        fullBodyWorkout: {
          title: string
          start: string
          description: string
        }
        backTraining: {
          title: string
          start: string
          description: string
        }
        alpineTour: {
          title: string
          start: string
          description: string
        }
        mtbKidsCamp: {
          title: string
          start: string
          description: string
        }
        bikeDay: {
          title: string
          start: string
          description: string
        }
        ebikePower: {
          title: string
          start: string
          description: string
        }
      }
      button: string
    }
  }
  en: {
    hero: {
      title: string
    }
    intro: {
      title: string
      description: string
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
        }
        fullBodyWorkout: {
          title: string
          start: string
          description: string
        }
        backTraining: {
          title: string
          start: string
          description: string
        }
        alpineTour: {
          title: string
          start: string
          description: string
        }
        mtbKidsCamp: {
          title: string
          start: string
          description: string
        }
        bikeDay: {
          title: string
          start: string
          description: string
        }
        ebikePower: {
          title: string
          start: string
          description: string
        }
      }
      button: string
    }
  }
}

export const fitnessBaeckerTranslations: FitnessBaeckerTranslations = {
  de: {
    hero: {
      title: 'BEWEGUNG UND ERNÄHRUNG',
    },
    intro: {
      title: 'FITNESSBÄCKER',
      description:
        'Bewegung und Ernährung: Damit befassen wir uns tagtäglich, um unsere Kunden fit und gesund zu halten. Darum haben wir uns in den letzten Jahren als Fitnessbäcker immer stärker auf eine Kombination dieser beiden Pfeiler eines optimalen Lebensstils konzentriert. Und das möchten wir natürlich an Sie weiter geben. Über den Fitnessbäcker haben wir dazu den optimalen Weg gefunden!',
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
      title: 'FITNESSKALENDER',
      events: {
        runningSchool: {
          title: 'Laufschule',
          start: 'Start: 24. April, 19.00 Uhr, Treffpunkt wechselnd',
          description:
            'Bei unserer Laufschule treffen wir uns jeden Donnerstag an verschiedenen Orten, um zu trainieren. Alle Gruppen werden von erfahrenen Lauf-Trainern betreut. Jede Einheit steht unter einem besonderen Motto, um etwa Technik oder Schnelligkeit zu verbessern.',
        },
        fullBodyWorkout: {
          title: 'Full-Body-Workout',
          start: 'Start: 04. Juni, 19.45 Uhr, Sportplatz Weyhers',
          description:
            'Power-Workout unter freiem Himmel. Im Zirkeltraining gibt es pures Training und sportliche Herausforderung. Wichtigstes Trainingsgerät ist der eigene Körper – dazu kommen einfache, aber effiziente Hilfsmittel wie Kettlebell, TRX und Medizinbälle.',
        },
        backTraining: {
          title: 'Rückentraining 2.0 Sommer',
          start: 'Start: 04. Juni, 18.30 Uhr, Sportplatz Weyhers',
          description:
            'In unserem Sommerkurs findet nicht das klassische Rückentraining statt. Wir verlagern die Übungen ins TRX, sodass mit Hilfe eines Seil- und Schlingensystems die Koordination geschult wird. So heben wir das Rückentraining auf ein neues Level.',
        },
        alpineTour: {
          title: 'Alpentour 2025',
          start: 'Tour-Zeitraum: 22. bis 27. Juni 2025',
          description:
            'Unsere sechstägige Alpentour 2025 startet von der Gamsstadt Kitzbühel und führt über die Kitzbüheler Alpen und den Nationalpark Hohe Tauern in die Sonnenstadt Lienz – hier sind die Dolomiten zum Greifen nah.',
        },
        mtbKidsCamp: {
          title: 'MTB-Kids-Camps',
          start: 'Start: 11. August, 9.00 Uhr, Sportplatz Keinhausen',
          description:
            'Auch in 2025 starten wir wieder mit unseren beliebten MTB Kids-Camps. Unter professioneller Anleitung heizen wir zwei Tage lang durch eine große Cross-Strecke mit Trails, Rampen und Hindernissen. Um die Sicherheit zu verbessern, gibt es Geschicklichkeitsparcours und Bremstraining.',
        },
        bikeDay: {
          title: 'Fitnessbäcker-Bike-Day',
          start: 'Start: 30. August, 14.00 Uhr, Sportplatz Keinhausen',
          description:
            "Erst heißt's: Techniktraining auf einem Parcours, mit Paletten, Rampen & Co. Hier feilen wir gemeinsam an Skills und Sicherheit. Danach geht's direkt raus auf eine abwechslungsreiche Tour rund um Keinhausen. Im Anschluss lassen wir den Fitnessbäcker-Bike-Day ganz entspannt bei einem leckeren BBQ ausklingen.",
        },
        ebikePower: {
          title: 'E-Bike-Power',
          start: 'Start: 06. September, 10.00 Uhr, Sportplatz Keinhausen',
          description:
            'Gemeinsam mit dem E-Bike-Profi Harald Döppner stehen jede Menge Spaß, Action, Technik-Training, Kilometer und Höhenmeter auf dem Tacho. Das Tagesevent für Männer und Frauen kombiniert technische Skills mit der direkten Umsetzung des Erlernten auf einer Tour durch die Rhön.',
        },
      },
      button: 'Mehr erfahren',
    },
  },
  en: {
    hero: {
      title: 'MOVEMENT AND NUTRITION',
    },
    intro: {
      title: 'FITNESS BAKER',
      description:
        "Movement and nutrition: We deal with these daily to keep our customers fit and healthy. That's why we have increasingly focused on a combination of these two pillars of an optimal lifestyle as Fitness Baker in recent years. And of course, we want to pass this on to you. Through the Fitness Baker, we have found the optimal way to do this!",
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
      title: 'FITNESS CALENDAR',
      events: {
        runningSchool: {
          title: 'Running School',
          start: 'Start: April 24, 7:00 PM, Meeting point varies',
          description:
            'At our running school, we meet every Thursday at different locations to train. All groups are supervised by experienced running trainers. Each unit has a special theme to improve technique or speed.',
        },
        fullBodyWorkout: {
          title: 'Full-Body Workout',
          start: 'Start: June 4, 7:45 PM, Weyhers Sports Field',
          description:
            'Power workout under the open sky. The circuit training offers pure training and athletic challenge. The most important training equipment is your own body – supplemented by simple but efficient tools like kettlebells, TRX, and medicine balls.',
        },
        backTraining: {
          title: 'Back Training 2.0 Summer',
          start: 'Start: June 4, 6:30 PM, Weyhers Sports Field',
          description:
            "In our summer course, we don't do classic back training. We move the exercises to TRX, so that coordination is trained with the help of a rope and suspension system. This takes back training to a new level.",
        },
        alpineTour: {
          title: 'Alpine Tour 2025',
          start: 'Tour Period: June 22-27, 2025',
          description:
            'Our six-day Alpine tour 2025 starts from the chamois city of Kitzbühel and leads through the Kitzbühel Alps and the Hohe Tauern National Park to the sun city of Lienz – where the Dolomites are within reach.',
        },
        mtbKidsCamp: {
          title: 'MTB Kids Camps',
          start: 'Start: August 11, 9:00 AM, Keinhausen Sports Field',
          description:
            "In 2025, we're starting again with our popular MTB Kids Camps. Under professional guidance, we'll ride through a large cross-country course with trails, ramps, and obstacles for two days. To improve safety, there are skill courses and brake training.",
        },
        bikeDay: {
          title: 'Fitness Baker Bike Day',
          start: 'Start: August 30, 2:00 PM, Keinhausen Sports Field',
          description:
            "First, it's technical training on a course with pallets, ramps & co. Here we work together on skills and safety. Then we go directly out on a varied tour around Keinhausen. Afterwards, we'll end the Fitness Baker Bike Day relaxed with a delicious BBQ.",
        },
        ebikePower: {
          title: 'E-Bike Power',
          start: 'Start: September 6, 10:00 AM, Keinhausen Sports Field',
          description:
            "Together with e-bike pro Harald Döppner, there's lots of fun, action, technical training, kilometers, and elevation gain on the tachometer. The day event for men and women combines technical skills with the direct implementation of what you've learned on a tour through the Rhön.",
        },
      },
      button: 'Learn More',
    },
  },
}
