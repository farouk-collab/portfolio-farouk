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
    title: "Infrastructure moderne",
    text: "Administration systeme, virtualisation, reseau et environnements Linux/Windows.",
    icon: ServerCog,
  },
  {
    title: "Approche DevOps",
    text: "Docker, CI/CD, automatisation et deploiement de services fiables.",
    icon: Layers3,
  },
  {
    title: "Securite pragmatique",
    text: "Analyse reseau, durcissement et bonnes pratiques pour applications et serveurs.",
    icon: ShieldCheck,
  },
];

const projects = [
  {
    title: "Plateforme de vote distribuee",
    description:
      "Architecture microservices avec file de traitement, persistance PostgreSQL et conteneurisation Docker pour un pipeline robuste.",
    tech: ["Python", "Node.js", "Redis", "PostgreSQL", "Docker"],
  },
  {
    title: "Plateforme musicale sociale",
    description:
      "Application full-stack en TypeScript avec API REST, authentification JWT/OAuth2 et integrations Spotify/YouTube.",
    tech: ["Node.js", "TypeScript", "PostgreSQL", "JWT", "OAuth2"],
  },
  {
    title: "Infrastructure virtualisee Proxmox",
    description:
      "Mise en place d'une infrastructure Linux avec sauvegardes automatisees, partage reseau Samba et logique d'exploitation durable.",
    tech: ["Proxmox", "Linux", "Samba", "BorgBackup"],
  },
];

