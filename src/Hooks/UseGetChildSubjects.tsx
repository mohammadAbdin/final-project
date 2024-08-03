import { useState } from "react";

import { UseGetChildSubjectsRequest } from "../Api/UseGetChildSubjectsRequest";
import { StudentDetailsType } from "../Types/StudentDetailsType";

interface UseGetChildSubjectsRequestReturn {
  getChildSubjects: () => Promise<void>;
  childSubjects: StudentDetailsType | null;
}

const UseGetChildSubjects = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  student_id: string | undefined
): UseGetChildSubjectsRequestReturn => {
  const [childSubjects, setChildSubjects] = useState<StudentDetailsType | null>(
    null
  );

  const getChildSubjects = async () => {
    try {
      //   console.log(id);
      //   setTeacherSchedule(["hi", "hi"]);
      setIsLoading(false);
      const response: StudentDetailsType | null =
        await UseGetChildSubjectsRequest(student_id);
      setChildSubjects(response);
      //   determineSearchData({ data: response });
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setChildSubjects(null);
    }
  };

  return {
    getChildSubjects,
    childSubjects,
  };
};

export default UseGetChildSubjects;
