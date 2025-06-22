import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const ProductsSection = () => {
  return <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Innovative solutions for common business challenges</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop&crop=center" alt="askPreye product preview" className="w-full h-full object-cover" />
                </AspectRatio>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-evryware">askPreye</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive platform combining CRM, project management, and financial tracking 
                designed specifically for small to medium businesses.
              </p>
              <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">
                Learn More
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop&crop=center" alt="Kommunity product preview" className="w-full h-full object-cover" />
                </AspectRatio>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-evryware">usékú</h3>
              <p className="text-gray-600 mb-6">
                Donor management and volunteer coordination system built to help non-profits 
                maximize their impact and streamline operations.
              </p>
              <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProductsSection;