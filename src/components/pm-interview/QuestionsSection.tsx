import React, { useState } from 'react';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { useIsMobile } from '@/src/hooks/use-mobile';
import {
  ChevronDown,
  ChevronUp,
  Bookmark,
  Users,
  Eye,
  Book,
  GraduationCap,
  CheckCircle,
  Zap,
  Star,
  Code,
  PenTool,
  BarChart,
  TrendingUp,
  BrainCircuit,
  Users2,
  Target,
  Sparkles,
  ArrowUpRight,
  Rocket,
  LightbulbIcon,
  Trophy
} from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/src/components/ui/carousel';

interface QuestionCardProps {
  question: string;
  category: string;
  isBookmarked?: boolean;
  companyLogo: string;
  companyName: string;
  timestamp: string | Date;
  isNew?: boolean;
}

const QuestionCard = ({ 
  question, 
  category, 
  isBookmarked = false, 
  companyLogo, 
  companyName, 
  timestamp, 
  isNew = false 
}: QuestionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  
  const formattedTimestamp = timestamp instanceof Date ? timestamp.toLocaleDateString() : timestamp;
  
  return (
    <div
      className="border rounded-xl p-4 md:p-5 bg-white shadow-sm border-gray-200 h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between">``
        <h3 className={`text-md md:text-lg font-medium ${isHovered ? 'text-blue-600' : 'text-gray-800'}`}>{question}</h3>
        <button className={`${isBookmarked ? 'text-blue-600' : (isHovered ? 'text-blue-400' : 'text-gray-400')}`}>
          {isNew && (
            <div className="absolute -top-3 -right-3">
              <Badge className="bg-gradient-to-r from-green-400 to-emerald-500 text-white">
                New!
              </Badge>
            </div>
          )}
          <div>
            <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
          </div>
        </button>
      </div>
      
      {category && (
        <div className="mt-3 md:mt-4 flex items-center justify-between flex-wrap gap-y-3">
          <div className="flex flex-wrap items-center space-x-2">
            <span className="px-2 md:px-3 py-1 md:py-1.5 bg-blue-50 text-xs font-medium rounded-full text-blue-600 border border-blue-100 flex items-center gap-1">
              {category === "Design" && <PenTool className="h-3 w-3" />}
              {category === "Root Cause Analysis" && <BarChart className="h-3 w-3" />}
              {category === "Execution" && <Rocket className="h-3 w-3" />}
              {category}
            </span>
            {companyName && (
              <div className="flex items-center gap-1.5 text-xs md:text-sm text-gray-600">
                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-medium text-white overflow-hidden">
                  {companyLogo || companyName.charAt(0)}
                </div>
                <span>Asked by {companyName} {formattedTimestamp}</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-3 text-xs md:text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="h-3 w-3 md:h-4 md:w-4 text-indigo-500" />
              <span>12 answers</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
              <span>1k views</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Add type for category object
interface Category {
  id: string;
  title: string;
  lessons: number;
  icon: React.ReactNode;
  color: string;
  questions: string[];
}

// Add type for stat object
interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

// Add type for featured question
interface FeaturedQuestion {
  question: string;
  companyName: string;
  companyLogo: string;
  timestamp: string;
  category: string;
  isBookmarked?: boolean;
  isNew?: boolean;
}

const QuestionsSection = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>('productSense');
  const isMobile = useIsMobile();

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const categories: Category[] = [
    {
      id: 'productSense',
      title: 'Product Sense',
      lessons: 5,
      icon: <PenTool className="h-5 w-5" />,
      color: 'from-blue-600 to-indigo-600',
      questions: [
        '1.1 Design an ATM for blind',
        '1.2 Design TikTok',
        '1.3 Design a fridge for kids',
        '1.4 LinkedIn Mentorship',
        '1.5 Communication app for kids',
      ]
    },
    {
      id: 'productImprovement',
      title: 'Product Improvement',
      lessons: 5,
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'from-green-500 to-teal-600',
      questions: [
        '2.1 Improve Whatsapp',
        '2.2 Improve LinkedIn marketplace',
        '2.3 Improve Spotify social feature',
        '2.4 Improve Google maps',
        '2.5 Improve Facebook birthday'
      ]
    },
    {
      id: 'rootCauseAnalysis',
      title: 'Root Cause Analysis',
      lessons: 5,
      icon: <BarChart className="h-5 w-5" />,
      color: 'from-orange-500 to-red-600',
      questions: [
        '3.1 Youtube Watch time',
        '3.2 DAU of an app has dropped',
        '3.3 Flipkart Cart addition',
        '3.4 Banking app uninstall',
        '3.5 Google Search Decline'
      ]
    },
    {
      id: 'guessEstimate',
      title: 'Guess Estimate',
      lessons: 5,
      icon: <Code className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-600',
      questions: [
        '4.1 Google docs created',
        '4.2 ATMs in India',
        '4.3 McDonald\'s Revenue',
        '4.4 Drivers in SF',
        '4.5 Self Driving Cars Market Sizing'
      ]
    },
    {
      id: 'productStrategy',
      title: 'Product Strategy',
      lessons: 5,
      icon: <BrainCircuit className="h-5 w-5" />,
      color: 'from-cyan-500 to-blue-600',
      questions: [
        '5.1 Entering new market',
        '5.2 Pivot strategy',
        '5.3 Competitive response',
        '5.4 Zero to One launch',
        '5.5 Monetization strategy'
      ]
    },
    {
      id: 'behavioral',
      title: 'Behavioral Questions',
      lessons: 5,
      icon: <Target className="h-5 w-5" />,
      color: 'from-amber-500 to-yellow-600',
      questions: [
        '6.1 Tell me about yourself',
        '6.2 Leadership experience',
        '6.3 Conflict resolution',
        '6.4 Product failure',
        '6.5 Stakeholder management'
      ]
    }
  ];

  const featuredQuestions: FeaturedQuestion[] = [
    {
      question: "Youtube watch time is down. Why?",
      companyName: "Google",
      companyLogo: "G",
      timestamp: "last week",
      category: "Root Cause Analysis"
    },
    {
      question: "Design airport experience",
      companyName: "Google",
      companyLogo: "G",
      timestamp: "2 days ago",
      category: "Design",
      isBookmarked: true,
      isNew: true
    },
    {
      question: "How will you improve the Stripe Checkout experience?",
      companyName: "Stripe",
      companyLogo: "S",
      timestamp: "yesterday",
      category: "Execution"
    }
  ];

  return (
    <section id="questions" className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-10 -left-10 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-r from-pink-300 to-purple-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-40 md:w-60 h-40 md:h-60 bg-gradient-to-r from-blue-300 to-cyan-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-r from-yellow-200 to-orange-300 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <div className="flex justify-center items-center mb-3">
            <div>
              <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-3 py-2 text-sm font-medium rounded-full mb-3 inline-block">
                <Sparkles className="h-4 w-4 mr-1 inline-block" /> 
                INTERVIEW QUESTIONS
              </Badge>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 md:mb-6">
              Real Interview Questions
            </h2>
          </div>
          
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Practice with actual questions asked in top tech companies. Our collection covers all major PM interview categories.
          </p>

          <div className="mt-6 md:mt-8 mx-auto max-w-2xl">
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 md:p-6 rounded-xl border border-indigo-100 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="flex-1">
                  <div className="flex items-center mb-2 md:mb-3">
                    <Trophy className="h-5 w-5 text-amber-500 mr-2" />
                    <span className="font-bold text-gray-800">Proven Success</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 md:mb-4">Our premium question bank has helped 1000+ candidates land PM roles at FAANG companies</p>
                  <div className="w-full md:w-auto">
                    <Button className="w-full md:w-auto bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-4 py-2 rounded-full shadow-md">
                      <ArrowUpRight className="h-4 w-4 mr-2" />
                      <span>Get Premium Access</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2 w-full md:w-auto">
                  {[
                    { text: "500+ Real Interview Questions", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
                    { text: "Expert-Written Solutions", icon: <CheckCircle className="h-4 w-4 text-green-500" /> },
                    { text: "Weekly New Questions", icon: <CheckCircle className="h-4 w-4 text-green-500" /> }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center space-x-2"
                    >
                      {item.icon}
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-10 md:grid-cols-4 md:gap-6 md:mb-12">
          {[
            { value: "500+", label: "Questions", icon: <LightbulbIcon className="h-5 w-5 text-amber-500" />, color: "from-amber-50 to-amber-100" },
            { value: "96%", label: "Success Rate", icon: <Trophy className="h-5 w-5 text-green-500" />, color: "from-green-50 to-green-100" },
            { value: "1,000+", label: "PM Offers", icon: <Users className="h-5 w-5 text-blue-500" />, color: "from-blue-50 to-blue-100" },
            { value: "10k+", label: "Happy Students", icon: <Star className="h-5 w-5 text-purple-500" />, color: "from-purple-50 to-purple-100" }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className={`bg-gradient-to-br ${stat.color} p-3 md:p-4 rounded-xl border border-gray-100 shadow-sm`}
            >
              <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-3">
                <div className="bg-white p-1.5 md:p-2 rounded-lg mx-auto md:mx-0">{stat.icon}</div>
                <div className="text-center md:text-left">
                  <div className="text-lg md:text-2xl font-bold text-gray-800">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 md:mb-16">
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center">
              <Rocket className="h-5 w-5 mr-2 text-blue-600" />
              Featured Questions
            </h3>
            <div>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                <div className="inline-block">
                  <Star className="h-3 w-3 mr-1 inline-block fill-yellow-400 text-yellow-400" />
                </div>
                <span>Top Picks</span>
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredQuestions.map((question, index) => (
              <div key={index} className="h-full">
                <QuestionCard 
                  question={question.question} 
                  category={question.category}
                  isBookmarked={question.isBookmarked}
                  companyName={question.companyName}
                  companyLogo={question.companyLogo}
                  timestamp={question.timestamp}
                  isNew={question.isNew}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold group flex items-center">
              <span className="mr-2 bg-blue-100 p-2 rounded-lg text-blue-600">
                <Book className="h-5 w-5" />
              </span>
              Course Content
            </h3>
            <div>
              <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 px-4 py-2 text-sm rounded-lg flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="font-medium">6 Modules • 30 Lessons</span>
              </Badge>
            </div>
          </div>
          
          {categories.map((category, idx) => (
            <div 
              key={category.id} 
              className="rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:border-blue-200"
            >
              <div 
                className={`bg-gradient-to-r ${category.color} text-white p-4 md:p-5 flex justify-between items-center cursor-pointer group`}
                onClick={() => toggleSection(category.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    {category.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-medium">{category.title}</h4>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="bg-white/20 px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm backdrop-blur-sm">
                    {category.lessons} lessons
                  </span>
                  <div>
                    {expandedSection === category.id ? 
                      <ChevronUp className="h-5 w-5 md:h-6 md:w-6" /> : 
                      <ChevronDown className="h-5 w-5 md:h-6 md:w-6" />}
                  </div>
                </div>
              </div>
              
              {expandedSection === category.id && (
                <div className="divide-y bg-white">
                  {category.questions.map((question, index) => (
                    <div
                      key={index}
                      className="p-4 md:p-5 flex items-start gap-3 hover:bg-blue-50 cursor-pointer group"
                    >
                      <div className="text-gray-400 flex-shrink-0 mt-1 group-hover:text-blue-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 4H21V6H8V4ZM8 11H21V13H8V11ZM8 18H21V20H8V18ZM3 4H6V6H3V4ZM3 11H6V13H3V11ZM3 18H6V20H3V18Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="group-hover:text-blue-600 font-medium">{question}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">Last updated 2 days ago</span>
                          {index % 2 === 0 && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">New</Badge>
                          )}
                        </div>
                      </div>
                      <div className="ml-auto flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium text-gray-600">4.9</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
