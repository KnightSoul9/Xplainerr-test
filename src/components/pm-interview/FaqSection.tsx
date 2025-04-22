import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-blue-600" />
          ) : (
            <ChevronDown className="h-6 w-6 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does this course differ from other PM interview resources?",
      answer: "Unlike other resources that focus mainly on theory, our course is built around real interview questions asked at top tech companies. We provide structured frameworks, expert answers, and practice opportunities with personalized feedback."
    },
    {
      question: "How long will I have access to the course materials?",
      answer: "You'll have lifetime access to all course materials, including any future updates and additions. This allows you to revisit concepts and practice questions as needed throughout your career."
    },
    {
      question: "Is this course suitable for beginners with no PM experience?",
      answer: "Yes, the course is designed for both experienced PMs looking to level up and beginners trying to break into product management. We provide foundational frameworks that help structure your thinking even if you're new to the field."
    },
    {
      question: "Do you provide personalized feedback on my answers?",
      answer: "Yes, our premium tier includes personalized feedback on your answers from experienced PMs working at top tech companies. This feedback helps identify your strengths and areas for improvement."
    },
    {
      question: "How often is the content updated?",
      answer: "We regularly update the course with new questions and content based on the latest interview trends at top companies. Our team actively collects feedback from recent interviews to ensure the content remains relevant."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with the course for any reason, just let us know within 30 days of purchase and we'll provide a full refund."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about the PM Interview Prep course
          </p>
        </div>

        <div>
          {faqs.map((faq, index) => (
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
    </section>
  );
};

export default FaqSection;
