import QuizThanksPageSkeleton from "@/src/components/common/QuizThanksPageSkeleton";
import CommonHead from "@/src/components/v1/Shared/CommonHead";
import { Steps, ThankYouScoreSection } from "@/src/components/v3/quiz";
import { BACKEND_API } from "@/src/config/backend";
import { QUIZ_CONSTANT } from "@/src/constants/quiz";
import useAuthService from "@/src/hooks/auth/useAuthService";
import useFetchReportData from "@/src/hooks/useFetchReportData";
import PageLayout from "@/src/layout/PageLayout";
import { getQuizIdFromSlug } from "@/src/utils/quiz";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const ThankYouPage = () => {
  const router = useRouter();
  const { domainSlug, quizSlug } = router.query;
  const { currentUser } = useAuthService();
  const viewReportPath = router.pathname.split("/").pop();

  const quiz_id = getQuizIdFromSlug(quizSlug);
  const quizAttemptHistory = localStorage.getItem(
    QUIZ_CONSTANT.QUIZ_ATTEMPT_LS_KEY
  );
  const quizAttemptId =
    quizAttemptHistory && JSON.parse(quizAttemptHistory || {})[quiz_id];

  // src\hooks\useFetchReportData.js
  const { reportData, loading } = useFetchReportData(quizSlug, quizAttemptId);

  useEffect(() => {
    if (currentUser?.email) {
      const callUpdateQuizAPI = async () => {
        await axios.patch(`${BACKEND_API}/quiz/${quiz_id}/update-quiz-attempt/${quizAttemptId}`, {
          email: currentUser.email,
        });
      };

      callUpdateQuizAPI();
    }
  }, [currentUser?.email, quizAttemptId, quiz_id]);

  return (
    <div>
      <>
        <CommonHead
          title={`Xplainerr | Thank-you`}
          description={`${domainSlug} | ${quizSlug} | Thank-you page`}
          favIcon={"/favicon.ico"}
        />
        <PageLayout>
          <div className="container mx-auto px-4 pb-16 lg:max-w-7xl lg:py-[56px]">
            <div>
              {/* Steps  */}

              <Steps
                currentUser={currentUser}
                reportData={reportData}
                viewReportPath={viewReportPath}
                quizAttemptId={quizAttemptId}
              />
              {/* Main Body */}
              {reportData && (
                <div>
                  <div className="container mx-auto mt-5 grid grid-cols-1 gap-5 rounded-xl border bg-white p-1 py-3 shadow-sm md:mt-0 lg:w-3/4 lg:p-8">
                    {loading ? (
                      <QuizThanksPageSkeleton />
                    ) : (
                      <ThankYouScoreSection
                        reportData={reportData}
                        currentUser={currentUser}
                        router={router}
                        domainSlug={domainSlug}
                        quizSlug={quizSlug}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </PageLayout>
      </>
    </div>
  );
};

export default ThankYouPage;
