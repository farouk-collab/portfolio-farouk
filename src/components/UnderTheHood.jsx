import { ArrowUpRight } from "lucide-react";
import { useContent } from "../content";
import { site, underTheHoodIcons } from "../content/shared";
import { uiIcons } from "../lib/icons";
import { Card, Reveal, Section } from "./ui";

export default function UnderTheHood() {
  const t = useContent();
  const u = t.underTheHood;

  return (
    <Section id="sous-le-capot" index="06" eyebrow={u.eyebrow} title={u.title} intro={u.intro}>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
        {u.items.map((item, i) => {
          const Icon = uiIcons[underTheHoodIcons[i]];
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
            {u.repoLink}
            <ArrowUpRight size={15} aria-hidden="true" />
            <span className="sr-only">{t.ui.newTab}</span>
          </a>
        </Card>
      </Reveal>
    </Section>
  );
}
