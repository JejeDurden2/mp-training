/**
 * MP Training Nice - Business Data
 * All content data for the website
 */

// Business Information
export const businessInfo = {
  name: 'MP Training Nice',
  tagline: "Coaching privé d'excellence",
  phone: '06 27 68 33 43',
  phoneFormatted: '+33627683343',
  email: 'contact@mptraining.fr',
  address: {
    street: '20 Rue Théodore de Banville',
    city: 'Nice',
    postalCode: '06100',
    region: "Provence-Alpes-Côte d'Azur",
    country: 'France',
    neighborhood: 'Libération',
    coordinates: {
      lat: 43.7117389,
      lng: 7.2602488,
    },
  },
  hours: {
    weekdays: {
      days: 'Lundi - Samedi',
      hours: '8h - 21h',
    },
    note: 'Sur rendez-vous uniquement',
  },
  social: {
    instagram: 'https://www.instagram.com/mptraining_nice',
    instagramHandle: '@mptraining_nice',
    facebook: '', // Add if exists
    googleReviews:
      'https://www.google.com/maps/search/MP+Training+Nice/',
  },
  seo: {
    rating: 5,
    reviewCount: 25,
  },
};

// Services
export interface Service {
  id: string;
  name: string;
  slug: string;
  icon: string;
  duration: string;
  price?: string; // Will be added once client provides pricing
  maxParticipants?: number; // For small groups
  description: string;
  features: string[];
  image: string;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: 'personal-training',
    name: 'Personal Training',
    slug: 'personal-training-nice',
    icon: 'user',
    duration: '60 minutes',
    price: '60€',
    description:
      'Coaching 100% personnalisé avec un suivi sur-mesure pour atteindre vos objectifs rapidement. Programme individualisé adapté à votre niveau et vos besoins.',
    features: [
      'Programme individualisé',
      'Suivi nutrition inclus',
      'Résultats garantis',
      'Matériel premium',
      'Flexibilité horaire',
      'Coach dédié',
    ],
    image: '/images/room4.jpeg',
    featured: true,
    seoTitle: 'Personal Training Nice | Coach Diplômé STAPS | MP Training',
    seoDescription:
      'Séances de personal training à Nice avec coachs diplômés STAPS. Programme 100% personnalisé, suivi nutrition inclus. Contactez-nous pour un bilan personnalisé.',
  },
  {
    id: 'small-groups',
    name: 'Small Groups',
    slug: 'small-group-training-nice',
    icon: 'users',
    duration: '60 minutes',
    maxParticipants: 6,
    price: '20€/pers.',
    description:
      "Entraînement en petit groupe (maximum 6 personnes) pour allier l'énergie collective et l'attention personnalisée. Parfait pour la motivation et l'émulation.",
    features: [
      'Maximum 6 personnes',
      'Ambiance conviviale',
      'Suivi personnalisé',
      'Tarifs avantageux',
      'Variété des exercices',
      'Entraide groupe',
    ],
    image: '/images/room5.jpeg',
    featured: false,
    seoTitle: 'Small Group Training Nice | Cours 6 Personnes Max | MP Training',
    seoDescription:
      'Small group training à Nice (6 pers. max). Énergie du collectif + attention personnalisée. Cours de fitness en petit groupe avec coachs STAPS.',
  },
  {
    id: 'athletic-prep',
    name: 'Préparation Athlétique',
    slug: 'preparation-physique-nice',
    icon: 'activity',
    duration: '60 minutes',
    price: '60€',
    description:
      'Programme spécifique pour améliorer vos performances sportives et prévenir les blessures. Adapté aux athlètes amateurs et professionnels.',
    features: [
      'Analyse performance',
      'Préparation physique spécifique',
      'Prévention blessures',
      'Suivi progression',
      'Périodisation entraînement',
      'Optimisation récupération',
    ],
    image: '/images/room3.jpeg',
    featured: false,
    seoTitle: 'Préparation Physique Nice | Sportifs & Athlètes | MP Training',
    seoDescription:
      'Préparation physique à Nice pour sportifs et athlètes. Programme sur-mesure par coach IRONMAN. Performance, prévention blessures, récupération.',
  },
];

// Coaches
export interface Coach {
  id: string;
  name: string;
  fullName: string;
  slug: string;
  title: string;
  phone: string;
  phoneFormatted: string;
  image: string;
  imageFocus: string;
  bio: string;
  longBio: string;
  specialties: string[];
  certifications: string[];
  achievements?: string[];
  philosophy?: string;
  seoTitle: string;
  seoDescription: string;
}

