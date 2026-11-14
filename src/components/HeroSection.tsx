import { Component, lazy, ReactNode, Suspense } from "react";
import { ArrowDownToLine, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/content";
import { asset } from "@/lib/assets";
import { Reveal } from "./fx";

const HeroScene = lazy(() => import("@/three/HeroScene"));

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

const webgl = () => {
  try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch { return false; }
};

export const HeroSection = () => {
  const { language } = useLanguage();
  const u = ui[language];

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="wrap grid items-center gap-8 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <Reveal><p className="label mb-5">{u.eyebrow}</p></Reveal>
          <Reveal delay={0.05}><h1 className="font-display text-[clamp(3rem,7.5vw,5.75rem)] leading-[0.98] tracking-tight">{u.headline}</h1></Reveal>
          <Reveal delay={0.1}><p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{u.intro}</p></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={asset("Rishabh_Pandey_Lebenslauf.pdf")} download className="btn btn-solid"><ArrowDownToLine className="h-4 w-4" />{u.resume}</a>
              <a href="#contact" className="btn btn-line"><Mail className="h-4 w-4" />{u.contact}</a>
            </div>
          </Reveal>
        </div>

        <div className="relative h-[300px] sm:h-[380px] lg:h-[460px]" aria-hidden>
          {webgl() && (
            <Boundary><Suspense fallback={null}><HeroScene /></Suspense></Boundary>
          )}
        </div>
      </div>

      <div className="border-t border-border">
        <dl className="wrap grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4">
          {u.facts.map((f) => (
            <div key={f.label}>
              <dt className="label !text-muted-foreground">{f.label}</dt>
              <dd className="mt-1 text-sm font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
