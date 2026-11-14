import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useVelocity } from "framer-motion";
import { BarChart3, Calculator, Download, LineChart, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { extra, projects, type Project } from "@/data/content";
import { asset } from "@/lib/assets";
import financeCharts from "@/assets/finance-charts.jpg";
import { Reveal, SectionHeader, TiltCard } from "./fx";

const icons = [BarChart3, Calculator, TrendingDown, LineChart];
const positions = ["0% 20%", "100% 40%", "30% 90%", "75% 10%"];

const useDesktop = () => {
  const [d, setD] = useState(() => window.innerWidth >= 1024);
  useEffect(() => {
    const f = () => setD(window.innerWidth >= 1024);
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return d;
};

const Card = ({ p, i, label }: { p: Project; i: number; label: string }) => {
  const Icon = icons[i % icons.length];
  return (
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
        <a href={asset(p.file)} download className="btn-ghost mt-6 !px-5 !py-2.5 text-xs"><Download className="h-4 w-4" />{label}</a>
      </div>
    </TiltCard>
  );
};

/** Desktop: the section pins to the viewport and the cards travel sideways as you scroll. */
const Pinned = ({ title, eyebrow, list, label }: { title: string; eyebrow: string; list: Project[]; label: string }) => {
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useSpring(useTransform(scrollYProgress, [0, 1], [0, -dist]), { stiffness: 110, damping: 28, mass: 0.5 });
  const vel = useVelocity(scrollYProgress);
  const skew = useSpring(useTransform(vel, [-1.5, 1.5], [5, -5], { clamp: true }), { stiffness: 150, damping: 25 });

  useLayoutEffect(() => {
    const m = () => track.current && setDist(Math.max(0, track.current.scrollWidth - window.innerWidth));
    m();
    window.addEventListener("resize", m);
    const t = setTimeout(m, 600);
    return () => { window.removeEventListener("resize", m); clearTimeout(t); };
  }, [list.length]);

  return (
    <div ref={outer} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div ref={track} style={{ x, skewX: skew }} className="flex w-max items-stretch gap-8 px-[7vw]">
          <div className="flex w-[34vw] max-w-[520px] shrink-0 flex-col justify-center pr-6">
            <p className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-10 bg-primary/70" />{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            <p className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Scroll <span className="h-px w-12 bg-primary/60" /> →</p>
          </div>
          {list.map((p, i) => (
            <div key={p.title} className="w-[430px] shrink-0 py-10"><Card p={p} i={i} label={label} /></div>
          ))}
        </motion.div>
        <div className="absolute bottom-10 left-[7vw] right-[7vw] h-px bg-white/10"><motion.div className="h-full origin-left bg-primary" style={{ scaleX: scrollYProgress }} /></div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const { t, language } = useLanguage();
  const ex = extra[language];
  const desktop = useDesktop();
  const list = projects[language];

  return (
    <section id="projects" className="relative">
      {desktop ? (
        <Pinned title={t.portfolio.subtitle} eyebrow={ex.projectsEyebrow} list={list} label={ex.download} />
      ) : (
        <div className="section-padding">
          <div className="container-narrow mx-auto">
            <SectionHeader eyebrow={ex.projectsEyebrow} title={t.portfolio.subtitle} />
            <div className="grid gap-6 md:grid-cols-2">
              {list.map((p, i) => <Reveal key={p.title}><Card p={p} i={i} label={ex.download} /></Reveal>)}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
