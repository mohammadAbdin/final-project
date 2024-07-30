import teacherReportData from '../../../demoData/teacherReportData'
import mathAttendanceData from '../../../demoData/mathAttendanceData'
import examsData from '../../../demoData/examsData'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContext'
import UseGetChildSubjects from '../../../Hooks/UseGetChildSubjects'
import Chart from 'chart.js/auto'
import LineChart from '../../../Components/StatsChart/StatsChart'
import AttendanceJournal from '../../../Components/AttendanceJournal/AttendanceJournal'
import ExamsTable from '../../../Components/ExamsTable/ExamsTable'
import TeacherReportCard from '../../../Components/TeacherReportCard/TeacherReportCard'
import VideoForm from '../../../Components/VideoForm/VideoForm'

interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    fill: boolean
    backgroundColor: string
    borderColor: string
  }[]
}

const SubjectsPage: React.FC = () => {
  const { student_id } = useParams<{ student_id: string }>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { user } = useContext(UserContext)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [chartData, setChartData] = useState<ChartData>({
    labels: ['Exam1', 'Exam2', 'Midterm', 'Final'],
    datasets: [
      {
        label: 'First dataset',
        data: [85, 92, 78, 85],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  })
  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  )
  const [subject, setSubject] = useState<string | null>(null)

  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id !== undefined) getChildSubjects()
    }
    if (childSubjects) {
      setSubject(subject || childSubjects[0])
    }
  }, [isLoading, user, getChildSubjects, childSubjects, subject])

  if (isLoading || childSubjects === null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="main-subjects-container ">
      <h2>You are watching: {subject}</h2>
      <div className="subjects-container">
        {childSubjects.map((subjectItem, index) => (
          <button
            key={index}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            value={subjectItem}
            onClick={(e) =>
              setSubject((e.target as HTMLButtonElement).textContent || '')
            }
          >
            {subjectItem}
          </button>
        ))}
      </div>
      <div className="main-info-container">
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
        <div className="student-schedule-container">
          <p>Sunday...</p>
          <p>Monday...</p>
        </div>
        <div className="teacher-report-card-container mt-2">
          <TeacherReportCard teacherReportData={teacherReportData} />
        </div>
        <LineChart chartData={chartData} />
      </div>
    </div>
  )
}

export default SubjectsPage
