import axios from "axios";

import { ParentOptionsType } from "./../Types/ParentOptionsType";

export const getAllParentIds = async (): Promise<ParentOptionsType[]> => {
  try {
    const response = await axios.get<ParentOptionsType[]>(
      `https://final-project-1-hjx7.onrender.comparent/all-ids`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching parent data:", error);
    return [];
  }
};
