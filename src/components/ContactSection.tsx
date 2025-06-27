import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import XIcon from './icons/XIcon';
import ConsultationDialog from "./ConsultationDialog";
const ContactSection = () => {
  const handleEmailClick = () => {
    const email = 'hello' + '@' + 'evryware.ca';
    window.location.href = 'mailto:' + email;
  };
  return <section id="contact" className="py-20 relative" style={{
    backgroundImage: `url('/lovable-uploads/f025ab89-dee6-48a0-8e94-99d7dda60936.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Grey overlay for text legibility */}
      <div className="absolute inset-0 bg-gray-600/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4 text-white">Contact Us</h2>
          <p className="text-xl text-white/90">
            Ready to start your next digital project? Let's discuss how we can help your business or organization thrive.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Google Maps Widget */}
          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-4 text-white">Our Location</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186419.5734923671!2d-79.97624385000001!3d43.2557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c986c27de778f%3A0x3031c3f4430d0d0a!2sHamilton%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1703344800000!5m2!1sen!2sus" width="100%" height="300" style={{
            border: 0,
            borderRadius: '8px'
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Evryware Inc. serving Hamilton, Ontario and surrounding areas" className="shadow-lg"></iframe>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-white" aria-hidden="true" />
                <button onClick={handleEmailClick} className="text-white hover:text-gray-200 cursor-pointer underline">
                  Contact via Email
                </button>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-white" aria-hidden="true" />
                <a href="tel:+14375564546" className="text-white hover:text-gray-200">
                  +1 (437) 556-4546
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-white" aria-hidden="true" />
                <span className="text-white">Hamilton, Ontario, Canada</span>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="https://www.linkedin.com/company/evryware-inc/" className="transition-colors duration-300" aria-label="Follow Evryware on LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-white hover:text-[#0077B5]" />
                </a>
                <a href="https://www.facebook.com/" className="transition-colors duration-300" aria-label="Follow Evryware on Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-6 w-6 text-white hover:text-[#1877F2]" />
                </a>
                <a href="https://twitter.com/" className="transition-colors duration-300" aria-label="Follow Evryware on Twitter" target="_blank" rel="noopener noreferrer">
                  <XIcon className="h-6 w-6 text-white hover:text-black" />
                </a>
                <a href="https://www.youtube.com/" className="transition-colors duration-300" aria-label="Subscribe to Evryware on YouTube" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-6 w-6 text-white hover:text-[#FF0000]" />
                </a>
                <a href="https://www.instagram.com/" className="transition-colors duration-300" aria-label="Follow Evryware on Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-white hover:text-[#E4405F]" />
                </a>
              </div>
            </div>
          </div>

          {/* Affiliation Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Affiliation</h3>
            <div className="flex justify-start">
              <a href="https://www.hamiltonchamber.ca/member/evryware-inc/" target="_blank" rel="noopener noreferrer" aria-label="Visit Evryware's Hamilton Chamber of Commerce member page">
                <img alt="Hamilton Chamber of Commerce Member" className="max-w-48 h-auto" src="/lovable-uploads/4e32b896-c17d-448c-b6de-e2f3b7d2f162.png" />
              </a>
            </div>
          </div>
          
          {/* Business Consultation */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Let's Do Business</h3>
            <p className="text-white/90 mb-6">Whether you're a business looking to modernize your operations or a non-profit seeking to amplify your impact, we're here to help you find the right digital solution.</p>
            <ConsultationDialog triggerText="Get a Free Consultation" className="bg-white text-evryware hover:bg-gray-100 px-8 py-3 text-lg group" />
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;