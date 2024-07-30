import React from "react";
import { Link } from "react-router-dom";
import TeacherReportsComponent from "./TeacherReportsComponent/TeacherReportsComponent";

type Class = {
  id: number;
  name: string;
};

const classes: Class[] = [
  { id: 1, name: "Class A" },
  { id: 2, name: "Class B" },
  { id: 3, name: "Class C" },
  // Add more classes as needed
];

const ClassesList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Classes List</h1>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {classes.map((classItem) => (
          <li
            key={classItem.id}
            className="flex justify-between items-center border-b py-2 last:border-b-0"
          >
            <Link
              to={`/classes/${classItem.id}`}
              className="text-blue-500 hover:underline"
            >
              {classItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassesList;
