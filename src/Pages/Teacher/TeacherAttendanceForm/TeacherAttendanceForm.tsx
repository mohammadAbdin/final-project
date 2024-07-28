import React, { useState } from "react";
import examsData from "../../../demoData/examsData";

const TeacherAttendanceForm: React.FC = () => {
  const [data] = useState(examsData);

  return (
    <div className="overflow-x-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">
        Teacher Evaluation on Exams
      </h2>
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Exam ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Exam Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Grade
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Student
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data["Teacher Evaluation on Exams"].map((exam, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-left">
                {exam.exam_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left">
                {exam.examName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left">
                {exam.grade}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left">
                {exam.student}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherAttendanceForm;
