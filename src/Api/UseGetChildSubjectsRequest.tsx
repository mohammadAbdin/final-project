import axios from "axios";
import { StudentDetailsType } from "../Types/StudentDetailsType";

export const UseGetChildSubjectsRequest = async (
  id: string | undefined
): Promise<StudentDetailsType | null> => {
  try {
    const response = await axios.get<StudentDetailsType>(
      `https://final-project-1-hjx7.onrender.com/student/Student-Details/${id}`,
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
