import axios from "axios";
import { StudentsAttendanceType } from "../Types/StudentsAttendanceType";

export const UseGetClassStudentsAttendanceRequest = async (
  id: string,
  selectedDate: string,
  classNumber: string | undefined
): Promise<StudentsAttendanceType[] | null> => {
  try {
    const response = await axios.get<StudentsAttendanceType[]>(
      `http://localhost:5001/class/attendance-date`,
      {
        params: {
          selectedDate,
          classNumber,
          id,
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
