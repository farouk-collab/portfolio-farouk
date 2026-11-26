import { experiences } from "../data/profile";
import { TechChip } from "../lib/icons";
import { Reveal, Section } from "./ui";

export default function Experience() {
  return (
    <Section
      id="experiences"
      index="02"
      eyebrow="Expériences"
      title="Du code en production, en équipe, en conditions réelles."
    >
      <ol className="relative border-l border-white/[0.08] pl-0">
        {experiences.map((xp, i) => (
          <li key={xp.company} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full ring-4 ring-ink-950 ${
                i === 0 ? "bg-accent-300" : "bg-slate-600"
              }`}
            />
            <Reveal delay={0.05}>
              <div className="grid gap-4 lg:grid-cols-[13rem_1fr] lg:gap-10">
                <div>
                  <p className="font-mono text-sm text-accent-300">{xp.period}</p>
                  <p className="mt-1 text-sm text-slate-400">{xp.location}</p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    {xp.role} <span className="text-slate-400">·</span>{" "}
                    <span className="text-accent-200">{xp.company}</span>
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {xp.points.map((point) => (
                      <li key={point} className="flex gap-3 leading-relaxed text-slate-400">
                        <span aria-hidden="true" className="mt-[0.7rem] h-1 w-3 shrink-0 rounded-full bg-white/20" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {xp.stack.length > 0 ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {xp.stack.map((tech) => (
                        <TechChip key={tech} name={tech} size="sm" />
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
