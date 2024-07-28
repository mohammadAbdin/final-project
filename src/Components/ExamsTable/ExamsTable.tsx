const ExamsTable = ({ examsData, subjectName }) => {
  return (
    <div className="overflow-x-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{subjectName} Exams Scores</h2>
      <table className="min-w-full bg-white divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Exam Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Grade
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {examsData.map((exam) => (
            <tr key={exam.exam_id}>
              <td className="px-6 py-4 whitespace-nowrap text-left">
                {exam.examName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-left">
                {exam.grade}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExamsTable
