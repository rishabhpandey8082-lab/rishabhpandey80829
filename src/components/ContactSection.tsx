import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.contact.toast.title,
      description: t.contact.toast.description,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-skin section-padding">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t.contact.title}
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            {t.contact.subtitle}
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection delay={0.1} animation="slide-left" className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground rounded-lg">
                <Mail className="w-5 h-5 text-background" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.contact.info.email}</h4>
                <a 
                  href="mailto:rishabhpandey80829@gmail.com" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  rishabhpandey80829@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground rounded-lg">
                <Phone className="w-5 h-5 text-background" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.contact.info.phone}</h4>
                <a 
                  href="tel:+491727711065" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  +49 172 7711065
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground rounded-lg">
                <Linkedin className="w-5 h-5 text-background" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.contact.info.linkedin}</h4>
                <a 
                  href="https://www.linkedin.com/in/rishabh-raj-pandey-3b683b324" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Rishabh Raj Pandey
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-foreground rounded-lg">
                <MapPin className="w-5 h-5 text-background" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{t.contact.info.location}</h4>
                <p className="text-muted-foreground">
                  Schmalkalden / Erfurt, Thüringen, Deutschland
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} animation="slide-right">
            <div className="bg-card rounded-xl p-8 shadow-medium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all resize-none"
                    placeholder={t.contact.form.messagePlaceholder}
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  {t.contact.form.send}
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
