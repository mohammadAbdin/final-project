import getclassModel from "../../models/ClassSchema.js";
export const PostResource = async (req, res) => {
  const { newTopic, id, classNumber } = req.body;
  const Class = await getclassModel();
  const classObj = await Class.findOne({ class: classNumber });
  if (!classObj) {
    return res.status(404).json({ message: "Class not found" });
  }
  const subject = classObj.subjects.find(
    (subject) => subject.teacher_id === id
  );
  subject.resources.push(newTopic);
  await classObj.save();
  res
    .status(201)
    .json({ message: "Resource added successfully", topic: newTopic });
};
