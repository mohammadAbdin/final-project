import { useState } from "react";
import { Child } from "../Types/ChildType";

import { UseGetParentChildrenRequest } from "../Api/UseGetParentChildrenRequest";

interface UseGetParentChildrenRequestReturn {
  getParentChildren: (id: string) => Promise<void>;
  parentChildren: Child[] | null;
}

const UseGetParentChildren = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): UseGetParentChildrenRequestReturn => {
  const [parentChildren, setParentChildren] = useState<Child[] | null>(null);

  const getParentChildren = async (id: string) => {
    try {
      setIsLoading(false);
      const response: Child[] | null = await UseGetParentChildrenRequest(id);
      setParentChildren(response);
    } catch (error) {
      console.error("Error fetching user projects:", error);
      setParentChildren(null);
    }
  };

  return {
    getParentChildren,
    parentChildren,
  };
};

export default UseGetParentChildren;
