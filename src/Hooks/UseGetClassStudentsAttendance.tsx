import { useState } from "react";

import { UseGetClassStudentsAttendanceRequest } from "./../Api/UseGetClassStudentsAttendanceRequest";
import { StudentsAttendanceType } from "../Types/StudentsAttendanceType";

interface UseGetClassStudentsAttendanceReturn {
  getClassStudentsAttendance: (id: string) => Promise<void>;
  classStudentsAttendance: StudentsAttendanceType[] | null;
}

const UseGetClassStudentsAttendance = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  selectedDate: string,
  classNumber: string | undefined
): UseGetClassStudentsAttendanceReturn => {
  const [classStudentsAttendance, setClassStudentsAttendance] = useState<
    StudentsAttendanceType[] | null
  >(null);

  const getClassStudentsAttendance = async (id: string) => {
    try {
      setIsLoading(false);
      const response = await UseGetClassStudentsAttendanceRequest(
        id,
        selectedDate,
        classNumber
      );
      setClassStudentsAttendance(response);
      //   determineSearchData({ data: response });
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setClassStudentsAttendance(null);
    }
  };

  return {
    getClassStudentsAttendance,
    classStudentsAttendance,
  };
};

export default UseGetClassStudentsAttendance;
