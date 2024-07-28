import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../../Context/UserContext'
import UseGetChildSubjects from '../../../Hooks/UseGetChildSubjects'

const SubjectsPage = () => {
  const { student_id } = useParams()
  console.log(student_id)
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useContext(UserContext)

  const { getChildSubjects, childSubjects } = UseGetChildSubjects(
    setIsLoading,
    student_id
  )
  const [subject, setSubject] = useState('')

  useEffect(() => {
    if (isLoading && user && !childSubjects) {
      if (user._id != undefined) getChildSubjects()
    }
  }, [isLoading, user, getChildSubjects, childSubjects])

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
  console.log(childSubjects)
  const subjectData = [
    {
      subjectName: 'Mathematics',
      teacher_id: 'teacher001',
    },
    {
      subjectName: 'Physics',
      teacher_id: 'teacher002',
    },
    {
      subjectName: 'History',
      teacher_id: 'teacher003',
    },
    {
      subjectName: 'Biology',
      teacher_id: 'teacher004',
    },
  ]

  // const subjectData = [
  //   {
  //     subjectName: "Mathematics",
  //     teacher_id: "teacher001",
  //   },
  //   {
  //     subjectName: "Physics",
  //     teacher_id: "teacher002",
  //   },
  //   {
  //     subjectName: "History",
  //     teacher_id: "teacher003",
  //   },
  //   {
  //     subjectName: "Biology",
  //     teacher_id: "teacher004",
  //   },
  // ];
  return (
    <div className="main-subjects-container">
      <h2>You are watching: {subject}</h2>
      <div className="subjects-container">
        {subjectData.map((subjectItem) => (
          <button
            key={subjectItem.teacher_id}
            className="subject-item"
            value={subjectItem.subjectName}
            onClick={(e) => console.log(e) || setSubject(e.target.value)}
          >
            {subjectItem.subjectName}
          </button>
        ))}
      </div>
      <div className="main-info-container">
        <div className="calendar-container">
          <h3>Student's Attendance:</h3>
          <div className="calender-div">
            <p>Here will be the Attendance calendar</p>
          </div>
        </div>
        <div className="marks-container">
          <p>Exam 1: Mark</p>
          <p>Exam 2: Mark</p>
          <p>Midterm: Mark</p>
        </div>
        <div className="student-schedule-container">
          <p>Sunday...</p>
          <p>Monday...</p>
        </div>
        {/*  */}
        <div className="feedback-container">
          <h3>Feedback To Teacher:</h3>
          <input type="text" placeholder="Write your massage here.." />
        </div>
      </div>
    </div>
  )
}

export default SubjectsPage
