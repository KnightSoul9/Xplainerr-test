import CompaniesSection from "@/src/components/pm-interview/CompaniesSection";
import CtaSection from "@/src/components/pm-interview/CtaSection";
import FaqSection from "@/src/components/pm-interview/FaqSection";
import HeroSection from "@/src/components/pm-interview/HeroSection";
import PracticePhilosophySection from "@/src/components/pm-interview/PracticePhilosophySection";
import PriceComparisonSection from "@/src/components/pm-interview/PriceComparisonSection";
import QuestionsSection from "@/src/components/pm-interview/QuestionsSection";
import SampleQuestionSection from "@/src/components/pm-interview/SampleQuestionSection";
import TestimonialsSection from "@/src/components/pm-interview/TestimonialsSection";
import WhyPracticeSection from "@/src/components/pm-interview/WhyPracticeSection";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { ClickedLink, FolderName } from "@/src/config/course-config";
import useDirectoryContents from "@/src/hooks/useDirectoryContents";
import useScrollHandler from "@/src/hooks/useScrollHandler";
import PageLayout from "@/src/layout/PageLayout";
import { useEffect, useState } from "react";

const PmInterview = () => {
  const folderName = FolderName.pm_interview;
  const directoryContents = useDirectoryContents(folderName);

  const clickedUrl = ClickedLink.pm_interview;
  const { showCTA, showPersistentCta } = useScrollHandler("banner");

  const [cTitle, setCTitle] = useState("");
  const [sTitle, setSTitle] = useState("");

  // Modal Dynamic Content
  useEffect(() => {
    setCTitle(
      `Unlock 50+ solved interview questions. Learn how to answer the hardest PM interview questions for FREE!`
    );
    setSTitle(
      `Find most asked product design, improvement, metrics, execution, strategy and behavioral questions at one place.`
    );
  }, []);

  return (
    <>
      <CommonHead
        title={"Xplainerr | PM Interview"}
        description={"PM interview"}
        favIcon={"/favicon.ico"}
      />

      <PageLayout>
      <HeroSection />
      <QuestionsSection />
      <CompaniesSection />
      <WhyPracticeSection />
      <TestimonialsSection />
      <PracticePhilosophySection />
      <PriceComparisonSection />
      <FaqSection />
      <SampleQuestionSection />
      <CtaSection />
      </PageLayout>
    </>
  );
};

export default PmInterview;
