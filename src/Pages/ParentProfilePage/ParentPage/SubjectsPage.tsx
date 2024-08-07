import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import UseGetChildSubjects from "../../../Hooks/UseGetChildSubjects";
import LineChart from "../../../Components/StatsChart/StatsChart";
import ExamsTable from "../../../Components/ExamsTable/ExamsTable";
import TeacherReportCard from "../../../Components/TeacherReportCard/TeacherReportCard";
import Schedule from "../../../Components/ClassSchedule/Schedule";

import {
  FaCalculator,
  FaFlask,
  FaBook,
  FaUsers,
  FaPalette,
  FaMusic,
  FaHistory,
  FaAtom,
  FaGlobe,
} from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import refactorExamDataChart from "../../../Functions/refactorExamDataChart";
import AttendanceJournal from "./../../../Components/AttendanceJournal/AttendanceJournal";
import { transformAttendanceData } from "../../../Functions/transformAttendanceData";
import { AttendaceDetailsType } from "../../../Types/AttendaceDetailsType";
import Avatar from "../../../Components/Avatar/Avatar";
import { reportType } from "../../../Types/StudentDetailsType";

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
}
function removeUndefinedValues(arr: (reportType | undefined)[]) {
  return arr.filter((item) => item !== undefined);
}
const icons: { [key in string[][number]]: JSX.Element } = {
  Math: <FaCalculator />,
  Science: <FaFlask />,
  English: <FaBook />,
  "Social Studies": <FaUsers />,
  Arts: <FaPalette />,
  Music: <FaMusic />,
  History: <FaHistory />,
  Physics: <FaAtom />,
  Chemistry: <FaFlask />,
  Biology: <FaFlask />,
  Geography: <FaGlobe />,
};

