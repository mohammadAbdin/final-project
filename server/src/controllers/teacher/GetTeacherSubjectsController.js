import getTeacherModel from "../../models/TeacherSchema.js";

export const GetTeacherClasses = async (req, res) => {
  try {
    const { id } = req.params;
    const Teacher = await getTeacherModel();
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

    const classes = uniqueClasses.map((className, index) => ({
      id: index + 1,
      name: className,
    }));
    res.status(200).json(classes);
  } catch (error) {
    console.error("Error fetching teacher schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};
