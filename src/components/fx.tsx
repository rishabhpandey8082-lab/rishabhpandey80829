import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Quiet scroll reveal: a short fade and 12px rise, once. */
export const Reveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const SectionHead = ({ eyebrow, title, className }: { eyebrow: string; title: string; className?: string }) => (
  <Reveal className={cn("mb-12 md:mb-16", className)}>
    <p className="label mb-3">{eyebrow}</p>
    <h2 className="h2 max-w-3xl">{title}</h2>
  </Reveal>
);
