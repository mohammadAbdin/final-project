const ExamsTable = ({ examsData, subjectName }) => {
  return (
    <div className="c-div-s overflow-x-auto">
      <h2 className="h2-s">{subjectName} Exams Scores</h2>
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
              key={exam.exam_id}
              className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}
            >
              <td className="td-s">{exam.examName}</td>
              <td className="td-s">{exam.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ExamsTable

// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `border border-gray-300 rounded-md p-4 m-4 bg-white ${getColorClass(
//         dayEvent.status
//       )}`
//     } else {
//       return 'border border-gray-300 rounded-md p-4 m-4 bg-white'
//     }
//   }

//   const getColorClass = (status) => {
//     switch (status) {
//       case 'present':
//         return 'bg-green-200'
//       case 'late':
//         return 'bg-blue-200'
//       case 'absent':
//         return 'bg-red-200'
//       default:
//         return ''
//     }
//   }

//   return (
//     <div className="border border-gray-300 rounded-md p-4 bg-white flex-auto w-full h-full ">
//       <h2 className="text-lg font-semibold mb-2">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//         className="border-none w-full"
//       />
//     </div>
//   )
// }

// export default AttendanceJournal
//
//
//
//
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `border border-gray-300 rounded-md p-4 m-4 bg-white ${getColorClass(
//         dayEvent.status
//       )}`
//     } else {
//       return 'border border-gray-300 rounded-md p-4 m-4 bg-white'
//     }
//   }

//   const getColorClass = (status) => {
//     switch (status) {
//       case 'present':
//         return 'bg-green-200'
//       case 'late':
//         return 'bg-blue-200'
//       case 'absent':
//         return 'bg-red-200'
//       default:
//         return ''
//     }
//   }

//   return (
//     <div className="border border-gray-300 rounded-md p-4 bg-white flex-auto w-full h-full ">
//       <h2 className="text-lg font-semibold mb-2">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//         className="border-none w-full"
//       />
//     </div>
//   )
// }

// export default AttendanceJournal
