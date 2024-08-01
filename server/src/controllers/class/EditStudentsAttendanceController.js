import getclassModel from "../../models/ClassSchema.js";

export const EditStudentsAttendance = async (req, res) => {
  try {
    const { studentsWithAttendance, selectedDate, teacher_id, classNumber } =
      req.body;
    if (!studentsWithAttendance || !selectedDate || !teacher_id) {
      return res.status(400).json({ message: "Invalid request data" });
    }
    const Class = await getclassModel();
    const classObj = await Class.findOne({ class: classNumber });
    if (!classObj) {
      return res.status(404).json({ message: "Class not found" });
    }
    const subject = classObj.subjects.find(
      (subject) => subject.teacher_id === teacher_id
    );
    if (!subject) {
      return res
        .status(404)
        .json({ message: "Subject not found for this teacher" });
    }
    if (!subject.date) {
      subject.date = [];
    }
    let dateRecord = subject.date.find((date) => date.date === selectedDate);
    if (!dateRecord) {
      dateRecord = {
        date: selectedDate,
        students: studentsWithAttendance.map(({ student_id, attendance }) => ({
          student_id,
          attendance,
        })),
      };
      subject.date.push(dateRecord);
    } else {
      dateRecord.students = studentsWithAttendance.map(
        ({ student_id, attendance }) => ({
          student_id,
          attendance,
        })
      );
    }
    console.log(subject.date);
    await Class.updateOne(
      { class: classNumber, "subjects.teacher_id": teacher_id },
      { $set: { "subjects.$.date": subject.date } }
    );
    res.json({ message: "Attendance updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update attendance" });
  }
};
