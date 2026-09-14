import { Button } from "@/components/ui/button";
import ConsultationDialog from "./ConsultationDialog";
interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}
const HeroSection = ({
  scrollToSection
}: HeroSectionProps) => {
  return <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative hero-background">
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-orbitron text-5xl font-semibold text-white mb-6 lowercase md:text-6xl drop-shadow-lg">smart . simple . solutions</h1>
          
          
          
          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
            We are a leading technology consultancy in Ontario, Canada, working with businesses and non-profits to deliver straightforward, intelligent digital solutions that drive real results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationDialog triggerText="Get a Free Consultation" className="!bg-[#22C55E] hover:!bg-[#16A34A] text-white px-8 py-3 text-lg group shadow-lg" />
            
            <Button onClick={() => scrollToSection('services')} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-evryware px-8 py-3 text-lg backdrop-blur-sm bg-white/10 shadow-lg">
              Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;