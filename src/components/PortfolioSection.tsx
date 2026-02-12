import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
const PortfolioSection = () => {
  const projects = [
    {
      title: "Nigerian Canadian Association, Hamilton",
      category: "Non-Profit Organization Website",
      description:
        "A community celebrating and promoting Nigerian culture and fostering relationships in Hamilton, Ontario",
      image: "/lovable-uploads/b0705b9c-c072-4e0b-a4e1-c2c1c67d7cdb.png",
      url: "https://ncahamilton.ca/",
      alt: "Nigerian Canadian Association Hamilton website homepage showcasing community events and cultural programs",
    },
    {
      title: "Hamilton Black Health Community Leaders Forum",
      category: "Community Health Organization",
      description:
        "Platform advancing equitable, culturally appropriate health, housing, and employment for Hamilton's African Diaspora.",
      image: "/lovable-uploads/faed6047-9b8d-4325-826f-38a34c94b229.png",
      url: "https://hbhclf.org/",
      alt: "Hamilton Black Health Community Leaders Forum website featuring health resources and community events",
    },
    {
      title: "DAM Reports",
      category: "SaaS Property Measurement Platform",
      description:
        "AI-powered roof and property measurement platform delivering professional PDF reports with satellite-based accuracy, 24-hour delivery, and 100% satisfaction guarantee.",
      image: "/lovable-uploads/damreports-landing.png",
      url: "https://damreports.com/",
      alt: "DAM Reports website showing digital automated measurement platform for roof sketches and property reports",
    },
    {
      title: "My Work Desk",
      category: "Productivity & Task Management",
      description:
        "A streamlined workspace application for managing tasks and boosting team productivity with an intuitive interface and secure authentication.",
      image: "/lovable-uploads/mywrkdesk-landing.png",
      url: "https://mywrkdesk.com/",
      alt: "My Work Desk application login page showcasing task management platform",
    },
  ];
  return (
    <section id="portfolio" className="py-20 relative portfolio-background">
      {/* Light overlay for text legibility */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-700">Recent digital solution projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-2xl"
            >
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-evryware text-evryware hover:bg-evryware hover:text-white"
                  >
                    View Project
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PortfolioSection;
