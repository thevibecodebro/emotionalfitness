import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { createResponsivePlaceholder, shouldLazyLoad } from "@/utils/imageUtils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const testimonials = [
  {
    id: 1,
    name: "Karen Thekraken",
    role: "Leadership Coach",
    content: "Alan's emotional fitness training completely transformed how I handle stress and make decisions under pressure. Working with him took me to deeper levels of self-awareness than I thought possible. His guidance helped me navigate challenging situations with clarity and purpose, and my team has noticed a significant improvement in my leadership. I'm truly grateful for this journey.",
    image: "/lovable-uploads/698b6461-b40d-447a-b58e-49ae155ad21a.png"
  },
  {
    id: 2,
    name: "Ben Hale",
    role: "Coach & Creator",
    content: "On our first call, Alan gave me one simple shift — I raised my price, and the next day I closed a client, paid in full. My posts improved, my energy changed, and I felt more confident showing up. I'm making more money and doing it from a grounded place.",
    image: "/lovable-uploads/0eb52a72-5ee0-4e5a-8251-e61bd4989dc7.png"
  },
  {
    id: 3,
    name: "Rachel Gubler",
    role: "Therapeutic Nutritional Counselor/Holistic Iridologist at Rachel Gubler Coaching",
    content: "Alan did not disappoint. Those two days were absolutely epic — playful, energizing, and deeply clarifying. I walked away with tangible tools, a renewed sense of purpose, and a connection to what's truly possible. Alan's work is emotionally potent, and his presence is pure service.",
    image: "/lovable-uploads/004a4543-00f5-4a36-be0a-5ddb22014d59.png"
  }
];

const RiseTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [placeholders, setPlaceholders] = useState<Record<number, string>>({});

  useEffect(() => {
    const preloadImages = async () => {
      const initialLoadedStates: Record<number, boolean> = {};
      testimonials.forEach(t => { initialLoadedStates[t.id] = false; });
      setImagesLoaded(initialLoadedStates);
      
      const placeholderPromises = testimonials.map(async (testimonial) => {
        try {
          const placeholder = await createResponsivePlaceholder(testimonial.image, 20, 20, 'webp');
          return { id: testimonial.id, placeholder };
        } catch (error) {
          console.error(`Failed to create placeholder for testimonial ${testimonial.id}:`, error);
          return { id: testimonial.id, placeholder: '' };
        }
      });
      
      const placeholderResults = await Promise.all(placeholderPromises);
      const placeholderMap: Record<number, string> = {};
      placeholderResults.forEach(result => {
        placeholderMap[result.id] = result.placeholder;
      });
      
      setPlaceholders(placeholderMap);
      
      testimonials.forEach(testimonial => {
        const img = new Image();
        img.onload = () => {
          setImagesLoaded(prev => ({ ...prev, [testimonial.id]: true }));
        };
        img.src = testimonial.image;
      });
    };
    
    preloadImages();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const currentTestimonial = testimonials[currentIndex];
  const isLoaded = imagesLoaded[currentTestimonial.id];
  const placeholder = placeholders[currentTestimonial.id];

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center gradient-text-rise">Success Stories</h2>
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
          Hear from clients who have transformed their performance through emotional fitness training.
        </p>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-muted border-none p-8 md:p-12" style={{
            borderImage: 'linear-gradient(to right, #EF4444, #F97316) 1',
            borderWidth: '2px',
            borderStyle: 'solid'
          }}>
            <div className="flex flex-col items-center text-center">
              <Quote className="w-12 h-12 text-red-500 opacity-30 mb-6" />
              
              <p className="text-white/90 text-lg mb-8 italic">
                "{currentTestimonial.content}"
              </p>
              
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-orange-500 relative">
                {placeholder && !isLoaded && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center blur-sm" 
                    style={{ backgroundImage: `url(${placeholder})` }}
                    aria-hidden="true"
                  />
                )}
                
                <AspectRatio ratio={1} className="bg-muted/20">
                  <img 
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImagesLoaded(prev => ({ ...prev, [currentTestimonial.id]: true }))}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </AspectRatio>
              </div>
              
              <h4 className="text-white font-semibold text-lg">{currentTestimonial.name}</h4>
              <p className="text-white/70">{currentTestimonial.role}</p>
            </div>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 text-white/80 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-muted hover:bg-muted/80 text-white/80 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiseTestimonials;

