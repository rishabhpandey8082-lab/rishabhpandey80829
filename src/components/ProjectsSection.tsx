import { Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects, ui } from "@/data/content";
import { asset } from "@/lib/assets";
import { Reveal, SectionHead } from "./fx";

export const ProjectsSection = () => {
  const { language } = useLanguage();
  const u = ui[language];

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHead eyebrow={u.projectsEyebrow} title={u.projectsTitle} />
        <div className="grid gap-5 md:grid-cols-2">
          {projects[language].map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06}>
              <article className="card card-hover flex h-full flex-col p-7">
                <span className="text-xs font-semibold text-accent">0{i + 1}</span>
                <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{p.tools.map((x) => <span key={x} className="tag">{x}</span>)}</div>
                <a href={asset(p.file)} download className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-primary hover:underline">
                  <Download className="h-4 w-4" />{u.download}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
