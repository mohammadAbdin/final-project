import getclassModel from "../../models/ClassSchema.js";
import getStudentModel from "../../models/StudentSchema.js";
export const GetClassDeatils = async (req, res) => {
  try {
    const { id, classNumber } = req.query;
    const Class = await getclassModel();
    const classes = await Class.findOne({ class: classNumber });
    const filteredSubjects = classes.subjects.filter(
      (subject) => subject.teacher_id === id
    );
    const Student = await getStudentModel();
    const students = await Student.find({ class: classNumber });
    const exams = filteredSubjects.flatMap((subject) => subject.exams);
    const resources = filteredSubjects.flatMap((subject) => subject.resources);

    res
      .status(200)
      .json({ exams: exams, resources: resources, students: students });
  } catch (error) {
    throw new Error("Failed to fetch classes");
  }
};
