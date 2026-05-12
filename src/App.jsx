import { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Globe,
  GitBranch,
  Layers3,
  Mail,
  Menu,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles,
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
    text: "Je travaille sur des environnements Linux et Windows, la virtualisation, le reseau et la mise en place de services utiles.",
    icon: ServerCog,
  },
  {
    title: "Approche DevOps",
    text: "Docker, scripts, CI/CD et deploiement: j'aime comprendre comment un projet passe du code a la mise en ligne.",
    icon: Layers3,
  },
  {
    title: "Securite appliquee",
    text: "Analyse reseau, durcissement et bonnes pratiques pour garder des applications et des serveurs propres.",
    icon: ShieldCheck,
  },
];

const webProjects = [
  {
    title: "SUPCONTENT Music",
    description:
      "Projet full-stack autour de la musique sur lequel j'ai travaille la logique API, l'authentification et l'organisation globale de l'application.",
    tech: ["JavaScript", "Node.js", "API REST", "PostgreSQL", "JWT"],
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
      "Mise en place d'une infrastructure virtualisee avec services Linux, organisation logique, sauvegardes et administration plus proche du terrain.",
    tech: ["Proxmox", "Linux", "Samba", "BorgBackup"],
    category: "Infra / DevOps",
  },
  {
    title: "Plateforme de vote distribuee",
    description:
      "Projet d'architecture distribuee avec microservices, file de traitement, PostgreSQL et Docker pour comprendre les echanges entre services.",
    tech: ["Python", "Node.js", "Redis", "PostgreSQL", "Docker"],
    category: "Architecture distribuee",
  },
  {
    title: "Travaux securite & audit",
    description:
      "Laboratoires et exercices autour du reseau, des API et du durcissement systeme. Je garde volontairement cette partie plus sobre et sans visuels publics.",
    tech: ["Wireshark", "Hardening", "Analyse reseau", "Securite API"],
    category: "Securite",
  },
];

