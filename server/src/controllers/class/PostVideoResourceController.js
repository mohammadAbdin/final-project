import getclassModel from "../../models/ClassSchema.js";
export const PostVideoResource = async (req, res) => {
  const { videoData, topicId, teacher_id, classNumber } = req.body;
  console.log(videoData, topicId, teacher_id);
  const Class = await getclassModel();
  const classObj = await Class.findOne({ class: classNumber });
  if (!classObj) {
    return res.status(404).json({ message: "Class not found" });
  }
  const subject = classObj.subjects.find(
    (subject) => subject.teacher_id === teacher_id
  );
  const resources = subject.resources.find(
    (resource) => resource._id == topicId
  );
  resources.videos.push(videoData);
  console.log(resources);
  await classObj.save();
};