export const coaches: Coach[] = [
  {
    id: 'leo',
    name: 'Léo',
    fullName: 'Léo Paulet-Volpini',
    slug: 'leo-paulet-volpini',
    title: 'Coach Expert',
    phone: '06 27 68 33 43',
    phoneFormatted: '+33627683343',
    image: '/images/Leo.jpeg',
    imageFocus: 'center 10%',
    bio: "Basketteur semi-professionnel, Léo apporte 8 ans d'expérience en préparation physique et coaching privé. Sa passion pour le sport et son expertise technique garantissent des résultats concrets.",
    longBio:
      "Diplômé de l'UFR STAPS Nice, Léo a développé une expertise unique combinant sa carrière de basketteur semi-professionnel et sa formation scientifique en sciences du sport. Avec plus de 8 ans d'expérience en coaching privé, il a accompagné des centaines de clients vers leurs objectifs, qu'il s'agisse de perte de poids, de prise de masse musculaire ou de préparation sportive.",
    specialties: ['Perte de poids', 'Force athlétique', 'Prise de masse', 'Basketball'],
    certifications: ['Diplômé UFR STAPS Nice', 'Préparateur physique'],
    philosophy:
      'Pour Léo, chaque client est unique et mérite un programme sur-mesure. Son approche allie rigueur scientifique et motivation personnalisée pour des résultats durables.',
    seoTitle: 'Léo Paulet-Volpini - Coach Sportif Diplômé STAPS Nice | MP Training',
    seoDescription:
      'Léo Paulet-Volpini, coach sportif diplômé STAPS Nice. Basketteur semi-professionnel, expert en perte de poids, prise de masse et force athlétique.',
  },
  {
    id: 'yann',
    name: 'Yann',
    fullName: 'Yann Massyn',
    slug: 'yann-massyn',
    title: 'Vice-Champion du Monde IRONMAN',
    phone: '07 78 86 16 92',
    phoneFormatted: '+33778861692',
    image: '/images/Yann.jpeg',
    imageFocus: 'center center',
    bio: "Athlète d'élite et coach passionné, Yann vous guide vers vos objectifs avec méthode et motivation. Son expérience de haut niveau apporte une dimension unique à chaque séance.",
    longBio:
      "Vice-Champion du Monde IRONMAN 25-29 ans et diplômé de l'UFR STAPS Nice, Yann incarne l'excellence sportive. Son parcours d'athlète de très haut niveau en triathlon longue distance lui confère une connaissance unique de l'entraînement, de la nutrition et de la préparation mentale. Il met aujourd'hui cette expertise au service de tous ceux qui souhaitent se dépasser.",
    specialties: ['Endurance', 'Performance', 'Triathlon', 'IRONMAN'],
    certifications: ['Diplômé UFR STAPS Nice', 'BPJEPS AGFF', 'Entraîneur IRONMAN'],
    achievements: [
      'Vice-Champion du Monde IRONMAN 25-29 ans',
      'Finisher IRONMAN multiple',
      'Triathlète longue distance',
    ],
    philosophy:
      "Yann croit en la puissance de la régularité et de la progression constante. Son expérience au plus haut niveau lui a appris que chaque objectif, aussi ambitieux soit-il, est atteignable avec la bonne méthode et le bon état d'esprit.",
    seoTitle: 'Yann Massyn - Vice-Champion IRONMAN & Coach Nice | MP Training',
    seoDescription:
      'Yann Massyn, Vice-Champion du Monde IRONMAN, coach sportif diplômé STAPS Nice. Expert endurance, triathlon, préparation athlétique haute performance.',
  },
];

// Studio Features
export const studioFeatures = [
  {
    icon: 'dumbbell',
    title: 'Équipement Premium',
    description: '80m² équipés du meilleur matériel professionnel pour tous vos objectifs',
  },
  {
    icon: 'users',
    title: 'Petits Effectifs',
    description: 'Maximum 6 personnes par groupe pour un suivi optimal et personnalisé',
  },
  {
    icon: 'map-pin',
    title: 'Emplacement Idéal',
    description: 'En plein centre de Nice, quartier Libération, facilement accessible',
  },
  {
    icon: 'clock',
    title: 'Horaires Flexibles',
    description: 'Ouvert du lundi au samedi, 8h-21h, sur rendez-vous uniquement',
  },
];

