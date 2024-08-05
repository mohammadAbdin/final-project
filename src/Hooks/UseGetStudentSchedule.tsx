import { useState } from "react";

import { UseGetStudentScheduleRequest } from "../Api/UseGetStudentScheduleRequest";
import { ScheduleStudentEntry } from "../Types/ScheduleStudentEntry";
// import UserType from "../Types/UserType";
// import ProjectType from "../Types/ProjectType";
// import { determineSearchDataPropsType } from "./../Types/determineSearchDataPropsType";

interface UseGetStudentScheduleReturn {
  getStudentSchedule: (id: string) => Promise<void>;
  studentSchedule: ScheduleStudentEntry[] | null;
}

const UseGetStudentSchedule = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): UseGetStudentScheduleReturn => {
  const [studentSchedule, setStudentSchedule] = useState<
    ScheduleStudentEntry[] | null
  >(null);

  const getStudentSchedule = async (id: string) => {
    try {
      console.log(id);
      //   setStudentSchedule(["hi", "hi"]);
      setIsLoading(false);
      const response: ScheduleStudentEntry[] | null =
        await UseGetStudentScheduleRequest(id);
      setStudentSchedule(response);
      //   determineSearchData({ data: response });
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setStudentSchedule(null);
    }
  };

  return {
    getStudentSchedule,
    studentSchedule,
  };
};

export default UseGetStudentSchedule;
