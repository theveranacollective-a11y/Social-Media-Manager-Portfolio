import { Play, Heart, MessageCircle, Pause } from "lucide-react";
import { Badge } from "./ui/badge";
import ugcImage1 from "figma:asset/846f8293e7dd72a45a191645b0c3fea2ac0a07a7.png";
import { useState, useRef, useEffect } from "react";

export function UGCVideos() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const videos = [
    {
      thumbnail: ugcImage1,
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/868208676/rendition/720p/file.mp4?loc=external&signature=c0cb7c84b8bc8cc55a6ac6e6d873499b5a36e6dd2ce2ea25f8a9dd1b0c9e6ebe",
      creator: "@stylewithjess",
      caption: "Getting ready with my fave skincare ✨",
      views: "125K",
      likes: "12.5K",
      comments: "432",
      brand: "Nourish Beauty",
      hasTextOverlay: true,
      overlayText: "This serum is\nLIFE CHANGING! 😍"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1670321222474-60e0d8c2a2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNlbGZpZSUyMHBob25lfGVufDF8fHx8MTc2MjA5NTg2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/826487137/rendition/720p/file.mp4?loc=external&signature=2e038e3fb63fc2b7ed9ef04b546e0ee373fe3eb20ed814177d0d13dd67c2a7e3",
      creator: "@beautybyemma",
      caption: "My honest review of this serum 💧",
      views: "89K",
      likes: "8.2K",
      comments: "287",
      brand: "Nourish Beauty",
      hasTextOverlay: false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1683579808784-6faf6af67a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBza2luY2FyZSUyMHJvdXRpbmV8ZW58MXx8fHwxNzYyMDk1ODcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/792628076/rendition/720p/file.mp4?loc=external&signature=9cf88587ca13b3c1c5dc77da9fc8628cb5c16d1cc6c04b375dfb8e5d909fb2c2",
      creator: "@glowwithmia",
      caption: "Night routine essentials 🌙",
      views: "156K",
      likes: "15.1K",
      comments: "521",
      brand: "Nourish Beauty",
      hasTextOverlay: true,
      overlayText: "POV: you finally\nfound THE ONE 💕"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1627808575103-38733fa8e747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBjb250ZW50JTIwY3JlYXRvcnxlbnwxfHx8fDE3NjIwOTU4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/851589142/rendition/720p/file.mp4?loc=external&signature=e67353f3865e3f9a03d516aca68e3c21b8091f031e146ad00ae4c64d31f6f8e6",
      creator: "@skincarebysophie",
      caption: "Unboxing the new collection 📦",
      views: "94K",
      likes: "9.7K",
      comments: "356",
      brand: "Nourish Beauty",
      hasTextOverlay: false
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1619894402984-e973620bccc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwcHJvZHVjdHxlbnwxfHx8fDE3NjIwOTU4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/860752084/rendition/720p/file.mp4?loc=external&signature=70c367e348a533326d8ab02d1d65883f7ae23731c3cd1e1a2a85bb8b8e862a09",
      creator: "@theglowup",
      caption: "This changed my skin! 😍",
      views: "203K",
      likes: "21.3K",
      comments: "687",
      brand: "Nourish Beauty",
      hasTextOverlay: true,
      overlayText: "Before & after\nWAIT FOR IT! 👀"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1581711871002-35e0c29d5497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaXJsJTIwbWFrZXVwJTIwbWlycm9yfGVufDF8fHx8MTc2MjA5NTg3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      videoSrc: "https://player.vimeo.com/progressive_redirect/playback/827918377/rendition/720p/file.mp4?loc=external&signature=0a2f0a53ad8bc5b4342c13ce9b0f7e7ba5e9b8f69e2e8da60ad0ea4c2c0d4be7",
      creator: "@makeupbylily",
      caption: "POV: Prepping for date night ✨",
      views: "112K",
      likes: "11.8K",
      comments: "423",
      brand: "Nourish Beauty",
      hasTextOverlay: false
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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            UGC Content
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Authentic Creator Content
          </h2>
          <p className="text-gray-600 text-xl">
            Real people, real results - UGC campaigns that drive engagement and trust
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-black cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => togglePlay(index)}
            >
              {/* Video Element */}
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
                    {video.overlayText?.split('\n').map((line, i) => (
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
                    <Pause className="h-8 w-8 text-purple-600" />
                  ) : (
                    <Play className="h-8 w-8 text-purple-600 fill-purple-600" />
                  )}
                </div>
              </div>

              {/* Video Info - Bottom */}
              <div className={`absolute bottom-0 left-0 right-0 p-3 text-white transition-all duration-500 ${
                playingIndex === index ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
              }`}>
                <div className="mb-2">
                  <Badge className="bg-purple-600 hover:bg-purple-700 text-white text-xs mb-2">
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
                    className="h-full bg-purple-600"
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

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to create authentic UGC campaigns for your brand?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Let's Create Together
            <Heart className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}