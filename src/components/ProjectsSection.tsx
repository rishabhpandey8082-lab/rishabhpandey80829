import { BarChart3, Calculator, Download, LineChart, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { extra, projects } from "@/data/content";
import { asset } from "@/lib/assets";
import financeCharts from "@/assets/finance-charts.jpg";
import { Reveal, SectionHeader, TiltCard } from "./fx";

const icons = [BarChart3, Calculator, TrendingDown, LineChart];
const positions = ["0% 20%", "100% 40%", "30% 90%", "75% 10%"];

export const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const ex = extra[language];

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-narrow mx-auto">
        <SectionHeader eyebrow={ex.projectsEyebrow} title={t.portfolio.subtitle} />
        <div className="grid gap-6 md:grid-cols-2" style={{ perspective: 1400 }}>
          {projects[language].map((p, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.12}>
                <TiltCard className="group h-full overflow-hidden" max={7}>
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 scale-110 bg-cover opacity-60 transition-transform duration-700 group-hover:scale-125" style={{ backgroundImage: `url(${financeCharts})`, backgroundPosition: positions[i % 4] }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-primary/10" />
                    <span className="absolute left-6 top-6 grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 bg-background/70 text-primary backdrop-blur" style={{ transform: "translateZ(40px)" }}><Icon className="h-6 w-6" /></span>
                    <span className="absolute right-6 top-6 font-mono text-5xl font-bold text-white/10">0{i + 1}</span>
                  </div>
                  <div className="p-7 pt-3">
                    <h3 className="font-display text-xl font-semibold md:text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">{p.tools.map((x) => <span key={x} className="chip">{x}</span>)}</div>
                    <a href={asset(p.file)} download className="btn-ghost mt-6 !px-5 !py-2.5 text-xs"><Download className="h-4 w-4" />{ex.download}</a>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
