import axios from "axios";

async function AddNewExam(
  exam: string,
  className: string,
  id: string
): Promise<void> {
  try {
    const response = await axios.post("http://localhost:5001/class/Add-exam", {
      className,
      exam,
      id,
    });
    return response.data;
  } catch (error) {
    console.error("There was an error adding the user:", error);
    throw error;
  }
}

export default AddNewExam;
