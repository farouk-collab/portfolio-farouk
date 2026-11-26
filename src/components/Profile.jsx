import { profile } from "../data/profile";
import { TechChip, uiIcons } from "../lib/icons";
import { Card, Reveal, Section } from "./ui";

export default function Profile() {
  return (
    <Section
      id="profil"
      index="01"
      eyebrow="Profil"
      title="Un ingénieur data qui pense déjà comme un ops."
      intro={profile.summary}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {profile.pillars.map((pillar, i) => {
          const Icon = uiIcons[pillar.icon];
          return (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <Card spotlight className="h-full p-6 transition-colors hover:border-white/15 sm:p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent-300/25 bg-accent-300/10 text-accent-200">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{pillar.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <TechChip key={tag} name={tag} size="sm" />
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
