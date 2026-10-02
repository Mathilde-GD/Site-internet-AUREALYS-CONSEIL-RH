import { ServiceItem, FormulaPackage, CaseStudy, FaqItem, NewsArticle } from '../types';

export const BOOKING_URL = "https://bookings.cloud.microsoft/book/EchangeAUREALYSCONSEILRH30minutes@aurealysconseilrh.fr/?ismsaljsauthenabled";

export const FOUNDER_INFO = {
  name: "Mathilde Galland",
  title: "Fondatrice d'AUREALYS Conseil RH",
  credentials: "Juriste en Droit Social & Consultante RH Expérimentée",
  location: "Bourg-en-Bresse, Département de l'Ain & Auvergne-Rhône-Alpes",
  remoteAvailable: "Interventions sur site dans l'Ain et à distance partout en France",
  email: "contact@aurealysconseilrh.fr",
  phone: "07 63 43 43 78",
  bookingUrl: BOOKING_URL,
  bioShort: "Juriste en droit social de formation, j'ai fondé AUREALYS Conseil RH avec une conviction chevillée au corps : les dirigeants de TPE et PME méritent la même sécurité juridique et la même excellence RH que les grands groupes, sans la charge fixe d'un DRH à temps plein.",
  quote: "Mon rôle est de décharger le chef d'entreprise de la complexité du droit social, pour transformer les contraintes RH en levier serein de performance et de fidélisation.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "securisation-juridique",
    number: "01",
    title: "Sécurisation Juridique & Conformité Droit Social",
    tagline: "Prévenir les contentieux et blinder vos obligations légales",
    description: "Le droit du travail français est dense et punitif pour les chefs d'entreprise non avertis. Nous passons au crible vos contrats, conventions collectives, affichages obligatoires et procédures pour écarter tout risque prud'homal ou de redressement.",
    benefits: [
      "Zéro faille dans vos contrats de travail (CDI, CDD, clauses de non-concurrence)",
      "Gestion rigoureuse des procédures disciplinaires et ruptures conventionnelles",
      "Conformité avec les spécificités de votre Convention Collective Nationale (CCN)",
      "Assistance juridique continue lors de décisions d'embauche ou de départ"
    ],
    deliverables: [
      "Audit contractuel complet",
      "Modèles de contrats et avenants sur-mesure",
      "Sécurisation des dossiers disciplinaires",
      "Veille conventionnelle proactive"
    ],
    audience: "TPE et PME de 1 à 100 salariés sans juriste interne"
  },
  {
    id: "drh-temps-partage",
    number: "02",
    title: "Direction RH à Temps Partagé",
    tagline: "Une DRH de haut niveau à vos côtés, 1 à 4 jours par mois",
    description: "Bénéficiez de la vision stratégique et de la rigueur opérationnelle d'une Directrice des Ressources Humaines directement intégrée à vos équipes, sans supporter le coût d'un salaire annuel à temps plein.",
    benefits: [
      "Présence régulière sur site ou en visio dédiée",
      "Pilotage stratégique de votre politique RH et marque employeur",
      "Hotline réactive pour le dirigeant et ses managers sous 24h",
      "Souplesse totale de volume d'heures ou jours mensuels"
    ],
    deliverables: [
      "Feuille de route RH annuelle",
      "Animation des rituels managériaux",
      "Interface avec experts-comptables et médecine du travail",
      "Tableau de bord de bord RH et suivi social"
    ],
    audience: "PME en croissance (10 à 60 collaborateurs)"
  },
  {
    id: "recrutement-marque-employeur",
    number: "03",
    title: "Recrutement, Onboarding & Marque Employeur",
    tagline: "Attirer, sélectionner et fidéliser les talents clés",
    description: "Recruter le mauvais profil coûte entre 30 000 € et 50 000 € à une PME. Nous structurons votre processus d'attraction, affinons les fiches de poste, sélectionnons les candidats et mettons en place un parcours d'intégration sans faille.",
    benefits: [
      "Fiches de poste précises et attractives alignées sur la réalité métier",
      "Évaluation des compétences techniques et du savoir-être (soft skills)",
      "Parcours d'onboarding structuré pour réussir la période d'essai",
      "Réduction drastique du turn-over dès la première année"
    ],
    deliverables: [
      "Profil de poste et grille d'évaluation",
      "Conduite d'entretiens de pré-sélection",
      "Livret d'accueil et plan d'intégration 90 jours",
      "Entretiens de suivi de période d'essai"
    ],
    audience: "Dirigeants confrontés à des tensions de recrutement"
  },
  {
    id: "situations-sensibles-relations-sociales",
    number: "04",
    title: "Gestion des Situations Sensibles & Relations Sociales",
    tagline: "Désamorcer les conflits, piloter le CSE et les inaptitudes",
    description: "Face à un conflit d'équipe, une inaptitude médicale imprévue ou la mise en place d'un CSE (obligatoire dès 11 salariés), la moindre erreur de forme vicie la procédure. Nous intervenons en médiation et conseil stratégique.",
    benefits: [
      "Mise en place et animation fluide du Comité Social et Économique (CSE)",
      "Instruction sans faille des dossiers d'inaptitude et reclassement",
      "Médiation neutre et déblocage des tensions interpersonnelles",
      "Préservation du climat social et de la productivité collective"
    ],
    deliverables: [
      "Calendrier électoral et PV d'élections CSE",
      "Dossiers de recherche de reclassement sécurisés",
      "Protocoles transactionnels et accords amiables",
      "Guide de dialogue social pour les encadrants"
    ],
    audience: "Entreprises franchissant des seuils légaux ou en crise humaine"
  },
  {
    id: "formation-accompagnement-managers",
    number: "05",
    title: "Accompagnement & Montée en Compétences des Managers",
    tagline: "Faire de vos chefs d'équipe des relais RH fiables",
    description: "Vos managers de proximité sont souvent de très bons techniciens propulsés sans outils de management. Nous les formons aux fondamentaux du droit du travail et à la posture managériale bienveillante et exigeante.",
    benefits: [
      "Prise en main réussie des entretiens professionnels obligatoires (tous les 2 ans)",
      "Aptitude à poser un cadre sans dériver vers l'arbitraire",
      "Savoir repérer et traiter les signaux faibles (burnout, désengagement)",
      "Communication interne fluide et responsabilisation des équipes"
    ],
    deliverables: [
      "Supports d'entretiens annuels et professionnels",
      "Ateliers pratiques sur mesure (1/2 journée)",
      "Mises en situation réelles et fiches mémo réflexes",
      "Bilan individuel de posture"
    ],
    audience: "Dirigeants souhaitant déléguer sereinement le management"
  }
];

