import { allCourses } from "@/src/config/constants";
import Link from "next/link";
import { useRouter } from "next/router";

const FooterLink = ({ href, children }) => (
  <span className="text-sm font-normal">
    <Link className="text-gray-600 transition-colors hover:text-gray-900" href={href}>
      {children}
    </Link>
  </span>
);

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col gap-y-4">
    <h3 className="text-sm font-semibold uppercase tracking-wider text-[#878787]">
      {title}
    </h3>
    <ul className="flex flex-col gap-y-3" role="list">
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink href={link.href}>{link.text}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

const Footer2 = ({ disableMenus = false }) => {
  const getFullYear = new Date().getFullYear();
  const router = useRouter();

  const practiceLinks = [
    { href: "/1", text: "Get Started" },
    { href: "/#", text: "Product Management" },
    { href: "/#", text: "Cohorts" },
    { href: "/pm-interview", text: "Pm Interviews" },
  ];

  const courseLinks = allCourses.map(course => ({
    href: `/courses/${course.slug}`,
    text: course.title,
  }));

  const blogLinks = [
    { href: "/blog/one-year-as-a-product-manager-reflections-and-key-learnings", text: "One year journey as PM" },
    { href: "/blogs/ten-d2c-metrics-shark-tank", text: "10 D2C metrics to track" },
    { href: "/blog/why-should-product-managers&designers-learn-ux-writing", text: "UX Writing for PMs" },
    { href: "/blog/so-you-want-to-be-product-manager", text: "So you want to be a PM?" },
  ];

  const companyLinks = [
    { href: "/terms-of-service", text: "Terms of service" },
    { href: "/contact-us", text: "Contact Us" },
    { href: "/privacy-policy", text: "Privacy & policy" },
    { href: "/cancellation", text: "Cancellations" },
  ];

  return (
    <>
      <footer
        aria-labelledby="footer-heading"
        className="bg-gray-100 border-t border-gray-300"
        id="footer"
      >
      
        <div
          className={`mx-auto max-w-7xl  ${
            disableMenus === false
              ? `px-4  pb-8 sm:px-6 lg:px-8  ${
                  router?.pathname === "/pm-interview"
                    ? "pt-72 lg:pt-60"
                    : "pt-8 lg:pt-16"
                }`
              : ""
          }`}
        >
          {disableMenus === false && (
            <div className="xl:grid xl:grid-cols-4 xl:gap-8">
              <div className="space-y-4 xl:col-span-1">
                <div>
                  <Link
                    href="/"
                    className=" inline-block text-xl font-bold text-gray-900"
                  >
                    Xplainerr
                  </Link>
                </div>
                <p className="text-sm text-gray-600">
                  We provide niche up-skilling courses to help you accelerate and succeed in your career
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-3 xl:mt-0">
                <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
                  <FooterSection title="Practice" links={practiceLinks} />
                  <FooterSection title="Courses" links={courseLinks} />
                </div>
                <div className="sm:grid-cols-2 md:col-span-2 md:grid md:gap-8">
                  <FooterSection title="Trending Blogs" links={blogLinks} />
                  <FooterSection title="Company" links={companyLinks} />
                </div>
              </div>
            </div>
          )}

          <div className=" mb-12 mt-2 border-t border-gray-700 pb-1 pt-4 md:mb-0 md:pt-8">
            <p className="text-center text-base text-gray-600">
              © {getFullYear} Xplainerr, All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
