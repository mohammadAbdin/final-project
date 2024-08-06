import { useState } from "react";

import { UseGetStudentReportsRequest } from "./../Api/UseGetStudentReportsRequest";
import { FeedbackContent } from "../Types/FeedbackContent";

interface UseGetClassExamsReturn {
  getStudentReports: () => Promise<void>;
  studentReports: FeedbackContent[] | null;
}

const UseGetStudentReports = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  student_id: string | undefined
): UseGetClassExamsReturn => {
  const [studentReports, setStudentReports] = useState<
    FeedbackContent[] | null
  >(null);

  const getStudentReports = async () => {
    try {
      setIsLoading(false);
      const response: FeedbackContent[] | null =
        await UseGetStudentReportsRequest(student_id);
      setStudentReports(response);
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setStudentReports(null);
    }
  };

  return {
    getStudentReports,
    studentReports,
  };
};

export default UseGetStudentReports;
