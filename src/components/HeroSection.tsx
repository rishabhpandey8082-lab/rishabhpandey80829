import { ArrowDown, Download, Mail, TrendingUp, BarChart3, DollarSign, PieChart, LineChart, Briefcase } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import profilePhoto from "@/assets/profile-photo.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingIcon = ({ Icon, initialX, initialY, delay }: { 
  Icon: typeof TrendingUp; 
  initialX: string; 
  initialY: string; 
  delay: number 
}) => (
  <motion.div
    className="absolute text-foreground/20 hidden md:block"
    style={{ left: initialX, top: initialY }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, 0.3, 0.2, 0.3],
      scale: 1,
      y: [0, -30, 0],
      x: [0, 15, 0],
      rotate: [0, 10, -5, 0],
    }}
    transition={{
      opacity: { duration: 4, repeat: Infinity, delay },
      y: { duration: 6, repeat: Infinity, delay, ease: "easeInOut" },
      x: { duration: 8, repeat: Infinity, delay, ease: "easeInOut" },
      rotate: { duration: 10, repeat: Infinity, delay, ease: "easeInOut" },
      scale: { duration: 0.5, delay },
    }}
  >
    <Icon size={40} strokeWidth={1} />
  </motion.div>
);

export const HeroSection = () => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 -left-40 w-96 h-96 bg-skin/40 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
      />
      <motion.div
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-skin/30 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ x: mousePosition.x * -2, y: mousePosition.y * -2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-skin/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), 
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
          animate={{ opacity: [0.02, 0.05, 0.02] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Finance Icons */}
      <FloatingIcon Icon={TrendingUp} initialX="8%" initialY="25%" delay={0} />
      <FloatingIcon Icon={BarChart3} initialX="88%" initialY="18%" delay={0.5} />
      <FloatingIcon Icon={DollarSign} initialX="12%" initialY="68%" delay={1} />
      <FloatingIcon Icon={PieChart} initialX="85%" initialY="60%" delay={1.5} />
      <FloatingIcon Icon={LineChart} initialX="5%" initialY="45%" delay={2} />
      <FloatingIcon Icon={Briefcase} initialX="92%" initialY="38%" delay={2.5} />

      {/* Animated decorative lines */}
      <motion.div
        className="absolute top-32 left-0 w-48 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent hidden md:block"
        animate={{ x: [-100, 200], opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-48 right-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent hidden md:block"
        animate={{ x: [100, -200], opacity: [0, 1, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Vertical animated line */}
      <motion.div
        className="absolute left-20 top-0 w-[1px] h-32 bg-gradient-to-b from-transparent via-skin to-transparent hidden lg:block"
        animate={{ y: [-50, 100], opacity: [0, 0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-20 bottom-0 w-[1px] h-48 bg-gradient-to-t from-transparent via-skin to-transparent hidden lg:block"
        animate={{ y: [50, -100], opacity: [0, 0.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Animated circles */}
      <motion.div
        className="absolute top-24 left-16 w-24 h-24 border border-skin/50 rounded-full hidden md:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-24 w-40 h-40 border border-skin/30 rounded-full hidden md:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Particle dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-skin rounded-full hidden md:block"
          style={{
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-20 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo with animated rings */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative inline-block">
              {/* Outer pulsing rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-skin/40"
                style={{ scale: 1.5 }}
                animate={{ scale: [1.5, 1.7, 1.5], opacity: [0.4, 0.1, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-skin/30"
                style={{ scale: 1.8 }}
                animate={{ scale: [1.8, 2, 1.8], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-skin/20"
                style={{ scale: 2.1 }}
                animate={{ scale: [2.1, 2.3, 2.1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Glowing backdrop */}
              <motion.div
                className="absolute inset-0 rounded-full bg-skin/50 blur-2xl -z-10"
                style={{ scale: 1.3 }}
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1.3, 1.5, 1.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Profile image */}
              <motion.div
                className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-skin shadow-large mx-auto relative"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profilePhoto}
                  alt="Rishabh Raj Pandey - Professional Portrait"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Overline with typing effect simulation */}
          <motion.div
            className="overflow-hidden mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.p
              className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t.hero.greeting}
            </motion.p>
          </motion.div>

          {/* Main Title with staggered animation */}
          <motion.div className="overflow-hidden mb-6">
            <motion.h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {t.hero.title}
            </motion.h1>
          </motion.div>

          {/* Animated underline */}
          <motion.div
            className="h-[2px] bg-gradient-to-r from-transparent via-skin to-transparent mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Quote with fade effect */}
          <motion.p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              „{t.hero.quote}"
            </motion.span>
          </motion.p>

          {/* CTA Buttons with stagger */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button variant="hero" size="xl" asChild className="shadow-lg hover:shadow-xl transition-shadow">
                <Link to="/portfolio">
                  {t.hero.viewPortfolio}
                </Link>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button variant="hero-secondary" size="xl" asChild className="shadow-md hover:shadow-lg transition-shadow">
                <a href="/Rishabh_Pandey_Lebenslauf.pdf" download className="flex items-center gap-2">
                  <Download size={18} />
                  {t.hero.downloadCV}
                </a>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button variant="hero-outline" size="xl" asChild className="hover:shadow-md transition-shadow">
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail size={18} />
                  {t.hero.contactMe}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator with bounce */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-xs uppercase tracking-widest">{t.hero.scrollDown}</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};