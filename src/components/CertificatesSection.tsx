import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { certs, ui } from "@/data/content";
import { asset } from "@/lib/assets";
import { Reveal, SectionHead } from "./fx";

export const CertificatesSection = () => {
  const { t, language } = useLanguage();
  const u = ui[language];

  return (
    <section id="certs" className="section">
      <div className="wrap">
        <SectionHead eyebrow={u.certsEyebrow} title={t.certificates.title} />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certs[language].map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.05}>
              <article className="card card-hover flex h-full flex-col p-6">
                {c.provider && <p className="label">{c.provider}</p>}
                <h3 className="mt-2 font-display text-xl leading-snug">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
                {c.learnings.length > 0 && (
                  <ul className="mt-4 space-y-1.5">
                    {c.learnings.map((l) => <li key={l} className="flex gap-2 text-xs text-foreground/75"><span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{l}</li>)}
                  </ul>
                )}
                <a href={asset(c.file)} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium text-primary hover:underline">
                  {u.openCert}<ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
