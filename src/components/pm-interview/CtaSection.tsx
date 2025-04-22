
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/src/hooks/use-mobile";

const CtaSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section className="bg-blue-600 py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Static background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/4 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Land Your Dream PM Role?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8">
            Join thousands of successful product managers who have used our course to prepare for interviews at top tech companies.
          </p>

          <div className="bg-white rounded-lg p-4 md:p-6 mb-6 md:mb-8 shadow-lg">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4">
              <span className="text-4xl md:text-5xl font-bold text-blue-600">$49</span>
              <div className="text-center md:text-left">
                <span className="text-sm text-gray-500 line-through">$199</span>
                <span className="ml-2 text-green-600 font-semibold">75% OFF</span>
                <p className="text-gray-700">One-time payment, lifetime access</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center text-left">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-gray-700">500+ real interview questions</span>
              </div>
              <div className="flex items-center text-left">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-gray-700">1:1 mock interviews</span>
              </div>
              <div className="flex items-center text-left">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-gray-700">Mentor feedback sessions</span>
              </div>
              <div className="flex items-center text-left">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-gray-700">Community support</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="w-full">
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 text-base md:text-lg px-4 py-5 md:px-8 md:py-6">
                Explore Free Questions
              </Button>
            </div>
            <div
              className="w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Button 
                className="w-full bg-blue-800 hover:bg-blue-900 text-white text-base md:text-lg px-4 py-5 md:px-8 md:py-6 group relative overflow-hidden"
              >
                <span className={`flex items-center gap-2 transition-transform duration-300 ${isHovered ? 'transform -translate-x-2' : ''}`}>
                  Enroll Now
                  <ArrowRight className={`transition-transform duration-300 ${isHovered ? 'transform translate-x-2' : ''}`} />
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-700 to-blue-900 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 -z-10"></span>
              </Button>
            </div>
          </div>
          
          {/* Added floating social proof for mobile */}
          {isMobile && (
            <div className="mt-6 bg-blue-700/50 backdrop-blur-sm rounded-lg p-3 border border-blue-500/20">
              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-xs font-bold text-white border border-white/30">
                      {['J','K','M'][i-1]}
                    </div>
                  ))}
                </div>
                <span className="text-white/90 text-sm">+38 enrolled in last hour</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
