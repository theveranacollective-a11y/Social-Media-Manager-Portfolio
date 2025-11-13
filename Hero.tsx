import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay@8.6.0";
import heroImage1 from "figma:asset/17e06c40d1a0c10e10226d5b9638938ea83a2a5d.png";
import heroImage2 from "figma:asset/0dbd54bc91fa9905d694a7be414fe37c1017bed0.png";
import heroImage3 from "figma:asset/50c298fd7064792635667726a16c33ede53575d9.png";

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const images = [
    {
      src: heroImage1,
      alt: "The Verana Edit - Fashion & Style"
    },
    {
      src: heroImage2,
      alt: "The Verana Edit - Sustainable Skincare Awareness"
    },
    {
      src: heroImage3,
      alt: "The Verana Edit - Lifestyle Content"
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 px-4 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
            ✨ Available for New Projects
          </div>
          
          <h1 className="text-5xl lg:text-7xl">
            The Verana Collective
          </h1>
          
          <p className="text-xl text-gray-600 max-w-xl">
            Social Media Management, Content Strategy & UGC Creation. Helping brands grow their online presence through creative content, strategic planning, 
            and data-driven campaigns that convert.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Get in Touch
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div>
              <div className="text-3xl text-purple-600">150+</div>
              <div className="text-gray-600">Campaigns</div>
            </div>
            <div>
              <div className="text-3xl text-purple-600">50M+</div>
              <div className="text-gray-600">Reach</div>
            </div>
            <div>
              <div className="text-3xl text-purple-600">5+</div>
              <div className="text-gray-600">Years Exp</div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Image Carousel */}
        <div className="relative">
          <div className="relative z-10">
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/5]"
                      />
                      {/* Text Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 
                          className="text-white text-5xl lg:text-6xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                          style={{ fontFamily: "'Dancing Script', cursive" }}
                        >
                          The Verana Edit
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index
                      ? "w-8 bg-purple-600"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-300 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </section>
  );
}