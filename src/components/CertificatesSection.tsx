import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { certs, extra } from "@/data/content";
import { asset } from "@/lib/assets";
import { Reveal, SectionHeader, TiltCard } from "./fx";

export const CertificatesSection = () => {
  const { t, language } = useLanguage();
  const ex = extra[language];

  return (
    <section id="certs" className="section-padding relative">
      <div className="container-narrow mx-auto">
        <SectionHeader eyebrow={ex.certsEyebrow} title={t.certificates.title} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" style={{ perspective: 1400 }}>
          {certs[language].map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.1}>
              <TiltCard className="flex h-full flex-col p-6">
                <div className="mb-5 flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/15 text-accent" style={{ transform: "translateZ(30px)" }}><Award className="h-5 w-5" /></span>
                  {c.provider && <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.provider}</span>}
                </div>
                <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                {c.learnings.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {c.learnings.map((l) => <li key={l} className="flex items-start gap-2 text-xs text-foreground/70"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />{l}</li>)}
                  </ul>
                )}
                <a href={asset(c.file)} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-primary transition hover:gap-3">
                  {ex.openCert} <ExternalLink className="h-4 w-4" />
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
