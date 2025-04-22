import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";

// Category icons (could be replaced with actual SVG icons)
const CategoryIcon = ({ category }) => {
  // Simple function to show emoji icons based on category
  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "guess-estimate":
        return "🧮";
      case "product-design":
        return "🎨";
      case "product-improvement":
        return "📈";
      case "root-cause-analysis":
        return "🔍";
      case "product-strategy":
        return "📊";
      default:
        return "📝";
    }
  };

  return <span className="text-base">{getIcon(category)}</span>;
};

export default function PMInterviewQuestions({ questions }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredQuestions, setFilteredQuestions] = useState(questions);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredQuestions(questions);
    } else {
      setFilteredQuestions(
        questions.filter(
          (question) => question.category.toLowerCase() === activeCategory
        )
      );
    }
  }, [activeCategory, questions]);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "guess-estimate", label: "Guess-estimate" },
    { id: "product-design", label: "Product Design" },
    { id: "product-improvement", label: "Product Improvement" },
    { id: "root-cause-analysis", label: "Root Cause Analysis" },
    { id: "product-strategy", label: "Product Strategy" },
  ];

  // Empty state component when no questions match the filter
  const EmptyState = () => (
    <div className="py-8 text-center text-gray-600">
      <p>No questions found for the selected category.</p>
      <p>
        Try selecting a different category or check back later for new content.
      </p>
    </div>
  );

  return (
    <>
      <CommonHead
        title={"Xplainerr | PM Interview"}
        description={"PM interview"}
        favIcon={"/favicon.ico"}
      />

      <PageLayout>
        <div className="mx-auto max-w-7xl px-4 font-sans sm:px-6 lg:px-8">
          <Head>
            <title>PM Interview Questions</title>
            <meta
              name="description"
              content="Practice with real product management interview questions"
            />
          </Head>

          <header className="mb-12 py-8 text-center">
            <div>
              <span className="mb-4 inline-block text-sm font-semibold tracking-wide text-[#284df2]">
                PM INTERVIEW QUESTIONS
              </span>
              <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                Practice Real Interview Questions
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Master the art of product management interviews with these real
                questions from top tech companies
              </p>
            </div>
          </header>

          <div className="scrollbar-hide mb-10 flex flex-wrap justify-center gap-3 overflow-x-auto whitespace-nowrap md:flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium transition-all
              ${
                activeCategory === category.id
                  ? "border-[#284df2] bg-[#284df2] text-white"
                  : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <CategoryIcon category={category.id} />
                <span className="ml-2">{category.label}</span>
              </button>
            ))}
          </div>

          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((question) => (
                <div
                  key={question.slug}
                  className="flex min-h-[220px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-b from-[#aabbf5] from-60% to-white to-40% transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-full flex-col p-6">
                    <div className="mb-3 flex items-center gap-1.5 text-sm font-medium text-[#284df2]">
                      <CategoryIcon category={question.category} />
                      <span>{question.categoryDisplayName}</span>
                    </div>

                    <h2 className="mb-4 flex-grow text-lg font-semibold text-gray-900">
                      {question.title}
                    </h2>

                    <div className="mb-6 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium
                    ${
                      question.difficulty === "Medium"
                        ? "bg-amber-50 text-amber-700"
                        : ""
                    }
                    ${
                      question.difficulty === "Hard"
                        ? "bg-red-50 text-red-700"
                        : ""
                    }
                    ${
                      question.difficulty === "Easy"
                        ? "bg-emerald-50 text-emerald-700"
                        : ""
                    }`}
                      >
                        {question.difficulty}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium
                    ${
                      question.isPremium
                        ? "bg-purple-50 text-purple-700"
                        : "bg-cyan-50 text-cyan-700"
                    }`}
                      >
                        {question.isPremium ? "Premium" : "Free"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-sm text-gray-500">
                        <span>⏱️</span> {question.readTime} min read
                      </span>
                      <Link
                        href={`/pm-interview/questions/${question.slug}`}
                        className="inline-flex items-center rounded-md bg-[#284df2] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                      >
                        Read Question <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export async function getStaticProps() {
  const interviewDir = path.join(process.cwd(), "_pm-interview");

  // Categories to process
  const categories = [
    { dir: "guess-estimate", display: "Guess Estimation" },
    { dir: "product-design", display: "Product Design" },
    { dir: "product-improvement", display: "Product Improvement" },
    { dir: "root-cause-analysis", display: "Root Cause Analysis" },
    { dir: "product-strategy", display: "Product Strategy" },
  ];

  const questions = [];

  // Function to estimate read time (words per minute)
  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.max(Math.ceil(words / wordsPerMinute), 6); // Minimum 6 min read time
  };

  // Process each category
  for (const category of categories) {
    const categoryDir = path.join(interviewDir, category.dir);

    // Skip if directory doesn't exist
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith(".md"));

    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");

      // Parse frontmatter
      const { data, content } = matter(fileContent);

      // Skip if no title
      if (!data.title) continue;

      // Format title - Remove section numbers if present (e.g., "4.1 Google docs created" -> "Google docs created")
      const formattedTitle = data.title.replace(/^[\d\.]+\s+/, "");

      // Create URL-friendly slug
      const slug = file
        .replace(/\.md$/, "")
        .replace(/^\d+[-.]/, "") // Remove leading numbers and dots/dashes
        .toLowerCase()
        .replace(/\s+/g, "-"); // Replace spaces with dashes

      // Determine if premium based on some rules
      const isPremium =
        file.includes("premium") ||
        formattedTitle.toLowerCase().includes("advanced") ||
        formattedTitle.toLowerCase().includes("complex") ||
        file.includes("mcd-revenue") || // Example based on your files
        file.includes("market-size-self-driving-cars");

      // Determine difficulty (simple logic - could be part of frontmatter)
      let difficulty = "Medium";
      if (isPremium || content.length > 5000) {
        difficulty = "Hard";
      } else if (content.length < 2000) {
        difficulty = "Easy";
      }

      questions.push({
        title: formattedTitle,
        slug,
        category: category.dir,
        categoryDisplayName: category.display,
        difficulty,
        isPremium,
        readTime: calculateReadTime(content),
      });
    }
  }

  // Sort questions (newest first, assuming filenames have numbers)
  questions.sort((a, b) => {
    // Extract numbers from slugs for sorting
    const numA = parseInt(a.slug.match(/\d+/) || [0]);
    const numB = parseInt(b.slug.match(/\d+/) || [0]);
    return numB - numA;
  });

  return {
    props: {
      questions,
    },
  };
}
