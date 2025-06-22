
import { Code, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto"></p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Code className="h-12 w-12 text-evryware mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Simple</h3>
              <p className="text-gray-600">
                We cut through complexity to deliver solutions that are intuitive and easy to use.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Lightbulb className="h-12 w-12 text-evryware mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Smart</h3>
              <p className="text-gray-600">
                Intelligent design and strategic thinking drive every project we undertake.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-evryware mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Solutions</h3>
              <p className="text-gray-600">
                Tailored approaches that solve real problems for real organizations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
