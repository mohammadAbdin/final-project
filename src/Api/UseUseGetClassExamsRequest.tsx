import axios from "axios";

import { ClassInfoDetails } from "../Types/ClassInfoDetails";

export const UseUseGetClassDetailsRequest = async (
  id: string,
  classNumber: string | undefined
): Promise<ClassInfoDetails | null> => {
  try {
    const response = await axios.get<ClassInfoDetails>(
      `http://localhost:5001/class/class-exams`,
      {
        params: {
          id,
          classNumber,
        },
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
