import { ReactNode, useEffect, useRef } from "react";
import { animate, motion, useInView, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/** Scroll reveal: fade and rise, once. `x` lets blocks slide in from a side. */
export const Reveal = ({ children, className, delay = 0, x = 0 }: { children: ReactNode; className?: string; delay?: number; x?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 22, x }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/** Section title: the eyebrow fades in and the heading lines wipe up from behind a mask. */
export const SectionHead = ({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) => (
  <div className={cn("mb-12 md:mb-16", className)}>
    <Reveal><p className="label mb-3 flex items-center gap-3"><span className="h-px w-8 bg-accent" />{eyebrow}</p></Reveal>
    <h2 className="h2 max-w-3xl" aria-label={title}>
      {title.split(" ").map((w, i) => (
        <span key={i} aria-hidden className="mr-[0.22em] inline-block overflow-hidden pb-[0.1em] align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </h2>
  </div>
);

/** Counts up when scrolled into view. */
export const Counter = ({ to, className }: { to: number; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView || !ref.current) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = String(Math.round(v)); } });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref} className={className}>0</span>;
};

/** Thin brass progress line under the header. */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-accent" />;
};
