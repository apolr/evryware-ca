
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, Mail, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full shadow-lg">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/13e615bc-1682-48b6-8aed-95fd9a42131a.png" 
              alt="Evryware Inc. Logo" 
              className="h-16 mx-auto mb-6"
              width="64"
              height="64"
            />
            <h1 className="text-6xl font-bold text-evryware mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page may have been moved, 
              deleted, or the URL might be incorrect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Popular Pages:</h3>
              <div className="space-y-2">
                <a href="/#about" className="block text-evryware hover:underline">About Us</a>
                <a href="/#services" className="block text-evryware hover:underline">Our Services</a>
                <a href="/#products" className="block text-evryware hover:underline">Products</a>
                <a href="/#portfolio" className="block text-evryware hover:underline">Portfolio</a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">Need Help?</h3>
              <div className="space-y-2">
                <a href="mailto:hello@evryware.ca" className="block text-evryware hover:underline flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </a>
                <a href="tel:+14375564546" className="block text-evryware hover:underline">Call: (437) 556-4546</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.history.back()} 
              variant="outline"
              className="flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <a href="/">
              <Button className="bg-evryware hover:bg-evryware-dark text-white flex items-center w-full sm:w-auto">
                <Home className="h-4 w-4 mr-2" />
                Return Home
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
