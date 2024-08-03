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
import { FeedbackToTeacher } from '../../../Components/FeedbackToTeacher/FeedbackToTeacher'
import Schedule from '../../../Components/ClassSchedule/Schedule'
import StudentSchedule from '../../Student/StudentSchedule/StudentSchedule'
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
} from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'

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

const icons = {
  Math: <FaCalculator />,
  Science: <FaFlask />,
  English: <FaBook />,
  'Social Studies': <FaUsers />,
  Arts: <FaPalette />,
  Music: <FaMusic />,
  History: <FaHistory />,
  Physics: <FaAtom />,
  Chemistry: <FaFlask />,
  Biology: <FaFlask />,
  Geography: <FaGlobe />,
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
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id !== undefined) getChildSubjects()
    }
    if (childSubjects) {
      setSubject(subject || childSubjects[0])
    }
  }, [isLoading, user, getChildSubjects, childSubjects, subject])

  const schedule = [
    { day: 'Sunday', period: '08:00-09:00', class: 'Social Studies' },
    { day: 'Sunday', period: '09:00-10:00', class: 'Break' },
    { day: 'Sunday', period: '10:00-11:00', class: 'Break' },
    { day: 'Sunday', period: '11:00-12:00', class: 'Break' },
    { day: 'Sunday', period: '12:00-13:00', class: 'Break' },
    { day: 'Monday', period: '08:00-09:00', class: 'Social Studies' },
    { day: 'Monday', period: '09:00-10:00', class: 'Break' },
    { day: 'Monday', period: '10:00-11:00', class: 'Break' },
    { day: 'Monday', period: '11:00-12:00', class: 'Break' },
    { day: 'Monday', period: '12:00-13:00', class: 'Break' },
    { day: 'Tuesday', period: '08:00-09:00', class: 'Break' },
    { day: 'Tuesday', period: '09:00-10:00', class: 'Break' },
    { day: 'Tuesday', period: '10:00-11:00', class: 'Break' },
    { day: 'Tuesday', period: '11:00-12:00', class: 'Break' },
    { day: 'Tuesday', period: '12:00-13:00', class: 'Break' },
    { day: 'Wednesday', period: '08:00-09:00', class: 'Break' },
    { day: 'Wednesday', period: '09:00-10:00', class: 'Break' },
    { day: 'Wednesday', period: '10:00-11:00', class: 'Break' },
    { day: 'Wednesday', period: '11:00-12:00', class: 'Break' },
    { day: 'Wednesday', period: '12:00-13:00', class: 'Break' },
    { day: 'Thursday', period: '08:00-09:00', class: 'Break' },
    { day: 'Thursday', period: '09:00-10:00', class: 'Break' },
    { day: 'Thursday', period: '10:00-11:00', class: 'Break' },
    { day: 'Thursday', period: '11:00-12:00', class: 'Break' },
    { day: 'Thursday', period: '12:00-13:00', class: 'Break' },
  ]

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
    <div className="main-div-s">
      <h2>
        <span className="h2-s">You are watching:</span> {subject}
      </h2>

      <div className="mt-3 bg-gray-50 dark:bg-gray-800 mx-auto">
        <div className="sm:hidden text-left">
          <div className="relative">
            <button
              className={`flex items-center p-2 rounded-lg 
              ${
                isOpen
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
              } 
              group transition duration-200 ease-in-out`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="mr-2 whitespace-nowrap flex-1">
                {isOpen ? subject : 'Choose subject'}
              </span>
              <span className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white">
                <BiChevronDown />
              </span>
            </button>

            {isOpen && (
              <div className="absolute z-10 mt-2 left-0 w-48 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
                {childSubjects.map((subjectItem, index) => (
                  <button
                    key={index}
                    className={`block w-full px-4 py-1 text-sm text-left 
                    ${
                      subject === subjectItem
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                    onClick={() => {
                      setSubject(subjectItem)
                      setIsOpen(false)
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
          {childSubjects.map((subjectItem, index) => (
            <button
              key={index}
              className={`flex items-center p-2 rounded-lg 
              ${
                subject === subjectItem
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
              } 
              group m-1 transition duration-200 ease-in-out`}
              value={subjectItem}
              onClick={() => {
                setSubject(subjectItem)
                setIsOpen(false)
              }}
            >
              <span className="ml-2 whitespace-nowrap">{subjectItem}</span>
              <span className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white">
                {icons[subjectItem]}
              </span>
            </button>
          ))}
        </div>
      </div>

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
              setSubject((e.target as HTMLButtonElement).textContent || '')
            }
          >
            {subjectItem}
          </button>
        ))}
      </div> */}

      <div className="secondery-div-s">
        {user?.userType === 'Parent' && <Schedule schedule={schedule} />}
      </div>
      <div className="cols2-div-s">
        <AttendanceJournal
          events={mathAttendanceData}
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
        <LineChart chartData={chartData} />
      </div>

      <TeacherReportCard teacherReportData={teacherReportData} />

      <ExamsTable
        examsData={examsData}
        subjectName={selectedSubject?.subjectName}
      />
    </div>
  )
}

export default SubjectsPage
