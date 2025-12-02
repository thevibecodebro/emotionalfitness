
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">Privacy Policy</h1>
          
          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p>
                At Emotional Fitness&#8482; Training, we respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website 
                and tell you about your privacy rights and how the law protects you.
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. The Data We Collect</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person can be identified. 
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Identity Data includes first name, last name, username or similar identifier.</li>
                <li>Contact Data includes email address and telephone numbers.</li>
                <li>Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li>Usage Data includes information about how you use our website and services.</li>
              </ul>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To provide you with the services you have requested.</li>
                <li>To respond to your inquiries and contact you about changes to our services.</li>
                <li>To provide you with marketing information about services we offer that are similar to those you have already purchased or inquired about.</li>
                <li>To improve our website and services.</li>
              </ul>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:alan.muellegger@gmail.com" className="text-brand-blue hover:underline">alan.muellegger@gmail.com</a><br />
                Phone: <a href="tel:+18476248389" className="text-brand-blue hover:underline">(847) 624-8389</a>
              </p>
            </section>
            
            <Separator className="bg-white/10" />
            
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Changes to This Privacy Policy</h2>
              <p>
                We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the updated version will be effective as soon as it is accessible.
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

export default PrivacyPolicy;
