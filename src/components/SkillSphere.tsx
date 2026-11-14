import { useEffect, useMemo, useRef } from "react";

/** Interactive 3D tag-cloud: tags sit on a sphere that spins toward the pointer. */
export const SkillSphere = ({ items }: { items: string[] }) => {
  const box = useRef<HTMLDivElement>(null);
  const els = useRef<(HTMLSpanElement | null)[]>([]);
  const rot = useRef({ x: 0.002, y: 0.004 });
  const target = useRef({ x: 0.0015, y: 0.004 });

  const pts = useMemo(
    () =>
      items.map((_, i) => {
        const phi = Math.acos(1 - (2 * (i + 0.5)) / items.length);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        return [Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)] as [number, number, number];
      }),
    [items],
  );
  const state = useRef(pts.map((p) => [...p] as [number, number, number]));
  useEffect(() => { state.current = pts.map((p) => [...p] as [number, number, number]); }, [pts]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const loop = () => {
      const el = box.current;
      if (el) {
        const R = Math.min(el.clientWidth, el.clientHeight) * 0.42;
        const r = rot.current;
        r.x += (target.current.x - r.x) * 0.05;
        r.y += (target.current.y - r.y) * 0.05;
        const sx = Math.sin(r.x), cx = Math.cos(r.x), sy = Math.sin(r.y), cy = Math.cos(r.y);
        state.current.forEach((p, i) => {
          let [x, y, z] = p;
          const y1 = y * cx - z * sx; const z1 = y * sx + z * cx; y = y1; z = z1;
          const x1 = x * cy + z * sy; const z2 = -x * sy + z * cy; x = x1; z = z2;
          p[0] = x; p[1] = y; p[2] = z;
          const s = 0.62 + (z + 1) * 0.28;
          const node = els.current[i];
          if (node) {
            node.style.transform = `translate3d(${x * R}px, ${y * R}px, 0) translate(-50%, -50%) scale(${s})`;
            node.style.opacity = String(0.28 + (z + 1) * 0.36);
            node.style.zIndex = String(Math.round((z + 1) * 50));
          }
        });
      }
      if (!reduce) raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    const r = box.current!.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    target.current = { x: -py * 0.05, y: px * 0.07 };
  };

  return (
    <div
      ref={box}
      onPointerMove={onMove}
      onPointerLeave={() => (target.current = { x: 0.0015, y: 0.004 })}
      className="relative mx-auto aspect-square w-full max-w-[480px]"
      aria-label="Skills"
    >
      <div className="absolute inset-[12%] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute inset-[6%] rounded-full border border-primary/15" />
      <div className="absolute inset-[22%] rounded-full border border-accent/10" />
      {items.map((label, i) => (
        <span
          key={label}
          ref={(n) => (els.current[i] = n)}
          className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-full border border-white/10 bg-background/70 px-3 py-1.5 font-mono text-[11px] text-foreground/90 backdrop-blur will-change-transform sm:text-xs"
        >
          {label}
        </span>
      ))}
    </div>
  );
};
