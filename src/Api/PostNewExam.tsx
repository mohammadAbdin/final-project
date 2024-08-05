import axios from "axios";

async function AddNewExam(
  exam: string,
  className: string,
  id: string
): Promise<void> {
  try {
    console.log(exam, className, id);

    const response = await axios.post(
      "https://final-project-1-hjx7.onrender.com/class/Add-exam",
      {
        className,
        exam,
        id,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error adding the user:", error);
    throw error;
  }
}

export default AddNewExam;
