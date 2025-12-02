
import Logo from "./Logo";
import { Separator } from "@/components/ui/separator";
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <Logo size="sm" animate={false} />
              <div>
                <h3 className="text-xl font-bold gradient-text">EMOTIONAL FITNESS</h3>
                <p className="text-white/70 text-sm">By Alan Muellegger</p>
              </div>
            </div>
            <p className="text-white/60 mt-4 text-center md:text-left max-w-xs">
              Optimize your emotions for peak performance in all areas of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-white/70 hover:text-brand-blue transition-colors">Services</a></li>
                <li><a href="#about" className="text-white/70 hover:text-brand-blue transition-colors">About</a></li>
                <li><a href="#testimonials" className="text-white/70 hover:text-brand-blue transition-colors">Testimonials</a></li>
                <li>
                  <a 
                    href="https://calendly.com/alan-muellegger/emotional-fitness-session" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-brand-blue transition-colors"
                  >
                    Book a Session
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-white/70" />
                  <a href="mailto:alan.muellegger@gmail.com" className="text-white/70 hover:text-brand-blue transition-colors">
                    alan.muellegger@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-white/70" />
                  <a href="tel:+18476248389" className="text-white/70 hover:text-brand-blue transition-colors">
                    (847) 624-8389
                  </a>
                </li>
              </ul>
              
              <h4 className="text-white font-semibold mt-6 mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/muellegger/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://twitter.com/AMuellegger" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/alan.muellegger/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/alan-muellegger" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-brand-blue transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">© {currentYear} Emotional Fitness Training. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-white/50 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/legal-disclaimers" className="text-white/50 hover:text-white text-sm transition-colors">Legal Disclaimers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
