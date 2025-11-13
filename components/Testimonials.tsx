import { Card } from "./ui/card";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechFlow Inc",
      content: "Working with this social media manager has been transformative for our brand. Our engagement rates have tripled, and we're finally connecting with our target audience in meaningful ways.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "StyleHub",
      content: "The strategic approach and creative content delivery exceeded all our expectations. Our Instagram following grew by 50% in just two months, and sales from social channels increased by 75%.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "GreenLeaf Organics",
      content: "Professional, creative, and results-driven. The campaigns delivered were not only beautiful but also highly effective. Our brand awareness has never been stronger.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            What Clients Say
          </h2>
          <p className="text-gray-600 text-xl">
            Don't just take my word for it
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative">
              <Quote className="h-10 w-10 text-purple-200 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="text-gray-500">{testimonial.name}</div>
                <div className="text-sm text-gray-400">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
