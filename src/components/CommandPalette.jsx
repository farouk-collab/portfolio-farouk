import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Command, Copy, Download, ExternalLink, Hash, Languages, Phone, Search } from "lucide-react";
import { useContent } from "../content";
import { person, sectionIds, site } from "../content/shared";
import { TechIcon } from "../lib/icons";

function normalize(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

/** Palette de commandes (Ctrl/⌘ + K) : navigation et actions au clavier, via <dialog> natif. */
export default function CommandPalette() {
  const t = useContent();
  const p = t.palette;
  const dialogRef = useRef(null);
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState("");

  const items = useMemo(
    () => [
      ...sectionIds.map((id, i) => ({
        group: p.sections,
        label: t.nav[i],
        icon: <Hash size={15} aria-hidden="true" />,
        run: () => {
          window.location.hash = id;
        },
      })),
      {
        group: p.actions,
        label: p.downloadCv,
        icon: <Download size={15} aria-hidden="true" />,
        run: () => {
          const a = document.createElement("a");
          a.href = t.cv.file;
          a.download = "";
          a.click();
        },
      },
      {
        group: p.actions,
        label: p.copyEmail,
        icon: <Copy size={15} aria-hidden="true" />,
        keepOpen: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(person.email);
            setNotice(p.copied);
          } catch {
            window.location.href = `mailto:${person.email}`;
          }
        },
      },
      {
        group: p.actions,
        label: p.callPhone,
        icon: <Phone size={15} aria-hidden="true" />,
        run: () => {
          window.location.href = `tel:${person.phone}`;
        },
      },
      {
        group: p.actions,
        label: p.switchLang,
        icon: <Languages size={15} aria-hidden="true" />,
        run: () => {
          window.location.href = t.ui.lang.href;
        },
      },
      {
        group: p.links,
        label: "GitHub",
        icon: <TechIcon name="GitHub" size={15} />,
        run: () => window.open(person.github, "_blank", "noopener"),
      },
      {
        group: p.links,
        label: "LinkedIn",
        icon: <span className="font-display text-xs font-bold" aria-hidden="true">in</span>,
        run: () => window.open(person.linkedin, "_blank", "noopener"),
      },
      {
        group: p.links,
        label: p.source,
        icon: <ExternalLink size={15} aria-hidden="true" />,
        run: () => window.open(site.repo, "_blank", "noopener"),
      },
    ],
    [p, t],
  );

  const results = useMemo(() => {
    const q = normalize(query.trim());
    return q ? items.filter((item) => normalize(`${item.group} ${item.label}`).includes(q)) : items;
  }, [items, query]);

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    setQuery("");
    setActive(0);
    setNotice("");
    dialog.showModal();
    inputRef.current?.focus();
  };

  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialogRef.current?.open) close();
        else open();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const runItem = async (item) => {
    if (!item) return;
    if (!item.keepOpen) close();
    await item.run();
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runItem(results[active]);
    }
  };

  let lastGroup = "";

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="hidden h-10 items-center gap-2 rounded-full border border-white/10 pl-3 pr-2 text-sm text-slate-400 transition-colors hover:border-white/25 hover:text-white md:inline-flex"
      >
        <Search size={15} aria-hidden="true" />
        <span className="sr-only">{p.open}</span>
        <kbd className="inline-flex items-center gap-0.5 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-0.5 font-mono text-[0.7rem] text-slate-300">
          <Command size={11} aria-hidden="true" />K
        </kbd>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={p.open}
        onClick={(e) => e.target === dialogRef.current && close()}
        className="palette m-auto mt-[12vh] w-[min(36rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 p-0 text-slate-200 shadow-[0_40px_120px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3 border-b border-white/[0.07] px-4">
          <Search size={17} className="shrink-0 text-slate-400" aria-hidden="true" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder={p.placeholder}
            aria-label={p.placeholder}
            role="combobox"
            aria-expanded="true"
            aria-controls="palette-list"
            aria-activedescendant={results[active] ? `palette-item-${active}` : undefined}
            className="h-14 w-full bg-transparent text-base text-white outline-none placeholder:text-slate-400"
          />
          <kbd className="rounded-md border border-white/10 px-1.5 py-0.5 font-mono text-[0.7rem] text-slate-400">Esc</kbd>
        </div>

        <ul id="palette-list" role="listbox" aria-label={p.open} className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 ? <li className="px-3 py-6 text-center text-sm text-slate-400">{p.empty}</li> : null}
          {results.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <li key={`${item.group}-${item.label}`} role="presentation">
                {header ? (
                  <p className="px-3 pb-1 pt-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-slate-400">{header}</p>
                ) : null}
                <button
                  type="button"
                  id={`palette-item-${i}`}
                  role="option"
                  aria-selected={i === active}
                  tabIndex={-1}
                  onMouseMove={() => setActive(i)}
                  onClick={() => runItem(item)}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    i === active ? "bg-accent-300/10 text-white" : "text-slate-300"
                  }`}
                >
                  <span className={`grid h-7 w-7 place-items-center rounded-md border border-white/10 ${i === active ? "text-accent-200" : "text-slate-400"}`}>
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {i === active ? <ArrowRight size={14} className="text-accent-200" aria-hidden="true" /> : null}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-2.5 text-xs text-slate-400">
          <span>{p.hint}</span>
          <span role="status" className="text-emerald-300">
            {notice}
          </span>
        </div>
      </dialog>
    </>
  );
}
