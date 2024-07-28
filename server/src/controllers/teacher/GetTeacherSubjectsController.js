import getTeacherModel from "../../models/TeacherSchema.js";

export const GetTeacherSubjects = async (req, res) => {
  try {
    const { id } = req.params;
    const Teacher = await getTeacherModel();
    console.log(id);
    const teacher = await Teacher.findOne({ teacher_id: id });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    const uniqueClasses = Array.from(
      teacher.schedule.reduce(
        (acc, { class: className }) => acc.add(className),
        new Set()
      )
    );
    console.log(uniqueClasses);
    res.status(200).json(uniqueClasses);
  } catch (error) {
    console.error("Error fetching teacher schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};
