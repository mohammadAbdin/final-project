import axios from "axios";

import { ParentOptionsType } from "./../Types/ParentOptionsType";

// Update the function to use the correct type
export const getAllParentIds = async (): Promise<ParentOptionsType[]> => {
  try {
    const response = await axios.get<ParentOptionsType[]>(
      `http://localhost:5001/parent/all-ids`
    );

    // Log the response data to check the structure
    console.log(response.data);

    // Return the response data
    return response.data;
  } catch (error) {
    console.error("Error fetching parent data:", error);
    return [];
  }
};
