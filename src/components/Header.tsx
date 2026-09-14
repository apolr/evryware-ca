
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';


interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ activeSection, scrollToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'clients', label: 'Clients' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="font-orbitron text-2xl font-semibold text-evryware lowercase hover:text-gray-600 transition-colors"
            >
              evryware
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-6">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs lg:text-sm font-medium transition-colors hover:text-evryware pb-1 ${
                  activeSection === item.id ? 'text-evryware border-b-2 border-evryware' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://www.hamiltonchamber.ca/member/evryware-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-evryware/50 rounded-md"
              aria-label="Visit Evryware's Hamilton Chamber of Commerce member page"
            >
              <img
                src="/lovable-uploads/4e32b896-c17d-448c-b6de-e2f3b7d2f162.png"
                alt="Hamilton Chamber of Commerce Member"
                className="h-8 lg:h-12 w-auto bg-white rounded-md px-1.5 lg:px-2 py-0.5 lg:py-1 shadow-sm border border-gray-100"
                width="180"
                height="48"
              />
            </a>
            <a
              href="https://lovable-partner-directory.lovable.app/partners/evryware"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-evryware/50 rounded-md"
              aria-label="View Evryware's Lovable Certified Partner profile"
            >
              <img
                src="/lovable-certified-full-on-light.png"
                alt="Lovable Certified Partner 2026"
                className="h-8 lg:h-12 w-auto bg-white rounded-md px-1.5 lg:px-2 py-0.5 lg:py-1 shadow-sm border border-gray-100"
                width="216"
                height="48"
              />
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-600 hover:text-evryware font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col items-center gap-3">
                <a
                  href="https://www.hamiltonchamber.ca/member/evryware-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-evryware/50 rounded-md"
                  aria-label="Visit Evryware's Hamilton Chamber of Commerce member page"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src="/lovable-uploads/4e32b896-c17d-448c-b6de-e2f3b7d2f162.png"
                    alt="Hamilton Chamber of Commerce Member"
                    className="h-12 w-auto bg-white rounded-md px-2 py-1 shadow-sm border border-gray-100"
                    width="180"
                    height="48"
                  />
                </a>
                <a
                  href="https://lovable-partner-directory.lovable.app/partners/evryware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-evryware/50 rounded-md"
                  aria-label="View Evryware's Lovable Certified Partner profile"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src="/lovable-certified-full-on-light.png"
                    alt="Lovable Certified Partner 2026"
                    className="h-14 w-auto bg-white rounded-md px-2 py-1 shadow-sm border border-gray-100"
                    width="240"
                    height="56"
                  />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
