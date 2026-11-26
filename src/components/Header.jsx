import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { useContent } from "../content";
import { person, sectionIds } from "../content/shared";

export default function Header() {
  const t = useContent();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navItems = sectionIds.map((id, i) => ({ id, label: t.nav[i] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Met en évidence la section visible dans la navigation.
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-white/[0.06] bg-ink-950/80 backdrop-blur-xl" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid h-9 w-9 place-items-center rounded-xl border border-accent-300/30 bg-accent-300/10 font-display text-sm font-bold text-accent-200"
          >
            {person.initials}
          </span>
          <span className="sr-only leading-tight sm:not-sr-only sm:block">
            <span className="block font-display text-[0.95rem] font-semibold text-white">{person.name}</span>
            <span className="block text-xs text-slate-400">{t.ui.roleShort}</span>
          </span>
        </a>

        <nav aria-label={t.ui.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                    active === item.id ? "bg-white/[0.07] text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={t.ui.lang.href}
            hrefLang={t.ui.lang.hreflang}
            lang={t.ui.lang.hreflang}
            title={t.ui.lang.label}
            className="grid h-10 min-w-10 place-items-center rounded-full border border-white/10 px-3 font-mono text-xs font-semibold text-slate-300 transition-colors hover:border-white/25 hover:text-white"
          >
            <span aria-hidden="true">{t.ui.lang.short}</span>
            <span className="sr-only">{t.ui.lang.label}</span>
          </a>
          <a
            href={person.cv}
            download
            className="inline-flex items-center gap-2 rounded-full border border-accent-300/30 bg-accent-300/10 px-4 py-2 text-sm font-semibold text-accent-200 transition-colors hover:bg-accent-300/20"
          >
            <Download size={15} aria-hidden="true" />
            CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t.ui.closeMenu : t.ui.openMenu}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-200 lg:hidden"
          >
            {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="menu-mobile" aria-label={t.ui.mobileNavLabel} className="border-t border-white/[0.06] lg:hidden">
          <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base text-slate-200 hover:bg-white/[0.05]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
