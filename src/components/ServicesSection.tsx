
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      title: "Digital Strategy",
      description: "Strategic planning to align technology with your business goals"
    },
    {
      title: "System Integration",
      description: "Seamlessly connect your existing systems and workflows"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights and reports"
    },
    {
      title: "Project Management & Consulting",
      description: "Agile/Scrum and PMI-certified guidance for on-time delivery"
    },
    {
      title: "Support & Maintenance",
      description: "Ongoing support to keep your systems running smoothly"
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
          <h2 className="text-4xl font-semibold text-white mb-4">Our Services</h2>
          <p className="text-xl text-white/90">
            Comprehensive technology solutions tailored to your needs
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
