import getTeacherModel from "../../models/TeacherSchema.js";

export const GetTeacherSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const Teacher = await getTeacherModel();
    console.log(id);
    const teacher = await Teacher.findOne({ teacher_id: id });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    const newArray = teacher.schedule.map(
      ({ day, period, class: className }) => ({
        day,
        period,
        class: className,
      })
    );
    res.status(200).json(newArray);
  } catch (error) {
    console.error("Error fetching teacher schedule:", error);
    res.status(500).json({ message: "Server error" });
  }
};
