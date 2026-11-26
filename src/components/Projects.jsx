import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { useContent } from "../content";
import { categoryIds, person, projectMeta, projectOrder } from "../content/shared";
import { TechChip, TechIcon } from "../lib/icons";
import { Card, Section } from "./ui";

// La vidéo n'est téléchargée qu'au clic : seule une image légère (~35 Ko) est chargée par défaut.
function VideoPreview({ title, media }) {
  const t = useContent();
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/[0.06] bg-ink-900">
      {playing ? (
        <video
          src={media.video}
          poster={media.poster}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
          aria-label={t.projects.videoAria(title)}
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group/video absolute inset-0 h-full w-full">
          <span className="sr-only">{t.projects.playVideo(title)}</span>
          <img
            src={media.poster}
            alt=""
            width="1280"
            height="610"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top opacity-80 transition duration-500 group-hover/video:scale-[1.02] group-hover/video:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-ink-950/70 py-1.5 pl-1.5 pr-4 text-sm font-medium text-white backdrop-blur-md transition-colors group-hover/video:border-accent-300/50">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-300 text-ink-950">
              <Play size={13} fill="currentColor" aria-hidden="true" />
            </span>
            {t.projects.demo} · {media.duration}
          </span>
        </button>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  const t = useContent();
  const featured = Boolean(project.featured);

  return (
    <li className={`card-enter ${featured ? "md:col-span-2" : ""}`}>
      <Card
        as="article"
        spotlight
        className={`h-full p-5 transition-colors hover:border-white/15 sm:p-6 ${
          featured ? "grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-10" : "flex flex-col"
        }`}
      >
        {project.media ? (
          <div className={featured ? "" : "mb-6"}>
            <VideoPreview title={project.title} media={project.media} />
          </div>
        ) : null}

        <div className="flex h-full flex-col">
          {featured ? (
            <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full bg-accent-300/10 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-accent-200">
              {t.projects.featured}
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
            <span className="uppercase tracking-[0.16em] text-accent-300">{t.projects.categories[project.category]}</span>
            {project.period ? <span className="text-slate-400">{project.period}</span> : null}
          </div>
          <h3 className="mt-3 font-display text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
          <p className="mt-1 text-slate-300">{project.subtitle}</p>

          <ul className="mt-4 flex-1 space-y-2">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-slate-400">
                <span aria-hidden="true" className="mt-[0.65rem] h-1 w-3 shrink-0 rounded-full bg-white/20" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechChip key={tech} name={tech} size="sm" />
            ))}
          </div>

          {project.repo ? (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-200 transition-colors hover:text-white"
            >
              <TechIcon name="GitHub" size={15} />
              {t.projects.source}
              <ArrowUpRight size={15} aria-hidden="true" />
              <span className="sr-only">
                — {project.title} {t.ui.newTab}
              </span>
            </a>
          ) : null}
        </div>
      </Card>
    </li>
  );
}

export default function Projects() {
  const t = useContent();
  const [filter, setFilter] = useState("all");
  const [hasFiltered, setHasFiltered] = useState(false);

  const projects = projectOrder.map((id) => ({ id, ...projectMeta[id], ...t.projects.items[id] }));
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="projets" index="03" eyebrow={t.projects.eyebrow} title={t.projects.title} intro={t.projects.intro}>
      <div role="group" aria-label={t.projects.filterLabel} className="mb-8 flex flex-wrap gap-2">
        {categoryIds.map((id) => {
          const count = id === "all" ? projects.length : projects.filter((p) => p.category === id).length;
          const selected = filter === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => {
                setFilter(id);
                setHasFiltered(true);
              }}
              aria-pressed={selected}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selected
                  ? "border-accent-300/50 bg-accent-300/15 text-white"
                  : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {t.projects.categories[id]}
              <span className={`ml-2 font-mono text-xs ${selected ? "text-accent-200" : "text-slate-400"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {t.projects.count(visible.length)}
      </p>

      <ul key={filter} className={`grid gap-5 md:grid-cols-2 ${hasFiltered ? "filtering" : ""}`}>
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <a
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-white/25 hover:text-white"
        >
          <TechIcon name="GitHub" size={16} />
          {t.projects.allRepos}
          <ArrowUpRight size={15} aria-hidden="true" />
          <span className="sr-only">{t.ui.newTab}</span>
        </a>
      </div>
    </Section>
  );
}
