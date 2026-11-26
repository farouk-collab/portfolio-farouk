import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import UnderTheHood from "./components/UnderTheHood";
import Contact, { CvBand } from "./components/Contact";
import { person } from "./data/profile";

export default function App() {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only z-[60] rounded-full bg-accent-300 px-5 py-3 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Aller au contenu
      </a>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[70rem] overflow-hidden">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(45_212_191/0.14),transparent)]" />
        <div className="absolute right-[-12rem] top-[12rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(closest-side,rgb(125_211_252/0.08),transparent)]" />
      </div>

      <Header />

      <main id="contenu" tabIndex={-1} className="relative mx-auto max-w-6xl px-5 outline-none sm:px-8">
        <Hero />
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <UnderTheHood />
        <CvBand />
        <Contact />
      </main>

      <footer className="mt-16 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {person.name} · Conçu et développé par mes soins avec React, Vite et Tailwind CSS.
          </p>
          <a href="#top" className="inline-flex items-center gap-2 text-slate-400 hover:text-white">
            Haut de page
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
