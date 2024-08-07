import getclassModel from "../../models/ClassSchema.js";

export const DeleteVideo = async (req, res) => {
  const { classNumber, teacher_id, topicId, videoId } = req.query;

  try {
    const Class = await getclassModel();

    const classObj = await Class.findOne({ class: classNumber });

    if (!classObj) {
      return res.status(404).json({ message: "Class not found" });
    }

    const subject = classObj.subjects.find(
      (sub) => sub.teacher_id === teacher_id
    );

    if (!subject) {
      return res
        .status(404)
        .json({ message: "Subject not found for this teacher" });
    }

    const resource = subject.resources.find(
      (res) => res._id.toString() === topicId
    );

    if (!resource) {
      return res.status(404).json({ message: "Resource not found" });
    }

    const videoIndex = resource.videos.findIndex(
      (vid) => vid._id.toString() === videoId
    );

    if (videoIndex === -1) {
      return res.status(404).json({ message: "Video not found" });
    }

    resource.videos.splice(videoIndex, 1);
    console.log(resource);

    await classObj.save();

    return res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    console.error("Error deleting video:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// i must find the obj with the classNumber ==class then to chose the subject that has the teacher_id then in the resources array to search for the resourceSchema
// to search the obj that has the same topicId and inside the videos to delete the video obj thta has the videoId
// const subjectSchema = new mongoose.Schema({
//     subject: { type: String, required: true },
//     teacher_id: { type: String, required: true },
//     resources: [resourceSchema], // URLs for YouTube videos or other resources
//     exams: [examSchema],
//     date: [attendanceSchema],
//   });

//   const scheduleSchema = new mongoose.Schema({
//     day: String, // e.g., 'Monday'
//     period: String, // e.g., '09:00-10:00'
//     subject: String,
//   });
//   const classSchema = new mongoose.Schema({
//     class: {
//       type: String,
//       required: true,
//     },
//     schedule: { type: [scheduleSchema], required: true },
//     subjects: { type: [subjectSchema], required: true },
//   });
//   const videosSchema = new mongoose.Schema({
//     description: {
//       type: String,
//       required: true,
//     },
//     url: {
//       type: String, // URL for YouTube videos or other resources
//       required: true,
//     },
//     title: {
//       type: String,
//       required: true,
//     },
//   });
//   const resourceSchema = new mongoose.Schema({
//     title: {
//       type: String,
//       required: true,
//     },
//     videos: [videosSchema],
//   });
