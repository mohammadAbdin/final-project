import { useState } from "react";

// Updated data with attendance and details
const students = [
  {
    student_id: 1,
    studentName: "John Doe",
    attendance: true,
    details: "John is a diligent student.",
  },
  {
    student_id: 2,
    studentName: "Jane Smith",
    attendance: false,
    details: "Jane needs to improve attendance.",
  },
  {
    student_id: 3,
    studentName: "Michael Johnson",
    attendance: true,
    details: "Michael is active in class discussions.",
  },
  {
    student_id: 4,
    studentName: "Emily Davis",
    attendance: true,
    details: "Emily consistently submits quality assignments.",
  },
  {
    student_id: 5,
    studentName: "William Brown",
    attendance: false,
    details: "William missed the last group project deadline.",
  },
];

const StudentList = () => {
  const [expandedStudentId, setExpandedStudentId] = useState<number | null>(
    null
  );
  const [studentList, setStudentList] = useState(students);
  const [attendanceReport, setAttendanceReport] = useState<string | null>(null);

  const toggleDetails = (student_id: number) => {
    setExpandedStudentId(expandedStudentId === student_id ? null : student_id);
  };

  const handleCheckboxChange = (student_id: number) => {
    const updatedStudents = studentList.map((student) =>
      student.student_id === student_id
        ? { ...student, attendance: !student.attendance }
        : student
    );
    setStudentList(updatedStudents);
  };

  const handleSubmit = () => {
    const presentStudents = studentList
      .filter((student) => student.attendance)
      .map((student) => `${student.studentName} (ID: ${student.student_id})`)
      .join(", ");

    const absentStudents = studentList
      .filter((student) => !student.attendance)
      .map((student) => `${student.studentName} (ID: ${student.student_id})`)
      .join(", ");

    const report = `
      Present Students: ${presentStudents || "None"}
      Absent Students: ${absentStudents || "None"}
    `;
    setAttendanceReport(report);
  };

  return (
    <fieldset className="p-8 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-2xl">
      <legend className="sr-only">Student List</legend>
      <div className="space-y-6">
        {studentList.map((student) => (
          <div
            key={student.student_id}
            className="flex items-start gap-4 p-6 border border-gray-300 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <input
              type="checkbox"
              id={`student_${student.student_id}`}
              className="h-5 w-5 text-teal-500 border-gray-300 rounded-sm focus:ring-teal-500 transition duration-150 ease-in-out"
              checked={student.attendance}
              onChange={() => handleCheckboxChange(student.student_id)}
            />
            <div className="flex-1">
              <label
                htmlFor={`student_${student.student_id}`}
                className="block cursor-pointer"
              >
                <strong className="text-xl font-semibold text-gray-800">
                  {student.studentName}
                </strong>
                <p
                  className={`mt-2 text-sm ${
                    expandedStudentId === student.student_id
                      ? "text-gray-700"
                      : "text-gray-500"
                  }`}
                >
                  {expandedStudentId === student.student_id && student.details}
                </p>
              </label>
            </div>
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
              onClick={() => toggleDetails(student.student_id)}
            >
              {expandedStudentId === student.student_id
                ? "Hide Details"
                : "View Details"}
            </button>
          </div>
        ))}
        <div className="flex justify-center mt-8">
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {attendanceReport && (
          <div className="mt-6 p-6 border border-gray-300 rounded-lg bg-white shadow-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Attendance Report
            </h3>
            <pre className="whitespace-pre-wrap text-sm text-gray-700">
              {attendanceReport}
            </pre>
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default StudentList;