const skillGroups = [
  {
    title: "Systemes & reseaux",
    items: [
      "Linux",
      "Windows Server",
      "Active Directory",
      "DNS / DHCP",
      "Samba",
      "Wireshark",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "DevOps & cloud",
    items: ["Docker", "CI/CD", "Render", "Cloudflare Pages", "Proxmox", "GitHub"],
  },
  {
    title: "Developpement",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "PHP",
      "PostgreSQL",
      "Redis",
      "API REST",
    ],
  },
  {
    title: "Automatisation",
    items: ["Bash", "PowerShell", "Postman", "JWT", "OAuth2", "Debug production"],
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
  const heroCardY = useTransform(scrollYProgress, [0, 0.4], [0, -28]);
  const heroCardRotate = useTransform(scrollYProgress, [0, 0.4], [0, -3]);
  const heroOrbY = useTransform(scrollYProgress, [0, 0.4], [0, -65]);
  const heroLineScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.18]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cvImage = "/cv/cv-farouk.jpg";
  const cvFile = "/cv/cv-farouk.pdf";

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
            <p className="text-sm text-zinc-400">Portfolio DevOps, Cloud & Full Stack</p>
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
            Disponible en alternance
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
              Etudiant SUPINFO specialise systemes, reseaux et cloud
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
              Une presence digitale plus nette, plus credible, plus{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                premium.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Je concois des projets web et infrastructure avec une logique fiable: architecture,
              automatisation, deploiement et experience utilisateur claire. Je recherche une
              alternance pour accelerer vers un role DevOps / Cloud.
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
                ["1 objectif", "Alternance DevOps / Cloud"],
                ["3 axes", "Infra, automatisation, developpement"],
                ["Stack cle", "Docker, Node.js, PostgreSQL"],
              ].map(([label, value]) => (
                <GlassCard key={label} className="p-5">
                  <p className="text-sm text-zinc-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{value}</p>
                </GlassCard>
              ))}
            </div>
          </Motion.div>

          <Motion.div
            style={{ y: heroCardY, rotateX: 6, rotateY: -8, rotateZ: heroCardRotate }}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            whileHover={{ rotateX: 10, rotateY: -12, y: -10, scale: 1.01 }}
            className="relative min-h-[34rem] [transform-style:preserve-3d]"
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
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.20),transparent_35%)]" />
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                      Profil
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      Futur ingenieur DevOps & Cloud
                    </p>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                    <BriefcaseBusiness size={22} />
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                    <GlassCard className="p-5">
                      <p className="text-sm text-zinc-400">Cap actuel</p>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                        Infra + App + Deploy
                      </p>
                      <p className="mt-3 text-sm leading-6 text-zinc-300">
                        Une vision de bout en bout, de la logique metier jusqu'au service en ligne.
                      </p>
                    </GlassCard>
                    <GlassCard className="flex flex-col justify-between p-5">
                      <div>
                        <p className="text-sm text-zinc-400">Focus</p>
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
                    <p className="text-sm text-zinc-400">Positionnement</p>
                    <p className="mt-2 text-lg font-semibold">Full Stack, systemes, reseaux</p>
                  </GlassCard>
                  <GlassCard className="p-5">
                    <p className="text-sm text-zinc-400">Forces</p>
                    <p className="mt-2 leading-7 text-zinc-200">
                      Rigueur, autonomie, curiosite technique et capacite a passer de l'interface
                      au serveur jusqu'au deploiement.
                    </p>
                  </GlassCard>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <GlassCard className="p-5">
                      <p className="text-sm text-zinc-400">Environnements</p>
                      <p className="mt-2 font-medium text-white">Linux, Windows, virtualisation</p>
                    </GlassCard>
                    <GlassCard className="p-5">
                      <p className="text-sm text-zinc-400">Objectif</p>
                      <p className="mt-2 font-medium text-white">Construire du fiable et utile</p>
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
              eyebrow="Presentation"
              title="Un profil technique qui relie developpement, exploitation et experience."
              description="J'aime les environnements concrets: services web, APIs, conteneurs, virtualisation, reseau et supervision. L'objectif n'est pas seulement que ca fonctionne, mais que ce soit lisible, maintenable et bien deploye."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Architecture microservices",
                "Automatisation & scripts",
                "Developpement web full-stack",
                "Deploiement et debug production",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 px-5 py-5 text-zinc-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        <section id="projects" className="py-14">
          <SectionTitle
            eyebrow="Projets"
            title="Des projets qui montrent une logique d'architecture, pas juste une maquette."
            description="Chaque projet combine implementation, outils concrets et reflexion technique autour du deploiement ou de l'infrastructure."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -10, rotateX: 8, rotateY: index % 2 === 0 ? -8 : 8, scale: 1.02 }}
                className="[perspective:1400px]"
              >
                <GlassCard className="flex h-full flex-col p-7 [transform-style:preserve-3d]">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight text-white">
                      {project.title}
                    </h3>
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                      Cas reel
                    </span>
                  </div>
                  <p className="mt-4 flex-1 leading-7 text-zinc-300">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className="py-14">
          <GlassCard className="p-8 md:p-10">
            <SectionTitle
              eyebrow="Competences"
              title="Une base solide pour produire, deployer et maintenir."
              description="Le portfolio devait etre plus beau, mais aussi plus credible. J'ai donc garde une lecture simple tout en mettant davantage en valeur les competences techniques."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.8rem] border border-white/10 bg-black/20 p-6"
                >
                  <h3 className="text-lg font-semibold text-cyan-200">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        <section id="cv" className="py-14">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Motion.div
              whileHover={{ y: -10, rotateX: 8, rotateY: -10, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="[perspective:1600px]"
            >
            <GlassCard className="relative overflow-hidden p-8 md:p-10 [transform-style:preserve-3d]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.22),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_32%)]" />
              <div className="relative">
              <SectionTitle
                eyebrow="CV"
                title="Une consultation directe du CV dans la page."
                description="Le rendu est mis en avant dans un cadre plus premium pour renforcer l'impression de portfolio professionnel."
              />
              <div className="mt-8 rounded-[1.8rem] bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-500 p-[1.5px] shadow-[0_25px_80px_rgba(34,211,238,0.18)]">
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0a111c] p-3">
                  <Motion.img
                    src={cvImage}
                    alt="CV de Ayinde Farouk Salami"
                    className="w-full rounded-[1.35rem] object-contain"
                    whileHover={{ scale: 1.035 }}
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
                Ouvre ou telecharge le CV complet pour une lecture detaillee, dans un format adapte
                aux candidatures.
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
              description="Le moyen le plus direct reste l'email, mais tout est centralise ici pour garder une page claire et actionnable."
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
