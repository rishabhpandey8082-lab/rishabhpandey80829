import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/content";
import { Reveal, SectionHead } from "./fx";

export const CaseStudiesSection = () => {
  const { t, language } = useLanguage();
  const c = t.caseStudies;
  const [i, setI] = useState(0);
  const cur = c.studies[Math.min(i, c.studies.length - 1)];

  return (
    <section id="cases" className="section">
      <div className="wrap">
        <SectionHead eyebrow={ui[language].casesEyebrow} title={c.subtitle} />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <ul role="tablist" className="border-y border-border">
              {c.studies.map((s, idx) => (
                <li key={s.title} className="border-b border-border last:border-b-0">
                  <button
                    role="tab"
                    aria-selected={i === idx}
                    onClick={() => setI(idx)}
                    className={`flex w-full items-baseline gap-4 py-4 text-left text-sm transition-colors ${i === idx ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <span className={`text-xs font-semibold ${i === idx ? "text-accent" : ""}`}>0{idx + 1}</span>
                    <span className={i === idx ? "font-medium" : ""}>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05}>
            <article className="card p-7 md:p-9" role="tabpanel">
              <h3 className="font-display text-3xl">{cur.title}</h3>
              <p className="mt-3 text-muted-foreground">{cur.description}</p>
              <p className="label mb-3 mt-7">{c.keyInsights}</p>
              <ul className="space-y-2">
                {cur.insights.map((x) => <li key={x} className="flex gap-3 text-sm"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />{x}</li>)}
              </ul>
              <div className="mt-7 border-t border-border pt-5">
                <p className="label !text-muted-foreground">{c.result}</p>
                <p className="mt-1 font-display text-2xl">{cur.result}</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
