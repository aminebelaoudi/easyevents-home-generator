import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TargetSection from "@/components/TargetSection";
import WhyUsSection from "@/components/WhyUsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import ProcessCTASection from "@/components/ProcessCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TargetSection />
      <WhyUsSection />
      <ShowcaseSection />
      <ProcessCTASection />
      <Footer />
    </div>
  );
};

export default Index;
