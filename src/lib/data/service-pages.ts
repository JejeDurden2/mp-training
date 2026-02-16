import type { ServicePageData } from './types';

export const servicePages: ServicePageData[] = [
  {
    slug: 'personal-training',
    pageType: 'service',
    serviceId: 'personal-training',
    seo: {
      title: 'Personal Training Nice | Coach Diplômé STAPS | MP Training',
      description:
        'Séances de personal training à Nice avec coachs diplômés STAPS. Programme 100% personnalisé, suivi nutrition inclus. Studio privé 80m² quartier Libération.',
      h1: 'Personal Training à Nice',
      canonical: '/coaching/personal-training',
      keywords: [
        'personal training nice',
        'coach personnel nice',
        'personal trainer nice',
        'coaching individuel nice',
      ],
    },
    heroImage: '/images/room4.jpeg',
    content: {
      eyebrow: 'PERSONAL TRAINING',
      intro:
        "Le personal training chez MP Training, c'est bien plus qu'un simple entraînement accompagné. C'est une prise en charge complète — physique, nutritionnelle et mentale — conçue par des coachs diplômés STAPS pour vous faire progresser rapidement et durablement dans notre studio privé de Nice.",
      sections: [
        {
          heading: 'Un Programme 100% Sur-Mesure',
          icon: 'clipboard-list',
          body: "Chaque programme de personal training commence par un bilan complet : évaluation de votre condition physique, analyse de vos habitudes alimentaires, définition d'objectifs précis et réalistes. Votre coach construit ensuite un programme entièrement adapté à votre profil, vos contraintes et votre rythme de vie.",
          listItems: [
            'Bilan initial complet (posture, mobilité, force, endurance)',
            "Programme évolutif ajusté à chaque séance selon votre progression",
            'Suivi nutrition personnalisé inclus dans la formule',
            "Exercices adaptés à vos éventuelles limitations physiques",
          ],
        },
        {
          heading: 'Une Séance Type au Studio',
          icon: 'timer',
          body: "Chaque séance de 60 minutes suit une structure éprouvée. Échauffement ciblé, travail principal adapté à vos objectifs du jour (force, cardio, mobilité), puis retour au calme avec étirements. Votre coach vous guide sur chaque mouvement, corrige votre technique en temps réel et adapte l'intensité à votre forme du moment.",
        },
        {
          heading: 'Méthode STAPS : La Science au Service de Vos Résultats',
          icon: 'graduation-cap',
          body: "Nos coachs Léo et Yann sont diplômés de l'UFR STAPS de Nice — la formation universitaire de référence en sciences du sport en France. Cela signifie que chaque exercice, chaque programme et chaque conseil repose sur des données scientifiques validées, pas sur des tendances ou du \"broscience\". Anatomie, physiologie de l'effort, biomécanique : votre entraînement est conçu avec rigueur pour maximiser vos résultats tout en préservant votre santé.",
        },
      ],
    },
    recommendedCoachId: 'leo',
    recommendedServiceIds: ['duo-training', 'small-groups'],
    relatedPageSlugs: ['perte-de-poids', 'prise-de-masse', 'debutant', 'remise-en-forme'],
    relevantFaqIndices: [0, 1, 2, 6],
    testimonialId: '1',
    cta: {
      headline: 'Prêt à Vous Transformer ?',
      description:
        'Contactez-nous pour un premier échange gratuit. Nous définirons ensemble vos objectifs et le programme idéal pour les atteindre.',
    },
  },
  {
    slug: 'duo-training',
    pageType: 'service',
    serviceId: 'duo-training',
    seo: {
      title: 'Duo Training Nice | Coaching à Deux | MP Training',
      description:
        'Duo training à Nice : entraînez-vous à deux avec un coach diplômé STAPS. Motivation partagée, programme personnalisé, tarifs avantageux. Studio privé MP Training.',
      h1: 'Duo Training à Nice',
      canonical: '/coaching/duo-training',
      keywords: [
        'duo training nice',
        'coaching à deux nice',
        'entraînement duo nice',
        'sport en duo nice',
      ],
    },
    heroImage: '/images/room5.jpeg',
    content: {
      eyebrow: 'DUO TRAINING',
      intro:
        "Le duo training combine le meilleur des deux mondes : l'attention personnalisée d'un coach privé et l'énergie motivante d'un partenaire d'entraînement. En couple, entre amis ou entre collègues, partagez l'effort et les résultats dans notre studio privé de Nice.",
      sections: [
        {
          heading: 'La Force du Duo',
          icon: 'user-plus',
          body: "S'entraîner à deux, c'est multiplier la motivation. Quand l'un faiblit, l'autre pousse. Les études en sciences du sport le confirment : l'entraînement en binôme augmente la régularité, l'intensité et le plaisir des séances. Chez MP Training, votre coach adapte chaque exercice au niveau de chacun — pas besoin d'être au même niveau pour s'entraîner ensemble.",
          listItems: [
            'Programme adapté au niveau de chaque participant',
            "Exercices en binôme qui renforcent la dynamique d'équipe",
            "Possibilité de travailler des objectifs différents dans la même séance",
            "Ambiance conviviale qui transforme l'effort en plaisir",
          ],
        },
        {
          heading: 'Pour Qui ?',
          icon: 'heart',
          body: "Le duo training s'adresse à tous les binômes motivés : couples cherchant une activité commune, amis qui veulent se remettre en forme ensemble, collègues souhaitant une pause sportive partagée. C'est aussi une excellente option pour les personnes qui hésitent à se lancer seules — avoir un partenaire rassure et engage.",
        },
        {
          heading: 'Un Tarif Avantageux Sans Compromis',
          icon: 'piggy-bank',
          body: "À 30€ par personne par séance en package de 10, le duo training offre un coaching personnalisé à un tarif bien plus accessible que le personal training individuel. Et la qualité ne change pas : même studio privé, même matériel premium, même expertise STAPS. Votre coach divise son attention entre deux personnes, pas vingt.",
        },
      ],
    },
    recommendedCoachId: 'leo',
    recommendedServiceIds: ['personal-training', 'small-groups'],
    relatedPageSlugs: ['coaching-femme', 'remise-en-forme', 'debutant'],
    relevantFaqIndices: [0, 1, 3, 7],
    cta: {
      headline: 'Entraînez-vous à Deux',
      description:
        'Appelez-nous pour organiser votre première séance de duo training. Trouvez le créneau qui convient à votre binôme.',
    },
  },
  {
    slug: 'small-groups',
    pageType: 'service',
    serviceId: 'small-groups',
    seo: {
      title: 'Small Group Training Nice | Cours 6 Personnes Max | MP Training',
      description:
        'Small group training à Nice : cours en petit groupe (6 pers. max) avec coach STAPS. Énergie collective + attention personnalisée. Dès 20€/séance.',
      h1: 'Small Group Training à Nice',
      canonical: '/coaching/small-groups',
      keywords: [
        'small group training nice',
        'petit groupe fitness nice',
        'cours collectif nice petit groupe',
        'coaching groupe nice',
      ],
    },
    heroImage: '/images/room6.jpeg',
    content: {
      eyebrow: 'SMALL GROUPS',
      intro:
        "Nos cours en small group (maximum 6 personnes) offrent l'énergie d'un entraînement collectif avec l'attention d'un coaching personnalisé. C'est la formule idéale pour progresser dans une ambiance motivante tout en bénéficiant d'un suivi de qualité.",
      sections: [
        {
          heading: 'Maximum 6 Personnes : La Différence MP Training',
          icon: 'users',
          body: "Dans les cours collectifs classiques, vous êtes 15, 20, parfois 30. Impossible pour le coach de corriger votre technique ou d'adapter les exercices. Chez MP Training, le petit groupe (6 personnes maximum) garantit que votre coach vous voit, vous corrige et vous pousse individuellement — tout en profitant de la dynamique collective.",
          listItems: [
            'Correction technique individuelle sur chaque exercice',
            "Intensité adaptée au niveau de chacun dans le groupe",
            "Émulation positive entre participants",
            "Ambiance conviviale et motivante",
          ],
        },
        {
          heading: "L'Énergie du Groupe, la Qualité du Coaching",
          icon: 'zap',
          body: "Les séances small group combinent renforcement musculaire, cardio et travail fonctionnel. Chaque cours est différent pour maintenir la motivation et travailler le corps de manière complète. Votre coach alterne les formats : circuits, AMRAP, EMOM, travail en binôme — impossible de s'ennuyer.",
        },
        {
          heading: 'Le Meilleur Rapport Qualité-Prix',
          icon: 'piggy-bank',
          body: "À 20€ par séance en package de 10, le small group est notre formule la plus accessible. Vous bénéficiez du même studio privé, du même matériel premium et de la même expertise STAPS que nos clients en personal training — à un tarif qui permet de s'entraîner régulièrement sans se ruiner.",
        },
      ],
    },
    recommendedCoachId: 'leo',
    recommendedServiceIds: ['personal-training', 'duo-training'],
    relatedPageSlugs: ['remise-en-forme', 'perte-de-poids', 'debutant', 'coaching-femme'],
    relevantFaqIndices: [0, 2, 3, 5],
    testimonialId: '3',
    cta: {
      headline: 'Rejoignez un Small Group',
      description:
        'Appelez-nous pour connaître les prochains créneaux disponibles et réserver votre place.',
    },
  },
  {
    slug: 'preparation-athletique',
    pageType: 'service',
    serviceId: 'athletic-prep',
    seo: {
      title: 'Préparation Athlétique Nice | Coach IRONMAN & STAPS | MP Training',
      description:
        'Préparation athlétique à Nice par un Vice-Champion du Monde IRONMAN. Programme sur-mesure pour sportifs et athlètes. Prévention blessures, performance.',
      h1: 'Préparation Athlétique à Nice',
      canonical: '/coaching/preparation-athletique',
      keywords: [
        'préparation athlétique nice',
        'préparation physique nice',
        'coach sportif performance nice',
        'préparateur physique nice',
      ],
    },
    heroImage: '/images/A7402405.jpg',
    content: {
      eyebrow: 'PRÉPARATION ATHLÉTIQUE',
      intro:
        "La préparation athlétique chez MP Training s'adresse aux sportifs — amateurs comme confirmés — qui veulent améliorer leurs performances et prévenir les blessures. Encadrée par Yann, Vice-Champion du Monde IRONMAN, cette formule combine expertise de haut niveau et approche scientifique STAPS.",
      sections: [
        {
          heading: 'Une Expertise de Haut Niveau',
          icon: 'trophy',
          body: "Yann ne se contente pas de coacher la performance — il l'a vécue au plus haut niveau. Vice-Champion du Monde IRONMAN 25-29 ans, finisher de multiples épreuves longue distance, il connaît les exigences physiques et mentales de la compétition. Cette expérience unique lui permet de comprendre vos objectifs sportifs et de construire des programmes qui fonctionnent réellement.",
          listItems: [
            "Analyse biomécanique et évaluation des points faibles",
            "Périodisation adaptée à votre calendrier de compétitions",
            "Travail spécifique par discipline (course, vélo, natation, sports collectifs)",
            "Gestion de la charge d'entraînement et prévention du surentraînement",
          ],
        },
        {
          heading: 'Prévention des Blessures',
          icon: 'shield',
          body: "La blessure est le pire ennemi du sportif. Grâce à leur formation STAPS en anatomie et biomécanique, nos coachs identifient vos déséquilibres musculaires et vos faiblesses avant qu'ils ne deviennent des blessures. Chaque programme intègre un travail de renforcement ciblé, de mobilité et de récupération pour vous garder en forme toute la saison.",
        },
        {
          heading: 'Pour Tous les Sports, Tous les Niveaux',
          icon: 'activity',
          body: "Que vous prépariez un IRONMAN, un marathon, une saison de basket ou simplement un défi sportif personnel, la préparation athlétique s'adapte à votre discipline et votre niveau. Du sportif du dimanche qui veut progresser à l'athlète semi-pro qui vise le podium, nos programmes sont construits sur-mesure avec les mêmes méthodes scientifiques.",
        },
      ],
    },
    recommendedCoachId: 'yann',
    recommendedServiceIds: ['personal-training'],
    relatedPageSlugs: ['preparation-ironman', 'sportif-amateur', 'prise-de-masse'],
    relevantFaqIndices: [0, 1, 2, 7],
    testimonialId: '2',
    cta: {
      headline: 'Passez au Niveau Supérieur',
      description:
        'Contactez Yann pour discuter de vos objectifs sportifs et construire votre programme de préparation athlétique.',
    },
  },
];
