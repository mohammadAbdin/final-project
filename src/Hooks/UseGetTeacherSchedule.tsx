import { useState } from "react";
import { ScheduleEntry } from "../Types/ScheduleEntry";

import { UseGetTeacherScheduleRequest } from "../Api/UseGetTeacherScheduleRequest";

interface UseGetTeacherScheduleReturn {
  getTeacherSchedule: (id: string) => Promise<void>;
  teacherSchedule: ScheduleEntry[] | null;
}

const UseGetTeacherSchedule = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): UseGetTeacherScheduleReturn => {
  const [teacherSchedule, setTeacherSchedule] = useState<
    ScheduleEntry[] | null
  >(null);

  const getTeacherSchedule = async (id: string) => {
    try {
      //   console.log(id);
      //   setTeacherSchedule(["hi", "hi"]);
      setIsLoading(false);
      const response: ScheduleEntry[] | null =
        await UseGetTeacherScheduleRequest(id);
      setTeacherSchedule(response);
      //   determineSearchData({ data: response });
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setTeacherSchedule(null);
    }
  };

  return {
    getTeacherSchedule,
    teacherSchedule,
  };
};

export default UseGetTeacherSchedule;
