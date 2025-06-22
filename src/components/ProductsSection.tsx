
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Innovative solutions for common business challenges</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
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
              <h3 className="text-2xl font-semibold mb-4 text-evryware">Kommunity</h3>
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
    </section>
  );
};

export default ProductsSection;
