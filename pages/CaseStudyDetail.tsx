import { useParams, Link, useNavigate } from "react-router-dom";
import { getCaseStudyById } from "../data/caseStudies";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { 
  ArrowLeft, 
  TrendingUp, 
  Clock, 
  Quote,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { SEO } from "../components/SEO";

export function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Case Study Not Found</h1>
          <p className="text-gray-600 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")} className="bg-purple-600 hover:bg-purple-700">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${caseStudy.title} - ${caseStudy.client} | The Verana Collective`}
        description={caseStudy.description}
        image={caseStudy.image}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/#portfolio" 
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag, index) => (
                <Badge key={index} className="bg-purple-100 text-purple-700 border-purple-200">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl lg:text-6xl mb-4">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {caseStudy.client}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-5 w-5 text-purple-600" />
                <span>{caseStudy.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span>2024</span>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {caseStudy.metrics.map((metric, index) => (
                <Card key={index} className="p-4 bg-white border-purple-100">
                  <div className="flex items-start gap-2 mb-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mt-1" />
                    <div className="text-2xl text-green-600">
                      {metric.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-4 -mt-8">
          <div className="max-w-5xl mx-auto">
            <ImageWithFallback
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.description}
              </p>
            </div>

            {/* The Challenge */}
            <div className="mb-16">
              <h2 className="text-3xl mb-6">The Challenge</h2>
              <Card className="p-8 bg-gray-50 border-gray-200">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </Card>
            </div>

            {/* Our Solution */}
            <div className="mb-16">
              <h2 className="text-3xl mb-6">Our Solution</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {caseStudy.solution}
              </p>
              
              {/* Additional Images */}
              {caseStudy.images && caseStudy.images.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  {caseStudy.images.map((image, index) => (
                    <ImageWithFallback
                      key={index}
                      src={image}
                      alt={`${caseStudy.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Results */}
            <div className="mb-16">
              <h2 className="text-3xl mb-6">The Results</h2>
              <div className="grid gap-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-100">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <div className="mb-16">
                <Card className="p-8 bg-purple-50 border-purple-100">
                  <Quote className="h-10 w-10 text-purple-600 mb-4" />
                  <blockquote className="text-xl text-gray-800 mb-6 italic leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-purple-200 pt-4">
                    <div className="text-gray-900">
                      {caseStudy.testimonial.author}
                    </div>
                    <div className="text-gray-600">
                      {caseStudy.testimonial.role}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* CTA */}
            <div className="text-center pt-8 border-t border-gray-200">
              <h3 className="text-2xl mb-4">
                Ready to achieve similar results?
              </h3>
              <p className="text-gray-600 mb-8">
                Let's discuss how we can help grow your brand's social media presence.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => navigate("/#contact")}
                  className="bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  Get in Touch
                </Button>
                <Button 
                  onClick={() => navigate("/#portfolio")}
                  variant="outline"
                  size="lg"
                >
                  View More Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
