import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  BriefcaseBusiness,
  Code2,
  Download,
  Globe,
  GitBranch,
  Layers3,
  Languages,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Timer,
  UserRound,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  { href: "#about", label: "A propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Competences" },
  { href: "#cv", label: "CV" },
  { href: "#contact", label: "Contact" },
];

const highlights = [
  {
    title: "Infrastructure & systemes",
    text: "Je travaille sur Linux, Windows Server, la virtualisation Proxmox et les services reseau avec une approche terrain.",
    icon: ServerCog,
  },
  {
    title: "Approche DevOps",
    text: "Docker, CI/CD, GitHub Actions et deploiement: j'aime relier le developpement, l'automatisation et la mise en production.",
    icon: Layers3,
  },
  {
    title: "Securite appliquee",
    text: "Analyse reseau, audit et bonnes pratiques de securite pour garder des applications et des serveurs robustes.",
    icon: ShieldCheck,
  },
];

const webProjects = [
  {
    title: "SUPCONTENT Music",
    description:
      "Plateforme musicale sociale avec API REST en production, authentification JWT / OAuth2 et une logique backend pensee pour un usage concret.",
    tech: ["TypeScript", "Node.js", "API REST", "JWT", "OAuth2"],
    category: "Web app",
    repo: "https://github.com/farouk-collab/supcontent-music",
    mediaFolder: "supcontent",
    mediaStatus: "Apercu a ajouter",
  },
  {
    title: "Peps Gallery",
    description:
      "Projet e-commerce concu autour d'un catalogue, d'un panier et d'une logique plus orientee usage concret que simple maquette visuelle.",
    tech: ["TypeScript", "E-commerce", "UI produit", "Panier", "Catalogue"],
    category: "Web app",
    repo: "https://github.com/farouk-collab/Peps-Gallery",
    mediaFolder: "peps-gallery",
    mediaStatus: "Apercu a ajouter",
  },
  {
    title: "Hotel Le Morphee",
    description:
      "Site vitrine pour un hotel avec presentation des chambres, des espaces et des services, avec un vrai travail sur la mise en page et l'ambiance visuelle.",
    tech: ["JavaScript", "Site vitrine", "UI immersive", "Video preview"],
    category: "Web app",
    repo: "https://github.com/farouk-collab/H-tel-Le-Morph-e",
    mediaFolder: "hotel-le-morphée",
    mediaStatus: "Video disponible",
  },
];

const securityProjects = [
  {
    title: "Infrastructure virtualisee Proxmox",
    description:
      "Deploiement d'une infrastructure virtualisee sous Proxmox avec gestion des VM, sauvegardes BorgBackup, partage Samba et travail en equipe.",
    tech: ["Proxmox", "Linux", "Samba", "BorgBackup"],
    category: "Infra / DevOps",
  },
  {
    title: "Audit cybersecurite",
    description:
      "Audit d'une infrastructure simulee avec analyse reseau et recommandations priorisees a partir d'outils de diagnostic et d'observation.",
    tech: ["Wireshark", "Nmap", "Analyse reseau", "Recommandations"],
    category: "Securite",
  },
  {
    title: "Plateforme distribuee & conteneurisee",
    description:
      "Projet d'architecture distribuee avec microservices, file de traitement, PostgreSQL et Docker pour comprendre les echanges entre services.",
    tech: ["Python", "Node.js", "Redis", "PostgreSQL", "Docker"],
    category: "Architecture distribuee",
  },
];

const contactLinks = [
  {
    href: "mailto:farouksalami47@gmail.com",
    label: "Envoyer un email",
    text: "farouksalami47@gmail.com",
    icon: Mail,
  },
  {
    href: "tel:+33749093972",
    label: "Appeler Farouk",
    text: "+33 7 49 09 39 72",
    icon: Phone,
  },
  {
    href: "https://fr.linkedin.com/in/ayinde-farouk-salami-1946951b0",
    label: "Ouvrir LinkedIn",
    text: "LinkedIn",
    icon: Globe,
  },
  {
    href: "https://github.com/farouk-collab",
    label: "Ouvrir GitHub",
    text: "GitHub",
    icon: GitBranch,
  },
  {
    href: "https://portfolio-farouk.onrender.com",
    label: "Ouvrir le portfolio",
    text: "portfolio-farouk.onrender.com",
    icon: Globe,
  },
];

