import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface TeacherReport {
  teacher_name: string
  date: string
  title: string
  description: string
}

interface TeacherReportCardProps {
  teacherReportData: TeacherReport[]
}

const TeacherReportCard: React.FC<TeacherReportCardProps> = ({
  teacherReportData,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="overflow-x-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Teacher Reports</h2>
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Teacher Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teacherReportData.map((report, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  {report.teacher_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  {report.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  {report.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-left">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="relative text-blue-900 hover:text-white hover:bg-gray-200 rounded-full p-1"
                  >
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </td>
              </tr>
              {openIndex === index && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 bg-gray-50 text-gray-700"
                  >
                    {report.description}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeacherReportCard
