
import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { useIsMobile } from "@/src/hooks/use-mobile";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  // Track scrolling for sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`bg-white sticky top-0 z-50 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer">
              <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="ml-2 font-bold text-xl">Xplainerr</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <span>Courses</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <span>Cohort</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <span>Quiz</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="flex items-center px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
              <span>PM Interview Prep</span>
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-orange-500 text-white rounded">New</span>
            </div>
            <div className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <span>Events</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <div className="px-3 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <span>Blog</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">
              Signup
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu without animation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Courses</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Cohort</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Quiz</a>
            <a href="#" className="block px-3 py-2 rounded-md bg-blue-50 text-blue-600 font-medium">
              PM Interview Prep 
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-orange-500 text-white rounded">New</span>
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Events</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Blog</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 px-4">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Button variant="outline" className="w-full">Signup</Button>
              </div>
              <div className="flex-1">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
