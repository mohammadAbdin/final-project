import teacherReportData from "../../../demoData/teacherReportData";
import mathAttendanceData from "../../../demoData/mathAttendanceData";
import examsData from "../../../demoData/examsData";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../Context/UserContext";
import UseGetChildSubjects from "../../../Hooks/UseGetChildSubjects";
import Chart from "chart.js/auto";
import LineChart from "../../../Components/StatsChart/StatsChart";
import AttendanceJournal from "../../../Components/AttendanceJournal/AttendanceJournal";
import ExamsTable from "../../../Components/ExamsTable/ExamsTable";
import TeacherReportCard from "../../../Components/TeacherReportCard/TeacherReportCard";
import VideoForm from "../../../Components/VideoForm/VideoForm";
import { FeedbackToTeacher } from "../../../Components/FeedbackToTeacher/FeedbackToTeacher";
import Schedule from "../../../Components/ClassSchedule/Schedule";
import StudentSchedule from "../../Student/StudentSchedule/StudentSchedule";

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

const SubjectsPage: React.FC = () => {
  const { student_id } = useParams<{ student_id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [chartData, setChartData] = useState<ChartData>({
    labels: ["Exam1", "Exam2", "Midterm", "Final"],
    datasets: [
      {
        label: "First dataset",
        data: [85, 92, 78, 85],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  });
  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  );
  const [subject, setSubject] = useState<string | null>(null);

  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id !== undefined) getChildSubjects();
    }
    if (childSubjects) {
      setSubject(subject || childSubjects[0]);
    }
  }, [isLoading, user, getChildSubjects, childSubjects, subject]);

  const schedule = [
    { day: "Sunday", period: "08:00-09:00", class: "Social Studies" },
    { day: "Sunday", period: "09:00-10:00", class: "Break" },
    { day: "Sunday", period: "10:00-11:00", class: "Break" },
    { day: "Sunday", period: "11:00-12:00", class: "Break" },
    { day: "Sunday", period: "12:00-13:00", class: "Break" },
    { day: "Monday", period: "08:00-09:00", class: "Social Studies" },
    { day: "Monday", period: "09:00-10:00", class: "Break" },
    { day: "Monday", period: "10:00-11:00", class: "Break" },
    { day: "Monday", period: "11:00-12:00", class: "Break" },
    { day: "Monday", period: "12:00-13:00", class: "Break" },
    { day: "Tuesday", period: "08:00-09:00", class: "Break" },
    { day: "Tuesday", period: "09:00-10:00", class: "Break" },
    { day: "Tuesday", period: "10:00-11:00", class: "Break" },
    { day: "Tuesday", period: "11:00-12:00", class: "Break" },
    { day: "Tuesday", period: "12:00-13:00", class: "Break" },
    { day: "Wednesday", period: "08:00-09:00", class: "Break" },
    { day: "Wednesday", period: "09:00-10:00", class: "Break" },
    { day: "Wednesday", period: "10:00-11:00", class: "Break" },
    { day: "Wednesday", period: "11:00-12:00", class: "Break" },
    { day: "Wednesday", period: "12:00-13:00", class: "Break" },
    { day: "Thursday", period: "08:00-09:00", class: "Break" },
    { day: "Thursday", period: "09:00-10:00", class: "Break" },
    { day: "Thursday", period: "10:00-11:00", class: "Break" },
    { day: "Thursday", period: "11:00-12:00", class: "Break" },
    { day: "Thursday", period: "12:00-13:00", class: "Break" },
  ];

  if (isLoading || childSubjects === null) {
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
    <div className="main-div">
      {user?.userType === "Parent" && <Schedule schedule={schedule} />}
      <h2 className="h2">You are watching: {subject}</h2>
      <div>
        {childSubjects.map((subjectItem, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            value={subjectItem}
            onClick={(e) =>
              setSubject((e.target as HTMLButtonElement).textContent || "")
            }
          >
            {subjectItem}
          </button>
        ))}
      </div>

      <div className="cols2-div-s">
        <AttendanceJournal
          events={mathAttendanceData}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <LineChart chartData={chartData} />
      </div>
      <div className="secondery-div-s">
        <TeacherReportCard teacherReportData={teacherReportData} />
      </div>
      <div className="secondery-div-s flex ">
        <ExamsTable
          examsData={examsData}
          subjectName={selectedSubject?.subjectName}
        />
      </div>
    </div>
  );
};

export default SubjectsPage;
