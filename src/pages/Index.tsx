
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import PortfolioSection from '../components/PortfolioSection';
import ClientsSection from '../components/ClientsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import BackToTopButton from '../components/BackToTopButton';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'products', 'portfolio', 'clients', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
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

  // Add structured data for testimonials
  useEffect(() => {
    const testimonialsSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Evryware Inc.",
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ray Frank"
          },
          "reviewBody": "Evryware expertly guided our Agile project, ensuring clear communication and timely delivery. Their professionalism made a complex process smooth and effective.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Northern Sparkle"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Mich Paul"
          },
          "reviewBody": "They delivered stunning graphics, a user-friendly website, and seamlessly integrated our newsletter and event registration. Their ongoing tech support is reliable and efficient—exactly what we needed.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Hamilton Black Health Community Leaders Forum"
          }
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Gloria West"
          },
          "reviewBody": "Their affordable web and booking solutions has transformed how we managing our clients. It is now effortless, simple yet effective.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "publisher": {
            "@type": "Organization",
            "name": "A La Carte Cleaning Services"
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(testimonialsSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-fira">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <PortfolioSection />
        <ClientsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Index;
