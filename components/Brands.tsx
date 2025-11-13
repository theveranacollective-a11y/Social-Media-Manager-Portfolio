export function Brands() {
  const brands = [
    {
      name: "Luxury Fashion Co.",
      logo: "LFC",
      tagline: "Haute Couture",
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-700"
    },
    {
      name: "Urban Coffee House",
      logo: "UCH",
      tagline: "Artisan Roasters",
      color: "from-amber-600 to-orange-500",
      textColor: "text-amber-700"
    },
    {
      name: "Glow Beauty",
      logo: "GB",
      tagline: "Natural Radiance",
      color: "from-pink-500 to-rose-500",
      textColor: "text-pink-600"
    },
    {
      name: "Peak Fitness",
      logo: "PF",
      tagline: "Train Harder",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-blue-600"
    },
    {
      name: "Gourmet Bistro",
      logo: "GB",
      tagline: "Fine Dining",
      color: "from-red-500 to-orange-500",
      textColor: "text-red-600"
    },
    {
      name: "Wanderlust Travel",
      logo: "WT",
      tagline: "Explore More",
      color: "from-teal-500 to-emerald-500",
      textColor: "text-teal-600"
    },
    {
      name: "Tech Innovate",
      logo: "TI",
      tagline: "Future Forward",
      color: "from-indigo-500 to-purple-500",
      textColor: "text-indigo-600"
    },
    {
      name: "Elegance Jewelry",
      logo: "EJ",
      tagline: "Timeless Beauty",
      color: "from-yellow-500 to-amber-500",
      textColor: "text-yellow-700"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Trusted By
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Brands I've Worked With
          </h2>
          <p className="text-gray-600 text-xl">
            Collaborating with leading brands across diverse industries
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all group"
            >
              {/* Logo Circle with Gradient */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${brand.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                <div className="text-white text-2xl tracking-tighter" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  {brand.logo}
                </div>
              </div>
              
              {/* Brand Name */}
              <div className="text-center">
                <div className={`${brand.textColor} transition-colors mb-1`}>
                  {brand.name}
                </div>
                <div className="text-xs text-gray-500">
                  {brand.tagline}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500">
            And many more amazing brands...
          </p>
        </div>
      </div>
    </section>
  );
}
