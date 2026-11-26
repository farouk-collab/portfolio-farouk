// Source unique de vérité pour le contenu du site (aligné sur le CV de novembre 2026).

import supcontentVideo from "../assets/media/supcontent.mp4";
import supcontentPoster from "../assets/media/supcontent.webp";
import pepsVideo from "../assets/media/peps-gallery.mp4";
import pepsPoster from "../assets/media/peps-gallery.webp";
import hotelVideo from "../assets/media/hotel-le-morphee.mp4";
import hotelPoster from "../assets/media/hotel-le-morphee.webp";

export const site = {
  url: "https://portfolio-farouk.onrender.com",
  repo: "https://github.com/farouk-collab/portfolio-farouk",
};

export const person = {
  name: "Ayinde Farouk Salami",
  initials: "AF",
  role: "Alternant Data Engineer / MLOps",
  email: "farouksalami47@gmail.com",
  location: "Orly, Île-de-France",
  github: "https://github.com/farouk-collab",
  githubHandle: "farouk-collab",
  linkedin: "https://www.linkedin.com/in/ayinde-farouk-salami-1946951b0",
  cv: "/cv/ayinde-farouk-salami-cv.pdf",
  cvUpdated: "novembre 2026",
  availability: "Disponible immédiatement",
  rhythm: "1 semaine en entreprise / 1 semaine à l'école",
  workMode: "Présentiel & télétravail",
};

export const navItems = [
  { id: "profil", label: "Profil" },
  { id: "experiences", label: "Expériences" },
  { id: "projets", label: "Projets" },
  { id: "competences", label: "Compétences" },
  { id: "formation", label: "Formation" },
  { id: "contact", label: "Contact" },
];

export const heroFacts = [
  { label: "Formation", value: "Master IA & Data", detail: "SUPINFO · en cours" },
  { label: "Expérience", value: "Backend & DevOps", detail: "Bowo · Studelecta" },
  { label: "Socle", value: "Bachelor DevOps", detail: "SUPINFO · 2025–2026" },
  { label: "Disponibilité", value: "Immédiate", detail: "Alternance 1 sem. / 1 sem." },
];

export const pipelineStages = [
  { step: "Ingestion", tools: "Kafka", icon: "Kafka" },
  { step: "Orchestration", tools: "Airflow", icon: "Airflow" },
  { step: "Transformation", tools: "dbt · SQL", icon: "dbt" },
  { step: "Stockage", tools: "PostgreSQL", icon: "PostgreSQL" },
  { step: "Modélisation", tools: "pandas · Scikit-Learn", icon: "Scikit-Learn" },
  { step: "Déploiement", tools: "Docker · Kubernetes", icon: "Kubernetes" },
  { step: "Automatisation", tools: "GitHub Actions", icon: "GitHub Actions" },
];

