import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "theveranacollective@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+27 79 311 7402"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "South Africa"
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 text-xl">
            Ready to elevate your social media presence? Drop me a message!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 text-gray-700">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">Company (Optional)</label>
                <Input placeholder="Your Company" />
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-700">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                />
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-purple-600 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                    <div className="text-gray-900">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl text-white">
              <h3 className="text-2xl mb-3">
                Available for Freelance
              </h3>
              <p className="mb-6 text-purple-100">
                I'm currently accepting new clients and exciting projects. Let's create something amazing together!
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="p-6 bg-purple-50 border-purple-200">
              <h4 className="text-lg mb-2">Response Time</h4>
              <p className="text-gray-600">
                I typically respond to inquiries within 24 hours during business days. 
                Looking forward to hearing from you!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
