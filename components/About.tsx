import { CheckCircle2, Play, Pause, Heart, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Badge } from "./ui/badge";
import aboutImage1 from "figma:asset/e6cb62a89033327b1fe2c0e3fe51a3dc968f1592.png";
import aboutImage2 from "figma:asset/dd93fbc58b9ac9dfa556717f9d1cb8d193b9ffb1.png";
import aboutImage3 from "figma:asset/27b192029dab25823c36a4cb6b0706434893cb00.png";
import aboutImage4 from "figma:asset/54351d00c2b3cf10928865718d6ee3bfdbbf4b62.png";

export function About() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const images = [
    {
      src: aboutImage1,
      alt: "Skincare products - Aura & Co collection grid"
    },
    {
      src: aboutImage2,
      alt: "Aura & Co luxury skincare collection with grapefruit"
    },
    {
      src: aboutImage3,
      alt: "3-step skincare routine for healthy skin"
    },
    {
      src: aboutImage4,
      alt: "Instagram social media content mockups"
    }
  ];

  const skills = [
    "Content Strategy & Planning",
    "Social Media Management",
    "Community Engagement",
    "Influencer Marketing",
    "Paid Social Advertising",
    "Analytics & Reporting",
    "Brand Development",
    "Video & Graphic Design"
  ];

  const ugcVideos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1699454207790-3a95751ace90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNlbGZpZSUyMHBob25lfGVufDF8fHx8MTc2Mjg2NzY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/775182894/rendition/720p/file.mp4?loc=external&signature=4a5a8db8b2e8e8af6c77a9d1b15a0e0b0e8f0f0e8b0f0e8f0e8f0e8f0e8f0e8f",
      creator: "@veranacollective",
      caption: "Behind the scenes of content creation ✨",
      views: "45K",
      likes: "4.2K",
      comments: "182",
      brand: "Personal",
      hasTextOverlay: true,
      overlayText: "When the content\nhits JUST RIGHT 🎯"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1683579808784-6faf6af67a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHJvdXRpbmV8ZW58MXx8fHwxNzYyODY3Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/829990332/rendition/720p/file.mp4?loc=external&signature=3e1e3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f3f",
      creator: "@veranacollective",
      caption: "My creative process explained 💡",
      views: "62K",
      likes: "5.8K",
      comments: "234",
      brand: "Personal",
      hasTextOverlay: false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1581711871002-35e0c29d5497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwbWFrZXVwJTIwbWlycm9yfGVufDF8fHx8MTc2Mjg2NzY4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/821606735/rendition/720p/file.mp4?loc=external&signature=2f2e2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f",
      creator: "@veranacollective",
      caption: "Day in the life of a social media manager 📱",
      views: "78K",
      likes: "7.1K",
      comments: "298",
      brand: "Personal",
      hasTextOverlay: true,
      overlayText: "POV: Client asks\\nfor a quick edit 😅"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1619894402984-e973620bccc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjI4Njc2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/855962244/rendition/720p/file.mp4?loc=external&signature=4e4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f4f",
      creator: "@veranacollective",
      caption: "Strategy tips for brands 🚀",
      views: "92K",
      likes: "8.9K",
      comments: "412",
      brand: "Personal",
      hasTextOverlay: true,
      overlayText: "This ONE trick\\nchanged everything! 💜"
    }
  ];

  const togglePlay = async (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingIndex === index) {
      // Pause the current video
      video.pause();
      setPlayingIndex(null);
    } else {
      // Pause all other videos first
      videoRefs.current.forEach((v, i) => {
        if (v && i !== index) {
          v.pause();
          v.currentTime = 0;
        }
      });
      
      // Play the selected video
      try {
        await video.play();
        setPlayingIndex(index);
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  useEffect(() => {
    // Handle video ended event
    videoRefs.current.forEach((video, index) => {
      if (video) {
        const handleEnded = () => {
          setPlayingIndex(null);
          video.currentTime = 0;
        };
        video.addEventListener('ended', handleEnded);
        return () => video.removeEventListener('ended', handleEnded);
      }
    });
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Rotating Carousel */}
          <div className="relative h-[500px] flex items-center justify-center">
            <div className="relative w-full h-full" style={{ perspective: "1200px" }}>
              {images.map((image, index) => {
                const angle = (360 / images.length) * index;
                const radius = 280;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                    animate={{
                      rotateY: [angle, angle + 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <motion.div
                      className="absolute"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${radius}px)`,
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-2xl shadow-2xl w-80 h-auto object-cover"
                        style={{
                          backfaceVisibility: "hidden",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
              About Me
            </div>
            
            <h2 className="text-4xl lg:text-5xl">
              Crafting Stories That Connect & Convert
            </h2>
            
            <p className="text-gray-600">
              With over 5 years of experience in social media marketing, I've helped brands of all sizes 
              build meaningful connections with their audiences. My approach combines creative storytelling 
              with data-driven strategies to deliver measurable results.
            </p>
            
            <p className="text-gray-600">
              From Fortune 500 companies to growing startups, I've managed campaigns across all major 
              platforms, consistently exceeding engagement and conversion goals. My passion lies in 
              understanding what makes people click, share, and ultimately become loyal customers.
            </p>
            
            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Personal UGC Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full mb-4">
              My Content
            </div>
            <h3 className="text-3xl lg:text-4xl mb-4">
              Authentic & Engaging
            </h3>
            <p className="text-gray-600">
              I practice what I preach - here's my own UGC-style content showcasing my creative process
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {ugcVideos.map((video, index) => (
              <div
                key={index}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-black cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => togglePlay(index)}
              >
                {/* Actual Video Element */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.videoSrc}
                  poster={video.thumbnail}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ${
                    playingIndex === index ? 'scale-110 brightness-110' : 'group-hover:scale-105'
                  }`}
                  playsInline
                  preload="metadata"
                  loop
                />

                {/* Overlay Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                  playingIndex === index ? 'opacity-30' : 'opacity-100'
                }`} />

                {/* Animated "playing" effect */}
                {playingIndex === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Scanning line effect */}
                    <div 
                      className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"
                      style={{
                        animation: 'scan 3s linear infinite',
                        top: '0%'
                      }}
                    />
                    <style>{`
                      @keyframes scan {
                        0% { top: 0%; }
                        100% { top: 100%; }
                      }
                    `}</style>
                  </div>
                )}

                {/* Text Overlay Captions (TikTok style) */}
                {video.hasTextOverlay && (
                  <div className={`absolute top-1/3 left-0 right-0 px-4 text-center transition-opacity duration-300 ${
                    playingIndex === index ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <div className="inline-block">
                      {video.overlayText?.split('\\n').map((line, i) => (
                        <div
                          key={i}
                          className="text-white text-2xl px-2 py-1 mb-1"
                          style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                            letterSpacing: '0.02em'
                          }}
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Play/Pause Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  playingIndex === index ? 'opacity-0 hover:opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                    {playingIndex === index ? (
                      <Pause className="h-8 w-8 text-pink-600" />
                    ) : (
                      <Play className="h-8 w-8 text-pink-600 fill-pink-600" />
                    )}
                  </div>
                </div>

                {/* Video Info - Bottom */}
                <div className={`absolute bottom-0 left-0 right-0 p-3 text-white transition-all duration-500 ${
                  playingIndex === index ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}>
                  <div className="mb-2">
                    <Badge className="bg-pink-600 hover:bg-pink-700 text-white text-xs mb-2">
                      {video.brand}
                    </Badge>
                  </div>
                  
                  <p className="text-sm mb-1 line-clamp-2">
                    {video.caption}
                  </p>
                  
                  <p className="text-xs text-gray-300 mb-3">
                    {video.creator}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{video.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-3 w-3" />
                      <span>{video.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play className="h-3 w-3" />
                      <span>{video.views}</span>
                    </div>
                  </div>
                </div>

                {/* View Count Badge - Top */}
                <div className={`absolute top-3 right-3 transition-all duration-300 ${
                  playingIndex === index ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
                }`}>
                  <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs flex items-center gap-1">
                    <Play className="h-3 w-3 fill-white" />
                    {video.views}
                  </div>
                </div>

                {/* Playing Indicator */}
                {playingIndex === index && (
                  <div className="absolute top-3 left-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="bg-red-600 px-2 py-1 rounded text-white text-xs flex items-center gap-1 shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      PLAYING
                    </div>
                  </div>
                )}

                {/* Progress bar simulation when playing */}
                {playingIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                    <div 
                      className="h-full bg-pink-600"
                      style={{
                        animation: 'progress 10s linear infinite',
                        width: '0%'
                      }}
                    />
                    <style>{`
                      @keyframes progress {
                        0% { width: 0%; }
                        100% { width: 100%; }
                      }
                    `}</style>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}