import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { CheckCircle, Star, Trophy, ChevronRight, Sparkles, Users, Award, Laptop, ExternalLink, BookOpen } from "lucide-react";
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const statsItems = [
    { number: "93%", text: "Success rate", icon: <Trophy className="h-5 w-5 text-yellow-500" /> },
    { number: "50+", text: "Practice questions", icon: <Sparkles className="h-5 w-5 text-blue-500" /> },
    { number: "800+", text: "Candidates placed", icon: <Users className="h-5 w-5 text-green-500" /> },
  ];

  return (
    <div className="relative bg-gradient-to-b from-indigo-50 via-blue-50 to-white overflow-hidden">
      {/* Background decorative elements with improved design - scaled for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-60"></div>
        <div className="absolute top-1/2 -left-32 md:-left-48 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 opacity-60"></div>
        <div className="absolute bottom-10 right-1/4 w-32 md:w-48 h-32 md:h-48 rounded-full bg-gradient-to-tl from-yellow-100 to-orange-100 opacity-40"></div>
        <div className="absolute top-32 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-gradient-to-tr from-green-100 to-teal-100 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-6">
          {/* Content section - First on mobile */}
          <div className="flex-1 space-y-6 md:space-y-7 order-1">
            <div>
              <div className="flex flex-wrap items-center space-x-2 gap-y-2 justify-center lg:justify-start">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100 px-3 py-1.5 text-sm rounded-lg flex items-center">
                  <Star className="mr-1 h-4 w-4 fill-orange-500 text-orange-500" />
                  <span className="font-semibold">PRODUCT HUNT</span>
                  <span className="ml-2 font-medium">#1 PM Resource</span>
                </Badge>
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 px-3 py-1.5 text-sm rounded-lg flex items-center">
                  <Trophy className="mr-1 h-4 w-4 fill-indigo-500 text-indigo-500" />
                  <span className="font-medium">Top Rated 2023</span>
                </Badge>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crack PM Interviews with <span className="text-gradient">93% Success</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700">
                Your one-stop destination to master product design, metrics, strategy, and execution questions that top tech companies ask
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 p-4 shadow-lg">
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {statsItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex flex-col items-center justify-center py-3 bg-gradient-to-br from-white to-blue-50 rounded-lg"
                  >
                    <div className="mb-1">{item.icon}</div>
                    <span className="text-xl md:text-3xl font-bold text-indigo-600">{item.number}</span>
                    <span className="text-xs md:text-sm text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3 md:space-y-4 bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border border-indigo-100">
              <div className="flex items-start md:items-center gap-2 md:gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 md:mt-0" />
                <p className="text-base md:text-lg">Curated by senior PMs from FAANG companies</p>
              </div>
              
              <div className="flex items-start md:items-center gap-2 md:gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 md:mt-0" />
                <p className="text-base md:text-lg">Practice all question types with expert guidance</p>
              </div>
              
              <div className="flex items-start md:items-center gap-2 md:gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 md:mt-0" />
                <p className="text-base md:text-lg">Proven frameworks that actually work in interviews</p>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <Button className="w-full text-lg px-6 py-6 md:px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg shadow-indigo-500/30 rounded-xl">
                    Get Started Now (FREE)
                    <ChevronRight className="ml-1" />
                  </Button>
                </div>
                <div className="flex-grow">
                  <Button variant="outline" className="w-full text-lg px-6 py-6 md:px-8 border-indigo-300 text-indigo-700 hover:bg-indigo-50 rounded-xl">
                    View Sample Questions
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero image section - Second on mobile but can be completely visible without scrolling */}
          <div className="flex-1 relative max-w-full md:max-w-lg order-2 mt-4 md:mt-0">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 blur-xl"></div>
            
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-indigo-100">
              {/* PM Course mockup with sample questions */}
              <div className="relative bg-white rounded-xl overflow-hidden">
                {/* Course header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 md:p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="font-medium text-sm md:text-base">Product Design</span>
                  </div>
                  <Badge className="bg-blue-700/50 text-white hover:bg-blue-700/70 text-xs">10 lessons</Badge>
                </div>
                
                {/* Course content */}
                <div className="overflow-hidden">
                  <Image 
                    src="/path/to/image.jpg" 
                    alt="Hero image"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-blue-900/60 to-transparent flex flex-col justify-end p-4 md:p-6">
                    {/* Course completion */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-full h-1.5 mb-3 md:mb-4 overflow-hidden">
                      <div className="bg-white h-full w-[35%] rounded-full"></div>
                    </div>
                    
                    {/* Course info */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Master PM Interviews</h3>
                    <p className="text-white/90 text-sm md:text-base mb-2 md:mb-3">Learn frameworks directly applicable to FAANG interviews</p>
                    
                    {/* Social proof */}
                    <div className="flex items-center gap-2 mb-3 md:mb-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                            {['A','J','M','K'][i-1]}
                          </div>
                        ))}
                      </div>
                      <span className="text-white/90 text-xs md:text-sm">+240 enrolled this week</span>
                    </div>
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-1.5 md:p-2 flex items-center gap-1">
                      <Star className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-bold text-gray-800">4.9/5 (320 reviews)</span>
                    </div>
                    
                    {/* Course stats */}
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" className="bg-white/20 hover:bg-white/30 text-white border-white/40 text-xs md:text-sm">
                        Start Learning
                        <ExternalLink className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                      </Button>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 md:h-5 md:w-5 text-yellow-300" />
                        <span className="text-white font-medium text-xs md:text-sm">Top Rated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .text-gradient {
          background: linear-gradient(90deg, #4f46e5, #2563eb, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
