import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
}
interface Exam {
  id: number;
  title: string;
  students: Student[];
}

const TeacherReportsComponent = ({
  examsData,
  isTeacher,
}: {
  examsData: Exam[];
  isTeacher: boolean;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // const filteredExamsData = examsData.filter((exam) =>
  //   exam.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="overflow-x-auto p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4 flex items-center">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by student name..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {isTeacher && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Student Name
              </th>
            )}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Grade
            </th>

            {isTeacher && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredExamsData.map((exam, index) => (
            <tr key={index}>
              {isTeacher && (
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  {exam.studentName}
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-left">
                {exam.grade}
              </td>

              {isTeacher && (
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherReportsComponent;
