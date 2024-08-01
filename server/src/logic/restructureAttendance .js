export function restructureAttendance(data, selectedDate) {
  const { dates, students } = data;

  const attendanceRecord = dates.find((record) => record.date === selectedDate);
  const presentStudents = attendanceRecord ? attendanceRecord.students : [];

  const presentStudentIds = new Set(presentStudents.map((s) => s.student_id));

  return students.map((student) => ({
    student_id: student.student_id,
    studentName: student.name,
    attendance: presentStudentIds.has(student.student_id),
  }));
}
