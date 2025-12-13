import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground py-12 px-6 md:px-12 lg:px-20">
      <div className="container-narrow mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="font-display text-xl font-semibold text-background mb-2 block hover:text-background/80 transition-colors">
              Rishabh Raj Pandey
            </Link>
            <p className="text-background/60 text-sm">
              International Business & Economics Student
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:rishabhpandey80829@gmail.com"
              className="p-3 bg-background/10 rounded-full text-background hover:bg-background/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishabh-raj-pandey-3b683b324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/10 rounded-full text-background hover:bg-background/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-3 bg-background/10 rounded-full text-background hover:bg-background/20 transition-colors"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Rishabh Raj Pandey. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};