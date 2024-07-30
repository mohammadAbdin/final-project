import React, { useState } from "react";

interface Student {
  student_id: number;
  studentName: string;
  attendance: boolean;
  details: string;
}

const students: Student[] = [
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

const StudentInfo: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    if (openDropdown === id) {
      setOpenDropdown(null); // Close if already open
    } else {
      setOpenDropdown(id); // Open the clicked dropdown
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      {students.map((student) => (
        <div
          key={student.student_id}
          className="flex justify-between items-center bg-white border rounded-lg p-4 shadow mb-2"
        >
          <span className="text-lg">{student.studentName}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => toggleDropdown(student.student_id)}
          >
            Go Feedback
          </button>
          {openDropdown === student.student_id && (
            <div className="mt-2 p-2 border border-gray-300 rounded bg-gray-100">
              <p className="text-gray-700">{student.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StudentInfo;