export const FORMULAS: FormulaPackage[] = [
  {
    id: "ponctuelle",
    name: "Intervention À la Carte",
    subtitle: "Résolution ciblée d'une urgence juridique ou d'un besoin ponctuel",
    recommendedFor: "Pour traiter un problème précis sans engagement de durée",
    cadence: "Au forfait ou au temps passé",
    features: [
      "Rédaction ou révision d'un contrat de travail complexe",
      "Sécurisation d'une procédure de rupture conventionnelle",
      "Gestion d'une procédure disciplinaire ou licenciement",
      "Audit flash de conformité sur un point spécifique",
      "Rédaction d'un accord d'entreprise ou règlement intérieur",
      "Assistance téléphonique directe pendant la démarche"
    ],
    highlights: ["Réactivité sous 24h", "Sécurité juridique totale", "Sans engagement"],
    ctaLabel: "Demander un devis express"
  },
  {
    id: "temps-partage",
    name: "DRH à Temps Partagé",
    subtitle: "La solution préférée des PME en croissance de 10 à 60 salariés",
    recommendedFor: "Avoir une DRH dédiée à votre entreprise chaque mois",
    cadence: "1 à 4 jours par mois (sur site ou distanciel)",
    badge: "Formule Recommandée",
    features: [
      "Présence régulière au sein de votre entreprise",
      "Prise en charge complète de vos sujets RH stratégiques et opérationnels",
      "Hotline dirigeant & managers prioritaire 5j/7",
      "Structuration des recrutements, onboarding et fiches de poste",
      "Animation des relations avec le CSE et la médecine du travail",
      "Entretiens professionnels et plan de formation",
      "Pilotage de la marque employeur et climat social"
    ],
    highlights: ["Économie de ~75% vs un DRH interne", "Flexibilité mensuelle", "Partenaire de confiance"],
    ctaLabel: "Planifier un diagnostic offert"
  },
  {
    id: "audit-360",
    name: "Audit RH & Diagnostic 360°",
    subtitle: "Faites le point complet sur la conformité et la maturité de vos RH",
    recommendedFor: "Nouvel entrant, rachat, franchissement de seuil ou préparation de croissance",
    cadence: "Mission de 2 à 3 semaines",
    features: [
      "Vérification exhaustive de tous vos contrats et avenants",
      "Contrôle du respect de votre Convention Collective Nationale",
      "Revue des obligations légales (CSE, affichages, DUERP, entretiens)",
      "Évaluation des pratiques managériales et risques psycho-sociaux",
      "Rapport écrit détaillé avec cartographie des risques priorisés",
      "Plan d'actions opérationnel chiffré et phasé sur 12 mois",
      "Restitution orale au dirigeant et au comité de direction"
    ],
    highlights: ["Vision claire à 360°", "Matrice de criticité", "Feuille de route concrète"],
    ctaLabel: "Demander un audit 360°"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "pme-industrie",
    sector: "PME Industrielle & Tôlerie Fine",
    headcount: "26 salariés · Plaine de l'Ain",
    challenge: "L'entreprise approchait des 30 salariés avec des contrats hétérogènes datant de 15 ans, aucun accord d'aménagement du temps de travail, et une forte angoisse du dirigeant quant à la mise en place obligatoire du CSE.",
    solution: "AUREALYS a conduit un audit complet, réécrit la trame contractuelle type, piloté de A à Z le protocole d'accord préélectoral pour le CSE (élections sans incident) et négocié un accord de modulation du temps de travail adapté aux pics d'activité.",
    results: [
      "Élections du CSE réalisées dans les règles sans contestation",
      "Gain de productivité estimé à 15% grâce à l'accord d'aménagement",
      "Zéro contentieux prud'homal sur les 3 dernières années"
    ],
    quote: "Mathilde Galland nous a apporté une sérénité inestimable. Ses explications sont claires, concrètes, sans charabia juridique. Aujourd'hui notre CSE fonctionne comme un vrai partenaire.",
    author: "Jean-Marc V., Président Directeur Général"
  },
  {
    id: "agence-services",
    sector: "Cabinet Conseil & Ingénierie",
    headcount: "14 salariés · Région Auvergne-Rhône-Alpes",
    challenge: "Fort turn-over parmi les jeunes cadres techniques, sentiment de manque de perspectives et entretiens professionnels jamais formalisés depuis la création de la société.",
    solution: "Mise en place d'une formule DRH à temps partagé (1 jour par mois) : création d'une grille de rémunération transparente, fiches de compétences, formation des fondateurs à la conduite des entretiens et charte de télétravail.",
    results: [
      "Turn-over réduit de 60% dès la première année",
      "100% des entretiens professionnels régularisés",
      "Attractivité renforcée lors des recrutements de profils rares"
    ],
    quote: "Pour une structure de notre taille, embaucher un DRH était hors de portée financière. Avec AUREALYS, nous avons une spécialiste hors pair qui structure notre équipe pour un budget maîtrisé.",
    author: "Sophie D., Co-fondatrice & Directrice Générale"
  },
  {
    id: "sante-services",
    sector: "Structure Médicale / Prestataire Santé",
    headcount: "9 salariés · Ain",
    challenge: "Situation de blocage grave suite à un conflit entre deux collaboratrices clés et une déclaration d'inaptitude médicale reçue par surprise.",
    solution: "Intervention d'urgence d'AUREALYS : médiation neutre, sécurisation intégrale de la recherche de reclassement et conclusion d'un départ amiable sécurisé, évitant un prud'homme presque certain.",
    results: [
      "Procédure bouclée en 4 semaines dans le strict respect de la loi",
      "Climat d'équipe pacifié et reprise normale de l'activité",
      "Risque d'indemnité prud'homale estimé à 35 000 € neutralisé"
    ],
    quote: "La rapidité d'intervention et le sang-froid juridique de Mathilde Galland ont évité un désastre social à notre cabinet.",
    author: "Dr. Pierre B., Gérant Associé"
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "juridique",
    question: "Quelles sont les obligations RH impératives dès 11 salariés ?",
    answer: "Le franchissement du seuil de 11 salariés pendant 12 mois consécutifs impose légalement d'organiser les élections professionnelles pour mettre en place le Comité Social et Économique (CSE). L'absence d'organisation constitue un délit d'entrave pénalement sanctionnable. AUREALYS vous accompagne dans toute la procédure (calendrier, invitations syndicales, vote, PV)."
  },
  {
    category: "juridique",
    question: "Les entretiens professionnels sont-ils réellement obligatoires tous les 2 ans ?",
    answer: "Oui, l'entretien professionnel est une obligation légale pour toutes les entreprises, dès le 1er salarié. Il doit avoir lieu tous les 2 ans, et faire l'objet d'un état des lieux récapitulatif tous les 6 ans. Dans les entreprises de 50 salariés et plus, le manquement entraîne un abondement correctif obligatoire de 3 000 € sur le CPF du salarié."
  },
  {
    category: "pratique",
    question: "Comment se déroule concrètement la formule 'DRH à Temps Partagé' ?",
    answer: "Après un premier diagnostic, nous fixons ensemble le rythme d'intervention idéal pour votre entreprise (par exemple 1 journée tous les 15 jours, ou 2 demi-journées par mois). Je me déplace dans vos locaux dans l'Ain et en région, ou j'interviens en visioconférence. Vous disposez d'un canal direct pour me joindre en continu entre deux séances en cas d'urgence RH."
  },
  {
    category: "pratique",
    question: "Pourquoi faire appel à un conseil RH plutôt qu'à mon expert-comptable ?",
    answer: "L'expert-comptable est un partenaire essentiel pour la paie et les déclarations sociales. Cependant, il n'est pas juriste en droit social au quotidien, n'anime pas les réunions avec vos salariés, ne gère pas les conflits internes, n'audite pas la conformité de vos fiches de poste et ne structure pas vos entretiens. AUREALYS travaille en parfaite complémentarité avec votre expert-comptable pour couvrir tout le volet humain, managérial et stratégique."
  },
  {
    category: "organisation",
    question: "Intervenez-vous uniquement dans le département de l'Ain ?",
    answer: "AUREALYS est basé dans l'Ain (Bourg-en-Bresse, Plaine de l'Ain, Oyonnax, Pays de Gex) et intervient très régulièrement en présentiel dans tout le département et la région Auvergne-Rhône-Alpes (Lyon, Mâcon, etc.). Nous accompagnons également des dirigeants partout en France grâce à nos outils d'externalisation à distance sécurisés."
  },
  {
    category: "organisation",
    question: "Y a-t-il un engagement de durée dans vos contrats ?",
    answer: "Pour les missions ponctuelles et audits, aucun engagement : vous validez un devis clair et nous livrons la mission. Pour le temps partagé, les conventions sont conclues pour un accompagnement pérenne mais restent résiliables avec un simple préavis de courtoisie (généralement 1 mois), car la relation repose avant tout sur la confiance mutuelle."
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: "headcount",
    title: "Combien de salariés compte votre entreprise aujourd'hui ?",
    options: [
      { label: "1 à 5 salariés", points: 10, tag: "TPE amorçage" },
      { label: "6 à 10 salariés", points: 20, tag: "Seuil de structuration" },
      { label: "11 à 49 salariés", points: 30, tag: "Seuil CSE & obligations majeures" },
      { label: "50 salariés et plus", points: 40, tag: "PME confirmée" }
    ]
  },
  {
    id: "contracts",
    title: "Vos contrats de travail et avenants ont-ils été audités ou mis à jour au cours des 24 derniers mois ?",
    options: [
      { label: "Oui, audités par un juriste ou avocat spécialisé", points: 5, alert: false },
      { label: "Nous utilisons des modèles trouvés en ligne ou fournis il y a plusieurs années", points: 25, alert: true },
      { label: "Je ne sais pas exactement / C'est géré de façon informelle", points: 35, alert: true }
    ]
  },
  {
    id: "cse_compliance",
    title: "Si vous avez 11 salariés ou plus, le Comité Social et Économique (CSE) est-il en place ?",
    options: [
      { label: "Oui, en place avec PV d'élections ou PV de carence en règle", points: 0, alert: false },
      { label: "Non, nous n'avons jamais lancé les démarches électorales", points: 40, alert: true },
      { label: "Moins de 11 salariés (non concerné)", points: 0, alert: false }
    ]
  },
  {
    id: "interviews",
    title: "Avez-vous réalisé les entretiens professionnels obligatoires (tous les 2 ans) avec chacun de vos salariés ?",
    options: [
      { label: "Oui, réalisés et formalisés par écrit avec remise de compte-rendu", points: 0, alert: false },
      { label: "Nous faisons des entretiens informels sans trace écrite formelle", points: 25, alert: true },
      { label: "Non, jamais réalisés ou reportés depuis plus de 2 ans", points: 35, alert: true }
    ]
  },
  {
    id: "pain_point",
    title: "Quelle est votre plus grande préoccupation RH actuelle ?",
    options: [
      { label: "Sécuriser une rupture de contrat ou gérer un litige / conflit", points: 30, intent: "Urgence juridique" },
      { label: "Recruter les bons profils et fidéliser l'équipe", points: 20, intent: "Attraction & Fidélisation" },
      { label: "Mettre en place une organisation RH pérenne pour gagner du temps", points: 15, intent: "DRH temps partagé" },
      { label: "Faire le point global sur ma conformité légale", points: 15, intent: "Audit 360" }
    ]
  }
];

