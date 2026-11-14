import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/content";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Reveal } from "./fx";

export const AboutSection = () => {
  const { language, t } = useLanguage();
  const u = ui[language];
  const intl = t.about.internationalProjects;

  return (
    <section id="about" className="section">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <img src={profilePhoto} alt="Rishabh Raj Pandey" className="aspect-[4/5] w-full max-w-sm rounded-2xl border border-border object-cover" />
        </Reveal>

        <div>
          <Reveal><p className="label mb-3">{u.aboutTitle}</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-6">{u.headline}</h2></Reveal>
          {u.aboutText.map((p, i) => (
            <Reveal key={i} delay={0.08 + i * 0.05}><p className="mb-4 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">{p}</p></Reveal>
          ))}

          <Reveal delay={0.2}>
            <div className="card mt-8 flex items-start gap-4 p-5">
              <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="label !text-muted-foreground">{u.education}</p>
                <p className="mt-1 font-medium">{u.educationValue}</p>
                <p className="text-sm text-muted-foreground">{u.educationSub}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="label mb-4 mt-10">{u.intlTitle}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: intl.coil.title, meta: intl.coil.countries, text: intl.coil.description },
                { title: intl.projectManagement.title, meta: intl.projectManagement.country, text: intl.projectManagement.description },
              ].map((x) => (
                <div key={x.title} className="card p-5">
                  <p className="font-medium">{x.title}</p>
                  <p className="mt-0.5 text-xs text-accent">{x.meta}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{x.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
