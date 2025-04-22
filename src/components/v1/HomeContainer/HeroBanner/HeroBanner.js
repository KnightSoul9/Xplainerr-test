import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { Trophy, Sparkles, Users, ChevronRight } from "lucide-react";

const allDomainsText = ["tech", "marketing", "design", "product", "data"];

const HeroBanner = () => {
  const [domainText, setDomainText] = useState("tech");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // toggle domain text every 1 sec in circular manner
  useEffect(() => {
    const interval = setInterval(() => {
      setDomainText(allDomainsText[index]);
      setIndex((index + 1) % allDomainsText.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-60"></div>
        <div className="absolute top-1/2 -left-32 md:-left-48 w-64 md:w-96 h-64 md:h-96 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 opacity-60"></div>
        <div className="absolute bottom-10 right-1/4 w-32 md:w-48 h-32 md:h-48 rounded-full bg-gradient-to-tl from-yellow-100 to-orange-100 opacity-40"></div>
        <div className="absolute top-32 left-1/4 w-24 md:w-32 h-24 md:h-32 rounded-full bg-gradient-to-tr from-green-100 to-teal-100 opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-6">
          <div className="flex-1 space-y-6 md:space-y-7 order-1">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Accelerate your <span className="text-gradient">{domainText}</span> career
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-700">
                We provide niche up-skilling courses to help you accelerate and succeed in your career
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
            <div className="pt-2 w-full">
              <div className="flex flex-col md:flex-row gap-4 px-4 md:px-0">
                <div className="w-full md:flex-1">
                  <Link href='/courses' className="block w-full">
                    <button className="w-full text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group">
                      Get Started Now (FREE)
                      <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
                <div className="w-full md:flex-1">
                  <Link href='/courses' className="block w-full">
                    <button className="w-full text-base sm:text-lg px-4 sm:px-6 py-3 sm:py-4 border-2 border-indigo-300 text-indigo-700 hover:bg-indigo-50 rounded-xl transition-all duration-200 font-semibold">
                      View Sample Courses
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative max-w-full md:max-w-lg order-2 mt-4 md:mt-0">
            <div className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 blur-xl"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-indigo-100 bg-white p-6 md:p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
                <p className="text-gray-600">Join thousands of successful professionals</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-500">
                    <option value="">Select Experience Level</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Start Learning Now
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-3 justify-center">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">A</div>
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold text-sm">B</div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-sm">C</div>
                  </div>
                  <span className="text-sm text-gray-500">Join 800+ professionals</span>
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

export default HeroBanner;
