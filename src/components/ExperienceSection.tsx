import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { jobs, ui } from "@/data/content";
import { Reveal, SectionHead } from "./fx";

export const ExperienceSection = () => {
  const { language } = useLanguage();
  const u = ui[language];
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 70%", "end 60%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHead eyebrow={u.expEyebrow} title={u.expTitle} />
        <ol ref={list} className="relative pl-8 md:pl-12">
          <span className="absolute bottom-2 left-[7px] top-2 w-px bg-border md:left-[11px]" />
          <motion.span style={{ scaleY: grow }} className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-accent md:left-[11px]" />
          {jobs[language].map((j, i) => (
            <li key={i} className="relative pb-12 last:pb-0">
              <motion.span
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="absolute -left-8 top-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background md:-left-12 md:h-[23px] md:w-[23px]"
              />
              <Reveal className="card card-hover grid gap-4 p-6 md:grid-cols-[210px_1fr] md:gap-10 md:p-8">
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
