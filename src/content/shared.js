// Données indépendantes de la langue (liens, médias, stacks). Les textes sont dans fr.js / en.js.

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
  email: "farouksalami47@gmail.com",
  github: "https://github.com/farouk-collab",
  githubHandle: "farouk-collab",
  linkedin: "https://www.linkedin.com/in/ayinde-farouk-salami-1946951b0",
  cv: "/cv/ayinde-farouk-salami-cv.pdf",
};

export const sectionIds = ["profil", "experiences", "projets", "competences", "formation", "contact"];

export const pipelineTools = [
  { tools: "Kafka", icon: "Kafka" },
  { tools: "Airflow", icon: "Airflow" },
  { tools: "dbt · SQL", icon: "dbt" },
  { tools: "PostgreSQL", icon: "PostgreSQL" },
  { tools: "pandas · Scikit-Learn", icon: "Scikit-Learn" },
  { tools: "Docker · Kubernetes", icon: "Kubernetes" },
  { tools: "GitHub Actions", icon: "GitHub Actions" },
];

export const pillarMeta = [
  { icon: "Workflow", tags: ["ETL / ELT", "Airflow", "dbt", "Kafka"] },
  { icon: "Brain", tags: ["Scikit-Learn", "Docker", "Kubernetes", "CI/CD"] },
  { icon: "Server", tags: ["Python", "Django", "API REST", "Linux"] },
];

export const experienceMeta = [
  { company: "Bowo", period: "06/2026 – 08/2026", location: "Paris", stack: ["Python", "Django", "API REST", "Git", "Bitbucket"] },
  {
    company: "Studelecta",
    period: "01/2026 – 06/2026",
    location: "Paris",
    stack: ["Next.js", "NestJS", "MongoDB", "Docker", "CI/CD", "Render", "Vercel", "Postman"],
  },
  { company: "ESIEA", period: "03/2023 – 05/2025", location: "Ivry-sur-Seine", stack: [] },
];

export const projectMeta = {
  supcontent: {
    category: "backend",
    featured: true,
    title: "SUPCONTENT Music",
    period: "11/2025 – 01/2026",
    stack: ["Node.js", "TypeScript", "Express", "JWT", "OAuth2", "Render"],
    repo: "https://github.com/farouk-collab/supcontent-music",
    media: { video: supcontentVideo, poster: supcontentPoster, duration: "2:41" },
  },
  sante: { category: "data", period: "03/2026 – 04/2026", stack: ["Python", "pandas"] },
  ventes: { category: "data", period: "03/2026", stack: ["Python", "pandas", "Power BI"] },
  infra: {
    category: "infra",
    period: "09/2024 – 04/2025",
    stack: ["Proxmox", "Linux", "BorgBackup", "Samba", "Wireshark", "Nmap"],
  },
  distribuee: { category: "backend", stack: ["Python", "Node.js", "Redis", "PostgreSQL", "Docker"] },
  peps: {
    category: "web",
    title: "Peps Gallery",
    stack: ["TypeScript", "Next.js"],
    repo: "https://github.com/farouk-collab/Peps-Gallery",
    media: { video: pepsVideo, poster: pepsPoster, duration: "1:32" },
  },
  hotel: {
    category: "web",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/farouk-collab/H-tel-Le-Morph-e",
    media: { video: hotelVideo, poster: hotelPoster, duration: "1:30" },
  },
};

export const projectOrder = ["supcontent", "sante", "ventes", "infra", "distribuee", "peps", "hotel"];
export const categoryIds = ["all", "data", "backend", "infra", "web"];

export const skillItems = [
  { icon: "Brain", items: ["Python", "pandas", "Scikit-Learn", "SQL", "PostgreSQL", "MongoDB", "Redis", "Power BI", "Metabase"] },
  { icon: "Workflow", items: ["ETL / ELT", "Airflow", "Dagster", "dbt", "Kafka", "Flink", "Hadoop"] },
  { icon: "Cloud", items: ["Docker", "Kubernetes", "Git", "GitHub Actions", "CI/CD", "Linux", "Bash", "AWS", "Render", "Vercel"] },
  { icon: "Code", items: ["Python", "Django", "Node.js", "TypeScript", "API REST", "JWT", "OAuth2"] },
  { icon: "ShieldCheck", items: ["Proxmox", "Nginx", "Wireshark", "Nmap"] },
  { icon: "Wrench", items: ["Jira", "Postman", "Bitbucket", "Slack", "Agile Scrum"] },
];

export const educationMeta = [
  { period: "2026 – …", school: "SUPINFO, Paris" },
  { period: "2025 – 2026", school: "SUPINFO, Paris" },
  { period: "2022 – 2025", school: "ESIEA, Ivry-sur-Seine" },
  { period: "2022", school: "Lycée Sainte-Catherine" },
];

export const underTheHoodIcons = ["Lock", "Workflow", "Container", "Gauge", "Accessibility", "Layers"];
