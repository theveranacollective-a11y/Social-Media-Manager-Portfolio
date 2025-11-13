import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";

export function Portfolio() {

  return (
    <section id="portfolio" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4">
            Featured Work & Case Studies
          </h2>
          <p className="text-gray-600 text-xl">
            Real results from real campaigns
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((project, index) => (
            <Link 
              key={index} 
              to={`/case-study/${project.id}`}
              className="block"
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full group-hover:bg-purple-600 transition-colors">
                      <ArrowRight className="h-5 w-5 text-purple-600 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-purple-100 text-purple-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl mb-2 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-500 mb-4">
                    {project.client}
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-6 pt-4 border-t border-gray-200">
                    {project.metrics.slice(0, 2).map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-green-600" />
                        <div>
                          <div className="text-green-600">{metric.value}</div>
                          <div className="text-sm text-gray-500">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 text-purple-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read Full Case Study
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
