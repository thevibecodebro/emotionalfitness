
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Terms of Service</h1>
          
          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p>
                Welcome to Emotional Fitness&#8482; Training. These terms and conditions outline the rules and regulations for the use of our website and services.
              </p>
              <p className="mt-2">
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website if you do not agree to take all of the terms and conditions stated on this page.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Services</h2>
              <p>
                Emotional Fitness Training provides coaching and consulting services focused on emotional health and performance optimization. The specific details, duration, and pricing of our services will be agreed upon separately between Emotional Fitness Training and the client.
              </p>
              <p className="mt-2">
                Our services are not a substitute for professional medical or psychological treatment. If you are experiencing serious mental health issues, please consult with a qualified healthcare professional.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Intellectual Property</h2>
              <p>
                Unless otherwise stated, Emotional Fitness Training and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved.
              </p>
              <p className="mt-2">
                You may view and/or print pages from our website for your own personal use subject to restrictions set in these terms and conditions.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations of Liability</h2>
              <p>
                In no event shall Emotional Fitness Training, nor any of its officers, directors, and employees, be liable to you for anything arising out of or in any way connected with your use of this website or our services, whether such liability is under contract, tort or otherwise.
              </p>
              <p className="mt-2">
                Emotional Fitness Training, including its officers, directors, and employees will not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website or our services.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:alan.muellegger@gmail.com" className="text-brand-blue hover:underline">alan.muellegger@gmail.com</a><br />
                Phone: <a href="tel:+18476248389" className="text-brand-blue hover:underline">(847) 624-8389</a>
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes to These Terms</h2>
              <p>
                We reserve the right to make changes to these terms and conditions at any time. The updated version will be indicated by an updated "Last updated" date.
              </p>
              <p className="mt-4">
                Last updated: April 8, 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
