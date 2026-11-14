import { Component, lazy, ReactNode, Suspense } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { certs, jobs, projects } from "@/data/content";
import { more } from "@/data/more";
import { Counter, Reveal, SectionHead } from "./fx";

const HeroScene = lazy(() => import("@/three/HeroScene"));

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}
const webgl = () => {
  try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; }
};

const yearsSince = (y: number, m: number) => Math.max(1, Math.floor((Date.now() - new Date(y, m - 1, 1).getTime()) / (365.25 * 24 * 3600 * 1000)));

export const GlanceSection = () => {
  const { language } = useLanguage();
  const m = more[language];
  const stats = [
    { n: yearsSince(2018, 10), l: m.stats.years },
    { n: certs[language].length, l: m.stats.certs },
    { n: projects[language].length, l: m.stats.models },
    { n: jobs[language].length, l: m.stats.roles },
  ];

  return (
    <section id="glance" className="section">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHead eyebrow={m.glanceEyebrow} title={m.glanceTitle} className="!mb-10" />
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08}>
                <div className="card card-hover h-full p-6">
                  <p className="font-display text-5xl leading-none text-primary"><Counter to={s.n} /></p>
                  <p className="mt-3 text-sm text-muted-foreground">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal x={30}>
          <div className="relative h-[300px] overflow-hidden rounded-3xl border border-border bg-card sm:h-[380px]" aria-hidden>
            {webgl() && <Boundary><Suspense fallback={null}><HeroScene /></Suspense></Boundary>}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