// Studio Images
export const studioImages = [
  {
    src: '/images/room1.jpeg',
    alt: 'Espace cardio du studio MP Training Nice avec équipements premium',
    featured: false,
  },
  {
    src: '/images/room2.jpeg',
    alt: "Studio de coaching sportif privé moderne à Nice - Vue d'ensemble",
    featured: true,
  },
  {
    src: '/images/room3.jpeg',
    alt: 'Zone de force avec haltères, kettlebells et racks pour préparation athlétique Nice',
    featured: false,
  },
  {
    src: '/images/room4.jpeg',
    alt: "Salle d'entraînement privée MP Training Nice - Personal training",
    featured: false,
  },
  {
    src: '/images/room5.jpeg',
    alt: 'Équipement de musculation haut de gamme - Small group training Nice',
    featured: false,
  },
];

// FAQ Items
export const faqItems = [
  {
    question: 'Combien coûte une séance de coaching sportif à Nice ?',
    answer:
      'Nos tarifs varient selon la formule choisie : personal training individuel, small groups (6 personnes max) ou préparation athlétique. Nous proposons également des packages avantageux. Contactez-nous pour un devis personnalisé adapté à vos objectifs.',
  },
  {
    question: 'Comment se passe la première prise de contact ?',
    answer:
      "Lors de notre premier échange, nous discutons de vos objectifs, votre niveau actuel et vos disponibilités. Cela nous permet de vous proposer un programme sur-mesure parfaitement adapté à vos besoins. C'est l'occasion idéale de découvrir notre approche et de voir si MP Training correspond à vos attentes.",
  },
  {
    question: 'Faut-il être en forme pour commencer le coaching sportif ?',
    answer:
      "Absolument pas ! Nos programmes sont adaptés à tous les niveaux, du débutant complet à l'athlète confirmé. Chaque séance est personnalisée en fonction de votre condition physique actuelle et de vos objectifs.",
  },
  {
    question: 'Quelle est la différence entre personal training et small group ?',
    answer:
      "Le personal training est une séance 1-on-1 avec un coach dédié, 100% personnalisée. Le small group (maximum 6 personnes) combine l'énergie du collectif avec un suivi personnalisé, à un tarif plus avantageux.",
  },
  {
    question: 'Où se situe MP Training à Nice ?',
    answer:
      'Nous sommes situés au 20 Rue Théodore de Banville, dans le quartier Libération, en plein centre de Nice. Facilement accessible en transport en commun et avec parking à proximité.',
  },
  {
    question: "Quels sont vos horaires d'ouverture ?",
    answer:
      'Nous sommes ouverts du lundi au samedi, de 8h à 21h, sur rendez-vous uniquement. Cette flexibilité nous permet de nous adapter à vos contraintes professionnelles et personnelles.',
  },
  {
    question: 'Les coachs donnent-ils des conseils nutritionnels ?',
    answer:
      'Oui ! Nos coachs diplômés STAPS vous fournissent des conseils nutritionnels personnalisés adaptés à vos objectifs (perte de poids, prise de masse, performance). Un suivi nutrition est inclus dans nos programmes de personal training.',
  },
  {
    question: 'Puis-je choisir mon coach ?',
    answer:
      'Tout à fait ! Léo et Yann ont des spécialités complémentaires (force/musculation pour Léo, endurance/performance pour Yann). Lors de notre premier échange, nous vous orienterons vers le coach le plus adapté à vos objectifs, mais le choix final vous appartient.',
  },
];

// Testimonials (Example - Real ones will be added once client provides)
export const testimonials = [
  {
    id: '1',
    name: 'Sophie D.',
    rating: 5,
    date: '2025-12-15',
    text: "Après 3 mois de personal training avec Léo, j'ai perdu 8kg et gagné en confiance. Le studio MP Training à Nice est impeccable, et l'accompagnement 100% personnalisé.",
    service: 'Personal Training',
    coach: 'Léo',
  },
  {
    id: '2',
    name: 'Marc L.',
    rating: 5,
    date: '2025-11-20',
    text: "Yann m'a préparé pour mon premier IRONMAN. Grâce à son expertise et sa méthode, j'ai terminé la course dans un temps bien meilleur que prévu. Un coach exceptionnel !",
    service: 'Préparation Athlétique',
    coach: 'Yann',
  },
  {
    id: '3',
    name: 'Julie M.',
    rating: 5,
    date: '2025-10-10',
    text: "Les small groups chez MP Training, c'est le parfait équilibre : l'énergie du groupe avec l'attention d'un coach. Ambiance top et résultats au rendez-vous !",
    service: 'Small Groups',
    coach: 'Léo',
  },
];