const quickInfoCards = [
  {
    label: "Localisation",
    value: "Orly (94310), France",
    icon: MapPin,
  },
  {
    label: "Format",
    value: "Presentiel & teletravail",
    icon: Globe,
  },
  {
    label: "Rythme",
    value: "1 semaine entreprise / 1 semaine ecole",
    icon: Timer,
  },
  {
    label: "Disponibilite",
    value: "Septembre 2026",
    icon: Mail,
  },
];

const profileDetails = [
  {
    title: "Coordonnees",
    icon: UserRound,
    items: ["Orly (94310)", "France", "+33 7 49 09 39 72", "farouksalami47@gmail.com"],
  },
  {
    title: "Langues",
    icon: Languages,
    items: [
      "Francais : langue maternelle",
      "Anglais : professionnel (B2)",
      "Documentation technique, GitHub, Stack Overflow",
    ],
  },
  {
    title: "Cadre recherche",
    icon: BriefcaseBusiness,
    items: ["Alternance DevOps / Cloud", "Septembre 2026", "Disponible en presentiel et a distance"],
  },
];

const themeVars = {
  "--page-bg": "#0f172a",
  "--header-bg": "rgba(15, 23, 42, 0.82)",
  "--card-bg": "rgba(255,255,255,0.06)",
  "--card-border": "rgba(148,163,184,0.18)",
  "--accent": "#7dd3fc",
  "--accent-soft": "rgba(125,211,252,0.12)",
  "--accent-border": "rgba(125,211,252,0.24)",
};

