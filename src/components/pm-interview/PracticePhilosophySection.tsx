import React from "react";
import { useIsMobile } from "@/src/hooks/use-mobile";
import { Target, Award, Zap, LightbulbIcon, Brain, Flame, Sparkles, Clock, BarChart4, LineChart } from "lucide-react";
import Image from 'next/image';

const PracticePhilosophySection = () => {
  const isMobile = useIsMobile();
  
  const philosophyPoints = [
    {
      title: "Deliberate Practice",
      description: "Focus on specific skills with targeted questions designed to improve weak areas",
      icon: <Target className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Consistency Wins",
      description: "Regular practice builds interview muscle memory and confidence",
      icon: <Clock className="h-6 w-6" />,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Feedback Loops",
      description: "Learn from expert solutions and improve with each iteration",
      icon: <LineChart className="h-6 w-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Mental Models",
      description: "Develop frameworks that can be applied across various question types",
      icon: <Brain className="h-6 w-6" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-40 -left-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-60 h-60 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full mb-4">
            <Flame className="h-4 w-4 text-orange-500" />
            <span className="text-sm font-medium uppercase tracking-wider">Practice Philosophy</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            PMs Should Practice Like <span className="text-blue-600">Great Athletes</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Excellence in product management interviews comes from structured, consistent practice—just like elite sports training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100">
              <Image 
                src="/your-image-path.jpg"  // Update with your actual image path
                alt="Practice Philosophy"
                width={500}  // Set appropriate width
                height={300} // Set appropriate height
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-lg text-white shadow-md">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Elite Performance</h3>
                <p className="text-gray-600">
                  Product Managers at top companies practice regularly and systematically, treating interview prep like training for an Olympic event.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-lg text-white shadow-md">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Beyond Natural Talent</h3>
                <p className="text-gray-600">
                  Success in PM interviews is not about natural brilliance—it is about structured practice strategies and consistent effort.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-3 rounded-lg text-white shadow-md">
                <LightbulbIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mental Frameworks</h3>
                <p className="text-gray-600">
                  Our methodology builds reusable mental models—like how athletes develop muscle memory through repetitive drills.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {philosophyPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-blue-200 transition-colors hover:shadow-lg"
            >
              <div className={`h-12 w-12 rounded-full bg-gradient-to-r ${point.color} flex items-center justify-center mb-4 text-white`}>
                {point.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">{point.title}</h3>
              <p className="text-gray-600 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer">
            <Sparkles className="h-5 w-5" />
            <span>Start Your Practice Journey Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticePhilosophySection;
