
import { useIsMobile } from "@/src/hooks/use-mobile";
import { ArrowRight, CheckCircle2, Star, CheckCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";

const FeatureBox = ({ title, description, icon, index }: { title: string, description: string, icon: React.ReactNode, index: number }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col bg-white p-5 rounded-2xl shadow-md border border-gray-100">
      <div className="rounded-xl bg-blue-50 w-12 h-12 flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const WhyPracticeSection = () => {
  const isMobile = useIsMobile();

  const features = [
    {
      title: "Real Interview Questions",
      description: "Practice with actual questions asked by leading tech companies.",
      icon: <CheckCircle2 className="h-6 w-6" />,
    },
    {
      title: "Expert Insights",
      description: "Get solutions written by FAANG product managers.",
      icon: <Star className="h-6 w-6" />,
    },
    {
      title: "Structured Approach",
      description: "Learn proven frameworks for each question type.",
      icon: <ArrowRight className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Practice With Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured approach helps you gain confidence and master the skills needed to crack PM interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-16 overflow-hidden rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row">
            <div className="bg-blue-600 text-white p-8 md:p-10 md:w-3/5">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Why our questions work</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-lg">Curated from recent interviews at Google, Meta, Amazon</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-lg">Updated monthly with new questions</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
                  <p className="text-lg">Industry-validated frameworks that are proven to work</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 md:w-2/5">
              <div className="flex items-center mb-2">
                <Star className="h-5 w-5 text-amber-400" />
                <span className="text-blue-600 font-semibold ml-2">Premium Access</span>
                <Badge className="ml-3 bg-amber-400 text-white hover:bg-amber-500">Popular</Badge>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Unlock all 500+ questions</h3>
              
              <p className="text-gray-600 mb-6">
                Get complete access to our question bank with detailed explanations
              </p>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                <ShoppingCart className="mr-2 h-5 w-5" /> 
                Unlock Premium
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPracticeSection;
