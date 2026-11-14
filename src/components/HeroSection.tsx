import { motion } from "framer-motion";
import { ArrowDownToLine, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ui } from "@/data/content";
import { more } from "@/data/more";
import { asset } from "@/lib/assets";
import profilePhoto from "@/assets/profile-photo.jpg";

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (d: number) => ({ initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } });

export const HeroSection = () => {
  const { language } = useLanguage();
  const u = ui[language];
  const m = more[language];

  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="wrap grid items-center gap-14 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <motion.p {...rise(0.05)} className="label mb-5 flex items-center gap-3"><span className="h-px w-8 bg-accent" />{u.eyebrow}</motion.p>
          <h1 className="font-display text-[clamp(3rem,7.5vw,5.75rem)] leading-[0.98] tracking-tight" aria-label={u.headline}>
            {u.headline.split(" ").map((w, i) => (
              <span key={i} aria-hidden className="mr-[0.22em] inline-block overflow-hidden pb-[0.08em] align-bottom">
                <motion.span className="inline-block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease }}>{w}</motion.span>
              </span>
            ))}
          </h1>
          <motion.p {...rise(0.55)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{u.intro}</motion.p>
          <motion.div {...rise(0.7)} className="mt-8 flex flex-wrap gap-3">
            <a href={asset("Rishabh_Pandey_Lebenslauf.pdf")} download className="btn btn-solid"><ArrowDownToLine className="h-4 w-4" />{u.resume}</a>
            <a href="#contact" className="btn btn-line"><Mail className="h-4 w-4" />{u.contact}</a>
          </motion.div>
        </div>

        {/* Real portrait with an offset brass frame and two floating role badges */}
        <div className="relative mx-auto w-full max-w-[380px]">
          <motion.div initial={{ opacity: 0, x: 18, y: 18 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.9, delay: 0.35, ease }} className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-accent/60" />
          <motion.div initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1.1, delay: 0.25, ease }} className="relative overflow-hidden rounded-3xl bg-secondary">
            <motion.img initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.6, delay: 0.25, ease }} src={profilePhoto} alt="Rishabh Raj Pandey" className="aspect-[4/5] w-full object-cover object-top" />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1, duration: 0.6 }} className="absolute -left-6 bottom-10 sm:-left-12">
            <div className="animate-float card flex items-center gap-3 px-4 py-3 shadow-lg">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" /><span className="text-sm font-medium">{m.badge1}</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.3, duration: 0.6 }} className="absolute -right-3 top-8 sm:-right-10">
            <div className="animate-float card flex items-center gap-3 px-4 py-3 shadow-lg [animation-delay:-3s]">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" /><span className="text-sm font-medium">{m.badge2}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-border">
        <dl className="wrap grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4">
          {u.facts.map((f, i) => (
            <motion.div key={f.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.08, duration: 0.6 }}>
              <dt className="label !text-muted-foreground">{f.label}</dt>
              <dd className="mt-1 text-sm font-medium">{f.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};
