import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, Users, Lightbulb, Star, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'products', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    id: 'about',
    label: 'About'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'products',
    label: 'Products'
  }, {
    id: 'portfolio',
    label: 'Portfolio'
  }, {
    id: 'testimonials',
    label: 'Testimonials'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return <div className="min-h-screen bg-white font-fira">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button onClick={() => scrollToSection('hero')} className="font-orbitron text-2xl font-semibold text-evryware lowercase hover:text-gray-600 transition-colors">
                evryware
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-colors hover:text-evryware ${activeSection === item.id ? 'text-evryware' : 'text-gray-600'}`}>
                  {item.label}
                </button>)}
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <nav className="px-4 py-4 space-y-4">
                {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left text-gray-600 hover:text-evryware font-medium">
                    {item.label}
                  </button>)}
              </nav>
            </div>}
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative" style={{
      backgroundImage: `url('/lovable-uploads/6a88e9b1-cc21-42e6-9a39-0598ed92cf6a.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="font-orbitron text-5xl font-semibold text-white mb-6 lowercase md:text-6xl drop-shadow-lg">simple . smart . solutions</h1>
            
            <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">A technology company working with businesses and non-profits to deliver straightforward, intelligent digital solutions that work.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-evryware hover:bg-evryware-dark text-white px-8 py-3 text-lg group shadow-lg">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Schedule Your Free Consultation</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col space-y-4">
                    <p className="text-sm text-gray-600">
                      Ready to discuss your project? Book a 30-minute consultation with our team.
                    </p>
                    <iframe src="https://calendly.com/hello-evryware/30min" width="100%" height="600" frameBorder="0" title="Schedule Consultation"></iframe>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button onClick={() => scrollToSection('products')} variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-evryware px-8 py-3 text-lg backdrop-blur-sm bg-white/10 shadow-lg">
                Our Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-evryware mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Web Development",
            description: "Custom websites and web applications built with modern technologies"
          }, {
            title: "Digital Strategy",
            description: "Strategic planning to align technology with your business goals"
          }, {
            title: "System Integration",
            description: "Seamlessly connect your existing systems and workflows"
          }, {
            title: "Data Analytics",
            description: "Transform your data into actionable insights and reports"
          }, {
            title: "Project Management & Consulting",
            description: "Agile/Scrum and PMI-certified guidance for on-time delivery"
          }, {
            title: "Support & Maintenance",
            description: "Ongoing support to keep your systems running smoothly"
          }].map((service, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-evryware">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-evryware mb-4">Our Products</h2>
            <p className="text-xl text-gray-600">Innovative solutions for common business challenges</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-evryware">Business Management Suite</h3>
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
                <h3 className="text-2xl font-semibold mb-4 text-evryware">Non-Profit Connect</h3>
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

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-evryware mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">
              Recent projects showcasing our expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Healthcare Management System",
            category: "Web Application",
            description: "Streamlined patient management for a local clinic"
          }, {
            title: "E-commerce Platform",
            category: "Online Store",
            description: "Custom shopping experience for artisan marketplace"
          }, {
            title: "Event Management Portal",
            category: "Non-Profit",
            description: "Registration and coordination system for community events"
          }, {
            title: "Financial Dashboard",
            category: "Analytics",
            description: "Real-time reporting for investment management firm"
          }, {
            title: "Learning Management System",
            category: "Education",
            description: "Online training platform for corporate clients"
          }, {
            title: "Inventory Tracking",
            category: "Operations",
            description: "Automated stock management for manufacturing company"
          }].map((project, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <CardContent className="p-6">
                  <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Code className="h-8 w-8 text-gray-400" />
                  </div>
                  <span className="text-sm text-evryware font-medium">{project.category}</span>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-evryware mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">
              What our partners say about working with us
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            name: "Sarah Mitchell",
            company: "Green Valley Non-Profit",
            quote: "Evryware transformed our donor management process. What used to take hours now takes minutes. Their solution is exactly what we needed - simple yet powerful."
          }, {
            name: "Mark Thompson",
            company: "Thompson Manufacturing",
            quote: "The team at Evryware didn't just build us software, they became our technology partners. They understand our business and deliver solutions that actually work."
          }, {
            name: "Lisa Chen",
            company: "Ontario Medical Clinic",
            quote: "Professional, responsive, and results-driven. Evryware delivered our patient management system on time and within budget. Highly recommended."
          }].map((testimonial, index) => <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-evryware">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-evryware text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-xl opacity-90">
              Ready to start your next project? Let's discuss how we can help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>hello@evryware.ca</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (437) 556-4546</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Ontario, Canada</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's do Business</h3>
              <p className="opacity-90 mb-6">
                Whether you're a business looking to modernize your operations or a non-profit 
                seeking to amplify your impact, we're here to help you find the right solution.
              </p>
              <Button className="bg-white text-evryware hover:bg-gray-100 px-8 py-3 text-lg group">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-orbitron text-xl font-semibold lowercase mb-4 md:mb-0">
              evryware
            </div>
            <div className="text-sm opacity-75">
              © 2024 Evryware Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;