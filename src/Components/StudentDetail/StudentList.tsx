/* eslint-disable @typescript-eslint/no-unused-vars */
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

  const toggleDetails = (student_id: number) => {
    if (expandedStudentId === student_id) {
      setExpandedStudentId(null); // Collapse if already expanded
    } else {
      setExpandedStudentId(student_id); // Expand if not expanded
    }
  };

  return (
    <fieldset>
      <legend className="sr-only">Checkboxes</legend>
      <div className="space-y-2">
        {studentList.map((student) => (
          <div key={student.student_id}>
            <label
              htmlFor={`student_${student.student_id}`}
              className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`student_${student.student_id}`}
                  className="size-4 rounded border-gray-300"
                  checked={student.attendance}
                  onChange={() => {
                    const updatedStudents = studentList.map((s) =>
                      s.student_id === student.student_id
                        ? { ...s, attendance: !s.attendance }
                        : s
                    );
                    setStudentList(updatedStudents);
                  }}
                />
              </div>

              <div>
                <strong className="font-medium text-gray-900">
                  {student.studentName}
                </strong>
                {/* <p className="mt-1 text-sm text-gray-700">
                  ID: {student.student_id} |{" "}
                  {student.attendance ? "Present" : "Absent"}
                </p> */}

                {/* Details section */}
                {expandedStudentId === student.student_id && (
                  <p className="mt-2 text-sm text-gray-700">
                    {student.details}
                  </p>
                )}
              </div>

              <button
                className="ml-auto bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                onClick={() => {
                  console.log(student.student_id);
                }}
              >
                View Details
              </button>
            </label>
          </div>
        ))}
        <div>
          <button className="ml-auto bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg focus:outline-none">
            Submit
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default StudentList;
