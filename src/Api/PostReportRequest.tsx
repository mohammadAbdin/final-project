import axios from "axios";
import { FeedbackContent } from "../Types/FeedbackContent";

async function AddNewReport(
  newFeedback: FeedbackContent,
  student_id: string | undefined
): Promise<void> {
  try {
    console.log(newFeedback);
    console.log(student_id);

    const response = await axios.post(
      "https://final-project-1-hjx7.onrender.com/student/add-report",
      { newFeedback, student_id }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error adding the user:", error);
    throw error;
  }
}

export default AddNewReport;
