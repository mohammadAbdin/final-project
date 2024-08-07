import axios from "axios";
import { FeedbackContent } from "../Types/FeedbackContent";

async function AddNewReport(
  newFeedback: FeedbackContent,
  student_id: string | undefined
): Promise<void> {
  try {
    console.log(newFeedback);

    // const updatedReport = {
    //   date: "2024/08/07",
    //   description:
    //     "As a parent, I am proud of Mohammad's dedication and commitment to his studies. He consistently completes his homework on time and shows great enthusiasm for learning new subjects. His recent project in history was particularly impressive, demonstrating both creativity and a deep understanding of the material.",
    //   reportType: "Parent",
    //   title: "Proud Parent Report",
    //   writer_id: "66af3fb72ba7cf6ff9a36155",
    // };
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
