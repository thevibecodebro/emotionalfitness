import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-white text-xl font-bold">
          <span className="gradient-text">GET AFTER IT, FAMILY!&#8482;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          {/* Social Media Links - Desktop */}
          <div className="flex space-x-3 mr-8">
            <a 
              href="https://www.instagram.com/muellegger/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://twitter.com/AMuellegger" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="https://www.facebook.com/alan.muellegger/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/alan-muellegger" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/70 hover:text-brand-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-brand-blue transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-brand-blue transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-white hover:text-brand-blue transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-brand-blue transition-colors">
              Contact
            </a>
            <Button 
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
              onClick={() => window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank')}
            >
              Book a Session
            </Button>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-md absolute w-full py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-white hover:text-brand-blue transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Social Media Links - Mobile */}
            <div className="flex space-x-5 py-2">
              <a 
                href="https://www.instagram.com/muellegger/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-brand-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/AMuellegger" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-brand-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.facebook.com/alan.muellegger/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-brand-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/alan-muellegger" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-brand-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Linkedin size={20} />
              </a>
            </div>
            
            <Button
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all w-full"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank');
              }}
            >
              Book a Session
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
