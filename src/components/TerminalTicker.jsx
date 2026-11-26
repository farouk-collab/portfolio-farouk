import { useEffect, useState } from "react";

const COMMANDS = [
  "airflow dags trigger etl_daily",
  "dbt run --select marts",
  "pytest -q tests/",
  "docker build -t model-api:latest .",
  "kubectl rollout status deploy/model-api",
  "gh workflow run ci.yml",
];

/** Ligne de terminal qui « tape » les commandes de la stack (décoratif). */
export default function TerminalTicker() {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(COMMANDS[0].length);
  const [phase, setPhase] = useState("hold");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const command = COMMANDS[index];
    let delay = 45;
    let next = () => {};

    if (phase === "hold") {
      delay = 2200;
      next = () => setPhase("erase");
    } else if (phase === "erase") {
      delay = 18;
      next = () => (length > 0 ? setLength(length - 1) : (setIndex((index + 1) % COMMANDS.length), setPhase("type")));
    } else {
      delay = 38 + Math.random() * 40;
      next = () => (length < command.length ? setLength(length + 1) : setPhase("hold"));
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [index, length, phase]);

  return (
    <div aria-hidden="true" className="flex items-center gap-2 border-t border-white/[0.06] px-5 py-3 font-mono text-xs">
      <span className="text-accent-300">$</span>
      <span className="truncate text-slate-300">{COMMANDS[index].slice(0, length)}</span>
      <span className="terminal-caret -ml-1 h-3.5 w-[7px] shrink-0 bg-accent-300/80" />
    </div>
  );
}
