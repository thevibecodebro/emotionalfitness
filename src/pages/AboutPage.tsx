import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ArrowLeft, Award, BookOpen, Briefcase, GraduationCap, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full filter blur-[100px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/20 rounded-full filter blur-[100px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white/60 hover:text-brand-blue mb-8 transition-all">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
              <div className="md:w-1/3">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/29dbc926-49ae-496e-978b-0e8a5705b464.png" 
                    alt="Alan Muellegger - Emotional Fitness Coach" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Alan Muellegger</h1>
                <h2 className="text-xl md:text-2xl text-brand-blue mb-6">Emotional Fitness Coach & Performance Specialist</h2>
                
                <p className="text-white/80 mb-6 text-lg">
                  With over 10 years of combined experience in sales leadership and emotional fitness coaching, I've dedicated my career to 
                  helping individuals transform their emotional states to achieve peak performance and fulfillment in all areas of life.
                </p>
                
                <p className="text-white/80 mb-6 text-lg">
                  My Emotional Fitness system is not therapy, not mindset work, not woo — it's training. Like physical fitness but for your nervous system, 
                  emotional responses, and inner state. This approach has been particularly effective for coaches and entrepreneurs 
                  who want to build authentic businesses without manipulation or burnout.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Peak Performance</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Emotional Intelligence</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Mental Conditioning</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">Mindfulness</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-white/70 text-sm">State Management</span>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
                  onClick={() => window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank')}
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* My Approach */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">My Approach</h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
              I've developed an effective methodology called Emotional Fitness — a structured, daily practice of emotional 
              mastery built for high performers, leaders, and creators who must lead under pressure, scale without collapse, 
              and remain grounded in truth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-brand-blue/30 hover:bg-white/10 transition-all">
                <div className="bg-brand-blue/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">State Optimization</h3>
                <p className="text-white/80">
                  Master daily emotional warm-ups and Peak State Protocols designed to get your body and mind aligned before work, meetings, or key decisions. 
                  Learn to control your emotional and mental state on demand. This isn't mindset work or therapy — it's training for your nervous system.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-brand-purple/30 hover:bg-white/10 transition-all">
                <div className="bg-brand-purple/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="text-brand-purple" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance Conditioning</h3>
                <p className="text-white/80">
                  Optimize your emotions for peak performance through systematic training. Like physical fitness — but for your emotional responses and inner state. 
                  My service conversion method helps you build sustainable momentum without resorting to manipulative tactics or short-term hype.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center hover:border-brand-pink/30 hover:bg-white/10 transition-all">
                <div className="bg-brand-pink/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-brand-pink" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transformational Coaching</h3>
                <p className="text-white/80">
                  One-on-one personalized coaching that builds capacity, stability, and clarity in the face of pressure. 
                  I've helped hundreds of coaches escape burnout while building authentic, profitable businesses based on genuine service.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Professional Background */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Professional Background</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-blue/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/20 p-3 rounded-lg">
                    <Briefcase className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Founder & Lead Coach</h3>
                    <p className="text-white/60 mb-1">Emotional Fitness Training</p>
                    <p className="text-white/60 mb-3">2019 - Present</p>
                    <p className="text-white/80">
                      Founded and developed a comprehensive emotional fitness coaching practice, working with executives, 
                      entrepreneurs, and high-performers to optimize emotional states for peak performance and sustainable success without burnout.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-purple/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-purple/20 p-3 rounded-lg">
                    <Users className="text-brand-purple" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Workshop Facilitator</h3>
                    <p className="text-white/60 mb-1">Service-Driven Coaching</p>
                    <p className="text-white/60 mb-3">2021 - Present</p>
                    <p className="text-white/80">
                      Regular presenter of online events and workshops on emotional intelligence, stress management, and authentic client acquisition. 
                      My service conversion method has helped hundreds of coaches build sustainable businesses while maintaining their integrity.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-pink/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-pink/20 p-3 rounded-lg">
                    <BookOpen className="text-brand-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Head Coach</h3>
                    <p className="text-white/60 mb-1">Champion Development</p>
                    <p className="text-white/60 mb-3">2020 - 2021</p>
                    <p className="text-white/80">
                      Served as a mindset coach and peak performance specialist, helping clients develop mental resilience 
                      and emotional regulation strategies for achieving breakthrough results in high-pressure situations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-blue/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/20 p-3 rounded-lg">
                    <Briefcase className="text-brand-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Sales Leadership Expert</h3>
                    <p className="text-white/60 mb-1">Vector Marketing</p>
                    <p className="text-white/60 mb-3">2014 - 2018</p>
                    <p className="text-white/80">
                      Progressed from Assistant Manager to District Manager, developing expertise in team leadership, 
                      performance coaching, and human motivation. This direct sales experience forms the foundation of 
                      my understanding of peak psychological performance under pressure.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:border-brand-pink/30 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-pink/20 p-3 rounded-lg">
                    <GraduationCap className="text-brand-pink" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education & Certification</h3>
                    <p className="text-white/60 mb-3">Specialized Training</p>
                    <ul className="text-white/80 space-y-2 list-disc list-inside">
                      <li>Bachelor's degree in Psychology, University of Wisconsin-Milwaukee (2016-2018)</li>
                      <li>Associate of Arts in Psychology, College of Lake County (2013-2016)</li>
                      <li>Creator of the Emotional Fitness Pure System</li>
                      <li>Extensive Study in Performance Psychology and Emotional Regulation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Media */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured In</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a 
                href="https://humanbeingunleashed.podbean.com/e/why-effort-isn-t-the-way-and-what-to-do-instead-with-alan-muellegger/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-brand-blue/30 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-brand-blue">Human Being Unleashed</h3>
                <p className="text-white/70 text-sm">Featured guest on episodes including "Why Effort Isn't The Way" discussing emotional fitness and entrepreneur mindset</p>
              </a>
              
              <a 
                href="https://podcasts.apple.com/us/podcast/95-breaking-through-hurt-w-alan-muellegger/id1538312141?i=1000577898031" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-brand-purple/30 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-brand-purple">Apple Podcasts</h3>
                <p className="text-white/70 text-sm">"Breaking Through HURT w Alan Muellegger" (Episode #95)</p>
              </a>
              
              <a 
                href="https://www.youtube.com/watch?v=WY2p1gfLMQo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-brand-pink/30 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-brand-pink">The Natural Entrepreneur</h3>
                <p className="text-white/70 text-sm">Multiple appearances including "Breaking Burnout by Selfless Service" discussing burnout prevention</p>
              </a>
              
              <a 
                href="https://www.youtube.com/watch?v=tUOcJEERsgs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-brand-blue/30 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-brand-blue">The Natural Success Clinic</h3>
                <p className="text-white/70 text-sm">Regular contributor in episodes like "The Natural Success Clinic - Ep8"</p>
              </a>
              
              <a 
                href="https://www.youtube.com/watch?v=Ph3JZSeL0bk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-brand-purple/30 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-brand-purple">Body Mind & Soul Connections</h3>
                <p className="text-white/70 text-sm">"FEATURE PROVIDER INTERVIEW - 2025/01/09" showcasing his methodology</p>
              </a>
              
              <a 
                href="https://artmysticwellness.com/blogannouncements/embracing-authenticity-in-coaching-lessons-from-alan-muelleggers-experience-based-bootcamp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-5 rounded-xl hover:border-brand-pink/30 hover:bg-white/10 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2 text-brand-pink">Art Mystic Wellness Blog</h3>
                <p className="text-white/70 text-sm">Featured in "Lessons from Alan Muellegger's Experience-Based Bootcamp"</p>
              </a>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Emotional Fitness?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Take the first step toward mastering your emotional state and achieving peak performance in all areas of your life.
              Optimize your emotions for peak performance through structured, daily practices.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-pink transition-all"
              onClick={() => window.open('https://calendly.com/alan-muellegger/emotional-fitness-session', '_blank')}
            >
              Book a Session
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
