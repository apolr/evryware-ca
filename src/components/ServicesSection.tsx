import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [{
    title: "Custom Web Development",
    description: "Professional websites and web applications built with modern technologies",
    image: "/images/services/web-development.jpg"
  }, {
    title: "Digital Strategy Consulting",
    description: "Strategic planning and technology roadmaps to align your digital initiatives with business goals and growth objectives",
    image: "/images/services/digital-strategy.jpg"
  }, {
    title: "System Integration Services",
    description: "Seamlessly connect your existing systems, databases, and workflows to improve efficiency and data flow",
    image: "/images/services/system-integration.jpg"
  }, {
    title: "Data Analytics & Business Intelligence",
    description: "Transform your business data into actionable insights with custom dashboards, reports, and analytics solutions",
    image: "/images/services/data-analytics.jpg"
  }, {
    title: "Agile Project Management & Consulting",
    description: "PMI-certified project management with Agile/Scrum methodologies ensuring on-time, on-budget delivery",
    image: "/images/services/project-management.jpg"
  }, {
    title: "Ongoing Support & Maintenance",
    description: "Comprehensive technical support, updates, and maintenance to keep your digital systems running smoothly",
    image: "/images/services/support-maintenance.jpg"
  }];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">Comprehensive technology solutions tailored for businesses and non-profit organizations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{service.title}</h3>
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