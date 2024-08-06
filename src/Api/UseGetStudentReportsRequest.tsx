import axios from "axios";
import { FeedbackContent } from "../Types/FeedbackContent";

export const UseGetStudentReportsRequest = async (
  id: string | undefined
): Promise<FeedbackContent[]> => {
  try {
    const response = await axios.get<FeedbackContent[]>(
      `https://final-project-1-hjx7.onrender.com/student/Student-reports/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching class data:", error);
    return [];
  }
};
