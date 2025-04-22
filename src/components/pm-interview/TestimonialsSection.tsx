import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/src/components/ui/carousel";
import {
  Card,
  CardContent
} from "@/src/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar";
import { cn } from "@/src/lib/utils";
import { Star } from "lucide-react";
import { useIsMobile } from "@/src/hooks/use-mobile";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarSrc?: string;
}

const Testimonial = ({ content, author, role, company, rating, avatarSrc }: TestimonialProps) => {
  return (
    <Card className="h-full bg-white border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-10 w-10 border border-gray-100">
            {avatarSrc ? (
              <AvatarImage src={avatarSrc} alt={author} />
            ) : (
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {author.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="font-medium text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{role} at {company}</p>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4 text-sm md:text-base">&ldquo;{content}&rdquo;</p>
        
        <div className="flex">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      content: "This course was a game-changer for my PM interview preparation. The questions are exactly what top tech companies ask, and the structured approach helped me land offers from both Google and Meta.",
      author: "Priya Sharma",
      role: "Product Manager",
      company: "Google",
      rating: 5
    },
    {
      content: "I was struggling with the product design questions in my interviews. The frameworks and examples in this course helped me structure my answers and think more clearly. Just received an offer from Amazon!",
      author: "Michael Chang",
      role: "Senior PM",
      company: "Amazon",
      rating: 5
    },
    {
      content: "The metrics and analytics questions in this course are spot on. My Microsoft interviewer asked almost the exact same questions covered here. Definitely worth the investment if you're serious about PM roles.",
      author: "Raj Patel",
      role: "Product Manager",
      company: "Microsoft",
      rating: 4
    },
    {
      content: "After failing 3 PM interviews, I found this course and it changed everything. The root cause analysis section was particularly helpful. Just accepted an offer at Airbnb!",
      author: "Sarah Johnson",
      role: "Senior Product Manager",
      company: "Airbnb",
      rating: 5
    }
  ];
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3">
            SUCCESS STORIES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from professionals who landed their dream PM roles after taking our course
          </p>
        </div>
        
        {mounted ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className={cn(
                  "pt-1 md:basis-1/2",
                  isMobile ? "basis-full" : "lg:basis-1/3"
                )}>
                  <div className="p-1 h-full">
                    <Testimonial {...testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className="static transform-none rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50" />
              <CarouselNext className="static transform-none rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50" />
            </div>
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            <Testimonial {...testimonials[0]} />
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
