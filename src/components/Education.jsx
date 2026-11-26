import { CalendarCheck, GraduationCap, Languages, MapPin } from "lucide-react";
import { useContent } from "../content";
import { educationMeta } from "../content/shared";
import { Card, Reveal, Section } from "./ui";

export default function Education() {
  const t = useContent();
  const e = t.education;

  return (
    <Section id="formation" index="05" eyebrow={e.eyebrow} title={e.title}>
      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <Card className="h-full p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-accent-200" aria-hidden="true" />
              <h3 className="font-display text-lg font-semibold text-white">{e.path}</h3>
            </div>
            <ol className="mt-6 space-y-6">
              {e.items.map((item, i) => (
                <li key={item.title} className="grid gap-1 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                  <p className={`font-mono text-sm ${i === 0 ? "text-accent-300" : "text-slate-400"}`}>
                    {item.period ?? educationMeta[i].period}
                  </p>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-slate-400">{educationMeta[i].school}</p>
                    {item.details ? (
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-400">{item.details}</p>
                    ) : null}
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
                <h3 className="font-display text-lg font-semibold text-white">{e.languagesTitle}</h3>
              </div>
              <dl className="mt-5 space-y-4">
                {e.languages.map((lang) => (
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
                <h3 className="font-display text-lg font-semibold text-white">{e.searchTitle}</h3>
              </div>
              <ul className="mt-5 space-y-2 text-slate-400">
                {e.search.map(([label, value]) => (
                  <li key={label}>
                    <span className="font-semibold text-white">{label} :</span> {value}
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <MapPin size={15} aria-hidden="true" className="text-slate-400" />
                  {e.location}
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
