
import { useEffect, useRef } from "react";

const CompaniesSection = () => {
  const companies = [
    { name: "Google", logo: "G", color: "#4285F4" },
    { name: "Amazon", logo: "A", color: "#FF9900" },
    { name: "Microsoft", logo: "M", color: "#00A4EF" },
    { name: "Intuit", logo: "I", color: "#365EBF" },
    { name: "Oracle", logo: "O", color: "#C74634" },
    { name: "Salesforce", logo: "S", color: "#00A1E0" },
    { name: "TikTok", logo: "T", color: "#000000" },
    { name: "Netflix", logo: "N", color: "#E50914" },
    { name: "Airbnb", logo: "A", color: "#FF5A5F" },
    { name: "Razorpay", logo: "R", color: "#3395FF" },
    { name: "CRED", logo: "C", color: "#101010" },
    { name: "Swiggy", logo: "S", color: "#FC8019" },
    { name: "Zomato", logo: "Z", color: "#CB202D" },
    { name: "Yelp", logo: "Y", color: "#D32323" },
    { name: "Waymo", logo: "W", color: "#3F9CE8" },
    { name: "Meta", logo: "M", color: "#1877F2" },
    { name: "Apple", logo: "A", color: "#555555" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Infinite scroll animation effect
  useEffect(() => {
    const scrollContainer = containerRef.current;
    const content = contentRef.current;
    
    if (!scrollContainer || !content) return;

    // Clone the content for seamless loop
    const clone = content.cloneNode(true) as HTMLElement;
    scrollContainer.appendChild(clone);

    // Animation
    let startTime = 0;
    const duration = 50000; // 50 seconds for one loop

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      
      if (scrollContainer) {
        // Calculate the scrollLeft based on the content width and progress
        const maxScroll = content.offsetWidth;
        scrollContainer.scrollLeft = maxScroll * progress;
      }
      
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Alumni Work At
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our course has helped professionals land PM roles at top tech companies worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Create an overflow container for the marquee effect */}
          <div 
            ref={containerRef} 
            className="overflow-x-hidden whitespace-nowrap"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div ref={contentRef} className="inline-block">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="inline-block mx-4 px-6 py-3 rounded-lg border-2 whitespace-nowrap"
                  style={{ borderColor: company.color }}
                >
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: company.color }}
                    >
                      {company.logo}
                    </div>
                    <span className="font-medium" style={{ color: company.color }}>{company.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient overlays to create fade effect on sides */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
