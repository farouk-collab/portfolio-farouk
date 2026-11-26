export default {
  locale: "fr",
  meta: {
    path: "/",
    ogLocale: "fr_FR",
    title: "Ayinde Farouk Salami — Alternant Data Engineer / MLOps",
    description:
      "Portfolio d'Ayinde Farouk Salami, étudiant en Master IA & Data à SUPINFO. Recherche une alternance Data Engineer / MLOps : pipelines de données (Airflow, dbt, Kafka), machine learning en production, Docker, Kubernetes, CI/CD.",
    ogDescription:
      "Master IA & Data à SUPINFO. Pipelines de données fiables, modèles en production, socle backend & DevOps. Disponible immédiatement en alternance.",
  },
  ui: {
    skip: "Aller au contenu",
    navLabel: "Navigation principale",
    mobileNavLabel: "Navigation mobile",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    roleShort: "Data Engineer / MLOps",
    newTab: "(nouvel onglet)",
    backToTop: "Haut de page",
    footer: "Conçu et développé par mes soins avec React, Vite et Tailwind CSS.",
    lang: { href: "/en/", short: "EN", label: "Read this page in English", hreflang: "en" },
  },
  nav: ["Profil", "Expériences", "Projets", "Compétences", "Formation", "Contact"],
  hero: {
    availability: "Disponible immédiatement · alternance",
    role: "Alternant Data Engineer / MLOps",
    tagline: ["Des données fiables, des modèles ", "en production."],
    intro: [
      { text: "Étudiant en " },
      { text: "Master IA & Data", strong: true },
      { text: " à SUPINFO, je recherche une alternance " },
      { text: "Data Engineer / MLOps", strong: true },
      { text: " pour construire des pipelines robustes et industrialiser des modèles — avec la rigueur d'un profil backend & DevOps." },
    ],
    ctaProjects: "Voir mes projets",
    ctaCv: "Télécharger le CV",
    emailAria: "Écrire un email",
    pipelineLabel: "Schéma : chaîne de la donnée brute jusqu'au modèle déployé",
    pipelineBadge: "ma chaîne",
    pipelineCaption: "Étapes",
    marqueeLabel: "Technologies utilisées",
    stages: ["Ingestion", "Orchestration", "Transformation", "Stockage", "Modélisation", "Déploiement", "Automatisation"],
    facts: [
      { label: "Formation", value: "Master IA & Data", detail: "SUPINFO · en cours" },
      { label: "Expérience", value: "Backend & DevOps", detail: "Bowo · Studelecta" },
      { label: "Socle", value: "Bachelor DevOps", detail: "SUPINFO · 2025–2026" },
      { label: "Disponibilité", value: "Immédiate", detail: "Alternance 1 sem. / 1 sem." },
    ],
  },
  profile: {
    eyebrow: "Profil",
    title: "Un ingénieur data qui pense déjà comme un ops.",
    summary:
      "Étudiant en Master IA & Data à SUPINFO (spécialisations Intelligence Artificielle et Ingénierie Data), titulaire d'un Bachelor DevOps. J'ai travaillé en développement backend chez Bowo (Python / Django, API REST) puis en full-stack & DevOps chez Studelecta. Mon objectif : construire des pipelines de données fiables et déployer des modèles en production.",
    pillars: [
      {
        title: "Pipelines de données",
        text: "Ingestion, orchestration et transformation ETL / ELT avec Airflow, dbt et Kafka, pour des données propres, documentées et reproductibles.",
      },
      {
        title: "Machine Learning en production",
        text: "Du notebook au service : préparation avec pandas, modèles Scikit-Learn, packaging Docker, déploiement Kubernetes et CI/CD.",
      },
      {
        title: "Socle backend & DevOps",
        text: "Deux expériences en entreprise sur des API Python / Django et Node.js, des applications conteneurisées et des environnements staging / production.",
      },
    ],
  },
  experience: {
    eyebrow: "Expériences",
    title: "Du code en production, en équipe, en conditions réelles.",
    items: [
      {
        role: "Stagiaire Développeur Backend",
        points: [
          "Développement, maintenance et optimisation du backend Python / Django et de ses API REST (back-office et applications clientes).",
          "Correction d'anomalies, amélioration des performances et migrations de base de données Django.",
          "Travail en équipe Agile via Git / Bitbucket, Slack et Gather.",
        ],
      },
      {
        role: "Développeur Full-Stack & DevOps",
        points: [
          "Conception et déploiement d'applications conteneurisées en production (Next.js, NestJS, MongoDB).",
          "Pipelines CI/CD sur Render et Vercel ; gestion d'environnements staging / production.",
          "Coordination Agile Scrum et validation des API via Postman.",
        ],
      },
      {
        role: "Ambassadeur étudiants",
        points: ["Organisation d'évènements étudiants et relations entre l'école et les étudiants."],
      },
    ],
  },
  projects: {
    eyebrow: "Projets",
    title: "Des projets concrets, de l'analyse de données à la mise en production.",
    intro:
      "Data, backend, infrastructure et web : chaque projet est présenté avec son contexte, ce que j'ai réalisé et la stack utilisée.",
    filterLabel: "Filtrer les projets par domaine",
    categories: { all: "Tous", data: "Data & IA", backend: "Backend & DevOps", infra: "Infra & sécurité", web: "Web" },
    count: (n) => `${n} projet${n > 1 ? "s" : ""} affiché${n > 1 ? "s" : ""}`,
    featured: "Projet phare",
    source: "Code source",
    allRepos: "Tous mes dépôts sur GitHub",
    demo: "Démo",
    playVideo: (title) => `Lire la vidéo de démonstration de ${title} — `,
    videoAria: (title) => `Démonstration vidéo de ${title}`,
    items: {
      supcontent: {
        subtitle: "Plateforme musicale sociale — API REST en production",
        points: [
          "API REST Express / TypeScript déployée sur Render.",
          "Authentification JWT et connexion OAuth2.",
          "Logique backend pensée pour un usage réel, pas pour une simple maquette.",
        ],
      },
      sante: {
        title: "Analyse de données de santé",
        subtitle: "Incidence du cancer par tranche d'âge",
        points: [
          "Nettoyage des données, analyse exploratoire et statistique pour dégager tendances et indicateurs clés.",
          "Visualisations et documentation des règles de calcul pour garantir la reproductibilité.",
        ],
      },
      ventes: {
        title: "Analyse de ventes & dashboard",
        subtitle: "KPI commerciaux et pilotage dans Power BI",
        points: [
          "Calcul des KPI (chiffre d'affaires, marges, TVA), agrégation et segmentation par produit (GroupBy).",
          "Dashboard Power BI interactif de suivi de la performance globale et par produit.",
        ],
      },
      infra: {
        title: "Infrastructure virtualisée & audit cybersécurité",
        subtitle: "Projet ESIEA en équipe de 4",
        points: [
          "Infrastructure Proxmox : machines virtuelles, sauvegardes BorgBackup et partage Samba.",
          "Audit d'une infrastructure simulée avec Wireshark et Nmap, recommandations priorisées.",
        ],
      },
      distribuee: {
        title: "Plateforme distribuée & conteneurisée",
        subtitle: "Microservices, file de traitement et PostgreSQL",
        points: [
          "Architecture en microservices communiquant via une file de traitement Redis.",
          "Persistance PostgreSQL et orchestration de l'ensemble avec Docker.",
        ],
      },
      peps: {
        subtitle: "E-commerce : catalogue, panier et parcours d'achat",
        points: ["Catalogue produits, panier et logique d'achat orientés usage réel plutôt que vitrine."],
      },
      hotel: {
        title: "Hôtel Le Morphée",
        subtitle: "Site vitrine immersif pour un hôtel",
        points: ["Présentation des chambres, des espaces et des services, avec un vrai travail de mise en page et d'ambiance."],
      },
    },
  },
  skills: {
    eyebrow: "Compétences",
    title: "Une stack pensée de bout en bout.",
    intro:
      "De la donnée brute au service déployé : les outils que j'utilise en projet, en entreprise et dans ma spécialisation Ingénierie Data.",
    groups: ["Data & IA", "Pipelines & Big Data", "DevOps & Cloud", "Développement", "Systèmes & Sécurité", "Outils & méthodes"],
  },
  education: {
    eyebrow: "Formation",
    title: "Un double socle : DevOps, puis IA & Data.",
    path: "Parcours",
    items: [
      {
        title: "Master IA & Data",
        period: "2026 – en cours",
        details:
          "Spécialisations Intelligence Artificielle et Ingénierie Data : apprentissage supervisé et non supervisé, data processing (Airflow, dbt), data development (Kafka, Flink, Hadoop), bases de données avancées.",
      },
      { title: "Bachelor 3 Informatique — DevOps" },
      { title: "L1 & L2 Sciences et technologies du numérique" },
      { title: "Baccalauréat scientifique" },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "Langue maternelle" },
      { name: "Anglais", level: "Professionnel (B2) — documentation technique, GitHub" },
    ],
    searchTitle: "Alternance recherchée",
    search: [
      ["Poste", "Data Engineer / MLOps"],
      ["Rythme", "1 semaine en entreprise / 1 semaine à l'école"],
      ["Démarrage", "immédiat"],
    ],
    location: "Orly, Île-de-France · présentiel & télétravail",
  },
  underTheHood: {
    eyebrow: "Sous le capot",
    title: "Ce site est lui-même un projet DevOps.",
    intro:
      "Un portfolio est aussi une preuve : sécurité, CI/CD, conteneurisation et performance sont appliquées ici, et tout est vérifiable dans le dépôt.",
    repoLink: "Voir le dépôt",
    items: [
      {
        title: "Sécurité par défaut",
        text: "CSP stricte, HSTS, anti-clickjacking, Referrer & Permissions-Policy. Aucune ressource tierce : polices, logos et médias sont auto-hébergés.",
      },
      {
        title: "CI/CD GitHub Actions",
        text: "Chaque push exécute lint, build, audit et test de l'image Docker, puis déploie et vérifie la production. Dependabot maintient les versions.",
      },
      {
        title: "Conteneurisé",
        text: "Image multi-stage : build Node 22, puis service par Nginx non-root avec les mêmes en-têtes de sécurité qu'en production.",
      },
      {
        title: "Performance",
        text: "HTML pré-rendu au build, vidéos réencodées de 321 Mo à 18 Mo et chargées à la demande, assets versionnés en cache immuable.",
      },
      {
        title: "Accessibilité",
        text: "Navigation clavier complète, lien d'évitement, focus visibles, contrastes AA et respect de « réduire les animations ».",
      },
      {
        title: "Maintenable",
        text: "Contenu séparé de la présentation, site bilingue, versions de Node et dépendances verrouillées pour des builds reproductibles.",
      },
    ],
  },
  cv: {
    label: "Curriculum vitae",
    title: "Tout mon parcours sur une page.",
    meta: "Format PDF, une page · mis à jour en novembre 2026.",
    download: "Télécharger",
    open: "Ouvrir",
  },
  contact: {
    eyebrow: "Contact",
    title: "Construisons votre prochaine pipeline de données.",
    intro:
      "Disponible immédiatement pour une alternance Data Engineer / MLOps, en présentiel ou en télétravail. Je réponds rapidement par email.",
    emailLabel: "Email",
    write: "Écrire un email",
    subject: "Alternance Data Engineer / MLOps",
    copy: "Copier l'adresse",
    copied: "Adresse copiée",
  },
};
