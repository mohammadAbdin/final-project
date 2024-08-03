interface ExamTableProps {
  examsData: Array<{ examName: string; grade: string | number }>;
}

const ExamsTable = ({ examsData }: ExamTableProps): JSX.Element => {
  return (
    <div className="c-div-s overflow-x-auto">
      <h2 className="h2-s"> Exams Scores</h2>
      <table className="table-s">
        <thead className="bg-gray-100">
          <tr>
            <th className="th-s">Exam Name</th>
            <th className="th-s">Grade</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200s">
          {examsData.map((exam, index) => (
            <tr
              // key={exa}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="td-s">{exam.examName}</td>
              <td className="td-s">{exam.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamsTable;
