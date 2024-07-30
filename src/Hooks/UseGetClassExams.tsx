import { useState } from "react";

import { UseUseGetClassDetailsRequest } from "./../Api/UseUseGetClassExamsRequest";
import { ClassInfoDetails } from "../Types/ClassInfoDetails";

interface UseGetClassExamsReturn {
  getClassDetails: (id: string) => Promise<void>;
  classDetails: ClassInfoDetails | null;
}

const UseGetClassDetails = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  classNumber: string | undefined
): UseGetClassExamsReturn => {
  const [classDetails, setClassDetails] = useState<ClassInfoDetails | null>(
    null
  );

  const getClassDetails = async (id: string) => {
    try {
      //   console.log(classNumber, id);

      setIsLoading(false);
      const response: ClassInfoDetails | null =
        await UseUseGetClassDetailsRequest(id, classNumber);
      setClassDetails(response);
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setClassDetails(null);
    }
  };

  return {
    getClassDetails,
    classDetails,
  };
};

export default UseGetClassDetails;
