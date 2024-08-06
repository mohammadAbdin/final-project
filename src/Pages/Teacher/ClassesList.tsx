import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import UseGetTeacherCLass from "../../Hooks/UseGetTeacherCLass";

const ClassesList: React.FC = () => {
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  const { getTeacherCLass, teacherClass } = UseGetTeacherCLass(setIsLoading);

  useEffect(() => {
    if (isLoading && user && !teacherClass) {
      if (user._id != undefined) getTeacherCLass(user._id);
    }
  }, [isLoading, user, getTeacherCLass, teacherClass]);

  if (isLoading || teacherClass === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Classes List</h1>
      <ul className="bg-white shadow-md rounded-lg p-4">
        {teacherClass.map((classItem) => (
          <li
            key={classItem.id}
            className="flex justify-between items-center border-b p-2 last:border-b-0 hover:bg-blue-100"
          >
            <Link to={`/class/${classItem.name}`} className="text-gray-700">
              {classItem.name}th Class
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassesList;
