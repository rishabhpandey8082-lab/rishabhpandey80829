import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { extra } from "@/data/content";
import { Reveal, SectionHeader, TiltCard } from "./fx";

export const CaseStudiesSection = () => {
  const { t, language } = useLanguage();
  const c = t.caseStudies;
  const [i, setI] = useState(0);
  const cur = c.studies[Math.min(i, c.studies.length - 1)];

  return (
    <section id="cases" className="section-padding relative">
      <div className="container-narrow mx-auto">
        <SectionHeader eyebrow={extra[language].casesEyebrow} title={c.subtitle} />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <ul className="space-y-2">
              {c.studies.map((s, idx) => (
                <li key={s.title}>
                  <button
                    onClick={() => setI(idx)}
                    data-hover
                    className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${i === idx ? "border-primary/50 bg-primary/10" : "border-white/5 bg-white/[0.02] hover:border-white/20"}`}
                  >
                    <span className={`font-mono text-sm ${i === idx ? "text-primary" : "text-muted-foreground"}`}>0{idx + 1}</span>
                    <span className={`font-display text-sm font-medium md:text-base ${i === idx ? "text-foreground" : "text-foreground/60 group-hover:text-foreground"}`}>{s.title}</span>
                    {i === idx && <motion.span layoutId="case-bar" className="absolute inset-y-0 left-0 w-1 bg-primary" />}
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <TiltCard className="min-h-[360px] p-7 md:p-10" max={4}>
              <AnimatePresence mode="wait">
                <motion.div key={i} initial={{ opacity: 0, y: 24, rotateX: -8 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.4 }}>
                  <h3 className="font-display text-2xl font-semibold md:text-3xl">{cur.title}</h3>
                  <p className="mt-4 text-muted-foreground">{cur.description}</p>
                  <p className="mb-3 mt-8 font-mono text-xs uppercase tracking-widest text-primary">{c.keyInsights}</p>
                  <ul className="space-y-2.5">
                    {cur.insights.map((x) => <li key={x} className="flex items-center gap-3 text-sm"><CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />{x}</li>)}
                  </ul>
                  <div className="mt-8 flex items-start gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-5">
                    <Target className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{c.result}</p>
                      <p className="mt-1 font-display text-lg font-semibold">{cur.result}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TiltCard>
          </Reveal>
        </div>
        <Reveal><p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground">{c.conclusion}</p></Reveal>
      </div>
    </section>
  );
};
