import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={toggleOpen}
      >
        <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors pr-8">
          {question}
        </h3>
        <span className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-blue-600" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-sm text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Faqs = ({ course }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="w-[75%] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-600">
              Everything you need to know about this course
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200">
            {course?.faqData?.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openIndex}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
