import axios from "axios";

async function deleteVideosRequest(
  classNumber: string | undefined,
  teacher_id: string | undefined,
  topicId: string | null,
  videoId: string
): Promise<void> {
  try {
    const response = await axios.delete(
      "http://localhost:5001/class/delete-video",
      {
        params: {
          classNumber,
          teacher_id,
          topicId,
          videoId,
        },
      }
    );

    if (response.status === 200) {
      console.log("Video deleted successfully");
    } else {
      console.error("Failed to delete video");
    }
  } catch (error) {
    console.error("There was an error deleting the video:", error);
    throw error;
  }
}

export default deleteVideosRequest;
