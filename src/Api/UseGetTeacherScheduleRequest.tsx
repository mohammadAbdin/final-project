import axios from "axios";
import { ScheduleEntry } from "../Types/ScheduleEntry";

export const UseGetTeacherScheduleRequest = async (
  id: string
): Promise<ScheduleEntry[] | null> => {
  try {
    const response = await axios.get<[]>(
      `http://localhost:5001/teacher/Teacher-Schedule/${id}`,
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
