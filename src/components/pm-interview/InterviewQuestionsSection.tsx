import React, { useState } from 'react';
import { BookmarkIcon, FileText } from 'lucide-react';
import { useIsMobile } from '@/src/hooks/use-mobile';

// Custom Badge component using Tailwind
const Badge = ({ 
  children, 
  variant = 'default',
  className = '' 
}: { 
  children: React.ReactNode;
  variant?: 'default' | 'easy' | 'medium' | 'hard';
  className?: string;
}) => {
  const baseClasses = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
  
  const variantClasses = {
    default: "bg-blue-100 text-blue-800",
    easy: "bg-green-100 text-green-800",
    medium: "bg-amber-100 text-amber-800",
    hard: "bg-red-100 text-red-800"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

const QuestionCard = ({ 
  difficulty,
  company,
  title,
  timeframe,
  bookmarked = false,
  actionType = "practice"
}: {
  difficulty: "Easy" | "Medium" | "Hard";
  company?: string;
  title: string;
  timeframe?: string;
  bookmarked?: boolean;
  actionType?: "practice" | "solution";
}) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);
  const isMobile = useIsMobile();
  
  const getDifficultyVariant = (): 'default' | 'easy' | 'medium' | 'hard' => {
    switch(difficulty) {
      case "Easy": return "easy";
      case "Medium": return "medium";
      case "Hard": return "hard";
      default: return "default";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-4 h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant={getDifficultyVariant()}>
            {difficulty}
          </Badge>
          {company && (
            <span className="text-sm text-gray-500">
              {company}
              {timeframe && ` • ${timeframe}`}
            </span>
          )}
        </div>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="text-gray-400 hover:text-blue-600 transition-colors"
        >
          <BookmarkIcon className={`h-5 w-5 ${isBookmarked ? 'fill-blue-600 text-blue-600' : ''}`} />
        </button>
      </div>
      
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
        {title}
      </h3>
      
      <div className="flex justify-end mt-auto">
        <button className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
          <FileText className="h-4 w-4 mr-1" />
          {actionType === "practice" ? "Practice now" : "View solution"}
        </button>
      </div>
    </div>
  );
};

const InterviewQuestionsSection = () => {
  const isMobile = useIsMobile();
  
  const questions = [
    {
      difficulty: "Medium",
      title: "Design a RESTFUL API for Stripe with at-least 2 entities",
      actionType: "practice"
    },
    {
      difficulty: "Hard",
      company: "Amazon",
      title: "Monolith or micro-service? What criteria will you consider as a PM while selecting system architecture",
      actionType: "practice"
    },
    {
      difficulty: "Easy",
      company: "Meta",
      timeframe: "last week",
      title: "List top 5 NFRs for a high scale streaming app like Netflix",
      actionType: "solution",
      bookmarked: true
    },
    {
      difficulty: "Medium",
      company: "Google",
      title: "Design airport experience",
      actionType: "practice"
    },
    {
      difficulty: "Medium",
      company: "Stripe",
      title: "Improve Stripe checkout experience",
      actionType: "practice"
    },
    {
      difficulty: "Hard",
      company: "Uber",
      title: "What should be Uber's 10 year strategy?",
      actionType: "practice"
    },
    {
      difficulty: "Hard",
      company: "TikTok",
      title: "Youtube shorts watch time has gone down. Why?",
      actionType: "practice"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            INTERVIEW PREP
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Learn to answer PM tech interview questions
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practice with real questions asked at top tech companies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              difficulty={question.difficulty as "Easy" | "Medium" | "Hard"}
              company={question.company}
              timeframe={question.timeframe}
              title={question.title}
              bookmarked={question.bookmarked}
              actionType={question.actionType as "practice" | "solution"}
            />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition-colors">
            See all practice questions
          </button>
        </div>
      </div>
    </section>
  );
};

export default InterviewQuestionsSection;
