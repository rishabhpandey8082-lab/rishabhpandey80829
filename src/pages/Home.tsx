import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { LinkedInSection } from "@/components/LinkedInSection";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <LinkedInSection />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Home;
