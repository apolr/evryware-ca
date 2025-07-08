import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
const PortfolioSection = () => {
  const projects = [{
    title: "Nigerian Canadian Association, Hamilton",
    category: "Non-Profit Organization Website",
    description: "Community platform celebrating and promoting Nigerian culture and fostering relationships in Hamilton, Ontario",
    image: "/lovable-uploads/b0705b9c-c072-4e0b-a4e1-c2c1c67d7cdb.png",
    url: "https://ncahamilton.ca/",
    alt: "Nigerian Canadian Association Hamilton website homepage showcasing community events and cultural programs"
  }, {
    title: "Hamilton Black Health Community Leaders Forum",
    category: "Community Health Organization",
    description: "Platform advancing equitable, culturally appropriate health, housing, and employment for Hamilton's African Diaspora.",
    image: "/lovable-uploads/faed6047-9b8d-4325-826f-38a34c94b229.png",
    url: "https://hbhclf.org/",
    alt: "Hamilton Black Health Community Leaders Forum website featuring health resources and community events"
  }, {
    title: "À La Carte Cleaning Services",
    category: "Service Business Website",
    description: "Professional cleaning service booking and management system with online scheduling for Hamilton area clients",
    image: "/lovable-uploads/2e18a537-fa0a-4e06-8f3e-2a821a2778ab.png",
    url: "https://alacartecleaningservices.com/",
    alt: "À La Carte Cleaning Services website showing professional cleaning booking system and service options"
  }];
  return <section id="portfolio" className="py-20 relative" style={{
    backgroundImage: `url('/lovable-uploads/bed527d0-3fc9-4116-8fcd-ae74817702a0.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Light overlay for text legibility */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-700">Recent digital solution projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <Card key={index} className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.alt} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  loading="lazy" 
                  width="400" 
                  height="300" 
                  decoding="async" 
                />
              </div>
              <CardContent className="p-8">
                <span className="text-sm text-evryware font-medium">{project.category}</span>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-evryware text-evryware hover:bg-evryware hover:text-white">
                    View Project
                  </Button>
                </a>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default PortfolioSection;