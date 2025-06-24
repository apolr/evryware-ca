
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-evryware mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">What our Clients say about working with us
</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Testimonial */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4 italic">"Evryware transformed our donor management process. What used to take hours now takes minutes. Their solution is exactly what we needed - simple yet powerful."</p>
              <div>
                <p className="font-semibold text-evryware">Ray Frank</p>
                <p className="text-sm text-gray-500">Northern Sparkle</p>
              </div>
            </CardContent>
          </Card>

          {/* Second Testimonial */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4 italic">"They delivered stunning graphics, a user-friendly website, and seamlessly integrated our newsletter and event registration. Their ongoing tech support is reliable and efficient—exactly what we needed."</p>
              <div>
                <p className="font-semibold text-evryware">Mich Paul</p>
                <p className="text-sm text-gray-500">Hamilton Black Health Community Leaders Forum</p>
              </div>
            </CardContent>
          </Card>

          {/* Third Testimonial */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-600 mb-4 italic">"Professional, responsive, and results-driven. Evryware delivered our patient management system on time and within budget. Highly recommended."</p>
              <div>
                <p className="font-semibold text-evryware">Gloria West</p>
                <p className="text-sm text-gray-500">A La Carte Cleaning Services</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
