
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Our Clients</h2>
          <p className="text-xl text-gray-600">
            Trusted by organizations across various industries
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Nigerian Canadian Association */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
            <CardContent className="p-6">
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/b0705b9c-c072-4e0b-a4e1-c2c1c67d7cdb.png"
                  alt="Nigerian Canadian Association logo"
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
              </AspectRatio>
            </CardContent>
          </Card>

          {/* Hamilton Black Health Community Leaders Forum */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
            <CardContent className="p-6">
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/faed6047-9b8d-4325-826f-38a34c94b229.png"
                  alt="Hamilton Black Health Community Leaders Forum logo"
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
              </AspectRatio>
            </CardContent>
          </Card>

          {/* À La Carte Cleaning Services */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
            <CardContent className="p-6">
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/2e18a537-fa0a-4e06-8f3e-2a821a2778ab.png"
                  alt="À La Carte Cleaning Services logo"
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
              </AspectRatio>
            </CardContent>
          </Card>

          {/* Northern Sparkle Media */}
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
            <CardContent className="p-6">
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
                <img
                  src="/lovable-uploads/ee604703-160a-41dc-ae54-ec347a869987.png"
                  alt="Northern Sparkle Media logo"
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
