import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import ProcessCTASection from "@/components/ProcessCTASection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <SocialMediaSection />
      <ProcessCTASection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
