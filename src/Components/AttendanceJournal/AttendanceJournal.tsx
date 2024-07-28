import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './AttendanceJournal.css'

const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0]
    const dayEvent = events.find((event) => event.date === formattedDate)

    if (dayEvent) {
      return `${dayEvent.status}`
    } else {
      return ''
    }
  }

  return (
    <div className="calendar-container p-4">
      <h2 className="text-lg font-semibold mb-2">Attendance Journal</h2>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />
    </div>
  )
}

export default AttendanceJournal
