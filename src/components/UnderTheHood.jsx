import { ArrowUpRight } from "lucide-react";
import { site, underTheHood } from "../data/profile";
import { uiIcons } from "../lib/icons";
import { Card, Reveal, Section } from "./ui";

export default function UnderTheHood() {
  return (
    <Section
      id="sous-le-capot"
      index="06"
      eyebrow="Sous le capot"
      title="Ce site est lui-même un projet DevOps."
      intro="Un portfolio est aussi une preuve : sécurité, CI, conteneurisation et performance sont appliquées ici, et tout est vérifiable dans le dépôt."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
        {underTheHood.map((item, i) => {
          const Icon = uiIcons[item.icon];
          return (
            <Reveal key={item.title} delay={(i % 3) * 0.05} className="bg-ink-950">
              <div className="h-full p-6 sm:p-7">
                <Icon size={20} className="text-accent-200" aria-hidden="true" />
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-400">{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-8">
        <Card className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
          <p className="font-mono text-sm text-slate-400">
            <span className="text-accent-300">$</span> git clone {site.repo.replace("https://", "")}
          </p>
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-200 hover:text-white"
          >
            Voir le dépôt
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only">(nouvel onglet)</span>
          </a>
        </Card>
      </Reveal>
    </Section>
  );
}
