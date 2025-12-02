
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

/**
 * Header Component
 * 
 * Main navigation component that appears at the top of every page.
 * Features responsive design with mobile menu toggle and social links.
 * 
 * @component
 */
const Header = () => {
  // State to track scroll position for header styling
  const [isScrolled, setIsScrolled] = useState(false);
  // State to toggle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calendly booking URL - centralized for easy updates
  const calendlyUrl = 'https://calendly.com/alan-muellegger/emotional-fitness-session';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="/" 
          className="text-white text-xl font-bold"
          aria-label="Home"
        >
          <span className="gradient-text">GET AFTER IT</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {/* Social Media Links - Desktop */}
          <div className="flex space-x-3 mr-8" aria-label="Social media links">
            <a 
              href="https://www.instagram.com/muellegger/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
            <a 
              href="https://twitter.com/AMuellegger" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} aria-hidden="true" />
            </a>
            <a 
              href="https://www.facebook.com/alan.muellegger/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>
            <a 
              href="https://www.linkedin.com/in/alan-muellegger" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          </div>
          
          <nav aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              <li>
                <a href="#services" className="text-white hover:text-brand-blue transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-brand-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white hover:text-brand-blue transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/rise" className="text-white hover:text-brand-blue transition-colors">
                  Rise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-brand-blue transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Button 
                  className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
                  onClick={() => window.open(calendlyUrl, '_blank')}
                  aria-label="Book a session on Calendly"
                >
                  Book a Session
                </Button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden bg-black/95 backdrop-blur-md absolute w-full py-4 animate-fade-in"
          aria-label="Mobile navigation"
        >
          <ul className="container mx-auto px-4 flex flex-col space-y-4">
            <li>
              <a
                href="#services"
                className="text-white hover:text-brand-blue transition-colors py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-brand-blue transition-colors py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-white hover:text-brand-blue transition-colors py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="/rise"
                className="text-white hover:text-brand-blue transition-colors py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rise
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-brand-blue transition-colors py-2 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
            
            {/* Social Media Links - Mobile */}
            <li>
              <div className="flex space-x-5 py-2" aria-label="Social media links">
                <a 
                  href="https://www.instagram.com/muellegger/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Instagram"
                >
                  <Instagram size={20} aria-hidden="true" />
                </a>
                <a 
                  href="https://twitter.com/AMuellegger" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Twitter"
                >
                  <Twitter size={20} aria-hidden="true" />
                </a>
                <a 
                  href="https://www.facebook.com/alan.muellegger/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Facebook"
                >
                  <Facebook size={20} aria-hidden="true" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/alan-muellegger" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} aria-hidden="true" />
                </a>
              </div>
            </li>
            
            <li>
              <Button
                className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.open(calendlyUrl, '_blank');
                }}
                aria-label="Book a session on Calendly"
              >
                Book a Session
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
