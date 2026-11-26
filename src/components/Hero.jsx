import { ArrowRight, Download, Mail } from "lucide-react";
import { heroFacts, person, pipelineStages, skillGroups } from "../data/profile";
import { TechChip, TechIcon } from "../lib/icons";
import { brands } from "../lib/brands-map";
import { ButtonLink, Marquee } from "./ui";

// Technos du CV qui ont un logo, sans doublon.
const marqueeTech = [...new Set(skillGroups.flatMap((g) => g.items))].filter((t) => brands[t]);

function PipelineVisual() {
  return (
    <figure
      aria-label="Schéma : chaîne de la donnée brute jusqu'au modèle déployé"
      className="relative rounded-3xl border border-white/[0.08] bg-ink-900/80 p-2 lg:mt-14 shadow-[0_40px_120px_-40px_rgb(45_212_191/0.25)]"
    >
      <div className="rounded-[1.35rem] border border-white/[0.05] bg-ink-850">
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <p className="font-mono text-xs text-slate-400">data_platform.dag</p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-300/10 px-2 py-0.5 font-mono text-[0.7rem] text-accent-200">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-300" aria-hidden="true" />
            ma chaîne
          </span>
        </div>

        <ol className="relative px-5 py-5">
          {/* Ligne de flux et paquet de données animé */}
          <div aria-hidden="true" className="absolute bottom-9 left-[2.6rem] top-9 w-px bg-gradient-to-b from-accent-300/40 via-white/10 to-sky-300/40">
            <span className="pipeline-packet absolute inset-x-0 top-0 h-full">
              <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] rounded-full bg-accent-200 shadow-[0_0_14px_3px_rgb(94_234_212/0.6)]" />
            </span>
          </div>

          {pipelineStages.map((stage, i) => (
            <li key={stage.step} className="group relative flex items-center gap-4 rounded-xl px-1 py-2 transition-colors hover:bg-white/[0.025]">
              <span
                className="relative z-10 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-ink-800 text-slate-300 transition-colors group-hover:border-accent-300/40 group-hover:text-accent-200"
              >
                <TechIcon name={stage.icon} size={16} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{stage.step}</p>
                <p className="truncate font-mono text-xs text-slate-400">{stage.tools}</p>
              </div>
              <span className="font-mono text-xs text-slate-400" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="sr-only">
        Étapes : {pipelineStages.map((s) => `${s.step} (${s.tools})`).join(", ")}.
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative pb-16 pt-12 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-1.5 text-sm text-emerald-200">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {person.availability} · alternance
          </p>

          <h1 id="hero-title" className="mt-8 font-mono text-sm tracking-wide text-accent-300">
            {person.name} — {person.role}
          </h1>
          <p className="text-balance mt-4 font-display text-[2.7rem] font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]">
            Des données fiables, des modèles <span className="text-gradient">en production.</span>
          </p>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">
            Étudiant en <strong className="font-semibold text-slate-200">Master IA &amp; Data</strong> à SUPINFO, je
            recherche une alternance <strong className="font-semibold text-slate-200">Data Engineer / MLOps</strong>{" "}
            pour construire des pipelines robustes et industrialiser des modèles — avec la rigueur d'un profil backend
            &amp; DevOps.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projets">
              Voir mes projets
              <ArrowRight size={16} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={person.cv} download variant="secondary">
              <Download size={16} aria-hidden="true" />
              Télécharger le CV
            </ButtonLink>
            <div className="flex items-center gap-1 sm:ml-2">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (nouvel onglet)"
                className="grid h-11 w-11 place-items-center rounded-full text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                <TechIcon name="GitHub" size={19} />
              </a>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full font-display text-[0.95rem] font-bold text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                <span aria-hidden="true">in</span>
                <span className="sr-only">LinkedIn (nouvel onglet)</span>
              </a>
              <a
                href={`mailto:${person.email}`}
                aria-label={`Écrire à ${person.email}`}
                className="grid h-11 w-11 place-items-center rounded-full text-slate-400 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <PipelineVisual />
      </div>

      <dl className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] lg:mt-20 lg:grid-cols-4" style={{ gap: "1px" }}>
        {heroFacts.map((fact) => (
          <div key={fact.label} className="bg-ink-950 p-5 sm:p-6">
            <dt className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">{fact.label}</dt>
            <dd className="mt-2 font-display text-lg font-semibold text-white sm:text-xl">{fact.value}</dd>
            <dd className="mt-1 text-sm text-slate-400">{fact.detail}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-10">
        <Marquee label="Technologies utilisées">
          {marqueeTech.map((tech) => (
            <li key={tech}>
              <TechChip name={tech} />
            </li>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
