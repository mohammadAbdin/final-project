import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FeedbackToTeacher } from "../FeedbackToTeacher/FeedbackToTeacher";
import { reportType } from "../../Types/StudentDetailsType";

interface TeacherReportCardProps {
  teacherReportData: reportType[];
}

const TeacherReportCard: React.FC<TeacherReportCardProps> = ({
  teacherReportData,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="c-div-s overflow-x-auto">
      <h2 className="h2-s">Teacher Reports</h2>
      <table className="table-s">
        <thead className="thead-s">
          <tr>
            <th className="th-s">Teacher Name</th>
            <th className="th-s">Date</th>
            <th className="th-s">Title</th>
            <th className="th-s">Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {teacherReportData &&
            teacherReportData.map((report, index) => {
              if (report != null || report != undefined)
                return (
                  <React.Fragment key={index}>
                    <tr
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="td-s">{report.teacherName}</td>
                      <td className="td-s">{report.date}</td>
                      <td className="td-s">{report.title}</td>
                      <td className="td-s">
                        <button
                          onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                          }
                          className="expand-button"
                        >
                          {openIndex === index ? (
                            <FaChevronUp />
                          ) : (
                            <FaChevronDown />
                          )}
                        </button>
                      </td>
                    </tr>
                    {openIndex === index && (
                      <tr>
                        <td
                          colSpan={4}
                          className="expanded-row px-6 py-4 bg-gray-50 text-gray-700"
                        >
                          {report.description}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
            })}
        </tbody>
      </table>
      <div className="flex justify-item">
        <FeedbackToTeacher />
      </div>
    </div>
  );
};

export default TeacherReportCard;
