import { useState } from 'react'
import SubjectsButtons from '../../Components/SubjectsButtons/SubjectsButtons'
import AttendanceJournal from '../../Components/AttendanceJournal/AttendanceJournal'
import ExamsTable from '../../Components/ExamsTable/ExamsTable'

import teacherReportData from '../../demoData/teacherReportData'
import mathAttendanceData from '../../demoData/mathAttendanceData'
import examsData from '../../demoData/examsData'
import TeacherReportCard from '../../Components/TeacherReportCard/TeacherReportCard'

const SubjectsPage = () => {
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

  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <div className="subjects-container flex flex-col ">
      <div className="flex flex-wrap">
        <SubjectsButtons
          subjectData={subjectData}
          setSelectedSubject={setSelectedSubject}
        />
      </div>

      {selectedSubject && (
        <div className="app-container mt-2">
          <AttendanceJournal
            events={mathAttendanceData}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
      )}

      {selectedSubject && (
        <div className="exams-table-container  mt-2 ">
          <ExamsTable
            examsData={examsData}
            subjectName={selectedSubject.subjectName}
          />
        </div>
      )}

      {selectedSubject && (
        <div className="teacher-report-card-container mt-2">
          <TeacherReportCard teacherReportData={teacherReportData} />
        </div>
      )}
    </div>
  )
}

export default SubjectsPage