export const profile = {
  summary:
    "Étudiant en Master IA & Data à SUPINFO (spécialisations Intelligence Artificielle et Ingénierie Data), titulaire d'un Bachelor DevOps. J'ai travaillé en développement backend chez Bowo (Python / Django, API REST) puis en full-stack & DevOps chez Studelecta. Mon objectif : construire des pipelines de données fiables et déployer des modèles en production.",
  pillars: [
    {
      title: "Pipelines de données",
      icon: "Workflow",
      text: "Ingestion, orchestration et transformation ETL / ELT avec Airflow, dbt et Kafka, pour des données propres, documentées et reproductibles.",
      tags: ["ETL / ELT", "Airflow", "dbt", "Kafka"],
    },
    {
      title: "Machine Learning en production",
      icon: "Brain",
      text: "Du notebook au service : préparation avec pandas, modèles Scikit-Learn, packaging Docker, déploiement Kubernetes et CI/CD.",
      tags: ["Scikit-Learn", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      title: "Socle backend & DevOps",
      icon: "Server",
      text: "Deux expériences en entreprise sur des API Python / Django et Node.js, des applications conteneurisées et des environnements staging / production.",
      tags: ["Python", "Django", "API REST", "Linux"],
    },
  ],
};

export const experiences = [
  {
    company: "Bowo",
    role: "Stagiaire Développeur Backend",
    period: "06/2026 – 08/2026",
    location: "Paris",
    points: [
      "Développement, maintenance et optimisation du backend Python / Django et de ses API REST (back-office et applications clientes).",
      "Correction d'anomalies, amélioration des performances et migrations de base de données Django.",
      "Travail en équipe Agile via Git / Bitbucket, Slack et Gather.",
    ],
    stack: ["Python", "Django", "API REST", "Git", "Bitbucket"],
  },
  {
    company: "Studelecta",
    role: "Développeur Full-Stack & DevOps",
    period: "01/2026 – 06/2026",
    location: "Paris",
    points: [
      "Conception et déploiement d'applications conteneurisées en production (Next.js, NestJS, MongoDB).",
      "Pipelines CI/CD sur Render et Vercel ; gestion d'environnements staging / production.",
      "Coordination Agile Scrum et validation des API via Postman.",
    ],
    stack: ["Next.js", "NestJS", "MongoDB", "Docker", "CI/CD", "Render", "Vercel", "Postman"],
  },
  {
    company: "ESIEA",
    role: "Ambassadeur étudiants",
    period: "03/2023 – 05/2025",
    location: "Ivry-sur-Seine",
    points: ["Organisation d'évènements étudiants et relations entre l'école et les étudiants."],
    stack: [],
  },
];

export const projectCategories = [
  { id: "all", label: "Tous" },
  { id: "data", label: "Data & IA" },
  { id: "backend", label: "Backend & DevOps" },
  { id: "infra", label: "Infra & sécurité" },
  { id: "web", label: "Web" },
];

export const projects = [
  {
    id: "supcontent",
    category: "backend",
    featured: true,
    title: "SUPCONTENT Music",
    subtitle: "Plateforme musicale sociale — API REST en production",
    period: "11/2025 – 01/2026",
    points: [
      "API REST Express / TypeScript déployée sur Render.",
      "Authentification JWT et connexion OAuth2.",
      "Logique backend pensée pour un usage réel, pas pour une simple maquette.",
    ],
    stack: ["Node.js", "TypeScript", "Express", "JWT", "OAuth2", "Render"],
    repo: "https://github.com/farouk-collab/supcontent-music",
    media: { video: supcontentVideo, poster: supcontentPoster, duration: "2 min 41" },
  },
  {
    id: "sante",
    category: "data",
    title: "Analyse de données de santé",
    subtitle: "Incidence du cancer par tranche d'âge",
    period: "03/2026 – 04/2026",
    points: [
      "Nettoyage des données, analyse exploratoire et statistique pour dégager tendances et indicateurs clés.",
      "Visualisations et documentation des règles de calcul pour garantir la reproductibilité.",
    ],
    stack: ["Python", "pandas"],
  },
  {
    id: "ventes",
    category: "data",
    title: "Analyse de ventes & dashboard",
    subtitle: "KPI commerciaux et pilotage dans Power BI",
    period: "03/2026",
    points: [
      "Calcul des KPI (chiffre d'affaires, marges, TVA), agrégation et segmentation par produit (GroupBy).",
      "Dashboard Power BI interactif de suivi de la performance globale et par produit.",
    ],
    stack: ["Python", "pandas", "Power BI"],
  },
  {
    id: "infra",
    category: "infra",
    title: "Infrastructure virtualisée & audit cybersécurité",
    subtitle: "Projet ESIEA en équipe de 4",
    period: "09/2024 – 04/2025",
    points: [
      "Infrastructure Proxmox : machines virtuelles, sauvegardes BorgBackup et partage Samba.",
      "Audit d'une infrastructure simulée avec Wireshark et Nmap, recommandations priorisées.",
    ],
    stack: ["Proxmox", "Linux", "BorgBackup", "Samba", "Wireshark", "Nmap"],
  },
  {
    id: "distribuee",
    category: "backend",
    title: "Plateforme distribuée & conteneurisée",
    subtitle: "Microservices, file de traitement et PostgreSQL",
    points: [
      "Architecture en microservices communiquant via une file de traitement Redis.",
      "Persistance PostgreSQL et orchestration de l'ensemble avec Docker.",
    ],
    stack: ["Python", "Node.js", "Redis", "PostgreSQL", "Docker"],
  },
  {
    id: "peps",
    category: "web",
    title: "Peps Gallery",
    subtitle: "E-commerce : catalogue, panier et parcours d'achat",
    points: [
      "Catalogue produits, panier et logique d'achat orientés usage réel plutôt que vitrine.",
    ],
    stack: ["TypeScript", "Next.js"],
    repo: "https://github.com/farouk-collab/Peps-Gallery",
    media: { video: pepsVideo, poster: pepsPoster, duration: "1 min 32" },
  },
  {
    id: "hotel",
    category: "web",
    title: "Hôtel Le Morphée",
    subtitle: "Site vitrine immersif pour un hôtel",
    points: ["Présentation des chambres, des espaces et des services, avec un vrai travail de mise en page et d'ambiance."],
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/farouk-collab/H-tel-Le-Morph-e",
    media: { video: hotelVideo, poster: hotelPoster, duration: "1 min 30" },
  },
];

export const skillGroups = [
  {
    title: "Data & IA",
    icon: "Brain",
    items: ["Python", "pandas", "Scikit-Learn", "SQL", "PostgreSQL", "MongoDB", "Redis", "Power BI", "Metabase"],
  },
  {
    title: "Pipelines & Big Data",
    icon: "Workflow",
    items: ["ETL / ELT", "Airflow", "Dagster", "dbt", "Kafka", "Flink", "Hadoop"],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "Linux", "Bash", "AWS", "Render", "Vercel"],
  },
  {
    title: "Développement",
    icon: "Code",
    items: ["Python", "Django", "Node.js", "TypeScript", "API REST", "JWT", "OAuth2"],
  },
  {
    title: "Systèmes & Sécurité",
    icon: "ShieldCheck",
    items: ["Proxmox", "Nginx", "Wireshark", "Nmap"],
  },
  {
    title: "Outils & méthodes",
    icon: "Wrench",
    items: ["Jira", "Postman", "Bitbucket", "Slack", "Agile Scrum"],
  },
];

