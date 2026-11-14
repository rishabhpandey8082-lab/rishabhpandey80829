import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { lockScroll } from "@/lib/scroll";

/** Intro curtain: counts to 100, then lifts away to reveal the 3D world. */
export const Preloader = ({ onReveal, onGone }: { onReveal: () => void; onGone: () => void }) => {
  const [n, setN] = useState(0);
  const [out, setOut] = useState(false);

  useEffect(() => {
    lockScroll(true);
    const fonts = document.fonts?.ready ?? Promise.resolve();
    let c: ReturnType<typeof animate> | undefined;
    let t: ReturnType<typeof setTimeout>;
    fonts.catch(() => null).then(() => {
      c = animate(0, 100, {
        duration: 1.7, ease: [0.65, 0, 0.35, 1],
        onUpdate: (v) => setN(Math.round(v)),
        onComplete: () => {
          setOut(true); onReveal(); lockScroll(false);
          t = setTimeout(onGone, 1100);
        },
      });
    });
    return () => { c?.stop(); clearTimeout(t); lockScroll(false); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04060b]"
      animate={out ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{ borderBottomLeftRadius: out ? "50% 12%" : 0, borderBottomRightRadius: out ? "50% 12%" : 0 }}
    >
      <motion.p animate={{ opacity: out ? 0 : 1 }} className="font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground">Rishabh Raj Pandey</motion.p>
      <motion.div animate={{ opacity: out ? 0 : 1, scale: out ? 0.9 : 1 }} className="my-6 font-display text-[clamp(5rem,22vw,14rem)] font-extrabold leading-none text-gradient tabular-nums">
        {String(n).padStart(2, "0")}
      </motion.div>
      <div className="h-px w-56 overflow-hidden bg-white/10"><div className="h-full bg-primary" style={{ width: `${n}%` }} /></div>
    </motion.div>
  );
};
