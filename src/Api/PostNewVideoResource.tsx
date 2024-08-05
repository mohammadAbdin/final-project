import axios from "axios";
import { VideoType } from "../Types/TopicsTypes";

async function AddNewVideoResource(
  videoData: VideoType,
  topicId: string | null,
  classNumber: string | undefined,
  teacher_id: string | undefined
): Promise<void> {
  try {
    console.log(videoData, topicId, teacher_id, classNumber);

    const response = await axios.post(
      "https://final-project-1-hjx7.onrender.com/class/Add-video-resource",
      {
        videoData,
        topicId,
        teacher_id,
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

export default AddNewVideoResource;
