
import { Card } from "@/components/ui/card";
import { Sparkles, Lightbulb, Flame, Compass } from "lucide-react";

const services = [
  {
    title: "Peak State",
    description: "Achieve optimal emotional and mental states that unlock your full potential. Emotional Fitness Training helps high-performing entrepreneurs and executives access peak flow in demanding situations — without burnout or collapse.",
    icon: <Sparkles className="w-12 h-12 text-brand-blue stroke-[1.5px]" />
  },
  {
    title: "Optimization",
    description: "Fine-tune your emotional responses and rewire mental frameworks to enhance decision-making under pressure. This training transforms reactive patterns into strategic clarity for leaders who need to perform at their best.",
    icon: <Lightbulb className="w-12 h-12 text-brand-purple stroke-[1.5px]" />
  },
  {
    title: "Passion",
    description: "Reconnect with your deepest entrepreneurial motivations and learn to channel raw emotion into market-moving momentum. This is how successful founders and executives fuel consistent action, not through hype, but through aligned energy.",
    icon: <Flame className="w-12 h-12 text-brand-pink stroke-[1.5px]" />
  },
  {
    title: "Drive",
    description: "Develop long-term emotional stamina and resilience essential for high-stakes leadership roles. You'll build the internal grit required to pursue ambitious business visions with unwavering focus — no matter what market challenges arise.",
    icon: <Compass className="w-12 h-12 text-brand-blue stroke-[1.5px]" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text">Our Services</h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
          Comprehensive emotional fitness training designed specifically for high-performing entrepreneurs, 
          executives, and leaders who need to maintain peak performance in high-pressure environments.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-muted border-none p-6 hover:bg-muted/80 transition-colors gradient-border">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 transform hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
