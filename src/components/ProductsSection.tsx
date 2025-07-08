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
          <Card className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-2xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img alt="askPreye product blurb" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/lovable-uploads/8aafa363-a078-4a23-81a4-b8ac5cd19629.png" />
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">askPreye</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Shop African groceries, book nearby reliable professional services, cargo goods locally and internationally, access instant help from a smart assistant, and earn rewards! Simply askPreye ...your smart afrocentric concierge.</p>
              <a href="https://www.askpreye.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">Curious? Learn More</Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-2xl">
            <div className="aspect-[4/3] overflow-hidden">
              <img alt="usékú product blurb" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src="/lovable-uploads/bcf96d68-4262-41b8-99c3-7a04017d1a6a.png" />
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">evry.ai</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">Your access to a smart chatbot for instant customer support, auto-tag images for easy product management, summarize documents in seconds, transcribe audio for call centers, and forecast sales to boost your business all with seamless AI micro-services.</p>
              <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">Coming Soon</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ProductsSection;