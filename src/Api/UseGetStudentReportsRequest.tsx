import axios from "axios";
import { FeedbackContent } from "../Types/FeedbackContent";

export const UseGetStudentReportsRequest = async (
  id: string | undefined
): Promise<FeedbackContent[]> => {
  try {
    const response = await axios.get<FeedbackContent[]>(
      `http://localhost:5001/student/Student-reports/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching class data:", error);
    return [];
  }
};
