import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { more } from "@/data/more";
import { Reveal } from "./fx";

export const VentureSection = () => {
  const { language } = useLanguage();
  const m = more[language];
  return (
    <section id="venture" className="section">
      <div className="wrap">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{m.ventureEyebrow}</p>
                <h2 className="mt-3 font-display text-5xl md:text-6xl">Gentleflow</h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">{m.ventureText}</p>
              </div>
              <div>
                <p className="mb-4 text-xs uppercase tracking-wider text-white/50">{m.featuresLabel}</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {m.features.map((f, i) => (
                    <Reveal key={f} delay={0.1 + i * 0.08}>
                      <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm"><Check className="h-4 w-4 text-[hsl(40_70%_65%)]" />{f}</div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
