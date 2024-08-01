/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import UseGetClassStudentsAttendance from "../../Hooks/UseGetClassStudentsAttendance";

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
  const location = useLocation();
  const selectedDate = location.state.selectedDate;
  console.log(selectedDate);

  const [expandedStudentId, setExpandedStudentId] = useState<number | null>(
    null
  );
  const { classNumber } = useParams();
  console.log(classNumber);

  const [studentList, setStudentList] = useState(students);
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const { getClassStudentsAttendance, classStudentsAttendance } =
    UseGetClassStudentsAttendance(setIsLoading, selectedDate, classNumber);

  useEffect(() => {
    if (isLoading && user && !classStudentsAttendance) {
      if (user._id != undefined) getClassStudentsAttendance(user._id);
    }
  }, [isLoading, user, getClassStudentsAttendance, classStudentsAttendance]);

  if (isLoading || classStudentsAttendance === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

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
    console.log(selectedDate);
    const studentsWithAttendanceTrue = studentList.filter(
      (student) => student.attendance
    );

    console.log(studentsWithAttendanceTrue);
  };

  return (
    <fieldset className="p-8 bg-gradient-to-br from-gray-100 via-white to-gray-200 rounded-2xl shadow-2xl">
      <legend className="sr-only">Student List</legend>
      <div className="space-y-6">
        {studentList.map((student) => (
          <div
            key={student.student_id}
            className="flex items-start gap-4 p-6 border border-gray-300 rounded-md bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
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
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-sm shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-150 ease-in-out"
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
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-sm shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {/* {attendanceReport && (
          <div className="mt-6 p-6 border border-gray-300 rounded-lg bg-white shadow-sm">
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              Attendance Report
            </h3>
            <pre className="whitespace-pre-wrap text-sm text-gray-700">
              {attendanceReport}
            </pre>
          </div>
        )} */}
      </div>
    </fieldset>
  );
};

export default StudentList;
