export default {
  locale: "en",
  meta: {
    path: "/en/",
    ogLocale: "en_US",
    title: "Ayinde Farouk Salami — Data Engineer / MLOps Apprentice",
    description:
      "Portfolio of Ayinde Farouk Salami, MSc AI & Data student at SUPINFO (Paris). Looking for a Data Engineer / MLOps apprenticeship: data pipelines (Airflow, dbt, Kafka), machine learning in production, Docker, Kubernetes, CI/CD.",
    ogDescription:
      "MSc AI & Data at SUPINFO. Reliable data pipelines, models in production, solid backend & DevOps foundation. Available now for an apprenticeship.",
  },
  ui: {
    skip: "Skip to content",
    navLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    roleShort: "Data Engineer / MLOps",
    newTab: "(opens in a new tab)",
    backToTop: "Back to top",
    footer: "Designed and built by me with React, Vite and Tailwind CSS.",
    lang: { href: "/", short: "FR", label: "Lire cette page en français", hreflang: "fr" },
  },
  nav: ["Profile", "Experience", "Projects", "Skills", "Education", "Contact"],
  hero: {
    availability: "Available now · apprenticeship",
    role: "Data Engineer / MLOps Apprentice",
    tagline: ["Reliable data, models ", "in production."],
    intro: [
      { text: "I'm an " },
      { text: "MSc AI & Data", strong: true },
      { text: " student at SUPINFO in Paris, looking for a " },
      { text: "Data Engineer / MLOps", strong: true },
      { text: " apprenticeship to build robust pipelines and ship models to production — with the rigour of a backend & DevOps background." },
    ],
    ctaProjects: "See my projects",
    ctaCv: "Download my CV",
    emailAria: "Send an email",
    pipelineLabel: "Diagram: from raw data to a deployed model",
    pipelineBadge: "my stack",
    pipelineCaption: "Stages",
    marqueeLabel: "Technologies I use",
    stages: ["Ingestion", "Orchestration", "Transformation", "Storage", "Modelling", "Deployment", "Automation"],
    facts: [
      { label: "Education", value: "MSc AI & Data", detail: "SUPINFO · in progress" },
      { label: "Experience", value: "Backend & DevOps", detail: "Bowo · Studelecta" },
      { label: "Foundation", value: "BSc DevOps", detail: "SUPINFO · 2025–2026" },
      { label: "Availability", value: "Now", detail: "Work-study, alternate weeks" },
    ],
  },
  profile: {
    eyebrow: "Profile",
    title: "A data engineer who already thinks like an ops engineer.",
    summary:
      "MSc AI & Data student at SUPINFO (Artificial Intelligence and Data Engineering tracks), with a Bachelor's degree in DevOps. I worked as a backend developer at Bowo (Python / Django, REST APIs) and as a full-stack & DevOps developer at Studelecta. My goal: build reliable data pipelines and deploy models to production.",
    pillars: [
      {
        title: "Data pipelines",
        text: "Ingestion, orchestration and ETL / ELT transformation with Airflow, dbt and Kafka, for clean, documented and reproducible data.",
      },
      {
        title: "Machine learning in production",
        text: "From notebook to service: data preparation with pandas, Scikit-Learn models, Docker packaging, Kubernetes deployment and CI/CD.",
      },
      {
        title: "Backend & DevOps foundation",
        text: "Two industry roles on Python / Django and Node.js APIs, containerised applications and staging / production environments.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Code in production, in a team, in real conditions.",
    items: [
      {
        role: "Backend Developer Intern",
        points: [
          "Built, maintained and optimised the Python / Django backend and its REST APIs (back office and client apps).",
          "Fixed bugs, improved performance and ran Django database migrations.",
          "Worked in an Agile team with Git / Bitbucket, Slack and Gather.",
        ],
      },
      {
        role: "Full-Stack & DevOps Developer",
        points: [
          "Designed and deployed containerised applications in production (Next.js, NestJS, MongoDB).",
          "CI/CD pipelines on Render and Vercel; managed staging / production environments.",
          "Agile Scrum coordination and API validation with Postman.",
        ],
      },
      {
        role: "Student Ambassador",
        points: ["Organised student events and acted as a link between the school and its students."],
      },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "Concrete projects, from data analysis to production.",
    intro: "Data, backend, infrastructure and web: each project shows its context, what I built and the stack I used.",
    filterLabel: "Filter projects by area",
    categories: { all: "All", data: "Data & AI", backend: "Backend & DevOps", infra: "Infra & security", web: "Web" },
    count: (n) => `${n} project${n > 1 ? "s" : ""} shown`,
    featured: "Featured project",
    source: "Source code",
    allRepos: "All my repositories on GitHub",
    demo: "Demo",
    playVideo: (title) => `Play the ${title} demo video — `,
    videoAria: (title) => `${title} demo video`,
    items: {
      supcontent: {
        subtitle: "Social music platform — REST API in production",
        points: [
          "Express / TypeScript REST API deployed on Render.",
          "JWT authentication and OAuth2 sign-in.",
          "Backend logic designed for real-world use, not just a mock-up.",
        ],
      },
      sante: {
        title: "Health data analysis",
        subtitle: "Cancer incidence by age group",
        points: [
          "Data cleaning, exploratory and statistical analysis to surface trends and key indicators.",
          "Visualisations and documented calculation rules to guarantee reproducibility.",
        ],
      },
      ventes: {
        title: "Sales analysis & dashboard",
        subtitle: "Business KPIs and Power BI reporting",
        points: [
          "KPI computation (revenue, margins, VAT), aggregation and product segmentation (GroupBy).",
          "Interactive Power BI dashboard tracking overall and per-product performance.",
        ],
      },
      infra: {
        title: "Virtualised infrastructure & security audit",
        subtitle: "ESIEA project, team of 4",
        points: [
          "Proxmox infrastructure: virtual machines, BorgBackup backups and Samba file sharing.",
          "Audit of a simulated infrastructure with Wireshark and Nmap, with prioritised recommendations.",
        ],
      },
      distribuee: {
        title: "Distributed & containerised platform",
        subtitle: "Microservices, processing queue and PostgreSQL",
        points: [
          "Microservice architecture communicating through a Redis processing queue.",
          "PostgreSQL persistence, with the whole stack orchestrated by Docker.",
        ],
      },
      peps: {
        subtitle: "E-commerce: catalogue, cart and checkout flow",
        points: ["Product catalogue, cart and purchase logic built for real use rather than as a showcase."],
      },
      hotel: {
        title: "Hôtel Le Morphée",
        subtitle: "Immersive showcase website for a hotel",
        points: ["Presents rooms, spaces and services, with careful work on layout and atmosphere."],
      },
    },
  },
  skills: {
    eyebrow: "Skills",
    title: "An end-to-end stack.",
    intro:
      "From raw data to a deployed service: the tools I use in projects, at work and in my Data Engineering specialisation.",
    groups: ["Data & AI", "Pipelines & Big Data", "DevOps & Cloud", "Development", "Systems & Security", "Tools & methods"],
  },
  education: {
    eyebrow: "Education",
    title: "A dual foundation: DevOps, then AI & Data.",
    path: "Path",
    items: [
      {
        title: "MSc AI & Data",
        period: "2026 – present",
        details:
          "Artificial Intelligence and Data Engineering tracks: supervised and unsupervised learning, data processing (Airflow, dbt), data development (Kafka, Flink, Hadoop), advanced databases.",
      },
      { title: "Bachelor's in Computer Science — DevOps (year 3)" },
      { title: "Digital Science & Technology (years 1–2)" },
      { title: "French Baccalaureate, Science track" },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "Native" },
      { name: "English", level: "Professional (B2) — technical documentation, GitHub" },
    ],
    searchTitle: "Apprenticeship sought",
    search: [
      ["Role", "Data Engineer / MLOps"],
      ["Schedule", "1 week at work / 1 week at school"],
      ["Start", "immediately"],
    ],
    location: "Paris area, France · on-site & remote",
  },
  underTheHood: {
    eyebrow: "Under the hood",
    title: "This site is a DevOps project in itself.",
    intro:
      "A portfolio is also evidence: security, CI/CD, containers and performance are applied here, and everything can be checked in the repository.",
    repoLink: "View the repository",
    items: [
      {
        title: "Secure by default",
        text: "Strict CSP, HSTS, anti-clickjacking, Referrer & Permissions-Policy. No third-party resources: fonts, logos and media are self-hosted.",
      },
      {
        title: "GitHub Actions CI/CD",
        text: "Every push runs lint, build, audit and a Docker image test, then deploys and verifies production. Dependabot keeps versions current.",
      },
      {
        title: "Containerised",
        text: "Multi-stage image: Node 22 build, then served by a non-root Nginx with the same security headers as production.",
      },
      {
        title: "Performance",
        text: "Pre-rendered HTML, demo videos re-encoded from 321 MB to 18 MB and loaded on demand, hashed assets with immutable caching.",
      },
      {
        title: "Accessibility",
        text: "Full keyboard navigation, skip link, visible focus, AA contrast and support for “reduce motion”.",
      },
      {
        title: "Maintainable",
        text: "Content separated from presentation, bilingual site, pinned Node version and locked dependencies for reproducible builds.",
      },
    ],
  },
  cv: {
    label: "Résumé",
    title: "My whole path on one page.",
    meta: "One-page PDF (in French) · updated November 2026.",
    download: "Download",
    open: "Open",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build your next data pipeline.",
    intro:
      "Available now for a Data Engineer / MLOps apprenticeship, on-site or remote. Email is the fastest way to reach me.",
    emailLabel: "Email",
    write: "Send an email",
    subject: "Data Engineer / MLOps apprenticeship",
    copy: "Copy address",
    copied: "Address copied",
  },
};
