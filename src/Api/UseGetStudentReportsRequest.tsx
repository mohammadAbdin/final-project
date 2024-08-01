import axios from "axios";
import { FeedbackContent } from "../Types/FeedbackContent";
// import { ClassSchedule } from "../Types/ClassScheduleType";

// Define the TypeScript interfaces

export const UseGetStudentReportsRequest = async (
  id: string | undefined
): Promise<FeedbackContent[]> => {
  try {
    console.log(id);

    const response = await axios.get<FeedbackContent[]>(
      `http://localhost:5001/student/Student-reports/${id}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching class data:", error);
    return [];
  }
};
