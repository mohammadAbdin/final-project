import axios from "axios";

import { ParentOptionsType } from "./../Types/ParentOptionsType";

export const getAllParentIds = async (): Promise<ParentOptionsType[]> => {
  try {
    const response = await axios.get<ParentOptionsType[]>(
      `http://localhost:5001/parent/all-ids`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching parent data:", error);
    return [];
  }
};
