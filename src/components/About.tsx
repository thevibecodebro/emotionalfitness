
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
              {/* Chrome effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#c0c0c0]/30 via-[#ffffff]/20 to-[#808080]/30 mix-blend-overlay z-20 pointer-events-none"></div>
              
              {/* Metallic highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/30 z-20 pointer-events-none"></div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/0 via-brand-blue/10 to-brand-blue/0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              
              {/* Edge highlight */}
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl z-20 pointer-events-none"></div>
              
              {/* Corner accents with chrome effect */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-gradient-to-br from-white via-brand-blue to-white rounded-tl-xl z-30"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-gradient-to-bl from-white via-brand-purple to-white rounded-tr-xl z-30"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-gradient-to-tr from-white via-brand-purple to-white rounded-bl-xl z-30"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-gradient-to-tl from-white via-brand-pink to-white rounded-br-xl z-30"></div>
              
              {/* Main image with shadow and reflection */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png" 
                  alt="Alan Muellegger - Emotional Fitness Coach" 
                  className="w-full h-auto object-cover z-0 aspect-[4/5] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]" 
                />
                
                {/* Bottom reflection gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h6 className="text-brand-blue uppercase tracking-wider font-semibold mb-2">About</h6>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Alan Muellegger</h2>
            <p className="text-white/80 mb-4">
              With over 10 years of combined experience in sales leadership and emotional fitness coaching, I've dedicated my career to 
              helping high-performing entrepreneurs, executives, and leaders transform their emotional states to achieve peak performance in high-stakes environments.
            </p>
            <p className="text-white/80 mb-6">
              My Emotional Fitness system is not therapy, not mindset work, not woo — it's training. Like physical fitness but for your 
              nervous system, emotional responses, and inner state. This approach has been particularly effective for ambitious founders and leaders 
              who want to build breakthrough businesses without manipulation or burnout.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-white/10 bg-white/5 p-4 rounded-lg hover:border-brand-blue/50 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-2xl font-bold text-brand-blue mb-1">300+</h4>
                <p className="text-white/60 text-sm">Clients Coached</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 rounded-lg hover:border-brand-purple/50 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-2xl font-bold text-brand-purple mb-1">15+</h4>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
