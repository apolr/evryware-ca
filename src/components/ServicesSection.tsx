
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "Professional websites and web applications built with modern technologies including React, Node.js, and cloud platforms"
    },
    {
      title: "Digital Strategy Consulting",
      description: "Strategic planning and technology roadmaps to align your digital initiatives with business goals and growth objectives"
    },
    {
      title: "System Integration Services",
      description: "Seamlessly connect your existing systems, databases, and workflows to improve efficiency and data flow"
    },
    {
      title: "Data Analytics & Business Intelligence",
      description: "Transform your business data into actionable insights with custom dashboards, reports, and analytics solutions"
    },
    {
      title: "Agile Project Management & Consulting",
      description: "PMI-certified project management with Agile/Scrum methodologies ensuring on-time, on-budget delivery"
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "Comprehensive technical support, updates, and maintenance to keep your digital systems running smoothly"
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 relative" 
      style={{
        backgroundImage: `url('/lovable-uploads/a7c74e80-1f65-4a7a-ada4-0a9547e9dfb5.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">Our Technology Services</h2>
          <p className="text-xl text-white/90">
            Comprehensive technology solutions tailored for Ontario businesses and non-profit organizations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-evryware">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
