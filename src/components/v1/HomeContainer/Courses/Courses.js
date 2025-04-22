import CardLayout from "@/src/layout/CardLayout";
import Link from "next/link";
import { ArrowRight, BookOpen, Users, Star, Clock, CheckCircle } from "lucide-react";
import { useIsMobile } from "@/src/hooks/use-mobile";
import Image from "next/image";
import SectionHeading from "../../Shared/sectionHeading";

// Constants for course categories and their styles
const CATEGORY_STYLES = {
  'product-management': {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    label: 'Product Management'
  },
  'interview': {
    bg: 'bg-purple-100',
    text: 'text-purple-700',
    label: 'Interview Prep'
  },
  'design': {
    bg: 'bg-green-100',
    text: 'text-green-700',
    label: 'Design'
  },
  'engineering': {
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    label: 'Engineering'
  }
};

// Default course metadata
const DEFAULT_COURSE_META = {
  studentsCount: '500+',
  duration: '8 weeks',
  rating: 4.8,
  reviewCount: 120,
  certificateAvailable: true
};

// Sample featured courses data (you can move this to a separate file)
const FEATURED_COURSES = [
  {
    id: 1,
    title: 'Product Management Fundamentals',
    description: 'Master the basics of product management and learn how to build successful products.',
    category: 'product-management',
    image: '/images/courses/pm-fundamentals.jpg',
    slug: 'pm-fundamentals',
    meta: {
      ...DEFAULT_COURSE_META,
      studentsCount: '1000+'
    }
  },
  {
    id: 2,
    title: 'Product Design Interview Preparation',
    description: 'Prepare for product design interviews at top tech companies.',
    category: 'interview design',
    image: '/images/courses/design-interview.jpg',
    slug: 'design-interview',
    meta: {
      ...DEFAULT_COURSE_META,
      duration: '6 weeks'
    }
  }
];

const CourseCard = ({ course }) => {
  const getTagStyle = (category) => {
    const style = CATEGORY_STYLES[category.toLowerCase()] || {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      label: category
    };
    return `${style.bg} ${style.text}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={course?.cover_image || course?.image}
          alt={course.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
          <BookOpen className="w-4 h-4 text-white" />
          {course?.category?.split(' ').map((tag, idx) => (
            <span 
              key={idx}
              className={`px-3 py-1 rounded-full text-xs font-medium ${getTagStyle(tag)}`}
            >
              {CATEGORY_STYLES[tag.toLowerCase()]?.label || tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {course.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2">
          {course.description || course.courseDescription}
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <Users className="w-4 h-4" />
              <span>{course.meta?.studentsCount || DEFAULT_COURSE_META.studentsCount} students</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>{course.meta?.duration || DEFAULT_COURSE_META.duration}</span>
            </div>
          </div>

          {(course.meta?.certificateAvailable || DEFAULT_COURSE_META.certificateAvailable) && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Certificate on completion</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5 text-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">{course.meta?.rating || DEFAULT_COURSE_META.rating}</span>
              <span className="text-slate-500">({course.meta?.reviewCount || DEFAULT_COURSE_META.reviewCount} reviews)</span>
            </div>
            <Link 
              href={`/courses/${course.slug}`}
              className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1.5 group-hover:gap-2 transition-all"
            >
              Learn more 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = ({ heading, ctaText, courses, description }) => {
  const isMobile = useIsMobile();
  // Use either provided courses or featured courses as fallback
  const displayCourses = courses?.filter(course => course.isPublished === true) || FEATURED_COURSES;

  return (
    <section className="w-full bg-slate-50 py-16 px-6 md:py-24 md:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 text-center md:text-left">
              {heading || "Our Courses"}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-lg text-center md:text-left">
              {description || "Get better at your job every single day with our expert-led courses"}
            </p>
          </div>
          <Link 
            href="/courses"
            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 mt-4 md:mt-0 px-4 py-2 rounded-lg"
          >
            <span>View all courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayCourses.map((course, index) => (
            <CourseCard key={course.id || index} course={course} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link 
            href="/courses"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all"
          >
            <span>View all courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
