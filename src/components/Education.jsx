import { CalendarCheck, GraduationCap, Languages, MapPin } from "lucide-react";
import { education, languages, person } from "../data/profile";
import { Card, Reveal, Section } from "./ui";

export default function Education() {
  return (
    <Section id="formation" index="05" eyebrow="Formation" title="Un double socle : DevOps, puis IA & Data.">
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <Card className="h-full p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-accent-200" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-white">Parcours</h3>
            </div>
            <ol className="mt-6 space-y-6">
              {education.map((item, i) => (
                <li key={item.title} className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <p className={`font-mono text-sm ${i === 0 ? "text-accent-300" : "text-slate-400"}`}>{item.period}</p>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-400">{item.school}</p>
                    {item.details ? <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-400">{item.details}</p> : null}
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.06}>
            <Card className="h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Languages size={20} className="text-accent-200" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-white">Langues</h3>
              </div>
              <dl className="mt-5 space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <dt className="font-semibold text-white">{lang.name}</dt>
                    <dd className="text-sm text-slate-400">{lang.level}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <CalendarCheck size={20} className="text-accent-200" aria-hidden="true" />
                <h3 className="font-display text-lg font-semibold text-white">Alternance recherchée</h3>
              </div>
              <ul className="mt-5 space-y-2 text-slate-400">
                <li>
                  <span className="font-semibold text-white">Poste :</span> Data Engineer / MLOps
                </li>
                <li>
                  <span className="font-semibold text-white">Rythme :</span> {person.rhythm}
                </li>
                <li>
                  <span className="font-semibold text-white">Démarrage :</span> immédiat
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={15} aria-hidden="true" className="text-slate-400" />
                  {person.location} · {person.workMode.toLowerCase()}
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