const skillThemes = [
  {
    title: "Developpement Web & Mobile",
    subtitle: "Front-end, back-end, API et donnees",
    icon: Code2,
    accent: "from-[#10233c] via-[#0c1a2c] to-[#09111d]",
    items: [
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "Django", icon: "https://cdn.simpleicons.org/django/092E20" },
      { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css/1572B6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
      { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "Flutter", icon: "https://cdn.simpleicons.org/flutter/02569B" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      { name: "JWT", icon: "https://cdn.simpleicons.org/jsonwebtokens/FFFFFF" },
      { name: "OAuth2", icon: "https://cdn.simpleicons.org/auth0/EB5424" },
      { name: "API REST", iconComponent: Globe },
    ],
  },
  {
    title: "Virtualisation & Conteneurs",
    subtitle: "Isolation, orchestration et environnements de test",
    icon: Boxes,
    accent: "from-[#2a1d10] via-[#1a140d] to-[#0d0e12]",
    items: [
      { name: "VMware", icon: "https://cdn.simpleicons.org/vmware/607078" },
      { name: "VirtualBox", icon: "https://cdn.simpleicons.org/virtualbox/183A61" },
      { name: "Proxmox", icon: "https://cdn.simpleicons.org/proxmox/E57000" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
    ],
  },
  {
    title: "Systemes & Reseaux",
    subtitle: "Administration, services reseau et supervision",
    icon: Network,
    accent: "from-[#0f2428] via-[#0b1a20] to-[#09111d]",
    items: [
      { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624" },
      { name: "Windows Server", icon: "https://cdn.simpleicons.org/windows/0078D4" },
      { name: "Active Directory", iconComponent: ServerCog },
      { name: "DHCP", iconComponent: Network },
      { name: "DNS", iconComponent: Globe },
      { name: "GPO", iconComponent: ShieldCheck },
      { name: "Samba", icon: "https://cdn.simpleicons.org/samba/FFFFFF" },
      { name: "Cisco Packet Tracer", icon: "https://cdn.simpleicons.org/cisco/1BA0D7" },
      { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/1679A7" },
      { name: "Nmap", iconComponent: ShieldCheck },
    ],
  },
  {
    title: "DevOps & Outils Projet",
    subtitle: "Automatisation, collaboration et deploiement",
    icon: Workflow,
    accent: "from-[#1f1227] via-[#17111e] to-[#09111d]",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF" },
      { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/4EAA25" },
      { name: "PowerShell", icon: "https://cdn.simpleicons.org/powershell/5391FE" },
      { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
      { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
      { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/844FBA" },
      { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/EE0000" },
      { name: "Jenkins", icon: "https://cdn.simpleicons.org/jenkins/D24939" },
      { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
      { name: "Cloudflare Pages", icon: "https://cdn.simpleicons.org/cloudflarepages/F38020" },
      { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
      { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
      { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC" },
      { name: "Trello", icon: "https://cdn.simpleicons.org/trello/0052CC" },
      { name: "Notion", icon: "https://cdn.simpleicons.org/notion/FFFFFF" },
      { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D" },
      { name: "Microsoft 365", icon: "https://cdn.simpleicons.org/microsoft365/D83B01" },
    ],
  },
];

const orbitBadges = [
  { label: "Docker", className: "left-[6%] top-[16%]" },
  { label: "Cloud", className: "right-[10%] top-[14%]" },
  { label: "CI/CD", className: "left-[14%] bottom-[18%]" },
  { label: "API REST", className: "right-[6%] bottom-[20%]" },
];

const projectMediaFiles = import.meta.glob(
  "./{supcontent,peps-gallery,hotel-le-morphée}/*.{png,jpg,jpeg,webp,mp4}",
  {
    eager: true,
    import: "default",
  },
);

function collectProjectMedia(folderName) {
  return Object.entries(projectMediaFiles)
    .filter(([path]) => path.startsWith(`./${folderName}/`))
    .map(([path, source]) => ({
      path,
      source,
      type: path.endsWith(".mp4") ? "video" : "image",
      name: path.split("/").pop(),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-300">{description}</p> : null}
    </div>
  );
}

function GlassCard({ className = "", children }) {
  return (
    <div
      style={{
        borderColor: "var(--card-border)",
        backgroundColor: "var(--card-bg)",
      }}
      className={`rounded-[2rem] border shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.4], [0, -40]);
  const heroGlowY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);
  const heroCardY = useTransform(scrollYProgress, [0, 0.4], [0, -18]);
  const heroOrbY = useTransform(scrollYProgress, [0, 0.4], [0, -65]);
  const heroLineScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.18]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cvVersion = "2026-07-09-000001";
  const cvFile = `/cv/cv-farouk-2026-07-09.pdf?v=${cvVersion}`;
  const hotelVideo = new URL("./hotel-le-morphée/hotel-le-morphée.mp4", import.meta.url).href;
  const githubProfile = "https://github.com/farouk-collab";
  const webProjectsWithMedia = webProjects.map((project) => {
    const media = collectProjectMedia(project.mediaFolder);
    const preview =
      media[0] ??
      (project.title === "Hotel Le Morphee"
        ? { source: hotelVideo, type: "video", name: "hotel-le-morphee.mp4" }
        : null);

    return {
      ...project,
      media,
      preview,
    };
  });

  return (
    <div
      style={themeVars}
      className="min-h-screen bg-[var(--page-bg)] text-white selection:bg-cyan-400/30 selection:text-white"
    >
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <Motion.div
          style={{ y: heroGlowY, backgroundColor: "rgba(125,211,252,0.22)" }}
          className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full blur-3xl"
          animate={{ opacity: [0.65, 1, 0.65], scale: [1, 1.06, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          style={{ y: heroGlowY, backgroundColor: "rgba(96,165,250,0.18)" }}
          className="absolute right-[-5rem] top-[8rem] h-80 w-80 rounded-full blur-3xl"
          animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <Motion.div
          animate={{ x: [0, 28, 0], y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[6%] top-[24%] h-64 w-64 rounded-full border border-sky-300/10 bg-[radial-gradient(circle,rgba(186,230,253,0.12),rgba(14,165,233,0.03)_55%,transparent_72%)]"
        />
        <Motion.div
          animate={{ x: [0, 36, 0], y: [0, 18, 0], rotate: [0, 14, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute left-[18%] top-[12%] h-40 w-40 rounded-[2rem] border border-cyan-200/10 bg-[linear-gradient(145deg,rgba(186,230,253,0.09),rgba(59,130,246,0.02))] blur-[1px]"
        />
        <Motion.div
          animate={{ x: [0, -24, 0], y: [0, 22, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute right-[8%] top-[30%] h-52 w-52 rounded-[2.5rem] border border-cyan-200/10 bg-[linear-gradient(135deg,rgba(125,211,252,0.08),rgba(255,255,255,0.02))]"
        />
        <Motion.div
          animate={{ x: [0, -22, 0], y: [0, -28, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
          className="absolute right-[20%] top-[10%] h-28 w-80 rounded-full border border-white/8 bg-[linear-gradient(90deg,rgba(255,255,255,0.04),rgba(125,211,252,0.03),transparent)] blur-sm"
        />
        <Motion.div
          animate={{ x: [0, 18, 0], y: [0, 16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.12),rgba(59,130,246,0.04)_50%,transparent_72%)] blur-3xl"
        />
        <Motion.div
          style={{ scale: heroLineScale }}
          className="absolute left-1/2 top-[-12%] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-sky-300/10"
        />
        <Motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-[6%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-white/6"
        />
        <Motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-[14%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full border border-cyan-200/8"
        />
        <div className="absolute left-1/2 top-[8%] h-[28rem] w-[70rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(186,230,253,0.08)_0%,rgba(15,23,42,0)_60%)]" />
        <Motion.div
          animate={{ x: ["-8%", "8%", "-8%"], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-y-0 left-[-10%] w-[55%] rotate-6 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.06),transparent)] blur-3xl"
        />
        <Motion.div
          animate={{ x: ["8%", "-8%", "8%"], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="absolute inset-y-0 right-[-10%] -rotate-6 bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.05),transparent)] blur-3xl w-[48%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.02)_0%,transparent_30%,rgba(125,211,252,0.03)_55%,transparent_100%)]" />
      </div>

      <header
        style={{ backgroundColor: "var(--header-bg)", borderColor: "var(--card-border)" }}
        className="sticky top-0 z-50 border-b backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="space-y-1">
            <p className="text-lg font-semibold tracking-wide text-white">Ayinde Farouk Salami</p>
            <p className="text-sm text-zinc-400">
              Alternant DevOps / Cloud / Infrastructure & securite
            </p>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/25 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/15 md:inline-flex"
          >
            Disponible en septembre 2026
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-100 md:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <Motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
              className="border-t border-white/10 bg-[#071022]/95 px-6 py-4 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </Motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <main id="top" className="mx-auto max-w-7xl px-6 pb-20 pt-8">
        <Motion.section
          style={{ y: heroY }}
          className="grid gap-8 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-16"
        >
          <Motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles size={16} />
              Bachelor 3 SUPINFO - backend, DevOps, cloud et securite
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              Je relie le{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                backend, l'infra et le deploiement.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              J'ai recemment travaille sur des environnements Python / Django et Next.js / NestJS,
              avec Docker, API REST, CI/CD et mise en production. Je cherche une alternance pour
              continuer a progresser vers un role DevOps / Cloud a partir de septembre 2026.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 font-medium text-[#03111a] transition hover:scale-[1.02]"
              >
                Voir mes projets
                <ArrowUpRight size={18} />
              </a>
              <a
                href={cvFile}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
              >
                Telecharger le CV
                <Download size={18} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["Objectif", "Alternance DevOps / Cloud"],
                ["Ce que je fais", "Backend, infra, automatisation"],
                ["Stack", "Docker, Python, TypeScript"],
              ].map(([label, value]) => (
                <GlassCard key={label} className="p-5">
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                </GlassCard>
              ))}
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.34 }}
              whileHover={{ y: -4 }}
              className="mt-6"
            >
              <GlassCard className="relative overflow-hidden p-5 md:p-6">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(125,211,252,0.08),transparent_42%,rgba(255,255,255,0.03)_100%)]" />
                <div className="relative flex flex-col gap-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
                        Informations
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                        Disponible pour une alternance a partir de septembre 2026
                      </h3>
                    </div>
                    <a
                      href="mailto:farouksalami47@gmail.com"
                      className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/35 hover:bg-cyan-400/15"
                    >
                      <Mail size={16} />
                      farouksalami47@gmail.com
                    </a>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {quickInfoCards.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="rounded-[1.6rem] border border-white/8 bg-black/20 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2.5 text-cyan-200">
                              <Icon size={16} />
                            </div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
                              {item.label}
                            </p>
                          </div>
                          <p className="mt-4 text-base leading-7 text-zinc-100 break-words">
                            {item.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            </Motion.div>
          </Motion.div>

          <Motion.div
            style={{ y: heroCardY }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.008 }}
            className="relative min-h-[34rem]"
          >
            <Motion.div
              style={{ y: heroOrbY }}
              className="absolute inset-0 hidden lg:block"
            >
              <div className="absolute inset-[8%] rounded-full border border-cyan-400/10" />
              <div className="absolute inset-[18%] rounded-full border border-blue-400/10" />
              <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),rgba(59,130,246,0.04)_45%,transparent_72%)] blur-2xl" />
              {orbitBadges.map((badge, index) => (
                <Motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + index * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.06, y: -4 }}
                  className={`absolute ${badge.className} rounded-full border border-cyan-300/15 bg-[#081220]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100 shadow-[0_18px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl`}
                >
                  {badge.label}
                </Motion.div>
              ))}
            </Motion.div>

            <GlassCard className="relative overflow-hidden p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_32%)]" />
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                      Profil
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      Profil backend, DevOps & cloud
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                    <BriefcaseBusiness size={22} />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                    <GlassCard className="p-5">
                      <p className="text-sm text-zinc-400">Aujourd'hui</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                        API + Infra + Deploy
                      </p>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">
                        J'aime comprendre l'ensemble: le code, l'API, le serveur et la mise en production.
                      </p>
                    </GlassCard>
                    <GlassCard className="flex flex-col justify-between p-5">
                      <div>
                        <p className="text-sm text-zinc-400">Direction</p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          DevOps / Cloud
                        </p>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-white/8">
                        <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500" />
                      </div>
                    </GlassCard>
                  </div>

                  <GlassCard className="p-5">
                    <p className="text-sm text-zinc-400">Ce que j'aime faire</p>
                    <p className="mt-2 text-lg font-semibold">Backend, cloud, systemes et reseaux</p>
                  </GlassCard>
                  <GlassCard className="p-5">
                    <p className="text-sm text-zinc-400">Maniere de travailler</p>
                    <p className="mt-2 leading-7 text-zinc-200">
                      Je suis a l'aise quand il faut chercher, tester, corriger et aller jusqu'au
                      deploiement plutot que m'arreter a l'interface.
                    </p>
                  </GlassCard>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <GlassCard className="p-5">
                      <p className="text-sm text-zinc-400">Environnements</p>
                      <p className="mt-2 font-medium text-white">Linux, Windows, virtualisation</p>
                    </GlassCard>
                    <GlassCard className="p-5">
                      <p className="text-sm text-zinc-400">Objectif</p>
                      <p className="mt-2 font-medium text-white">Monter en competence sur du concret</p>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Motion.div>
        </Motion.section>

        <section className="grid gap-5 py-8 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <GlassCard className="h-full p-6">
                  <div className="inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
                </GlassCard>
              </Motion.div>
            );
          })}
        </section>

        <section id="about" className="py-14">
          <GlassCard className="grid gap-10 p-8 md:grid-cols-[1fr_1.1fr] md:p-10">
            <SectionTitle
              eyebrow="A propos"
              title="Un profil terrain entre developpement, infrastructure et securite."
              description="Je suis etudiant en Bachelor 3 Informatique a SUPINFO, specialise en DevOps, Cloud et infrastructures securisees. Apres des experiences en backend et full-stack, j'aime travailler sur des projets concrets ou je peux concevoir, tester, deployer et maintenir une solution de bout en bout."
            />

            <div className="grid gap-4">
              <GlassCard className="p-6">
                <p className="text-sm text-zinc-400">Aujourd'hui</p>
                <p className="mt-3 text-lg leading-8 text-zinc-200">
                  Je travaille sur des applications et architectures modernes autour de Python /
                  Django, Next.js / NestJS, API REST, Docker et des pipelines CI/CD. Mon approche
                  relie naturellement backend, systemes, reseaux et mise en production.
                </p>
              </GlassCard>

              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard className="p-6">
                  <p className="text-sm text-zinc-400">Experience recente</p>
                  <p className="mt-2 text-xl font-semibold text-white">Stage backend Bowo - Paris</p>
                  <p className="mt-3 leading-7 text-zinc-300">
                    Developpement et maintenance backend avec Python / Django, optimisation d'API
                    REST, corrections d'anomalies et travail en environnement Agile.
                  </p>
                </GlassCard>

                <GlassCard className="p-6">
                  <p className="text-sm text-zinc-400">Objectif</p>
                  <p className="mt-2 text-xl font-semibold text-white">Alternance DevOps / Cloud</p>
                  <p className="mt-3 leading-7 text-zinc-300">
                    Je recherche une alternance pour septembre 2026 avec un rythme d'une semaine
                    en entreprise et une semaine a l'ecole.
                  </p>
                </GlassCard>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {[
                  ["Formation", "SUPINFO Bachelor 3, apres un parcours ESIEA en sciences et technologies du numerique."],
                  ["Sujets que j'aime", "Automatisation, cybersecurite, environnements Linux, virtualisation et deploiement."],
                  ["Maniere de travailler", "Esprit d'analyse, autonomie, rigueur, communication claire et travail en equipe."],
                ].map(([label, text]) => (
                  <GlassCard key={label} className="p-5">
                    <p className="text-sm text-zinc-400">{label}</p>
                    <p className="mt-3 leading-7 text-zinc-200">{text}</p>
                  </GlassCard>
                ))}
              </div>

              <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
                <Motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                >
                  <GlassCard className="h-full p-6">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                        <UserRound size={18} />
                      </div>
                      <p className="text-lg font-semibold text-white">Coordonnees & disponibilite</p>
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {[
                        "Orly (94310), France",
                        "+33 7 49 09 39 72",
                        "farouksalami47@gmail.com",
                        "Teletravail ou presentiel",
                        "Alternance DevOps / Cloud",
                        "Septembre 2026",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.6rem] border border-white/8 bg-black/20 px-4 py-4 text-base leading-7 text-zinc-200 break-words"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </Motion.div>

                <div className="grid gap-4">
                  {profileDetails
                    .filter((detail) => detail.title !== "Coordonnees")
                    .map((detail, index) => {
                      const Icon = detail.icon;

                      return (
                        <Motion.div
                          key={detail.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.4, delay: index * 0.06 }}
                          whileHover={{ y: -6 }}
                        >
                          <GlassCard className="h-full p-6">
                            <div className="flex items-center gap-3">
                              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                                <Icon size={18} />
                              </div>
                              <p className="text-base font-semibold leading-7 text-white sm:text-lg">
                                {detail.title}
                              </p>
                            </div>

                            <div className="mt-5 space-y-3">
                              {detail.items.map((item) => (
                                <p
                                  key={item}
                                  className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-base leading-8 text-zinc-200 break-words"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                          </GlassCard>
                        </Motion.div>
                      );
                    })}
                </div>
              </div>
            </div>
          </GlassCard>
        </section>

        <section id="projects" className="py-14">
          <SectionTitle
            eyebrow="Projets"
            title="Des projets qui montrent ce que je sais construire et maintenir."
            description="Les projets web sont visibles avec un apercu quand j'ai un media. La partie securite et infra est presentee plus sobrement, parce que le plus important reste la logique technique derriere."
          />

          <div className="mt-10 grid gap-8 xl:grid-cols-[1.35fr_0.65fr]">
            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">Projets web avec apercus</h3>
                <a
                  href={githubProfile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/15"
                >
                  Voir d'autres projets sur GitHub
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {webProjectsWithMedia.map((project, index) => (
                  <Motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{
                      y: -12,
                      rotateX: 10,
                      rotateY: index % 2 === 0 ? -11 : 11,
                      scale: 1.02,
                    }}
                    className="group [perspective:1600px]"
                  >
                    <GlassCard className="relative flex h-full flex-col overflow-hidden p-4 [transform-style:preserve-3d] md:p-5">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                      <div className="relative mb-5 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111d] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                        {project.preview?.type === "video" ? (
                          <div className="relative">
                            <video
                              src={project.preview.source}
                              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                              autoPlay
                              muted
                              loop
                              playsInline
                              controls
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
                          </div>
                        ) : project.preview?.type === "image" ? (
                          <div className="relative">
                            <img
                              src={project.preview.source}
                              alt={`Apercu ${project.title}`}
                              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
                          </div>
                        ) : (
                          <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_40%),linear-gradient(180deg,#09101a_0%,#07111d_100%)] px-6 text-center">
                            <div className="absolute inset-0 bg-[linear-gradient(130deg,transparent_0%,rgba(255,255,255,0.06)_48%,transparent_60%)] opacity-0 transition duration-500 group-hover:translate-x-6 group-hover:opacity-100" />
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
                                Media
                              </p>
                              <p className="mt-3 text-lg font-semibold text-white">
                                {project.mediaStatus}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-zinc-400">
                                Depose des images ou videos dans `src/{project.mediaFolder}` pour
                                afficher automatiquement un apercu du projet.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                            {project.category}
                          </span>
                          <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-4 flex-1 leading-7 text-zinc-300">{project.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Motion.span
                            key={tech}
                            whileHover={{ y: -3, scale: 1.04 }}
                            className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-200"
                          >
                            {tech}
                          </Motion.span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                            {project.media.length > 0
                              ? `${project.media.length} media detecte${project.media.length > 1 ? "s" : ""}`
                              : "Aucun media detecte"}
                          </span>
                          <Motion.a
                            href={project.repo}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ x: 4 }}
                            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
                          >
                            Voir le repo GitHub
                            <ArrowUpRight size={16} />
                          </Motion.a>
                        </div>
                      </div>
                    </GlassCard>
                  </Motion.article>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5">
                <h3 className="text-xl font-semibold text-white">Securite / DevOps</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Ici je montre surtout la demarche, les outils et les sujets travailles, sans
                  afficher de contenus sensibles ou inutiles.
                </p>
              </div>

              <div className="grid gap-5">
                {securityProjects.map((project, index) => (
                  <Motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <GlassCard className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-300">
                            {project.category}
                          </span>
                          <h3 className="mt-4 text-xl font-semibold text-white">
                            {project.title}
                          </h3>
                        </div>
                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                          <ShieldCheck size={18} />
                        </div>
                      </div>
                      <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </Motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-14">
          <GlassCard className="p-8 md:p-10">
            <SectionTitle
              eyebrow="Competences"
              title="Des competences que j'utilise vraiment en projet."
              description="J'ai reorganise cette section par themes, en reprenant les categories et outils presents dans mon CV pour montrer plus clairement mon profil technique."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {skillThemes.map((theme, index) => {
                const Icon = theme.icon;

                return (
                <Motion.div
                  key={theme.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <GlassCard className="group relative h-full overflow-hidden p-6 md:p-7">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${theme.accent} opacity-90 transition duration-300 group-hover:opacity-100`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_36%)] opacity-70" />
                    <div className="relative">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[1.35rem] border border-cyan-300/20 bg-cyan-400/10 text-cyan-200">
                          <Icon size={24} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200/80">
                            Theme
                          </p>
                          <h3 className="mt-2 text-2xl font-semibold text-white">
                            {theme.title}
                          </h3>
                          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-300">
                            {theme.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {theme.items.map((item) => (
                          <div
                            key={item.name}
                            className="flex min-h-[8.75rem] flex-col items-center justify-center rounded-[1.5rem] border border-white/10 bg-black/20 px-3 py-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                          >
                            <div className="flex h-14 w-14 items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/95 shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
                              {item.icon ? (
                                <img
                                  src={item.icon}
                                  alt={`Logo ${item.name}`}
                                  className="h-8 w-8 object-contain"
                                  loading="lazy"
                                />
                              ) : item.iconComponent ? (
                                <item.iconComponent size={22} className="text-slate-900" />
                              ) : null}
                            </div>
                            <p className="mt-3 text-sm font-medium leading-5 text-zinc-100 break-words">
                              {item.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </Motion.div>
                );
              })}
            </div>
          </GlassCard>
        </section>

        <section id="cv" className="py-14">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Motion.div
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
            <GlassCard className="relative overflow-hidden p-8 md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_32%)]" />
              <div className="relative">
              <SectionTitle
                eyebrow="CV"
                title="Mon CV consultable directement dans la page."
                description="Le CV est accessible ici pour donner une vue rapide de mon parcours, de mes competences et de ce que je recherche."
              />
              <div className="mt-8 rounded-[1.8rem] bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 p-[1.5px] shadow-[0_20px_60px_rgba(34,211,238,0.15)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0a111c] p-3">
                  <Motion.iframe
                    src={cvFile}
                    title="CV de Ayinde Farouk Salami"
                    className="h-[38rem] w-full rounded-[1.35rem] bg-white"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
              </div>
              </div>
            </GlassCard>
            </Motion.div>

            <GlassCard className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                Telechargement
              </p>
              <h3 className="mt-4 text-3xl font-semibold">Version PDF</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                Tu peux l'ouvrir directement ou le telecharger en PDF pour une lecture plus
                detaillee.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={cvFile}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3.5 font-medium text-[#03111a] transition hover:scale-[1.02]"
                >
                  <Download size={18} />
                  Telecharger le CV
                </a>
                <a
                  href={cvFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3.5 font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
                >
                  Ouvrir le PDF
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="contact" className="py-14">
          <GlassCard className="p-8 md:p-10">
            <SectionTitle
              eyebrow="Contact"
              title="Disponible pour echanger sur une alternance, un projet ou une opportunite."
              description="Le plus simple reste de m'ecrire par email, mais j'ai rassemble ici les liens utiles pour me contacter rapidement."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const external = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    aria-label={link.label}
                    className="flex items-center gap-4 rounded-[1.6rem] border border-white/10 bg-black/20 px-5 py-5 transition hover:border-cyan-300/25 hover:bg-cyan-400/8"
                  >
                    <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">{link.label}</p>
                      <p className="mt-1 font-medium text-white">{link.text}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </section>
      </main>

      <AnimatePresence>
        {showTop ? (
          <Motion.a
            href="#top"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.22 }}
            className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-[#09111d]/90 px-4 py-3 text-sm font-medium text-cyan-100 shadow-lg backdrop-blur-xl"
          >
            Remonter
            <ArrowUpRight size={16} className="-rotate-45" />
          </Motion.a>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

