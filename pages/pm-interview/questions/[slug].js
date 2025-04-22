import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import PageLayout from "@/src/layout/PageLayout";
export default function QuestionDetail({ question }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <>
      <CommonHead
        title={"Xplainerr | PM Interview"}
        description={"PM interview"}
        favIcon={"/favicon.ico"}
      />

      <PageLayout>
        <div className="min-h-screen bg-gray-50">
          <Head>
            <title>{question.title} - PM Interview Questions</title>
            <meta name="description" content={question.title} />
          </Head>

          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
            <Link
              href="/pm-interview/questions"
              className="mb-8 inline-flex items-center font-medium text-[#284df2] transition-colors hover:text-blue-700"
            >
              <span className="mr-2">←</span> Back to All Questions
            </Link>

            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
              <div className="mb-6">
                <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-[#284df2]">
                  {question.category}
                </div>
                <h1 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                  {question.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex flex-wrap gap-2">
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
                  <span className="flex items-center gap-1.5 text-sm text-gray-500">
                    <span>⏱️</span> {question.readTime} min read
                  </span>
                </div>
              </div>

              <div className="prose prose-blue max-w-none">
                {question.contentSections.map((section, index) => (
                  <div key={index} className="mb-8">
                    {section.title && (
                      <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                        {section.title}
                      </h2>
                    )}
                    <div>
                      {section.content.split("\n").map((paragraph, pIndex) => {
                        // Handle bullet points
                        if (
                          paragraph.trim().startsWith("-") ||
                          paragraph.trim().startsWith("•")
                        ) {
                          return (
                            <ul
                              key={pIndex}
                              className="mb-4 list-disc pl-6 text-gray-700"
                            >
                              <li>{paragraph.trim().substring(1).trim()}</li>
                            </ul>
                          );
                        }
                        // Handle numbered points
                        if (/^\d+\./.test(paragraph.trim())) {
                          return (
                            <ol
                              key={pIndex}
                              className="mb-4 list-decimal pl-6 text-gray-700"
                            >
                              <li>
                                {paragraph.trim().replace(/^\d+\.\s*/, "")}
                              </li>
                            </ol>
                          );
                        }
                        // Regular paragraphs
                        return (
                          paragraph.trim() && (
                            <p
                              key={pIndex}
                              className="mb-4 leading-relaxed text-gray-700"
                            >
                              {paragraph}
                            </p>
                          )
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {question.relatedQuestions &&
              question.relatedQuestions.length > 0 && (
                <div className="mt-12">
                  <h3 className="mb-6 text-xl font-bold text-gray-900">
                    Related Questions
                  </h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {question.relatedQuestions.map((related, index) => (
                      <Link
                        key={index}
                        href={`/pm-interview/questions/${related.slug}`}
                        className="block rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-blue-200 hover:shadow-md"
                      >
                        <div className="mb-2 text-sm font-medium text-[#284df2]">
                          {related.category}
                        </div>
                        <h4 className="mb-4 text-lg font-semibold text-gray-900">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium
                      ${
                        related.difficulty === "Medium"
                          ? "bg-amber-50 text-amber-700"
                          : ""
                      }
                      ${
                        related.difficulty === "Hard"
                          ? "bg-red-50 text-red-700"
                          : ""
                      }
                      ${
                        related.difficulty === "Easy"
                          ? "bg-emerald-50 text-emerald-700"
                          : ""
                      }`}
                          >
                            {related.difficulty}
                          </span>
                          <span className="flex items-center gap-1.5 text-sm text-gray-500">
                            <span>⏱️</span> {related.readTime} min read
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export async function getStaticPaths() {
  const interviewDir = path.join(process.cwd(), "_pm-interview");
  const paths = [];

  // Get all categories
  const categories = fs
    .readdirSync(interviewDir)
    .filter((item) => fs.statSync(path.join(interviewDir, item)).isDirectory());

  // Get all markdown files from each category
  for (const category of categories) {
    const categoryPath = path.join(interviewDir, category);
    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith(".md"));

    // Add path for each file
    files.forEach((file) => {
      // Create URL-friendly slug
      const slug = file
        .replace(/\.md$/, "")
        .replace(/^\d+[-.]/, "") // Remove leading numbers and dots/dashes
        .toLowerCase()
        .replace(/\s+/g, "-"); // Replace spaces with dashes

      paths.push({
        params: {
          slug,
        },
      });
    });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const interviewDir = path.join(process.cwd(), "_pm-interview");

  // Find the file in any category directory
  let filePath;
  let category;

  const categories = fs
    .readdirSync(interviewDir)
    .filter((item) => fs.statSync(path.join(interviewDir, item)).isDirectory());

  for (const cat of categories) {
    const categoryPath = path.join(interviewDir, cat);
    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith(".md"));

    const matchingFile = files.find((file) => {
      const fileSlug = file
        .replace(/\.md$/, "")
        .replace(/^\d+[-.]/, "")
        .toLowerCase()
        .replace(/\s+/g, "-");
      return fileSlug === slug;
    });

    if (matchingFile) {
      filePath = path.join(categoryPath, matchingFile);
      category = cat;
      break;
    }
  }

  if (!filePath) {
    return {
      notFound: true,
    };
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  // Split content into sections based on ## headers
  const sections = content.split(/(?=##\s)/).map((section) => {
    const [title, ...contentParts] = section.split("\n");
    return {
      title: title.startsWith("##") ? title.replace(/^##\s*/, "").trim() : null,
      content: contentParts.join("\n").trim(),
    };
  });

  // Get related questions (2 from same category)
  const categoryDir = path.join(interviewDir, category);
  const relatedFiles = fs
    .readdirSync(categoryDir)
    .filter((file) => {
      const fileSlug = file
        .replace(/\.md$/, "")
        .replace(/^\d+[-.]/, "")
        .toLowerCase()
        .replace(/\s+/g, "-");
      return file.endsWith(".md") && fileSlug !== slug;
    })
    .slice(0, 2);

  const relatedQuestions = relatedFiles.map((file) => {
    const relatedContent = fs.readFileSync(
      path.join(categoryDir, file),
      "utf8"
    );
    const { data: relatedData } = matter(relatedContent);
    return {
      title: relatedData.title.replace(/^[\d\.]+\s+/, ""),
      slug: file
        .replace(/\.md$/, "")
        .replace(/^\d+[-.]/, "")
        .toLowerCase()
        .replace(/\s+/g, "-"),
      category: data.metaTitle?.split(" - ")[1] || category,
      difficulty: "Medium",
      readTime: Math.ceil(relatedContent.split(/\s+/).length / 200),
    };
  });

  return {
    props: {
      question: {
        title: data.title.replace(/^[\d\.]+\s+/, ""),
        category: data.metaTitle?.split(" - ")[1] || category,
        difficulty: data.difficulty || "Medium",
        isPremium: data.isPremium || false,
        readTime: Math.ceil(content.split(/\s+/).length / 200),
        contentSections: sections,
        relatedQuestions,
      },
    },
  };
}
