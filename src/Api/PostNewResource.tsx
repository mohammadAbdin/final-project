import axios from "axios";

async function AddNewResource(
  newTopic: {
    title: string;
    videos: never[];
  },
  id: string | undefined,
  classNumber: string | undefined
): Promise<void> {
  try {
    console.log(newTopic, id);

    const response = await axios.post(
      "http://localhost:5001/class/Add-resource",
      {
        newTopic,
        id,
        classNumber,
      }
    );
    console.log(response);

    // return response.data;
  } catch (error) {
    console.error("There was an error adding the user:", error);
    throw error;
  }
}

export default AddNewResource;
