import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/content";
import { Reveal, SectionHead } from "./fx";

export const SkillsSection = () => {
  const { t, language } = useLanguage();
  const s = t.skills;
  const groups = [s.financeTools, s.erpSystems, s.otherTools, s.softSkills];

  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead eyebrow={ui[language].skillsEyebrow} title={s.title} />
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <h3 className="mb-4 border-b border-border pb-3 text-sm font-semibold">{g.title}</h3>
              <ul className="space-y-2.5">
                {g.items.map((it) => <li key={it} className="text-sm text-foreground/80">{it}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
