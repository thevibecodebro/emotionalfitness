
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/**
 * Contact Component
 * 
 * Displays contact information, booking options, and social media links.
 * Positioned at the bottom of the homepage before the footer.
 * 
 * @component
 */
const Contact = () => {
  // Centralized booking URL for consistency
  const calendlyUrl = 'https://calendly.com/alan-muellegger/emotional-fitness-session';
  
  // Social media profile URLs
  const socialLinks = {
    instagram: 'https://www.instagram.com/muellegger/',
    twitter: 'https://twitter.com/AMuellegger',
    linkedin: 'https://www.linkedin.com/in/alan-muellegger',
    facebook: 'https://www.facebook.com/alan.muellegger/'
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Connect With Me</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Ready to start your emotional fitness journey? Schedule a session or connect on social media.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-10 max-w-4xl mx-auto">
          <Button 
            className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all w-full md:w-auto"
            onClick={() => window.open(calendlyUrl, '_blank')}
            size="lg"
          >
            Book a Session
          </Button>
          
          <div className="w-full">
            <h3 className="text-white font-semibold mb-6 text-center">Follow on Social Media</h3>
            <div className="grid grid-cols-2 gap-6">
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Instagram size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">Instagram</span>
              </a>
              
              <a 
                href={socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Twitter size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">Twitter</span>
              </a>
              
              <a 
                href={socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Linkedin size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">LinkedIn</span>
              </a>
              
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 bg-black/30 rounded-lg border border-white/10 hover:border-brand-blue/50 transition-all group"
              >
                <Facebook size={24} className="text-brand-blue" />
                <span className="text-white group-hover:text-brand-blue transition-colors">Facebook</span>
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-white/70 text-sm mb-2">
              By scheduling a session, you agree to our{' '}
              <Link to="/legal-disclaimers" className="underline hover:text-brand-blue">
                Legal Disclaimers
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