const skillCards = [
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux/FCC624", accent: "from-[#1c2436] to-[#0d1322]" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", accent: "from-[#0b1f3f] to-[#09111d]" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", accent: "from-[#171b24] to-[#0a0f18]" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7", accent: "from-[#0b1f1c] to-[#081310]" },
  { name: "Proxmox", icon: "https://cdn.simpleicons.org/proxmox/E57000", accent: "from-[#27150d] to-[#120b08]" },
  { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/1679A7", accent: "from-[#0b1822] to-[#09111d]" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", accent: "from-[#081824] to-[#09111d]" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", accent: "from-[#261f08] to-[#120f08]" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", accent: "from-[#0b1626] to-[#09111d]" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", accent: "from-[#101f12] to-[#0a120b]" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", accent: "from-[#15182a] to-[#0a0f18]" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", accent: "from-[#0b1836] to-[#09111d]" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D", accent: "from-[#2a100f] to-[#140909]" },
  { name: "Bash", icon: "https://cdn.simpleicons.org/gnubash/4EAA25", accent: "from-[#111e0c] to-[#091108]" },
  { name: "PowerShell", icon: "https://cdn.simpleicons.org/powershell/5391FE", accent: "from-[#0b1736] to-[#09111d]" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", accent: "from-[#291209] to-[#140a08]" },
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
    href: "https://github.com/farouk-collab/portfolio-farouk",
    label: "Ouvrir GitHub",
    text: "GitHub",
    icon: GitBranch,
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
      className={`rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl ${className}`}
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

  const cvVersion = "2026-05-13-005500";
  const cvImage = `/cv/cv-farouk-2026-05-13.jpg?v=${cvVersion}`;
  const cvFile = `/cv/cv-farouk-2026-05-13.pdf?v=${cvVersion}`;
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
    <div className="min-h-screen bg-[#050816] text-white selection:bg-cyan-400/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <Motion.div
          style={{ y: heroGlowY }}
          className="absolute left-[-8rem] top-[-4rem] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        />
        <Motion.div
          style={{ y: heroGlowY }}
          className="absolute right-[-5rem] top-[8rem] h-80 w-80 rounded-full bg-blue-500/14 blur-3xl"
        />
        <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-sky-900/25 blur-3xl" />
        <Motion.div
          style={{ scale: heroLineScale }}
          className="absolute left-1/2 top-[-12%] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-cyan-400/10"
        />
        <div className="absolute left-1/2 top-[8%] h-[28rem] w-[70rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(56,189,248,0.08)_0%,rgba(5,8,22,0)_60%)]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#050816]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="space-y-1">
            <p className="text-lg font-semibold tracking-wide text-white">Ayinde Farouk Salami</p>
            <p className="text-sm text-zinc-400">Etudiant SUPINFO - DevOps, cloud et developpement web</p>
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
            Recherche une alternance
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
              Etudiant SUPINFO specialise en systemes, reseaux et cloud
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              Je construis des projets web et infra avec une approche{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                concrete.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Je suis a l'aise quand je peux toucher a toute la chaine: developpement, API,
              Docker, deploiement, serveurs et resolution de problemes. Je cherche une alternance
              pour continuer a progresser vers un role DevOps / Cloud.
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
                ["Ce que je fais", "Infra, automatisation, developpement"],
                ["Stack", "Docker, Node.js, PostgreSQL"],
              ].map(([label, value]) => (
                <GlassCard key={label} className="p-5">
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                </GlassCard>
              ))}
            </div>
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
                      Etudiant avec un profil orienté DevOps & Cloud
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
                        Infra + App + Deploy
                      </p>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">
                        J'aime comprendre l'ensemble: le code, l'API, le serveur et la mise en ligne.
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
                    <p className="mt-2 text-lg font-semibold">Developpement web, systemes et reseaux</p>
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
              description="Je suis etudiant en Bachelor 3 Informatique a SUPINFO, specialise en DevOps, Cloud et infrastructures securisees. J'aime travailler sur des projets concrets ou je peux concevoir, tester, deployer et maintenir une solution de bout en bout."
            />

            <div className="grid gap-4">
              <GlassCard className="p-6">
                <p className="text-sm text-zinc-400">Aujourd'hui</p>
                <p className="mt-3 text-lg leading-8 text-zinc-200">
                  Je conçois et déploie des applications et architectures modernes autour des
                  API REST sécurisées, de l'authentification JWT / Keycloak, de Docker et des
                  pipelines CI/CD. Mon approche relie naturellement développement web, systèmes,
                  réseaux et mise en production.
                </p>
              </GlassCard>

              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard className="p-6">
                  <p className="text-sm text-zinc-400">Experience recente</p>
                  <p className="mt-2 text-xl font-semibold text-white">Stage Studelecta - Paris</p>
                  <p className="mt-3 leading-7 text-zinc-300">
                    Développement, tests et déploiement d'une plateforme web full-stack avec
                    Next.js, NestJS, MongoDB, Render et Vercel dans un environnement Agile.
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

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Formation", "SUPINFO Bachelor 3, apres un parcours ESIEA en sciences et technologies du numerique."],
                  ["Sujets que j'aime", "Automatisation, cybersécurité, environnements Linux, virtualisation et déploiement."],
                  ["Maniere de travailler", "Esprit d'analyse, autonomie, rigueur, communication claire et travail en equipe."],
                ].map(([label, text]) => (
                  <GlassCard key={label} className="p-5">
                    <p className="text-sm text-zinc-400">{label}</p>
                    <p className="mt-3 leading-7 text-zinc-200">{text}</p>
                  </GlassCard>
                ))}
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
              description="J'ai transforme cette partie en galerie visuelle pour faire ressortir rapidement les technos, outils et environnements que j'utilise le plus."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skillCards.map((skill, index) => (
                <Motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <GlassCard className="group relative h-full overflow-hidden p-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${skill.accent} opacity-90 transition duration-300 group-hover:opacity-100`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_42%)] opacity-60" />
                    <div className="relative flex min-h-[12.5rem] flex-col items-center justify-center text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-[1.7rem] border border-white/10 bg-white/95 shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
                        <img
                          src={skill.icon}
                          alt={`Logo ${skill.name}`}
                          className="h-11 w-11 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-5 text-lg font-semibold tracking-wide text-white">
                        {skill.name}
                      </p>
                    </div>
                  </GlassCard>
                </Motion.div>
              ))}
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
                  <Motion.img
                    src={cvImage}
                    alt="CV de Ayinde Farouk Salami"
                    className="w-full rounded-[1.35rem] object-contain"
                    whileHover={{ scale: 1.02 }}
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
