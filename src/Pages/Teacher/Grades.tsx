import React from "react";

type Grade = {
  id: number;
  studentName: string;
  grade: number;
};

const grades: Grade[] = [
  { id: 1, studentName: "John Doe", grade: 95 },
  { id: 2, studentName: "Jane Smith", grade: 88 },
  { id: 3, studentName: "Jim Brown", grade: 76 },
];

const GradesList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Grades List</h1>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {grades.map((grade) => (
          <li
            key={grade.id}
            className="flex justify-between items-center border-b py-2 last:border-b-0"
          >
            <span>{grade.studentName}</span>
            <span className="font-semibold">{grade.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GradesList;
