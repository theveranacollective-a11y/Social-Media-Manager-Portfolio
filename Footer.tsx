import {
  Instagram,
  Mail,
} from "lucide-react";
import { LogoIcon } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Social Media Strategy", href: "#services" },
        { label: "Content Creation", href: "#services" },
        { label: "Community Management", href: "#services" },
        { label: "Analytics & Reporting", href: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Instagram", href: "#" },
        {
          label: "Email",
          href: "mailto:theveranacollective@gmail.com",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:theveranacollective@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LogoIcon className="h-10 w-10" />
              <div className="text-2xl text-white">
                The Verana Collective
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Helping brands grow their online presence through
              creative content and strategic planning.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              © {currentYear} The Verana Collective. All rights
              reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}