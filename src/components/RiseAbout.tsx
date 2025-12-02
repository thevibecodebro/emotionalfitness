import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RiseAbout = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden group transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#c0c0c0]/30 via-[#ffffff]/20 to-[#808080]/30 mix-blend-overlay z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/30 z-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl z-20 pointer-events-none"></div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png" 
                  alt="Alan Muellegger - Emotional Fitness Coach" 
                  className="w-full h-auto object-cover z-0 aspect-[4/5] shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]" 
                />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay"></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h6 className="text-red-500 uppercase tracking-wider font-semibold mb-2">About</h6>
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
              <div className="border border-white/10 bg-white/5 p-4 rounded-lg hover:border-red-500/50 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-2xl font-bold text-red-500 mb-1">300+</h4>
                <p className="text-white/60 text-sm">Clients Coached</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-4 rounded-lg hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-2xl font-bold text-orange-500 mb-1">15+</h4>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-500 hover:to-red-600 transition-all" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiseAbout;

