import { FileText, LineChart, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { more } from "@/data/more";
import { Reveal, SectionHead } from "./fx";


export const ServicesSection = () => {
  const { language } = useLanguage();
  const m = more[language];
  return (
    <section id="services" className="section">
      <div className="wrap">
        <SectionHead eyebrow={m.servicesEyebrow} title={m.servicesTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {m.services.map((s, i) => {
            const Icon = [FileText, FileText, Workflow, LineChart][i];
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="card card-hover group h-full p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-5 font-display text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
