import axios from "axios";
import { ClassSchedule } from "../Types/ClassScheduleType";

// Define the TypeScript interfaces

export const getAllClasses = async (): Promise<ClassSchedule[]> => {
  try {
    const response = await axios.get<ClassSchedule[]>(
      "https://final-project-1-hjx7.onrender.com/class/all-classes"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching class data:", error);
    return [];
  }
};
