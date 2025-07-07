import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const ProductsSection = () => {
  const products = [{
    title: "askPreye",
    description: "Shop African groceries, book nearby reliable professional services, cargo goods locally and internationally, access instant help from a smart assistant, and earn rewards! Simply askPreye ...your smart afrocentric concierge.",
    image: "/images/products/askpreye.jpg",
    url: "https://www.askpreye.com",
    buttonText: "Curious? Learn More"
  }, {
    title: "evry.ai",
    description: "Your access to a smart chatbot for instant customer support, auto-tag images for easy product management, summarize documents in seconds, transcribe audio for call centers, and forecast sales to boost your business all with seamless AI micro-services.",
    image: "/images/products/evry-ai.jpg",
    url: null,
    buttonText: "Coming Soon"
  }];

  return <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Innovative solutions for common business challenges</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  alt={`${product.title} product overview`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                  src={product.image}
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                {product.url ? (
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">{product.buttonText}</Button>
                  </a>
                ) : (
                  <Button variant="outline" className="border-evryware text-evryware hover:bg-evryware hover:text-white">{product.buttonText}</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default ProductsSection;