const SubjectsPage: React.FC = () => {
  const { student_id } = useParams<{ student_id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendanceRecord, setAttendanceRecord] = useState<
    AttendaceDetailsType[] | null
  >(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [reports, setReports] = useState<reportType[] | undefined>();
  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  );

  const [subject, setSubject] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [subjects, setSubjects] = useState<string[] | null>(null);
  type PersonalDetails = {
    name: string;
    classNumber: string;
    average: number;
  };

  const personalDetails: PersonalDetails = {
    name: "johnnie walker",
    classNumber: "4",
    average: 87,
  };

  // interface StudentDetailsType {
  //   reports: reportType[];
  //   details: { [subject: string]: detailsType };
  //   schedule: ScheduleEntry[];
  //   personalDetails: {
  //     average: 95;
  //     name: "Jhonnie Walker";
  //     classNumber: "12";
  //   };
  // }
  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id !== undefined) getChildSubjects();
    }
  }, [isLoading, user, getChildSubjects, childSubjects]);
  useEffect(() => {
    if (childSubjects && !isLoading) {
      setSubjects(Object.keys(childSubjects.details));
    }
  }, [childSubjects, isLoading]);
  useEffect(() => {
    if (subjects != null) {
      setSubject(subject || subjects[0]);
      if (subject != null && childSubjects != null) {
        setChartData(
          refactorExamDataChart(childSubjects.details[`${subject}`].examRecords)
        );
        setAttendanceRecord(
          transformAttendanceData(
            childSubjects.details[`${subject}`].attendanceRecord.datesRecord
          )
        );
        const selectedSubjectTeacher =
          childSubjects.details[`${subject}`].teacher_id;
        console.log(selectedSubjectTeacher);
        const reportsArray = childSubjects.reports.map((report) => {
          if (report.writer_id === selectedSubjectTeacher) {
            return report;
          } else return undefined;
        });
        console.log(reportsArray);

        // Example usage

        const cleanedReportsArray = removeUndefinedValues(reportsArray);
        setReports(cleanedReportsArray);
      }
    }
  }, [subjects, subject, childSubjects]);

  if (
    isLoading ||
    childSubjects === null ||
    subjects === null ||
    subject == null ||
    attendanceRecord == null ||
    reports == null
  ) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  // console.log(childSubjects);
  console.log(childSubjects.reports);

  return (
    <div className="main-div-s">
      <div className="mt-3 bg-gray-50 mx-auto">
        <div className="sm:hidden text-left">
          <div className="relative">
            <button
              className={`flex items-center p-2 rounded-lg 
              ${
                isOpen
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-blue-500"
                  : "hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
              } 
              group transition duration-200 ease-in-out`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="mr-2 whitespace-nowrap  flex-1">
                {isOpen ? subject : "Choose subject"}
              </span>
              <span className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white">
                <BiChevronDown />
              </span>
            </button>

            {isOpen && (
              <div className="absolute z-10 mt-2 left-0 w-48 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                {subjects.map((subjectItem, index) => (
                  <button
                    key={index}
                    className={`block w-full px-4 py-1 text-sm text-left 
                    ${
                      subject === subjectItem
                        ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-blue-500"
                        : "hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                    }`}
                    onClick={() => {
                      setSubject(subjectItem);
                      setIsOpen(false);
                    }}
                  >
                    {icons[subjectItem]} {subjectItem}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="hidden sm:flex flex-wrap justify-center space-x-6">
          {subjects.map((subjectItem, index) => (
            <button
              key={index}
              className={`flex items-center p-2 rounded-lg 
              ${
                subject === subjectItem
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
              } 
              group m-1 transition duration-200 ease-in-out`}
              value={subjectItem}
              onClick={() => {
                setSubject(subjectItem);
                setIsOpen(false); // סגירת ה-dropdown בלחיצה על נושא
              }}
            >
              <span className="ml-2 whitespace-nowrap text-blue-500">
                {subjectItem}
              </span>
              <span className="w-5 h-5 ml-1 text-blue-500 group-hover:text-gray-900 dark:group-hover:text-blue-500">
                {icons[subjectItem]}
              </span>
            </button>
          ))}
        </div>
      </div>
      <Avatar
        studentName={personalDetails.name}
        classGrade={personalDetails.classNumber}
        averageScore={personalDetails.average}
      />

      {/* <div className="mt-3 flex flex-wrap justify-center space-x-6 bg-gray-50 dark:bg-gray-800 mx-auto">
        {childSubjects.map((subjectItem, index) => (
          <button
            key={index}
            className={`flex items-center p-2 rounded-lg 
        ${
          subject === subjectItem
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
            : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
        } 
        group m-1 transition duration-200 ease-in-out`} // שמירה על עיצוב הכפתור הנבחר
            value={subjectItem}
            onClick={() => {
              setSubject(subjectItem) // עדכון נושא שנבחר
            }}
          >
            <span className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white">
              {icons[subjectItem]}
            </span>
            <span className="flex-1 ms-0.5 whitespace-nowrap">
              {subjectItem}
            </span>
          </button>
        ))}
      </div> */}

      {/* <div className="mt-3 flex flex-wrap justify-center space-x-6 bg-gray-50 dark:bg-gray-800 mx-auto">
        {childSubjects.map((subjectItem, index) => (
          <button
            key={index}
            className="flex items-center p-0 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group m-1"
            value={subjectItem}
            onClick={(e) =>
              setSubject((e.target as HTMLButtonElement).textContent || '')
            }
          >
            <span className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white">
              {icons[subjectItem]}
            </span>
            <span className="flex-1 ms-0.5 whitespace-nowrap">
              {subjectItem}
            </span>
          </button>
        ))}
      </div> */}
      {/* <div className="mt-6 space-y-1 bg-gray-50 dark:bg-gray-800">
        {childSubjects.map((subjectItem, index) => (
          <button
            key={index}
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full text-left"
            value={subjectItem}
            onClick={(e) =>
              setSubject((e.target as HTMLButtonElement).textContent || "")
            }
          >
            {subjectItem}
          </button>
        ))}
      </div>
      <Avatar
        studentName={student.name}
        classGrade={student.classGrade}
        averageScore={student.averageScore}
      />
      {/* <div className="main-info-container">
        <div className="calendar-container">
          <div className="app-container mt-2">
            <AttendanceJournal
              events={mathAttendanceData}
              selectedDate={selectedDate}
              onDateChange={setSelectedDate}
            />
          </div>
        </div>
        <div className="exams-table-container  mt-2 ">
          <ExamsTable
            examsData={examsData}
            subjectName={selectedSubject?.subjectName}
          />
        </div>

        <div className="teacher-report-card-container mt-2">
          <TeacherReportCard teacherReportData={teacherReportData} />
          <div className="feedbackToTeacher-container">
            <FeedbackToTeacher />
          </div>
        </div>
        <LineChart chartData={chartData} />
      </div> */}

      <div className="secondery-div-s">
        {user?.userType === "Parent" && (
          <Schedule schedule={childSubjects.schedule} />
        )}
      </div>
      <div className="grid grid-cols-1 m-2 p-2 lg:grid-cols-2 gap-x-3 gap-y-3  justify-items-center">
        <AttendanceJournal
          events={attendanceRecord}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <LineChart chartData={chartData} />
      </div>
      <div className="secondery-div-s">
        <TeacherReportCard teacherReportData={reports} />
      </div>
      <div className="secondery-div-s flex ">
        <ExamsTable
          examsData={childSubjects.details[`${subject}`].examRecords}
        />
      </div>
    </div>
  );
};

export default SubjectsPage;
