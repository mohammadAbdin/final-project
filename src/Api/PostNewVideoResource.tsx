import axios from "axios";
import { VideoType } from "../Types/TopicsTypes";

async function AddNewVideoResource(
  videoData: VideoType,
  topicId: string | null,
  classNumber: string | undefined,
  teacher_id: string | undefined
): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:5001/class/Add-video-resource",
      {
        videoData,
        topicId,
        teacher_id,
        classNumber,
      }
    );
    return response.data;
  } catch (error) {
    console.error("There was an error adding the user:", error);
    throw error;
  }
}

export default AddNewVideoResource;
