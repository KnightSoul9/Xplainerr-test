import Link from "next/link";
import SectionHeading from "../Shared/sectionHeading";
import CardLayout from "@/src/layout/CardLayout";
import { FiArrowRight } from "react-icons/fi";

const BlogGridView = ({ posts, disableHeader }) => {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 md:py-24 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 text-center md:text-left">
              Trending Blogs
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg text-center md:text-left">
              Latest insights and guides for product managers
            </p>
          </div>
          <Link 
            href="/blog"
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 mt-4 md:mt-0 px-4 py-2 rounded-lg"
          >
            <span>View all articles</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.slice(0, 3)?.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post?.frontmatter?.cover_image}
                  alt={post?.frontmatter?.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
                    Product Management
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post?.frontmatter?.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {post?.frontmatter?.metaDescription}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group-hover:gap-3 transition-all"
                  >
                    Read Article
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile view all button */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link 
            href="/blog"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
          >
            <span>View all articles</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogGridView;
