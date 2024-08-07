import axios from "axios";
import { FeedbackContent } from "../Types/FeedbackContent";

async function AddNewReport(
  newFeedback: FeedbackContent,
  student_id: string | undefined
): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:5001/student/add-report",
      { newFeedback, student_id }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error adding the user:", error);
    throw error;
  }
}

export default AddNewReport;
