import { GraduationCap, Globe2, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/content";
import { Reveal } from "./fx";

export const AboutSection = () => {
  const { language, t } = useLanguage();
  const u = ui[language];
  const intl = t.about.internationalProjects;
  const items = [
    { icon: Users, title: intl.coil.title, meta: intl.coil.countries, text: intl.coil.description },
    { icon: Globe2, title: intl.projectManagement.title, meta: intl.projectManagement.country, text: intl.projectManagement.description },
  ];

  return (
    <section id="about" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <Reveal><p className="label mb-3 flex items-center gap-3"><span className="h-px w-8 bg-accent" />{u.aboutTitle}</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-6">{u.headline}</h2></Reveal>
          {u.aboutText.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}><p className="mb-4 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">{p}</p></Reveal>
          ))}
        </div>

        <div className="space-y-4">
          <Reveal x={30}>
            <div className="card card-hover flex items-start gap-4 p-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><GraduationCap className="h-5 w-5" /></span>
              <div>
                <p className="label !text-muted-foreground">{u.education}</p>
                <p className="mt-1 font-display text-xl">{u.educationValue}</p>
                <p className="text-sm text-muted-foreground">{u.educationSub}</p>
              </div>
            </div>
          </Reveal>
          <Reveal x={30} delay={0.08}><p className="label !text-muted-foreground pt-4">{u.intlTitle}</p></Reveal>
          {items.map((x, i) => (
            <Reveal key={x.title} x={30} delay={0.12 + i * 0.08}>
              <div className="card card-hover flex items-start gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary"><x.icon className="h-5 w-5" /></span>
                <div>
                  <p className="font-medium">{x.title}</p>
                  <p className="mt-0.5 text-xs text-accent">{x.meta}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{x.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
