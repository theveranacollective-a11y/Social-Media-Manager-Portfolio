import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, MessageCircle, Instagram } from "lucide-react";
import { Button } from "./ui/button";

export function InstagramGrid() {
  const posts = [
    {
      image: "https://images.unsplash.com/photo-1630398777649-cdfc7c5e8a24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHByb2R1Y3R8ZW58MXx8fHwxNzYxOTg3MDIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "3.8k",
      comments: "142",
      brand: "Aura & Co",
      caption: "Glow like never before ✨"
    },
    {
      image: "https://images.unsplash.com/photo-1586359204685-1d007c9cf2e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBmbGF0bGF5fGVufDF8fHx8MTc2MTg4NzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "5.2k",
      comments: "203",
      brand: "Clean Beauty",
      caption: "Curated with care 🌿"
    },
    {
      image: "https://images.unsplash.com/photo-1661346380522-fcbb31e5845a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbWFrZXVwJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYxOTg3MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "4.1k",
      comments: "167",
      brand: "Devine Essentials",
      caption: "Natural beauty essentials 💄"
    },
    {
      image: "https://images.unsplash.com/photo-1665763630810-e6251bdd392d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHNlcnVtJTIwYm90dGxlfGVufDF8fHx8MTc2MTkxMDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "3.5k",
      comments: "128",
      brand: "Nourish Beauty",
      caption: "Serum season 💧"
    },
    {
      image: "https://images.unsplash.com/photo-1535980904816-5741c64232bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwYmVhdXR5JTIwcHJvZHVjdHN8ZW58MXx8fHwxNzYxOTg3MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "6.7k",
      comments: "245",
      brand: "Aura & Co",
      caption: "Pretty in pink 💗"
    },
    {
      image: "https://images.unsplash.com/photo-1696607069078-3f65d5bc3b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGJlYXV0eSUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NjE5ODcwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "2.9k",
      comments: "87",
      brand: "Clean Beauty",
      caption: "Clean & conscious beauty ♻️"
    },
    {
      image: "https://images.unsplash.com/photo-1678582965361-ee91f6c9583a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWtldXAlMjBwYWxldHRlJTIwY2xvc2V1cHxlbnwxfHx8fDE3NjE5ODcwNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "4.3k",
      comments: "156",
      brand: "Devine Essentials",
      caption: "Palette perfection 🎨"
    },
    {
      image: "https://images.unsplash.com/photo-1760621393386-3906922b0b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwc2tpbmNhcmUlMjBqYXJ8ZW58MXx8fHwxNzYxOTg3MDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "3.2k",
      comments: "93",
      brand: "Nourish Beauty",
      caption: "Organic goodness 🌱"
    },
    {
      image: "https://images.unsplash.com/photo-1686831889344-f8cb3a384bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYxOTg3MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: "5.8k",
      comments: "218",
      brand: "Aura & Co",
      caption: "Luxury meets skincare 🌟"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Latest Work
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Beauty Content Showcase
          </h2>
          <p className="text-gray-600 text-xl">
            Stunning beauty product photography and content creation
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <ImageWithFallback
                src={post.image}
                alt={`${post.brand} - Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Brand tag - always visible */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-sm text-gray-900">{post.brand}</span>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="h-6 w-6 fill-white" />
                  <span className="text-lg">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-lg">{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            <Instagram className="h-5 w-5" />
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
