import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useNavigate } from 'react-router-dom'

export const TeachersAttendanceJournal = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const navigate = useNavigate()

  const handleDateChange = (date) => {
    setSelectedDate(date)
    navigate('/student-list', { state: { selectedDate } })
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teachers Attendance Journal</h1>

      <div className="border border-gray-300 rounded-md p-4 m-4 bg-white calendar-container">
        <h2 className="text-lg font-semibold mb-2">Attendance Journal</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
    </div>
  )
}
