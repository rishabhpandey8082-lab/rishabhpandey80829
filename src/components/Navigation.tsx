import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { language, t, toggleLanguage } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.portfolio, href: "/portfolio" },
    { name: t.nav.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-narrow mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-xl font-semibold text-foreground hover:text-foreground/80 transition-colors"
          >
            R. Pandey
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative group",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
                <span 
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-foreground transition-all duration-300",
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border hover:bg-muted transition-all duration-300 text-sm font-medium"
            >
              <Globe size={16} />
              <span>{language === 'de' ? 'EN' : 'DE'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Language Toggle Mobile */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-border hover:bg-muted transition-all duration-300 text-sm font-medium"
            >
              <Globe size={14} />
              <span>{language === 'de' ? 'EN' : 'DE'}</span>
            </button>
            
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-64 mt-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
