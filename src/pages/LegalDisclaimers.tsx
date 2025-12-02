
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LegalDisclaimers = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" className="text-white/70 hover:text-white" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Link>
            </Button>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Legal Disclaimers for Emotional Fitness</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Professional Boundaries Disclaimer</h2>
              <p className="text-white/80 mb-4">
                The Emotional Fitness coaching, training, workshops, events, and calls provided by Alan Muellegger are for educational, informational, and self-improvement purposes only. I am not a licensed psychologist, psychiatrist, psychotherapist, or other mental health professional. My services are not licensed or regulated healthcare, therapy, counseling, or medical advice and should not be used as a substitute for professional medical, psychological, or psychiatric diagnosis, treatment, or advice. The services provided are coaching-based and not psychotherapy, though they may address performance and emotional management topics in an educational and supportive way.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Non-Medical Disclaimer</h2>
              <p className="text-white/80 mb-4">
                Nothing provided through my Emotional Fitness coaching, training, workshops, events, or calls should be construed as medical, psychological, or psychiatric advice. I do not diagnose, treat, mitigate, or cure any mental health condition, disorder, or disease. My approach is based on personal experience, coaching training, and professional performance coaching experience. The term "Emotional Fitness" describes a training methodology and does not represent regulated or licensed therapeutic or medical services.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Results Disclaimer</h2>
              <p className="text-white/80 mb-4">
                Results from participating in Emotional Fitness coaching, training, workshops, events, or calls vary substantially from person to person. Success depends on many factors including your personal circumstances, background, dedication, and implementation. Testimonials and examples shared represent individual experiences and do not guarantee or imply you will achieve similar outcomes. The techniques taught in my programs are educational tools, not guaranteed solutions for personal or professional challenges.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Emergency Services Disclaimer</h2>
              <p className="text-white/80 mb-4">
                Emotional Fitness services, including coaching, training, workshops, events, and calls, are not emergency services and are not suitable for crisis situations. If you are experiencing a mental health emergency, having thoughts of harming yourself or others, or require immediate assistance, please contact your local emergency services (911), the National Suicide Prevention Lifeline at 1-800-273-8255, text HOME to 741741 to reach the Crisis Text Line, or go to your nearest emergency room.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Scope of Practice Disclaimer</h2>
              <p className="text-white/80 mb-4">
                As an Emotional Fitness provider, my role is limited to providing support, motivation, education, and accountability through coaching, training, workshops, events, and calls. I am not qualified to:
              </p>
              <ul className="list-disc list-inside text-white/80 mb-4 ml-4">
                <li>Diagnose mental health conditions</li>
                <li>Prescribe or recommend medications</li>
                <li>Provide psychological or psychiatric treatment</li>
                <li>Offer legal, financial, or medical advice</li>
              </ul>
              <p className="text-white/80 mb-4">
                If you are currently working with a mental health professional, please inform them about your participation in my Emotional Fitness services and consult with them about how these activities may complement your treatment.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Liability Limitation Disclaimer</h2>
              <p className="text-white/80 mb-4">
                By engaging with my Emotional Fitness coaching, training, workshops, events, calls, content, or programs, you acknowledge and agree that I am not liable for any physical, mental, emotional, or financial outcome that may result from implementing the strategies, techniques, or information shared. You assume full responsibility for your decisions, actions, and results that may directly or indirectly result from working with me or using materials I provide.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Credentials Clarification</h2>
              <p className="text-white/80 mb-4">
                My approach is based on personal experience, training in performance psychology, and professional coaching experience. I hold a Bachelor's degree in Psychology from the University of Wisconsin-Milwaukee (2016-2018), but I am not a licensed mental health professional. My Emotional Fitness methodology draws from this background combined with practical experience working with clients on performance optimization and emotional management.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Group Settings Advisory</h2>
              <p className="text-white/80 mb-4">
                During group workshops, training sessions, and events, I cannot provide the same level of individualized attention as in one-on-one coaching. Information shared in group settings is general in nature and may not address your specific situation. Additionally, while I maintain confidentiality, I cannot guarantee that other participants will do the same. Please exercise discretion regarding what personal information you choose to share in group settings.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Virtual Services Disclaimer</h2>
              <p className="text-white/80 mb-4">
                For virtual coaching, training, workshops, events, and calls, I cannot guarantee complete privacy or security of information transmitted electronically. While I take reasonable measures to protect your information, electronic communications may be intercepted, delivered incorrectly, or delayed. By participating in virtual services, you accept these inherent limitations.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue">Consent Acknowledgment</h2>
              <p className="text-white/80 mb-4">
                By engaging in my Emotional Fitness coaching, training, workshops, events, or calls, you acknowledge that you have read, understood, and agree to these disclaimers. You understand that these services are not therapy, counseling, or medical treatment, and you are choosing to work with me with full understanding of the nature and limitations of the services provided.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LegalDisclaimers;
