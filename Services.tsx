import { Card } from "./ui/card";
import { Megaphone, TrendingUp, Users, BarChart3, Palette, Calendar } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Social Media Strategy",
      description: "Comprehensive social media strategies tailored to your brand's goals and target audience."
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Content Creation",
      description: "Eye-catching graphics, videos, and copy that stop the scroll and drive engagement."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Content Planning",
      description: "Strategic content calendars that maintain consistency and maximize reach."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Management",
      description: "Building and nurturing engaged communities through authentic interactions."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Paid Advertising",
      description: "ROI-focused ad campaigns across Facebook, Instagram, LinkedIn, and TikTok."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "In-depth performance analysis with actionable insights and recommendations."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Services
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            What I Can Do For You
          </h2>
          <p className="text-gray-600 text-xl">
            Full-service social media management to help your brand thrive online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <div className="text-purple-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
