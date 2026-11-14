import { ReactNode, useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/** Scroll-reveal with a slight 3D tilt-in. */
export const Reveal = ({ children, className, delay = 0, x = 0 }: { children: ReactNode; className?: string; delay?: number; x?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 48, x, rotateX: -10, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, x: 0, rotateX: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{ transformPerspective: 1000 }}
  >
    {children}
  </motion.div>
);

/** Card that tilts toward the pointer in 3D and carries a moving spotlight. */
export const TiltCard = ({ children, className, max = 9 }: { children: ReactNode; className?: string; max?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };
  const leave = () => { rx.set(0); ry.set(0); };

  return (
    <motion.div
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className={cn("relative spotlight glass rounded-3xl", className)}
    >
      {children}
    </motion.div>
  );
};

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

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-cyan-300 to-accent" />;
};

/** Glowing cursor follower (desktop / fine pointers only). */
export const Cursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40 });
  const sy = useSpring(y, { stiffness: 500, damping: 40 });
  const big = useMotionValue(1);
  const sBig = useSpring(big, { stiffness: 300, damping: 20 });
  const fine = typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  useEffect(() => {
    if (!fine) return;
    document.body.classList.add("custom-cursor");
    const move = (e: PointerEvent) => {
      x.set(e.clientX); y.set(e.clientY);
      big.set((e.target as HTMLElement)?.closest("a,button,input,textarea,[data-hover]") ? 2.2 : 1);
    };
    window.addEventListener("pointermove", move);
    return () => { window.removeEventListener("pointermove", move); document.body.classList.remove("custom-cursor"); };
  }, [fine, x, y, big]);

  if (!fine) return null;
  return (
    <>
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[70] h-9 w-9 rounded-full border border-primary/70 mix-blend-screen" style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", scale: sBig }} />
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-primary" style={{ x, y, translateX: "-50%", translateY: "-50%" }} />
    </>
  );
};


export const SectionHeader = ({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) => (
  <Reveal className={cn("mb-14 md:mb-20", className)}>
    <p className="eyebrow mb-4 flex items-center gap-3"><span className="h-px w-10 bg-primary/70" />{eyebrow}</p>
    <h2 className="section-title max-w-3xl">{title}</h2>
  </Reveal>
);
