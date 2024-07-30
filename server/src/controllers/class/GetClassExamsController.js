import getclassModel from "../../models/ClassSchema.js";
// import { restructureAllClasses } from "./restructureAllClasses.js";
export const GetClassExams = async (req, res) => {
  try {
    const { id, classNumber } = req.query;
    const Class = await getclassModel();
    const classes = await Class.findOne({ class: classNumber });
    console.log(classes.subjects);
    const filteredSubjects = classes.subjects.filter(
      (subject) => subject.teacher_id === id
    );
    const exams = filteredSubjects.flatMap((subject) => subject.exams);
    const resources = filteredSubjects.flatMap((subject) => subject.resources);
    res.status(200).json({ exams: exams, resources: resources });
  } catch (error) {
    throw new Error("Failed to fetch classes");
  }
};

// subjects: [
//     {
//       subject: 'Science',
//       teacher_id: '66a2bb0cce52e0478f0eff34',
//       _id: new ObjectId('66a2bb0dce52e0478f0eff3d'),
//       resources: [],
//       exams: []
//     },
//     {
//       subject: 'Physics',
//       teacher_id: '66a55ce76f29388c33df0014',
//       _id: new ObjectId('66a55ce76f29388c33df0021'),
//       resources: [Array],
//       exams: [Array]
//     }
//   ]
