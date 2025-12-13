import { Navigation } from "@/components/Navigation";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { LinkedInSection } from "@/components/LinkedInSection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const Portfolio = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-20">
          <PortfolioSection />
          <CaseStudiesSection />
          <LinkedInSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Portfolio;
