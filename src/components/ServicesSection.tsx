import { Card, CardContent } from "@/components/ui/card";
import digitalTransformationImg from "@/assets/digital-transformation.jpg";
import productDevelopmentImg from "@/assets/product-development.jpg";
import projectManagementImg from "@/assets/project-management-new.jpg";
import aiConsultancyImg from "@/assets/ai-consultancy.jpg";

const ServicesSection = () => {
  const services = [{
    title: "Digital Transformation",
    subtitle: "System Audits and Workflow Optimization",
    description: "We help you work smarter, not harder. We review how your business operates, spot what's slowing you down, and fix it. From outdated systems to inefficient processes, we streamline everything so your team can focus on what matters most.",
    image: digitalTransformationImg
  }, {
    title: "Product Development",
    subtitle: "Minimum Lovable Product (MLP)",
    description: "Got an idea? We build it fast. We build Minimum Lovable Products - the early versions of your product with just enough features to test with real users. This gets you to market quickly, saves money, and helps you learn what works before investing big.",
    image: productDevelopmentImg
  }, {
    title: "Project Management",
    subtitle: "Lean | Iterative | Deployment",
    description: "We keep your projects on track, no matter how complex. Whether you're building traditional software, AI systems, or anything in between, we manage timelines, budgets, and teams. We also make sure your AI is ethical and your data is secure.",
    image: projectManagementImg
  }, {
    title: "AI Consultancy",
    subtitle: "Readiness Audit | Adoption Strategy | Automation",
    description: "AI is everywhere, but where do you start? We help you figure out if you're ready for AI, what it can do for your business, and how to use it safely. From smart chatbots to automated workflows, we guide you through adopting AI that actually delivers results.",
    image: aiConsultancyImg
  }];

  return (
    <section id="services" className="py-20 relative services-background">
      {/* Light overlay for text legibility */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">Comprehensive technology solutions tailored for businesses and non-profit organizations</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">{service.title}</h3>
                <p className="text-sm font-medium text-primary mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
