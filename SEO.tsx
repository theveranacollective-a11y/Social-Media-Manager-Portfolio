import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "The Verana Collective | Social Media Management Services",
  description = "Professional social media management services and UGC content creation for beauty and lifestyle brands. Based in South Africa, we create engaging content, build communities, and drive results for your business.",
  image = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=630&fit=crop",
  url = "https://veranacollective.com"
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isOG = false) => {
      const attribute = isOG ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('keywords', 'social media management, content creation, digital marketing, South Africa, Instagram management, beauty brands, lifestyle brands');
    setMetaTag('author', 'The Verana Collective');
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Open Graph tags (Facebook, LinkedIn)
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:site_name', 'The Verana Collective', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);

    // Additional SEO tags
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'English');
    setMetaTag('revisit-after', '7 days');

    // Favicon links
    const setFavicon = (rel: string, href: string, sizes?: string, type?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      
      link.href = href;
      if (sizes) link.sizes = sizes;
      if (type) link.type = type;
    };

    // Set favicons (using a data URL for the SVG icon)
    const faviconSVG = `data:image/svg+xml,%3Csvg viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%239333ea'/%3E%3Cstop offset='100%25' stop-color='%23ec4899'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='25' cy='25' r='22' fill='url(%23g)' opacity='0.1'/%3E%3Cpath d='M15 15 L25 35 L35 15' stroke='url(%23g)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3Ccircle cx='25' cy='38' r='1.5' fill='%239333ea'/%3E%3C/svg%3E`;
    
    setFavicon('icon', faviconSVG, undefined, 'image/svg+xml');
    setFavicon('apple-touch-icon', faviconSVG);

  }, [title, description, image, url]);

  return null;
}