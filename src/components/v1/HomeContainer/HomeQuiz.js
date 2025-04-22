import { BACKEND_API } from "@/src/config/backend";
import axios from "axios";
import { useEffect, useState } from "react";
import CardLoadingSkeltonContainer from "../../common/loading/CardLoadingSkelton";
import { AllQuiz } from "../../v3/quiz";
import SectionHeading from "../Shared/sectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HomeQuiz = () => {
  const domainSlug = "product-management";
  const [allQuiz, setAllQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuizData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BACKEND_API}/quiz/get-quiz-list?domain=${domainSlug}`
        );
        setAllQuiz(response?.data?.response);
        setLoading(false);

        console.log(response, "RESPONSE");
      } catch (error) {
        setLoading(false);
      }
    };

    if (domainSlug) {
      fetchQuizData();
    }
  }, [domainSlug]);

  const formattedDomainSlug = domainSlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <section className="w-full bg-slate-50 py-16 px-6 md:py-24 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 text-center md:text-left">
              Practice Quizzes
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg text-center md:text-left">
              Test your knowledge with interactive quizzes
            </p>
          </div>
          <Link 
            href={`/quiz/${domainSlug}`}
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 mt-4 md:mt-0 px-4 py-2 rounded-lg"
          >
            <span>View all quizzes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loading ? (
          <CardLoadingSkeltonContainer itemCount={3} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allQuiz?.slice(0, 6)?.map((quiz, index) => (
              <AllQuiz key={index} quiz={quiz} domainSlug={domainSlug} />
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center md:hidden">
          <Link 
            href={`/quiz/${domainSlug}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
          >
            <span>View all quizzes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeQuiz;
