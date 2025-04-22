import { topCompanies } from "@/src/config/constants";
import Image from "next/image";
import { useIsMobile } from "@/src/hooks/use-mobile";

const Brand = ({ disableHeader }) => {
  const isMobile = useIsMobile();

  return (
    <section className="w-full bg-white py-12 px-4 md:py-16 md:px-10 border-t border-gray-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">
            Learners From Top Companies
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {topCompanies.map((item, index) => (
            <div
              key={index}
              className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={`/images/brand/${item.logo}`}
                alt={`${item.name} logo`}
                width={48}
                height={47}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;
