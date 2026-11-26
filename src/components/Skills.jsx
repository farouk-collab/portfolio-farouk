import { skillGroups } from "../data/profile";
import { TechChip, uiIcons } from "../lib/icons";
import { Card, Reveal, Section } from "./ui";

export default function Skills() {
  return (
    <Section
      id="competences"
      index="04"
      eyebrow="Compétences"
      title="Une stack pensée de bout en bout."
      intro="De la donnée brute au service déployé : les outils que j'utilise en projet, en entreprise et dans ma spécialisation Ingénierie Data."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = uiIcons[group.icon];
          return (
            <Reveal key={group.title} delay={(i % 3) * 0.06}>
              <Card spotlight className="h-full p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-accent-200">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <TechChip name={item} />
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