export const education = [
  {
    title: "Master IA & Data",
    school: "SUPINFO, Paris",
    period: "2026 – en cours",
    details:
      "Spécialisations Intelligence Artificielle et Ingénierie Data : apprentissage supervisé et non supervisé, data processing (Airflow, dbt), data development (Kafka, Flink, Hadoop), bases de données avancées.",
  },
  {
    title: "Bachelor 3 Informatique — DevOps",
    school: "SUPINFO, Paris",
    period: "2025 – 2026",
  },
  {
    title: "L1 & L2 Sciences et technologies du numérique",
    school: "ESIEA, Ivry-sur-Seine",
    period: "2022 – 2025",
  },
  {
    title: "Baccalauréat scientifique",
    school: "Lycée Sainte-Catherine",
    period: "2022",
  },
];

export const languages = [
  { name: "Français", level: "Langue maternelle" },
  { name: "Anglais", level: "Professionnel (B2) — documentation technique, GitHub" },
];

// Ce que montre le dépôt de ce site : chaque point est vérifiable dans le code.
export const underTheHood = [
  {
    title: "Sécurité par défaut",
    icon: "Lock",
    text: "CSP stricte, HSTS, anti-clickjacking, Referrer & Permissions-Policy. Aucune ressource tierce : polices, logos et médias sont auto-hébergés.",
  },
  {
    title: "CI GitHub Actions",
    icon: "Workflow",
    text: "Chaque push exécute lint, build, audit des dépendances et construction de l'image Docker. Dependabot maintient les versions à jour.",
  },
  {
    title: "Conteneurisé",
    icon: "Container",
    text: "Image multi-stage : build Node 22, puis service par Nginx non-root avec les mêmes en-têtes de sécurité qu'en production.",
  },
  {
    title: "Performance",
    icon: "Gauge",
    text: "HTML pré-rendu au build, vidéos réencodées de 321 Mo à 18 Mo et chargées uniquement à la demande, assets versionnés en cache immuable.",
  },
  {
    title: "Accessibilité",
    icon: "Accessibility",
    text: "Navigation clavier complète, lien d'évitement, focus visibles, contrastes AA et respect de « réduire les animations ».",
  },
  {
    title: "Maintenable",
    icon: "Layers",
    text: "Contenu séparé de la présentation, composants découplés, versions de Node et dépendances verrouillées pour des builds reproductibles.",
  },
];
