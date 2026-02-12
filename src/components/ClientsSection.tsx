import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const ClientsSection = () => {
  return <section id="clients" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-semibold text-evryware mb-4">Our Clients</h2>
        <p className="text-xl text-gray-600">
          Trusted by organizations across various industries
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {/* Nigerian Canadian Association */}
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
          <CardContent className="p-6">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <img alt="Nigerian Canadian Association logo" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" src="/lovable-uploads/5d6b6964-1856-4fa8-aeb4-3487e6878654.png" />
            </AspectRatio>
          </CardContent>
        </Card>

        {/* Hamilton Black Health Community Leaders Forum */}
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
          <CardContent className="p-6">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <img alt="Hamilton Black Health Community Leaders Forum logo" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" src="/lovable-uploads/09410051-574c-4c3a-b531-488bfd9126d5.png" />
            </AspectRatio>
          </CardContent>
        </Card>

        {/* À La Carte Cleaning Services */}
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
          <CardContent className="p-6">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <img alt="À La Carte Cleaning Services logo" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" src="/lovable-uploads/1298c255-8c39-4ee1-bf53-df506844834b.png" />
            </AspectRatio>
          </CardContent>
        </Card>

        {/* Northern Sparkle Media */}
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
          <CardContent className="p-6">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <img alt="Northern Sparkle Media logo" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" src="/lovable-uploads/fc3e0b94-f314-4829-8f82-67bdb3d4115d.png" />
            </AspectRatio>
          </CardContent>
        </Card>

        {/* Brisk Systems Limited */}
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
          <CardContent className="p-6">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <img alt="Brisk Systems Limited logo" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" src="/lovable-uploads/brisk-systems-logo.jpeg" />
            </AspectRatio>
          </CardContent>
        </Card>

        {/* 4syt Technologies */}
        <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
          <CardContent className="p-6">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg">
              <img alt="4syt Technologies logo" className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105" src="/lovable-uploads/4syt-technologies-logo.jpg" />
            </AspectRatio>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>;
};
export default ClientsSection;