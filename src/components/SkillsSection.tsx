import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { extra } from "@/data/content";
import { Reveal, SectionHeader, TiltCard } from "./fx";
import { SkillSphere } from "./SkillSphere";

export const SkillsSection = () => {
  const { t, language } = useLanguage();
  const s = t.skills;
  const groups = [s.financeTools, s.erpSystems, s.otherTools, s.softSkills];
  const cloud = useMemo(
    () => Array.from(new Set([...s.financeTools.items, ...s.erpSystems.items, ...s.otherTools.items, ...s.softSkills.items.slice(0, 4)])),
    [s],
  );
  const marquee = [...cloud, ...cloud];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="container-narrow mx-auto">
        <SectionHeader eyebrow={extra[language].skillsEyebrow} title={s.title} />

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <SkillSphere items={cloud} />
            <p className="mt-2 text-center font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{extra[language].skillsHint}</p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <TiltCard className="h-full p-6">
                  <h3 className="mb-4 font-display text-base font-semibold text-primary">{g.title}</h3>
                  <div className="flex flex-wrap gap-2">{g.items.map((it) => <span key={it} className="chip">{it}</span>)}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-20 border-y border-white/5 py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 font-display text-2xl font-semibold text-foreground/20 md:text-4xl">
          {marquee.map((m, i) => <span key={i} className="whitespace-nowrap">{m} <span className="text-primary/40">✦</span></span>)}
        </div>
      </div>
    </section>
  );
};
