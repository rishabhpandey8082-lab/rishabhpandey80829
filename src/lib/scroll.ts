import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Buttery inertial scrolling (skipped for users who prefer reduced motion). */
export function initScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, smoothWheel: true });
  let id = 0;
  const raf = (t: number) => { lenis?.raf(t); id = requestAnimationFrame(raf); };
  id = requestAnimationFrame(raf);
  return () => { cancelAnimationFrame(id); lenis?.destroy(); lenis = null; };
}

export const lockScroll = (lock: boolean) => {
  if (lenis) (lock ? lenis.stop() : lenis.start());
  document.documentElement.style.overflow = lock ? "hidden" : "";
};

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else el.scrollIntoView({ behavior: "smooth" });
};
