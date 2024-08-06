import { useState } from "react";

import { UseGetTeacherSubjectsRequest } from "./../Api/UseGetTeacherSubjectsRequest";
import { ClassType } from "../Types/ClassType";

interface UseGetTeacherCLassReturn {
  getTeacherCLass: (id: string) => Promise<void>;
  teacherClass: ClassType[] | null;
}

const UseGetTeacherCLass = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): UseGetTeacherCLassReturn => {
  const [teacherClass, setTeacherClass] = useState<ClassType[] | null>(null);

  const getTeacherCLass = async (id: string) => {
    try {
      setIsLoading(false);
      const response: ClassType[] | null = await UseGetTeacherSubjectsRequest(
        id
      );
      setTeacherClass(response);
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setTeacherClass(null);
    }
  };

  return {
    getTeacherCLass,
    teacherClass,
  };
};

export default UseGetTeacherCLass;
