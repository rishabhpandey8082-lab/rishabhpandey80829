import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { extra } from "@/data/content";
import { asset } from "@/lib/assets";
import profilePhoto from "@/assets/profile-photo.jpg";
import { TiltCard } from "./fx";

const NameLine = ({ text, delay = 0, gradient = false }: { text: string; delay?: number; gradient?: boolean }) => (
  <span className="block overflow-hidden pb-2" aria-label={text}>
    {text.split("").map((ch, i) => (
      <motion.span
        key={i}
        aria-hidden
        initial={{ y: "110%", rotateX: -80, opacity: 0 }}
        animate={{ y: 0, rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: delay + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
        className={`inline-block ${gradient ? "text-gradient" : ""}`}
        style={{ transformOrigin: "bottom", whiteSpace: "pre" }}
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const ex = extra[language];
  const [role, setRole] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % ex.roles.length), 2600);
    return () => clearInterval(id);
  }, [ex.roles.length]);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center px-5 pb-20 pt-32 md:px-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/80 via-background/35 to-transparent" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="eyebrow mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
            {t.hero.greeting}
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,7.4vw,5.9rem)] font-bold leading-[0.98] tracking-tight" style={{ perspective: 800 }}>
            <NameLine text="Rishabh Raj" delay={0.3} />
            <NameLine text="Pandey" delay={0.75} gradient />
          </h1>

          <div className="mt-6 flex h-9 items-center gap-3 font-mono text-sm text-muted-foreground md:text-base">
            <span className="text-primary">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span key={role} initial={{ opacity: 0, y: 14, filter: "blur(6px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -14, filter: "blur(6px)" }} transition={{ duration: 0.4 }} className="text-foreground">
                {ex.roles[role]}
              </motion.span>
            </AnimatePresence>
            <span className="h-5 w-[2px] animate-pulse bg-primary" />
          </div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.hero.subtitle}
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="mt-3 max-w-xl border-l-2 border-accent/60 pl-4 text-sm italic text-foreground/70">
            “{t.hero.quote}”
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45 }} className="mt-9 flex flex-wrap gap-3">
            <button onClick={() => go("projects")} className="btn-primary">{t.hero.viewPortfolio}</button>
            <a href={asset("Rishabh_Pandey_Lebenslauf.pdf")} download className="btn-ghost"><Download className="h-4 w-4" />{t.hero.downloadCV}</a>
            <button onClick={() => go("contact")} className="btn-ghost"><Mail className="h-4 w-4" />{t.hero.contactMe}</button>
          </motion.div>
        </div>

        {/* Portrait sits in front of the 3D core rendered in the background canvas */}
        <motion.div initial={{ opacity: 0, scale: 0.85, rotateY: -25 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} className="mx-auto w-full max-w-[300px] lg:max-w-[340px]" style={{ perspective: 1000 }}>
          <TiltCard max={14} className="p-3">
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <img src={profilePhoto} alt="Rishabh Raj Pandey" className="aspect-[4/5] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-primary/10" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-2xl border border-white/10 bg-background/60 px-4 py-2.5 backdrop-blur-md">
                <div>
                  <p className="font-display text-sm font-semibold">Rishabh Raj Pandey</p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Schmalkalden · DE</p>
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        onClick={() => go("about")}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        aria-label={t.hero.scrollDown}
      >
        {ex.scroll}
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}><ArrowDown className="h-4 w-4 text-primary" /></motion.span>
      </motion.button>
    </section>
  );
};
