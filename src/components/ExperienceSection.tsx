import { useLanguage } from "@/contexts/LanguageContext";
import { jobs, ui } from "@/data/content";
import { Reveal, SectionHead } from "./fx";

export const ExperienceSection = () => {
  const { language } = useLanguage();
  const u = ui[language];

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHead eyebrow={u.expEyebrow} title={u.expTitle} />
        <ol className="divide-y divide-border border-y border-border">
          {jobs[language].map((j, i) => (
            <li key={i}>
              <Reveal className="grid gap-4 py-8 md:grid-cols-[220px_1fr] md:gap-10">
                <div>
                  <p className="font-medium">{j.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{[j.period, j.location].filter(Boolean).join(" · ")}</p>
                  <p className="text-sm text-muted-foreground">{j.type}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-snug">{j.role}</h3>
                  {j.points.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {j.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm leading-relaxed text-foreground/80"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{p}</li>
                      ))}
                    </ul>
                  )}
                  {j.skills.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{j.skills.map((s) => <span key={s} className="tag">{s}</span>)}</div>}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
