import {
  Accessibility,
  Archive,
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Container,
  Database,
  FolderTree,
  Gauge,
  GitMerge,
  KeyRound,
  Layers,
  Lock,
  MessagesSquare,
  Network,
  Radar,
  Repeat,
  Server,
  ShieldCheck,
  Shuffle,
  Workflow,
  Wrench,
} from "lucide-react";
import spriteUrl from "../assets/tech-icons.svg";
import brandColors from "../assets/brand-colors.json";
import { brands } from "./brands-map";

// Outils sans logo de marque disponible : pictogramme générique cohérent.
const fallbackIcons = {
  SQL: Database,
  "Power BI": BarChart3,
  "ETL / ELT": Shuffle,
  Dagster: Workflow,
  dbt: GitMerge,
  AWS: Cloud,
  "API REST": Network,
  OAuth2: KeyRound,
  Slack: MessagesSquare,
  "Agile Scrum": Repeat,
  Nmap: Radar,
  Samba: FolderTree,
  BorgBackup: Archive,
};

export const uiIcons = {
  Accessibility,
  Brain,
  Cloud,
  Code: Code2,
  Container,
  Gauge,
  Layers,
  Lock,
  Server,
  ShieldCheck,
  Workflow,
  Wrench,
};

/** Logo d'une techno : sprite SVG auto-hébergé (simple-icons, CC0) ou pictogramme de repli. */
export function TechIcon({ name, size = 16, className = "" }) {
  const slug = brands[name];
  if (slug) {
    return (
      <svg aria-hidden="true" focusable="false" width={size} height={size} fill="currentColor" className={className}>
        <use href={`${spriteUrl}#${slug}`} />
      </svg>
    );
  }
  const Fallback = fallbackIcons[name] ?? Code2;
  return <Fallback aria-hidden="true" size={size} className={className} strokeWidth={1.8} />;
}

export function brandColor(name) {
  const slug = brands[name];
  return slug ? brandColors[slug] : "var(--color-accent-300)";
}

export function TechChip({ name, size = "md" }) {
  const sizes = {
    sm: "gap-1.5 px-2.5 py-1 text-xs",
    md: "gap-2 px-3 py-1.5 text-sm",
  };
  return (
    <span
      style={{ "--brand": brandColor(name) }}
      className={`group/chip inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] font-medium text-slate-300 transition-colors hover:border-white/20 hover:text-white ${sizes[size]}`}
    >
      <TechIcon
        name={name}
        size={size === "sm" ? 13 : 15}
        className="shrink-0 text-slate-400 transition-colors group-hover/chip:text-[var(--brand)]"
      />
      {name}
    </span>
  );
}
