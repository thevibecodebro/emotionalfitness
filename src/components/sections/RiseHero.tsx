import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { Link } from "react-router-dom";

/**
 * Rise Hero Component
 * 
 * Hero section for the Rise page with red/orange gradient theme.
 * 
 * @component
 */
const RiseHero = () => {
  // Centralized booking URL for consistency
  const calendlyUrl = 'https://calendly.com/alan-muellegger/emotional-fitness-session';
  
  return <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-black">
      {/* Background gradient effects - Red/Orange theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-orange-600/20 rounded-full filter blur-[100px]"></div>
      </div>

      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <Logo size="xl" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-8 leading-tight">
            <span className="gradient-text-rise">RISE</span><br /> 
            <span className="text-chrome bg-clip-text">TRAINING</span>
          </h1>
          
          <p className="text-white/80 mt-6 text-xl max-w-2xl">Optimize your emotions for peak performance.</p>
          
          <div className="mt-10 flex flex-col md:flex-row gap-6 md:gap-4">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-orange-500 hover:to-red-600 transition-all" onClick={() => window.open(calendlyUrl, '_blank')}>
              Book a Session
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/5" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-16 md:mt-24">
            <p className="uppercase tracking-widest text-white/50 text-base mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/60 animate-pulse">
              FOR ENTREPRENEURS | EXECUTIVES | LEADERS | HIGH PERFORMERS
            </p>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
            <a href="#services" className="text-white/50 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5"></path>
                <path d="M7 6l5 5 5-5"></path>
              </svg>
            </a>
          </div>
          
          <div className="mt-16 md:mt-24 text-center w-full">
            <p className="text-white/50 text-xs mt-4">
              By engaging with our services, you agree to our{' '}
              <Link to="/legal-disclaimers" className="underline hover:text-red-500">
                Legal Disclaimers
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>;
export default RiseHero;

