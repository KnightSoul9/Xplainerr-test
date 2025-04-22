// pages\quiz\[domainSlug]\index.js

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoQuestion } from "react-icons/go";
import { MdOutlineAccessTime } from "react-icons/md";
import { ArrowRight } from "lucide-react";

const AllQuiz = ({ quiz, domainSlug }) => {
  const [expand, setExpand] = useState(false);
  // console.log(quiz?.seoMetaData, "quiz");
  const description = quiz?.seoMetaData?.meta_description;
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col">
      <div className="relative h-40 overflow-hidden">
        <Image
          // src={quiz?.seoMetaData?.preview_image}
          src={quiz?.seoMetaData?.preview_image || "/quiz/fsd-min.png"}
          alt={quiz?.quiz_title}
          width={400}
          height={200}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
            Product Management
          </div>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {quiz?.quiz_title}
        </h3>
        
        <div className="flex items-center justify-between mb-3 text-sm">
          <div className="flex items-center gap-1.5 text-slate-500">
            <GoQuestion className="w-4 h-4" />
            <span>10 Questions</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <MdOutlineAccessTime className="w-4 h-4" />
            <span>10 Mins</span>
          </div>
        </div>

        <p className="text-sm text-slate-500 mb-4 flex-grow">
          {!expand ? (
            <>
              {description?.slice(0, 80)}...
              <button
                className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                onClick={() => setExpand(true)}
              >
                Read more
              </button>
            </>
          ) : (
            <>
              {description}
              <button
                className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                onClick={() => setExpand(false)}
              >
                Show less
              </button>
            </>
          )}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <Link 
            href={`/quiz/${domainSlug}/${quiz?.metaData?.quiz_slug}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 py-2.5 px-4 rounded-lg font-medium transition-colors"
          >
            Start Quiz
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllQuiz;
