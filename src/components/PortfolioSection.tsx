
import { Code } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Healthcare Management System",
      category: "Web Application",
      description: "Streamlined patient management for a local clinic"
    },
    {
      title: "E-commerce Platform",
      category: "Online Store",
      description: "Custom shopping experience for artisan marketplace"
    },
    {
      title: "Event Management Portal",
      category: "Non-Profit",
      description: "Registration and coordination system for community events"
    }
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 relative" 
      style={{
        backgroundImage: `url('/lovable-uploads/bed527d0-3fc9-4116-8fcd-ae74817702a0.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Light overlay for text legibility */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Portfolio</h2>
          <p className="text-xl text-gray-700">
            Recent projects showcasing our expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group cursor-pointer bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <Code className="h-8 w-8 text-gray-400" />
                </div>
                <span className="text-sm text-evryware font-medium">{project.category}</span>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