export const LATEST_LEGAL_NEWS: NewsArticle[] = [
  {
    id: "conges-payes-arret-maladie",
    slug: "conges-payes-arret-maladie-nouvelles-regles-loi-2024",
    title: "Congés payés et arrêt maladie : Les nouvelles obligations des employeurs",
    badgeKicker: "Loi DDADUE 2024",
    category: "Législation & Paie",
    date: "Mars 2026",
    readTime: "4 min de lecture",
    summary: "Depuis l'entrée en vigueur de la loi n° 2024-364, les salariés acquièrent désormais des congés payés pendant leurs arrêts maladie non professionnels. Mais attention : l'employeur est soumis à une obligation d'information stricte à la reprise.",
    impactTPE: "Tout employeur qui ne notifie pas formellement par écrit au salarié le solde de ses congés et le délai de report de 15 mois s'expose à des réclamations rétroactives sur 3 ans sans limite de forclusion.",
    keyPoints: [
      "Acquisition de 2 jours ouvrables de congés par mois d'arrêt maladie simple (limite de 24 jours ouvrables / 4 semaines par période)",
      "Acquisition de 2,5 jours ouvrables par mois pour accident du travail ou maladie professionnelle (AT/MP)",
      "Délai d'information obligatoire sous 1 mois suivant la reprise du travail",
      "Période de report de 15 mois pour poser les congés acquis"
    ],
    fullContent: {
      context: "Suite aux arrêts de la Cour de cassation de septembre 2023 mettant en conformité le droit français avec le droit européen, la loi du 22 avril 2024 est venue fixer le cadre légal applicable à toutes les entreprises, quelle que soit leur taille.",
      legalRules: [
        "Les salariés en arrêt maladie d'origine non professionnelle acquièrent 2 jours ouvrables de congés par mois (soit 4 semaines par an maximum).",
        "En cas d'accident du travail ou de maladie professionnelle, l'acquisition reste de 2,5 jours ouvrables par mois (5 semaines par an maximum), sans limitation d'un an.",
        "Le délai de report de 15 mois ne commence à courir qu'à compter du moment où l'employeur a formellement informé le salarié de ses droits."
      ],
      riskIfIgnored: "Si l'information écrite n'est pas remise au salarié dans le mois qui suit sa reprise, le délai de report de 15 mois ne court pas. Le salarié peut alors réclamer des arriérés de congés ou d'indemnités compensatrices sur plusieurs années lors d'une rupture de contrat.",
      recommendationsAurealys: [
        "Auditer sans attendre les compteurs de congés payés dans votre logiciel de paie en concertation avec votre expert-comptable.",
        "Mettre en place une procédure systématique d'envoi d'un courrier ou d'une notification écrite de reprise pour sécuriser le point de départ du délai de 15 mois.",
        "Régulariser les situations antérieures à risque pour bloquer la forclusion rétroactive."
      ]
    }
  },
  {
    id: "seuil-11-salaries-cse-delit-entrave",
    slug: "elections-cse-seuil-11-salaries-risques-delit-entrave",
    title: "Franchissement du seuil de 11 salariés : Pourquoi le CSE est une urgence absolue",
    badgeKicker: "Jurisprudence Sociale",
    category: "Relations Collectives",
    date: "Février 2026",
    readTime: "5 min de lecture",
    summary: "Dès que l'effectif atteint 11 salariés pendant 12 mois consécutifs, la mise en place du Comité Social et Économique (CSE) devient obligatoire. Ne pas organiser d'élections paralyse vos procédures RH et engage la responsabilité pénale du dirigeant.",
    impactTPE: "L'absence de CSE ou de PV de carence officiel vicie toute procédure de licenciement pour inaptitude médicale et empêche la conclusion d'accords d'entreprise simplifiés (modulation du temps de travail, prime de partage de la valeur).",
    keyPoints: [
      "Seuil d'assujettissement : 11 salariés équivalents temps plein pendant 12 mois consécutifs",
      "Sanction pénale : Délit d'entrave passible de 7 500 € d'amende et jusqu'à 1 an d'emprisonnement",
      "Impact prud'homal : Nullité ou absence de cause réelle et sérieuse sur les inaptitudes physiques",
      "Alternative légale : Un Procès-Verbal de carence officiel protège intégralement l'entreprise si aucun candidat ne se présente"
    ],
    fullContent: {
      context: "Beaucoup de dirigeants de TPE estiment à tort que l'absence de candidats spontanés les dispense de lancer les élections du CSE. Or, seule l'organisation formelle du scrutin constatée par un PV de carence transmis à l'administration (plateforme des élections professionnelles) apporte une protection juridique.",
      legalRules: [
        "Calcul de l'effectif selon les règles strictes du Code du travail (prorata des temps partiels, CDD, intérimaires).",
        "Information du personnel et invitation des organisations syndicales à négocier le Protocole d'Accord Préélectoral (PAP).",
        "Tenue des deux tours de scrutin ou établissement du PV de carence en cas d'absence de liste déposée."
      ],
      riskIfIgnored: "En cas de licenciement pour inaptitude sans PV de carence ou sans consultation du CSE, le salarié obtient quasi-automatiquement devant les prud'hommes des dommages et intérêts pour licenciement sans cause réelle et sérieuse (souvent 6 à 12 mois de salaire).",
      recommendationsAurealys: [
        "Calculer précisément votre effectif 'moyen' sur les 12 derniers mois pour identifier votre date butoir d'obligation.",
        "Déléguer la préparation matérielle et juridique du calendrier électoral à AUREALYS pour garantir le strict respect des délais d'affichage et d'invitation syndicale.",
        "Transmettre le PV d'élection ou de carence en bonne et due forme pour sécuriser vos futurs accords et procédures."
      ]
    }
  },
  {
    id: "rupture-conventionnelle-points-vigilance",
    slug: "rupture-conventionnelle-forfait-social-controles-dreets",
    title: "Rupture conventionnelle : Nouveaux coûts et vigilance accrue des DREETS",
    badgeKicker: "Pratique Juridique",
    category: "Rupture de Contrat",
    date: "Janvier 2026",
    readTime: "4 min de lecture",
    summary: "Avec l'harmonisation à 30% du forfait social sur les indemnités spécifiques de rupture conventionnelle, le coût pour l'employeur a évolué. Parallèlement, l'administration durcit ses contrôles de forme avant toute homologation.",
    impactTPE: "Une simple erreur d'un jour dans le calcul du délai de rétractation (15 jours calendaires) ou une convention signée avant le terme du préavis de l'entretien entraîne le refus d'homologation TéléRC.",
    keyPoints: [
      "Contribution patronale unique fixée à 30% dès le 1er euro d'indemnité versée",
      "Calcul millimétré du délai de rétractation de 15 jours calendaires (report au 1er jour ouvrable suivant en cas de week-end)",
      "Montant plancher de l'indemnité : Comparaison obligatoire entre l'indemnité légale et conventionnelle CCN",
      "Vérification de l'absence de vice du consentement (contexte de harcèlement ou de litige latent)"
    ],
    fullContent: {
      context: "La rupture conventionnelle demeure le mode de séparation privilégié pour sa sécurité apparente. Cependant, la dématérialisation sur TéléRC et l'automatisation des contrôles de la DREETS rejettent un nombre croissant de dossiers pour des erreurs de calendrier élémentaires.",
      legalRules: [
        "Un ou plusieurs entretiens préalables obligatoires avec possibilité pour le salarié d'être assisté.",
        "Le délai de rétractation de 15 jours calendaires débute le lendemain du jour de la signature de la convention.",
        "La demande d'homologation ne peut être transmise à la DREETS qu'au terme complet de ce délai de rétractation.",
        "La DREETS dispose d'un délai d'instruction de 15 jours ouvrables. Le silence vaut homologation tacite."
      ],
      riskIfIgnored: "Un refus d'homologation repousse la date de fin de contrat d'au moins un mois, imposant à l'entreprise de continuer à rémunérer le salarié, ou ouvrant la voie à une requalification en licenciement sans cause réelle et sérieuse.",
      recommendationsAurealys: [
        "Vérifier les clauses de votre Convention Collective Nationale : de nombreuses CCN prévoient une indemnité de rupture supérieure au barème légal.",
        "Établir un rétro-planning infaillible pour fixer la date de fin de contrat avec une marge de sécurité.",
        "Faire relire et valider votre formulaire TéléRC par AUREALYS Conseil RH avant toute signature formelle."
      ]
    }
  }
];

