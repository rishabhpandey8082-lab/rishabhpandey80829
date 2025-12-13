import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { LinkedInSection } from "@/components/LinkedInSection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <ContactSection />
          <LinkedInSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
