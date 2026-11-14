import { Briefcase, Building2, Globe2, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { certs, extra, projects } from "@/data/content";
import { Counter, Reveal, SectionHeader, TiltCard } from "./fx";

export const AboutSection = () => {
  const { t, language } = useLanguage();
  const ex = extra[language];
  const a = t.about;
  const stats = [
    { n: certs[language].length, l: ex.stats.certs },
    { n: projects[language].length, l: ex.stats.models },
    { n: t.skills.erpSystems.items.length, l: ex.stats.erp },
    { n: t.skills.financeTools.items.length, l: ex.stats.tools },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow mx-auto">
        <SectionHeader eyebrow={ex.aboutEyebrow} title={a.title} />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <p className="text-xl leading-relaxed text-foreground/85 md:text-2xl md:leading-relaxed">{a.description}</p>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {stats.map((s) => (
                <TiltCard key={s.l} className="p-5 text-center">
                  <div className="font-display text-4xl font-bold text-gradient"><Counter to={s.n} /></div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </TiltCard>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <TiltCard className="h-full p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary"><Building2 className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-tight">{a.familyBusiness.title}</h3>
                  <p className="text-xs text-muted-foreground">{a.familyBusiness.subtitle}</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{a.familyBusiness.description}</p>
              <ul className="space-y-2">
                {a.familyBusiness.tasks.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{x}</li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm italic text-foreground/70">{a.familyBusiness.value}</p>
            </TiltCard>
          </Reveal>
        </div>

        {/* Work experience timeline */}
        <div className="mt-20">
          <Reveal><h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold"><Briefcase className="h-6 w-6 text-primary" />{a.workExperience.title}</h3></Reveal>
          <div className="relative pl-8 md:pl-10">
            <div className="absolute bottom-0 left-[11px] top-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent md:left-[15px]" />
            <span className="absolute left-0 top-1.5 grid h-6 w-6 place-items-center rounded-full bg-background ring-2 ring-primary md:left-1"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" /></span>
            <Reveal>
              <TiltCard className="p-7 md:p-9" max={4}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h4 className="font-display text-xl font-semibold md:text-2xl">{a.workExperience.moveas.title}</h4>
                    <p className="mt-1 text-primary">{a.workExperience.moveas.company} · <span className="text-muted-foreground">{a.workExperience.moveas.location}</span></p>
                  </div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">{a.workExperience.moveas.period}</span>
                </div>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {a.workExperience.moveas.tasks.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-sm text-foreground/80"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{x}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {a.workExperience.moveas.skills.map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>

        {/* International projects */}
        <div className="mt-20">
          <Reveal><h3 className="mb-8 flex items-center gap-3 font-display text-2xl font-semibold"><Globe2 className="h-6 w-6 text-accent" />{a.internationalProjects.title}</h3></Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <TiltCard className="h-full p-7">
                <Users className="mb-4 h-7 w-7 text-primary" />
                <h4 className="font-display text-xl font-semibold">{a.internationalProjects.coil.title}</h4>
                <p className="mt-1 font-mono text-xs text-accent">{a.internationalProjects.coil.countries}</p>
                <p className="mt-3 text-sm text-muted-foreground">{a.internationalProjects.coil.description}</p>
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1}>
              <TiltCard className="h-full p-7">
                <Globe2 className="mb-4 h-7 w-7 text-accent" />
                <h4 className="font-display text-xl font-semibold">{a.internationalProjects.projectManagement.title}</h4>
                <p className="mt-1 font-mono text-xs text-accent">{a.internationalProjects.projectManagement.country}</p>
                <p className="mt-3 text-sm text-muted-foreground">{a.internationalProjects.projectManagement.description}</p>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
