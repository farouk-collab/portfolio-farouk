import { useEffect, useRef } from "react";

/**
 * Apparition au défilement, sans bibliothèque (IntersectionObserver + Web Animations API).
 * Compatible pré-rendu : le HTML servi est toujours visible (sans JS aussi) ; seuls les blocs
 * situés sous la ligne de flottaison sont masqués après hydratation puis révélés.
 */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (node.getBoundingClientRect().top <= window.innerHeight) return undefined;

    node.style.opacity = "0";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        node.style.opacity = "";
        node.animate(
          [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 600, delay: delay * 1000, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" },
        );
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      node.style.opacity = "";
    };
  }, [delay]);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  );
}

export function Section({ id, index, eyebrow, title, intro, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-300">
          <span className="text-slate-400">{index} — </span>
          {eyebrow}
        </p>
        <h2
          id={`${id}-title`}
          className="text-balance mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]"
        >
          {title}
        </h2>
        {intro ? <p className="mt-5 text-lg leading-relaxed text-slate-400">{intro}</p> : null}
      </Reveal>
      <div className="mt-12 sm:mt-14">{children}</div>
    </section>
  );
}

// Halo lumineux qui suit le pointeur (effet « spotlight »), en CSS pur via deux variables.
function trackPointer(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
}

export function Card({ className = "", children, as: Tag = "div", spotlight = false }) {
  return (
    <Tag
      onPointerMove={spotlight ? trackPointer : undefined}
      className={`relative rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.035] to-white/[0.01] ${
        spotlight ? "group/spot isolate overflow-hidden" : ""
      } ${className}`}
    >
      {spotlight ? (
        <span
          aria-hidden="true"
          className="spotlight-glow pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        />
      ) : null}
      {children}
    </Tag>
  );
}

/** Bandeau défilant infini (pause au survol, arrêté si « réduire les animations »). */
export function Marquee({ children, label }) {
  return (
    <div
      role="region"
      aria-label={label}
      className="group/marquee relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]"
    >
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1 ? "true" : undefined}
          className="marquee-track flex shrink-0 items-center gap-3 pr-3 group-hover/marquee:[animation-play-state:paused]"
        >
          {children}
        </ul>
      ))}
    </div>
  );
}

export function ButtonLink({ href, children, variant = "primary", className = "", ...props }) {
  const variants = {
    primary:
      "bg-accent-300 text-ink-950 hover:bg-accent-200 shadow-[0_10px_30px_-10px_rgb(94_234_212/0.6)]",
    secondary: "border border-white/12 bg-white/[0.04] text-white hover:border-white/25 hover:bg-white/[0.08]",
  };
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
