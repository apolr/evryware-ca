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
              {/* askPreye blurb image */}
              <div className="mb-4">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <img alt="askPreye product blurb" className="w-full h-full object-cover" src="/lovable-uploads/743b37b4-67ef-46c4-a6bc-2f1aaa271d30.png" />
                </AspectRatio>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-evryware">askPreye</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive platform combining CRM, project management, and financial tracking 
                designed specifically for small to medium businesses.
              </p>
              <a href="https://www.askpreye.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">
                  Learn More
                </Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              {/* usékú blurb image */}
              <div className="mb-4">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                  <img alt="usékú product blurb" className="w-full h-full object-cover" src="/lovable-uploads/ee604703-160a-41dc-ae54-ec347a869987.png" />
                </AspectRatio>
              </div>
            
              <h3 className="text-2xl font-semibold mb-4 text-evryware">evry.ai</h3>
              <p className="text-gray-600 mb-6">AI-powered micro-services such as chatbots, voice-to-text, image tagging, document summarization, and predictive analytics that seamlessly integrate intelligent features into client's applications.</p>
              <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">Coming Soon</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProductsSection;