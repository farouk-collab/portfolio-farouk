import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Download, ExternalLink, Mail } from "lucide-react";
import { person } from "../data/profile";
import { TechIcon } from "../lib/icons";
import { ButtonLink, Card, Reveal, Section } from "./ui";

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${person.email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
    >
      {copied ? <Check size={15} aria-hidden="true" className="text-emerald-300" /> : <Copy size={15} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Adresse copiée" : "Copier l'adresse"}</span>
    </button>
  );
}

export function CvBand() {
  return (
    <Reveal as="section" aria-label="Curriculum vitae" className="py-10">
      <Card className="relative overflow-hidden p-8 sm:p-10">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-300/10 blur-3xl"
        />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-300">Curriculum vitae</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              Tout mon parcours sur une page.
            </h2>
            <p className="mt-3 text-slate-400">
              Format PDF, une page · mis à jour en {person.cvUpdated}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={person.cv} download>
              <Download size={16} aria-hidden="true" />
              Télécharger
            </ButtonLink>
            <ButtonLink href={person.cv} target="_blank" rel="noopener" variant="secondary">
              Ouvrir
              <ExternalLink size={15} aria-hidden="true" />
              <span className="sr-only">(nouvel onglet)</span>
            </ButtonLink>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}

export default function Contact() {
  const links = [
    { label: "LinkedIn", value: "Ayinde Farouk Salami", href: person.linkedin, icon: <span aria-hidden="true" className="font-display font-bold">in</span> },
    { label: "GitHub", value: person.githubHandle, href: person.github, icon: <TechIcon name="GitHub" size={18} /> },
  ];

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Construisons votre prochaine pipeline de données."
      intro="Disponible immédiatement pour une alternance Data Engineer / MLOps, en présentiel ou en télétravail. Je réponds rapidement par email."
    >
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <Card className="h-full p-7 sm:p-9">
            <Mail size={22} className="text-accent-200" aria-hidden="true" />
            <p className="mt-5 text-sm text-slate-400">Email</p>
            <a
              href={`mailto:${person.email}`}
              className="mt-1 block break-all font-display text-2xl font-semibold text-white transition-colors hover:text-accent-200 sm:text-3xl"
            >
              {person.email}
            </a>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href={`mailto:${person.email}?subject=Alternance%20Data%20Engineer%20%2F%20MLOps`}>
                Écrire un email
                <ArrowUpRight size={16} aria-hidden="true" />
              </ButtonLink>
              <CopyEmail />
            </div>
          </Card>
        </Reveal>

        <div className="grid gap-5">
          {links.map((link, i) => (
            <Reveal key={link.label} delay={0.06 * (i + 1)}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:border-accent-300/30 hover:bg-white/[0.04]"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200">
                  {link.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-sm text-slate-400">{link.label}</span>
                  <span className="block font-semibold text-white">{link.value}</span>
                </span>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-200"
                />
                <span className="sr-only">(nouvel onglet)</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
