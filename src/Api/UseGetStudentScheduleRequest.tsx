import axios from "axios";
import { ScheduleStudentEntry } from "../Types/ScheduleStudentEntry";

export const UseGetStudentScheduleRequest = async (
  id: string
): Promise<ScheduleStudentEntry[] | null> => {
  try {
    const response = await axios.get<[]>(
      `http://localhost:5001/student/Student-Schedule/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Failed to fetch projects:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    } else {
      console.error("Unexpected Error:", error);
    }
    return null;
  }
};
