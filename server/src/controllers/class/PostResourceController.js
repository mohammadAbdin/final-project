import getclassModel from "../../models/ClassSchema.js";
export const PostResource = async (req, res) => {
  const { newTopic, id, classNumber } = req.body;
  console.log(newTopic, id);
  const Class = await getclassModel();
  const classObj = await Class.findOne({ class: classNumber });
  if (!classObj) {
    return res.status(404).json({ message: "Class not found" });
  }
  //   console.log(classObj);
  const subject = classObj.subjects.find(
    (subject) => subject.teacher_id === id
  );
  //   console.log(subject);
  console.log("hi");
  subject.resources.push(newTopic);
  console.log(subject.resources);
  await classObj.save();
};
