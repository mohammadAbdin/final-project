import getTeacherModel from "../../models/TeacherSchema.js";

export const GetTeacherClasses = async (req, res) => {
  try {
    const { id } = req.params;
    const Teacher = await getTeacherModel();
    console.log(id);
    const teacher = await Teacher.findOne({ teacher_id: id });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    console.log(Teacher);

    const uniqueClasses = Array.from(
      teacher.schedule.reduce(
        (acc, { class: className }) => acc.add(className),
        new Set()
      )
    );

    // Map unique classes to objects with id and name
    const classes = uniqueClasses.map((className, index) => ({
      id: index + 1,
      name: className,
    }));
    console.log(classes);
    res.status(200).json(classes);
  } catch (error) {
    console.error("Error fetching teacher schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};
