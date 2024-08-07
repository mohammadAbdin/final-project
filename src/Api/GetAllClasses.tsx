import axios from "axios";
import { ClassSchedule } from "../Types/ClassScheduleType";

export const getAllClasses = async (): Promise<ClassSchedule[]> => {
  try {
    const response = await axios.get<ClassSchedule[]>(
      "https://final-project-1-hjx7.onrender.comclass/all-classes"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching class data:", error);
    return [];
  }
};
