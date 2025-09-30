const teamData = {
  projectLeader: {
    name: "Philippe Rizzotti Architecte (PRA)",
    role: "Porteur du projet",
    contact: {
      company: "Philippe Rizzotti Architecte",
      address: "32, rue de Paradis",
      city: "75010 Paris",
      phone: "+33 (0)1 55 32 97 08",
      email: "contact@philipperizzotti.net"
    },
    description: "Philippe Rizzotti Architecte - PRA, à l'initiative du projet, est responsable du pilotage, de la coordination générale et la gestion administrative du consortium. L'agence est commissaire scientifique de l'exposition L'Empreinte d'un habitat - construire léger et décarboné présentée entre les mois d'octobre 2021 et février 2022 au Pavillon de l'Arsenal à Paris et ensuite en septembre 2023 à la Biennale d'Architecture de Rotterdam. En 2022, Philippe Rizzotti, directeur de l'agence, rejoint l'équipe enseignante du DPEA «Architecture Post-Carbone» à l'École d'Architecture de la Ville et des Territoires, Paris-Est et initie le projet d'un Atlas numérique de l'Architecture post-carbone en partenariat avec Ingerop et la Chaire Construction durable de l'ETH-Zürich. En 2023, Le projet «Atlas Numérique D'Architecture Post- Carbone» est lauréat de la 3e vague du PIA IV - Numérisation de l'Architecture et du Patrimoine - à hauteur de 400 k€ en complément des 647 k€ de financement privé déjà collecté. En 2024, PRA est agréé par le Ministère de l'Enseignement Supérieur et de la Recherche, ce qui lui permet de consolider le financement de la recherche de Holcim de 300 k€ après avoir reçu le prix Montgolfier de la Société d'Encouragement de l'Industrie Nationale par le Comité des Beaux-arts et de la Construction présidé par Bertrand Lemoine, pour ses recherches sur la vulgarisation de la quantification carbone dans l'architecture.",
    team: [
      {
        name: "Philippe Rizzotti",
        title: "Architecte DPLG, maître de conférences (ENSAP Lille), enseignant-chercheur au LéaV",
        role: "Supervision et dissémination de la recherche"
      },
      {
        name: "Blaise Mouret",
        title: "Architecte DE, diplômé de l'ENSA Paris Malaquais et du master en Sciences du Patrimoine à l'Université Paris-Saclay en 2023",
        role: "Coordination et mise au point du programme de recherche, du protocole et de la conception de l'interface"
      },
      {
        name: "Margot Manasse",
        title: "Architecte DE, diplômée de l'ENSA Paris Malaquais en 2022 et diplôme de spécialisation \"Architecture et risques majeurs\" en cours",
        role: "Supervision et co encadrement de l'équipe de réalisation des maquettes numériques et vérification et analyse des doubles numériques"
      },
      {
        name: "Paride Zambelli",
        title: "Architecte HMONP, diplômé de l'école Polytechnique de Milan en 2022",
        role: "Consultant Ux & Ui, Supervision de la création de l'interface"
      },
      {
        name: "Lawan-Kila Toe",
        title: "Architecte HMONP, diplômé de l'ENSA Versailles en 2022",
        role: "Co-encadrement de l'équipe de réalisation des maquettes numériques"
      }
    ],
    interns: [
      {
        name: "Tom Beldjilah",
        title: "Architecte stagiaire de l'ENSA Versailles",
        role: "Modélisation et analyse des maquettes numériques",
        internshipPeriod: "septembre 2023 - janvier 2024",
        freelanceSince: "Mai 2024"
      },
      {
        name: "Martin Debeljak",
        title: "Architecte stagiaire de la faculté d'architecture de l'Université de Ljubljana",
        role: "Modélisation et analyse des maquettes numériques",
        internshipPeriod: "mars 2024 - juillet 2024"
      }
    ]
  },
  partners: [
    {
      name: "ARCORA",
      type: "Partenaire doubles numériques",
      contact: {
        company: "ARCORA",
        address: "18, rue des deux gares – CS 70081",
        city: "92563 Rueil Malmaison Cedex",
        phone: "+33 (0)1 49 04 67 00",
        email: "arcora@arcora.com"
      },
      description: "ARCORA, également membre du comité de pilotage, est chargée d'accompagner le consortium dans la structuration des différents protocoles et composants du projet. Il apporte son expertise technique sur les calculs d'analyse carbone des éléments d'enveloppe et, plus particulièrement, met à profit son retour d'expérience sur l'interfaçage de modèles Rhino+Grasshopper dans une interface web acquise lors du développement du projet ECALE. ARCORA est un bureau d'études spécialisé dans les structures métalliques, façades et verrières qui accompagne les architectes et délivre les solutions techniques les plus adaptées. Cette filiale du groupe ingénierie multi-techniques INGEROP, intègre les enjeux environnementaux et les évolutions des matériaux, en ayant systématisé depuis plusieurs années le calcul carbone des solutions techniques proposées sur chaque projet. Cette démarche les a poussés à développer des outils informatiques spécifiques, parmi lesquels ECALE, contribuant à la diffusion au sein d'INGEROP, puis à grande échelle, d'un savoir-faire de niches et de méthodes de calcul complexes qui renforce les compétences de l'équipe de projet.",
      team: [
        {
          name: "Maria Carbonell",
          title: "Architecte-ingénieure et cheffe de projet chez Arcora",
          expertise: "expertise technique de pointe sur la conception de façades complexes et co-porteuse du projet de développement ECALE"
        },
        {
          name: "Arnaud Clavreul",
          title: "Ingénieur diplômé de la CentraleSupélec en 2013 et chef de projet chez Arcora",
          expertise: "Expertise technique de pointe en programmation visuelle Grasshopper pour Rhino et en conception d'ouvrages de façades, co-porteur du projet de développement ECALE"
        },
        {
          name: "Hippolyte Vienot de Vaublanc",
          title: "Architecte-ingénieur diplômé de l'ENSAPLV et de l'ESTP en 2022",
          position: "Chef de projet adjoint chez Arcora"
        }
      ]
    }
  ],
  laboratories: [
    {
      name: "Chaire de construction durable - ETH Zürich",
      type: "Partenaire carbone",
      contact: {
        institution: "ETH Zurich",
        building: "Building HIL",
        address: "Stefano-Franscini-Platz 5, 8093 Zürich",
        phone: "+41 44 633 46 32",
        email: "walzer@ibi.baug.ethz.ch"
      },
      description: "La chaire de construction durable - ETH Zürich, qui participe au comité scientifique et au comité de pilotage, est chargée de la structuration du protocole et analyse carbone des études de cas. La chaire de construction durable rassemble un groupe de scientifiques, d'ingénieurs et d'architectes qui visent à ancrer la durabilité dans toutes les disciplines impliquées dans l'environnement bâti. L'objectif est d'identifier les paramètres pertinents qui influencent les impacts environnementaux des bâtiments aux niveaux international, national et régional afin de mettre en œuvre des pratiques durables tout au long du développement de stratégies innovantes adaptées à chaque partie prenante. Il s'agit de travaux interdisciplinaires portant entre autres sur l'Analyse du Cycle de Vie, le métabolisme urbain et la science des matériaux.",
      team: [
        {
          name: "Pr. Dr. Guillaume Habert",
          title: "Professeur associé en Construction durable à l'ETH Zurich"
        },
        {
          name: "Yasmine Priore",
          title: "Doctorante diplômée du Master \"Integrated building system\" de l'ETH Zurich",
          expertise: "Analyse de Cycle de Vie de bâtiment neutre pour le climat, experte en énergie et développement de trajectoire bas carbone"
        },
        {
          name: "Hager Al Laham",
          title: "Assistante de recherche",
          expertise: "Integrated design expert, responsable implémentation et révision normes et standards énergétiques dans le bâtiment, simulation numérique, grasshopper"
        }
      ]
    },
    {
      name: "LéAV - Laboratoire de recherche en Architecture de l'ENSA Versailles",
      contact: {
        address: "5, avenue de Sceaux",
        city: "78000 Versailles",
        phone: "01 39 07 40 00",
        email: "leav@versailles.archi.fr"
      },
      description: "L'équipe s'attache également les compétences du laboratoire de recherche en architecture de l'ENSA Versailles, le LéAV.",
      team: [
        {
          name: "Nathalie Simonnot",
          title: "Ingénieur de recherche HDR, enseignant-chercheur et directrice du LéAV"
        },
        {
          name: "Pr. Dr. Susanne Stacher",
          title: "Architecte chercheur et professeure HDR membre du LéAV"
        }
      ]
    }
  ],

  committees: {
    scientific: {
      name: "Comité scientifique",
      description: "Le comité scientifique, composé des partenaires du projet et des membres des laboratoires associés, est chargé de la sélection des projets à intégrer dans l'Atlas ce qui garantit la maturité des choix éditoriaux des prochains projets dans une structuration pérenne et réplicable. Il a été convenu que le comité se réunira a minima quatre fois par an pour définir les axes de recherche, sélectionner les projets et valider les contenus. Il fera ponctuellement appel à des experts scientifiques externes, y compris étrangers, lorsqu'une question nécessitera des compétences complémentaires. Son activité fera l'objet d'un rapport annuel (liste des membres, nombre de réunions, liste des projets évalués, etc.).",
      meetingFrequency: "4 fois par an minimum",
      reporting: "Rapport annuel",
      members: [
        {
          name: "Pr. Dr. Guillaume Habert",
          title: "Professeur associé en Construction durable à l'ETH Zurich"
        },
        {
          name: "Pr. Dr. Susanne Stacher",
          title: "Architecte chercheur et professeure HDR membre du LéAV"
        },
        {
          name: "Véronique Patteeuw",
          title: "Dr. Ir. Architecte, maître de conférences à l'ENSAPL et professeure invitée à l'EPFL Lausanne et à la KULeuven",
          description: "Professeure associée et maître de conférence à l'ENSAPL. Co-commissaire de la dixième édition de la Biennale Internationale d'Architecture de Rotterdam."
        },
        {
          name: "Klaas De Rycke",
          title: "Associé et directeur général de Bollinger+Grohmann et professeur associé à The Bartlett à UCL",
          description: "Enseignant-chercheur, maître de conférences et membre du LéaV."
        },
        {
          name: "Mouloud Behloul",
          title: "Ingénieur et directeur Innovation et construction durable chez Lafarge Ciment France"
        },
        {
          name: "Emilie Hergott",
          title: "Architecte DPLG et ingénieure, directrice d'ingénierie à AREP et membre du groupe prospectif du Plan Bâtiment Durable RBR-T"
        }
      ]
    },
    strategic: {
      name: "Comité stratégique",
      description: "La mise en place d'un comité stratégique aide dans les prises de décision et fait prendre du recul sur la stratégie (mise en œuvre, risques et opportunités). Indépendant du conseil d'administration, un comité stratégique est un organe consultatif. Sa mission consiste à accompagner le dirigeant dans sa réflexion quant à la validation et la mise en œuvre de la stratégie. Composé de personnes totalement indépendantes de l'entreprise et avec des profils complémentaires, le comité stratégique se réunit tous les trois mois pour une réunion d'une demi-journée.",
      meetingFrequency: "Tous les trois mois",
      meetingDuration: "Une demi-journée",
      roles: [
        "Challenge constructif de la stratégie, avec l'esprit critique",
        "Soutien objectif de la stratégie, avec engagement et indépendance",
        "Contrôle dynamique de l'implémentation de la stratégie, avec vigilance et rigueur afin d'identifier les signaux faibles (risques)"
      ],
      legalFramework: [
        "Respect absolu de la confidentialité",
        "Rôle strictement consultatif",
        "Diligence dans les conseils",
        "La prise de poste de chaque membre du comité stratégique sera formalisée par la signature de la charte du comité stratégique"
      ],
      members: [
        {
          name: "Bertrand Lemoine",
          title: "Architecte DPLG et ingénieur X-Ponts, Président du Comité Construction & Beaux-Arts de la Société d'Encouragement pour l'Industrie Nationale",
          description: "Directeur de recherche honoraire au CNRS et expert sur le Grand Paris, les questions urbaines, énergétiques et patrimoniales. Ancien président de l'Académie d'Architecture"
        },
        {
          name: "Luciana Ravanel",
          title: "Fondatrice et présidente d'ANTE PRIMA",
          description: "Ancienne directrice de l'Institut Français d'Architecture"
        },
        {
          name: "Franck Boutté",
          title: "Architecte diplômé de l'ENSA Paris Belleville et ingénieur des Ponts-et-Chaussées",
          description: "Fondateur et président de l'agence d'ingénierie de la ville durable Atelier Franck Boutté"
        },
        {
          name: "Werner Sobek",
          title: "Ingénieur-architecte, professeur à l'université de Stuttgart et ancien directeur de l'ILEK",
          description: "Institut des structures légères et du design conceptuel"
        },
        {
          name: "Marina Tabassu",
          title: "Architecte fondatrice et directrice de l'agence MTA et professeure à l'Université technologique de Delft",
          description: "Fondatrice du collectif \"Foundation for Architecture and Community Equity\" (FACE)"
        }
      ]
    }
  },
  serviceProviders: [
    {
      name: "CLL Avocat",
      type: "Cabinet d'avocat",
      contact: {
        company: "CLL Avocat",
        address: "32, rue de Paradis",
        city: "75010 Paris",
        phone: "+33 (0)1 47 70 30 10"
      },
      description: "Le cabinet CLL Avocats est composé de seize avocats inscrits au barreau de Paris, dont trois associés : Olivier CARON, Alexandre LABETOULE et Erwan LAZENNEC.",
      team: [
        {
          name: "Olivier Caron",
          title: "Avocat associé gérant de CLL Avocat"
        },
        {
          name: "Claire Meyer",
          title: "Avocate au barreau de Paris"
        }
      ]
    },
    {
      name: "EIF Innovation",
      type: "Partenaire innovation et structuration de la recherche",
      contact: {
        company: "EIF Innovation",
        address: "9 place de la Madeleine",
        city: "75008 Paris",
        phone: "+33 (0)1 45 50 39 39"
      },
      description: "EIF Innovation, cabinet de conseil spécialisé dans le financement et le management de l'innovation, est chargé de la structuration financière, de l'auto-évaluation et du reporting annuel du programme de recherche. Le cabinet dispose d'une forte expertise dans le secteur de l'architecture avec l'accompagnement de plus de cent agences. Il s'implique dans un accompagnement tourné vers le management et la structuration de la R&D-I.",
      team: [
        {
          name: "Fabian Venanchias",
          title: "Directeur adjoint EIF Innovation",
          role: "Supervision de l'auto-évaluation et du reporting"
        }
      ]
    }
  ]
};

export default teamData;