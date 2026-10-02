import { TrainingCourse } from '../types';

/**
 * CATALOGUE DES FORMATIONS DIGITALES — AUREALYS CONSEIL RH
 * 
 * NOTE POUR MATHILDE GALLAND :
 * Vous pouvez facilement modifier, ajouter des modules ou changer vos liens de paiement
 * (Stripe, PayPal, lien bancaire ou bon de commande) directement ci-dessous.
 */

export const DIGITAL_COURSES: TrainingCourse[] = [
  {
    id: "formation-rupture-conventionnelle",
    slug: "rupture-conventionnelle-sans-risque",
    title: "Sécuriser les Ruptures Conventionnelles & Départs Négociés",
    subtitle: "Guide méthodologique et juridique pas à pas pour dirigeants de TPE/PME.",
    badge: "Le plus demandé",
    category: "rupture",
    price: 390,
    priceFormatted: "390 € HT",
    vatRate: 20,
    // Lien de paiement configurable (ex: Stripe Checkout, lien bancaire, etc.)
    paymentUrl: "https://buy.stripe.com/test_rupture_conventionnelle_aurealys",
    duration: "3h15 de modules vidéo + 5 modèles juridiques Word/PDF",
    modulesCount: 4,
    targetAudience: "Dirigeants de TPE et PME, Directeurs Généraux, Responsables Administratifs & RH.",
    prerequisites: "Aucun prérequis juridique. Conçu pour être immédiatement applicable en entreprise.",
    description: "La rupture conventionnelle est un outil formidable de paix sociale, mais la moindre erreur dans le calendrier de rétractation, le calcul de l'indemnité ou la formulation peut entraîner la nullité ou un contentieux prud'homal lourd. Cette formation vous donne la feuille de route exacte pour sécuriser vos départs amiables sans stress.",
    learningOutcomes: [
      "Maîtriser le calendrier impératif (délais de rétractation de 15 jours calendaires et instruction DREETS).",
      "Calculer avec exactitude l'indemnité spécifique de rupture en tenant compte des minima conventionnels (CCN).",
      "Gérer le nouveau forfait social unifié à 30% sans mauvaise surprise fiscale.",
      "Sécuriser l'entretien préalable et éviter le vice du consentement (harcèlement, pression)."
    ],
    modules: [
      {
        id: "rc-mod-1",
        number: "Module 01",
        title: "Le cadre légal et les conditions préalables indispensables",
        duration: "45 min",
        summary: "Identifier quand la rupture conventionnelle est opportune, et surtout quand elle est formellement proscrite (contexte de harcèlement, inaptitude, démission déguisée).",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ", // Remplacer par votre lien vidéo (Loom, YouTube Unlisted, Vimeo)
        keyPoints: [
          "Cas autorisés vs situations à haut risque contentieux",
          "Obligation de neutralité et liberté de consentement du salarié",
          "Spécificités applicables aux salariés protégés (autorisation inspecteur)"
        ],
        resources: [
          "Fiche mémo : La check-list d'éligibilité en 10 points (PDF)",
          "Trame d'invitation à l'entretien préparatoire (Word)"
        ]
      },
      {
        id: "rc-mod-2",
        number: "Module 02",
        title: "Le calendrier millimétré & la gestion des délais légaux",
        duration: "55 min",
        summary: "Calcul pas à pas du délai de rétractation (jours calendaires vs ouvrables) et de la transmission à la plateforme TéléRC pour homologation administrative.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Règle de report du lendemain de la signature et jours fériés",
          "Délai d'instruction de 15 jours ouvrables de la DREETS",
          "Fixation rigoureuse de la date effective de rupture du contrat"
        ],
        resources: [
          "Calculateur automatique de dates et de délais (Excel interactif)",
          "Guide officiel de télé-déclaration sur le portail TéléRC (PDF)"
        ]
      },
      {
        id: "rc-mod-3",
        number: "Module 03",
        title: "Calcul de l'indemnité légale ou conventionnelle & forfait social",
        duration: "50 min",
        summary: "Détermination du salaire de référence (12 derniers mois vs 3 derniers mois) et comparaison stricte avec les barèmes de votre Convention Collective.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Salaires de référence : primes, heures supp et arrêts maladie",
          "Indemnité légale vs conventionnelle : retenir le montant le plus favorable",
          "Traitement social et fiscal : application du forfait social patronal à 30%"
        ],
        resources: [
          "Simulateur de calcul d'indemnité et de coût patronal total (Excel)",
          "Exemples chiffrés commentés par Mathilde Galland"
        ]
      },
      {
        id: "rc-mod-4",
        number: "Module 04",
        title: "Documents de fin de contrat et formalisation sans contestation",
        duration: "45 min",
        summary: "Remise du reçu pour solde de tout compte, certificat de travail et attestation France Travail, avec gestion des clauses de non-concurrence.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Délai de remise des documents et mention des voies de contestation",
          "Gestion de la dispense ou de l'exécution de la fin de contrat",
          "Levée des clauses de non-concurrence dans les délais impartis"
        ],
        resources: [
          "Modèle de reçu pour solde de tout compte sécurisé (Word)",
          "Attestation de levée de clause de non-concurrence (Word)"
        ]
      }
    ],
    includedAssets: [
      {
        id: "asset-1",
        title: "Trame complète d'accord de rupture conventionnelle",
        type: "word",
        description: "Document juridique personnalisable avec toutes les clauses protectrices pour l'employeur."
      },
      {
        id: "asset-2",
        title: "Calculateur de délais et d'indemnités TéléRC",
        type: "excel",
        description: "Matrice Excel automatisée pour ne commettre aucune erreur de date ou de montant."
      },
      {
        id: "asset-3",
        title: "Check-list anti-litige avant signature",
        type: "pdf",
        description: "Synthèse d'une page à vérifier avant d'envoyer le dossier à l'administration."
      }
    ],
    opcoEligible: true
  },
  {
    id: "formation-cse-tpe-pme",
    slug: "mettre-en-place-animer-cse",
    title: "Mettre en Place & Animer son Premier CSE (11 à 49 salariés)",
    subtitle: "Sécuriser les élections professionnelles et transformer le CSE en partenaire constructif.",
    badge: "Essentiel 11 salariés",
    category: "cse",
    price: 490,
    priceFormatted: "490 € HT",
    vatRate: 20,
    paymentUrl: "https://buy.stripe.com/test_cse_tpe_pme_aurealys",
    duration: "4h00 de modules vidéo + kit électoral complet prêt à l'emploi",
    modulesCount: 4,
    targetAudience: "Dirigeants de PME franchissant les 11 salariés, DRH à temps partagé, directeurs d'usine.",
    prerequisites: "Entreprise ayant atteint 11 salariés pendant 12 mois consécutifs.",
    description: "Le franchissement du seuil de 11 salariés déclenche l'obligation légale d'organiser les élections du Comité Social et Économique (CSE). L'omettre expose à des sanctions pénales (délit d'entrave) et paralyse les procédures d'inaptitude. Cette formation vous guide pas à pas pour réussir le processus électoral et instaurer un dialogue social apaisé.",
    learningOutcomes: [
      "Calculer avec précision l'effectif moyen selon les règles du Code du travail (CDI, CDD, intérimaires au prorata).",
      "Maîtriser le rétroplanning électoral officiel et les formalités d'invitation des organisations syndicales.",
      "Rédiger le Protocole d'Accord Préélectoral (PAP) ou établir un PV de carence inattaquable.",
      "Animer les réunions périodiques du CSE sans dérive d'ordre du jour."
    ],
    modules: [
      {
        id: "cse-mod-1",
        number: "Module 01",
        title: "Décompte des effectifs & Déclenchement de l'obligation",
        duration: "50 min",
        summary: "Comment compter précisément vos salariés (temps partiels, alternants, CDD, intérimaires) et repérer le mois de déclenchement officiel.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Règle des 12 mois consécutifs au-dessus de 11 ETP",
          "Salariés exclus du calcul (stagiaires, apprentis, contrats pro)",
          "Risques encourus en cas de carence injustifiée"
        ],
        resources: [
          "Grille Excel de calcul des Équivalents Temps Plein (ETP)",
          "Note explicative pour le comité de direction (PDF)"
        ]
      },
      {
        id: "cse-mod-2",
        number: "Module 02",
        title: "Le calendrier électoral et l'invitation des syndicats",
        duration: "1h05",
        summary: "Le respect scrupuleux des étapes : information du personnel, invitation des syndicats représentatifs, négociation du PAP.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Rétroplanning obligatoire sur 90 jours",
          "Courriers recommandés avec accusé de réception aux syndicats",
          "Règles d'affichage obligatoire dans l'entreprise"
        ],
        resources: [
          "Modèle de courrier d'invitation aux syndicats (Word)",
          "Note d'information au personnel avec calendrier des scrutins (Word)"
        ]
      },
      {
        id: "cse-mod-3",
        number: "Module 03",
        title: "Le scrutin : organisation du vote ou PV de carence officiel",
        duration: "1h00",
        summary: "Déroulement du 1er et 2nd tour, dépouillement, calcul du quorum, et établissement du PV Cerfa officiel à transmettre au CTEP.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Matériel de vote, isoloirs et composition du bureau de vote",
          "Procédure en cas d'absence totale de candidat (PV de carence)",
          "Télétransmission sur la plateforme gouvernementale CTEP"
        ],
        resources: [
          "Kit complet d'émargement et bulletins de vote types (Word)",
          "Notice officielle Cerfa PV d'élection et PV de carence (PDF)"
        ]
      },
      {
        id: "cse-mod-4",
        number: "Module 04",
        title: "Fonctionnement au quotidien du CSE dans les entreprises de moins de 50 salariés",
        duration: "1h05",
        summary: "Fréquence des réunions, gestion du crédit de 10 à 20 heures de délégation par mois, rédaction du registre des réclamations.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Attributions économiques et santé/sécurité en TPE/PME",
          "Bons de délégation et suivi des heures de délégation",
          "Tenue du registre légal des réclamations du CSE"
        ],
        resources: [
          "Modèle de convocation et ordre du jour d'une réunion CSE (Word)",
          "Fiche pratique de gestion des heures de délégation (Excel)"
        ]
      }
    ],
    includedAssets: [
      {
        id: "asset-cse-1",
        title: "Kit électoral complet prêt à l'emploi (Modèles Word + Excel)",
        type: "word",
        description: "Toutes les trames d'affichage, convocations syndicales et bordereaux d'émargement."
      },
      {
        id: "asset-cse-2",
        title: "Rétroplanning électoral automatisé",
        type: "excel",
        description: "Génère automatiquement les dates butoirs légales à partir de votre date de scrutin envisagée."
      },
      {
        id: "asset-cse-3",
        title: "Guide de conduite de réunion avec vos élus CSE",
        type: "pdf",
        description: "Bonnes pratiques pour des échanges constructifs et orientés solutions."
      }
    ],
    opcoEligible: true
  },
  {
    id: "formation-entretiens-professionnels",
    slug: "conduire-entretiens-professionnels-securises",
    title: "Conduire & Sécuriser les Entretiens Professionnels",
    subtitle: "Régulariser vos obligations biennales et transformer l'entretien en levier managérial.",
    badge: "Obligation légale",
    category: "management",
    price: 290,
    priceFormatted: "290 € HT",
    vatRate: 20,
    paymentUrl: "https://buy.stripe.com/test_entretiens_professionnels_aurealys",
    duration: "2h30 de modules vidéo + grilles d'évaluation et trames d'entretien",
    modulesCount: 3,
    targetAudience: "Dirigeants, managers opérationnels, responsables RH et chefs d'équipe.",
    prerequisites: "Aucun.",
    description: "L'entretien professionnel est obligatoire tous les 2 ans pour chaque salarié, complété d'un état des lieux récapitulatif tous les 6 ans. Dans les entreprises de 50 salariés et plus, l'absence d'entretien entraîne un abondement punitif de 3 000 € par collaborateur sur son CPF. Cette formation vous permet de vous mettre en conformité totale tout en valorisant vos équipes.",
    learningOutcomes: [
      "Distinguer clairement l'entretien annuel d'évaluation de l'entretien professionnel obligatoire.",
      "Remplir et faire signer les grilles d'entretien professionnel dans le respect du Code du travail.",
      "Mener avec rigueur le bilan récapitulatif des 6 ans et valider les critères légaux d'évolution.",
      "Désamorcer les tensions et orienter l'échange vers les projets de formation de l'entreprise."
    ],
    modules: [
      {
        id: "ep-mod-1",
        number: "Module 01",
        title: "Fondements juridiques : Qui, quand et comment ?",
        duration: "45 min",
        summary: "Les règles impératives : salariés concernés (tous les contrats), périodicité de 2 ans, entretiens de retour après longue absence (maternité, maladie pro, sabbatique).",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Salariés éligibles sans condition d'ancienneté",
          "Obligation de convocation et remise de la synthèse écrite",
          "Interdiction formelle d'évaluer le travail durant cet entretien spécifique"
        ],
        resources: [
          "Notice juridique de cadrage légal (PDF)",
          "Trame de convocation officielle à l'entretien professionnel (Word)"
        ]
      },
      {
        id: "ep-mod-2",
        number: "Module 02",
        title: "Conduite pratique : questions clés et posture du manager",
        duration: "55 min",
        summary: "Guide d'entretien étape par étape : souhaits d'évolution, compétences à développer, utilisation du CPF et opportunités de formation interne/externe.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Techniques d'écoute active et questionnement ouvert",
          "Comment aborder les souhaits de reconversion sans déstabiliser le service",
          "Formalisation de l'accord sur les objectifs de formation"
        ],
        resources: [
          "Guide d'animation pour le dirigeant ou manager (Word)",
          "Support d'entretien professionnel personnalisable (Word)"
        ]
      },
      {
        id: "ep-mod-3",
        number: "Module 03",
        title: "L'état des lieux récapitulatif des 6 ans & gestion des risques",
        duration: "50 min",
        summary: "Comment réaliser l'état des lieux des 6 ans, vérifier les actions de formation certifiantes et archiver les preuves légales pour les contrôles.",
        videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
        keyPoints: [
          "Les 3 critères légaux d'appréciation du parcours salarié",
          "Calcul et versement de l'abondement correctif CPF si applicable",
          "Archivage sécurisé et traçabilité opposable en cas de contrôle DREETS"
        ],
        resources: [
          "Matrice récapitulative des 6 ans prête à l'emploi (Word)",
          "Tableau de bord de suivi RH des entretiens par collaborateur (Excel)"
        ]
      }
    ],
    includedAssets: [
      {
        id: "asset-ep-1",
        title: "Trame d'entretien professionnel complète (Conforme 2026)",
        type: "word",
        description: "Formulaire complet prêt à imprimer ou signer électroniquement avec vos collaborateurs."
      },
      {
        id: "asset-ep-2",
        title: "Fiche d'état des lieux récapitulatif des 6 ans",
        type: "word",
        description: "Document officiel validant les 3 critères légaux d'évolution professionnelle."
      },
      {
        id: "asset-ep-3",
        title: "Tableau de pilotage annuel et alertes d'échéances",
        type: "excel",
        description: "Fichier Excel avec alertes couleur pour ne jamais dépasser la date limite de convocation."
      }
    ],
    opcoEligible: true
  }
];

/**
 * Codes d'accès démo ou licences clients
 * Mathilde peut ajouter ici des codes clients permanents ou temporaires.
 */
export const VALID_ACCESS_CODES = [
  "AUREALYS2026",
  "CLIENT-VIP",
  "DEMO-ACCES",
  "FORMATION-RH",
  "MATHILDE-GALLAND"
];
