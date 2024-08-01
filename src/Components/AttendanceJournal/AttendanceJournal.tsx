// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import './AttendanceJournal.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     // החזרת מחלקה על פי הסטטוס של האירוע
//     return dayEvent ? dayEvent.status : ''
//   }

//   return (
//     <div className="h-[450px] w-full max-w-screen-sm mx-auto flex flex-col items-center justify-center">
//       <h2 className="mb-5 text-2xl font-bold">Attendance Journal</h2>
//       <div className="flex-grow overflow-hidden">
//         <Calendar
//           onChange={onDateChange}
//           value={selectedDate}
//           tileClassName={tileClassName}
//           tileContent={({ date }) => (
//             <div className="flex items-center justify-center h-8">
//               {date.getDate()} {/* מציג את מספר התאריך */}
//             </div>
//           )}
//         />
//       </div>
//       <div className="flex justify-center mt-5 space-x-6">
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-green-300 mr-2"></div>
//           <span>Present</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-pink-300 mr-2"></div>
//           <span>Absent</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AttendanceJournal

//
//
//
//
//
//
//
//
//
//
//
//

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './AttendanceJournal.css'

const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0]
    const dayEvent = events.find((event) => event.date === formattedDate)

    return dayEvent ? `${dayEvent.status}` : ''
  }

  return (
    <div className="c-div-s">
      <div className="h-[450px] w-full max-w-screen-sm mx-auto flex flex-col items-center justify-center">
        <h2 className="h2-s">Attendance Journal</h2>
        <div className="flex-grow overflow">
          <Calendar
            onChange={onDateChange}
            value={selectedDate}
            tileClassName={tileClassName}
          />
        </div>
        <div className="flex justify-center mt-5 space-x-6">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-green-300 mr-2"></div>
            <span>Present</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-4 h-4 bg-pink-300"></div>
            <span className="text-sm">Absent</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceJournal

// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import './AttendanceJournal.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `${dayEvent.status}`
//     } else {
//       return ''
//     }
//   }

//   return (
//     <div className="c-div-s">
//       <h2 className="h2-s">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//       />
//       <div className="flex justify-center mt-5 space-x-6">
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-green-300 mr-2"></div>
//           <span>Present</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-pink-300 mr-2"></div>
//           <span>Absent</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AttendanceJournal

// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import './AttendanceJournal.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `${dayEvent.status}`
//     } else {
//       return ''
//     }
//   }

//   return (
//     <div className="c-div-s">
//       <h2 className="h2-s">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//       />
//       <div className="flex justify-center mt-5 space-x-6">
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-green-300 mr-2"></div>
//           <span>Present</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-pink-300 mr-2"></div>
//           <span>Absent</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AttendanceJournal

// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import './AttendanceJournal.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `${dayEvent.status}`
//     } else {
//       return ''
//     }
//   }

//   return (
//     <div className="c-div-s">
//       <h2 className="text-2xl font-bold mb-4">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//       />
//       <div className="flex justify-center mt-5 space-x-6">
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-green-300 mr-2"></div>
//           <span>Present</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-blue-300 mr-2"></div>
//           <span>Late</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-pink-300 mr-2"></div>
//           <span>Absent</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AttendanceJournal

// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import './AttendanceJournal.css' // אם יש לך סגנונות נוספים

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `${dayEvent.status}`
//     } else {
//       return ''
//     }
//   }

//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-2xl font-bold mb-4">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//       />
//       <div className="flex justify-center mt-5 space-x-6">
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-green-300 mr-2"></div>
//           <span>הגיע</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-blue-300 mr-2"></div>
//           <span>מאחר</span>
//         </div>
//         <div className="flex items-center">
//           <div className="w-5 h-5 bg-pink-300 mr-2"></div>
//           <span>לא הגיע</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AttendanceJournal

// קוד עובד

// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import './AttendanceJournal.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `${dayEvent.status}`
//     } else {
//       return ''
//     }
//   }

//   return (
//     <div className="c-div-s">
//       <h2 className="h2-s">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//       />
//       <div
//         className="legend"
//         style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
//       >
//         <div
//           className="legend-item"
//           style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}
//         >
//           <div
//             className="present"
//             style={{ width: '20px', height: '20px', marginRight: '5px' }}
//           ></div>
//           <span>הגיע</span>
//         </div>
//         <div
//           className="legend-item"
//           style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}
//         >
//           <div
//             className="late"
//             style={{ width: '20px', height: '20px', marginRight: '5px' }}
//           ></div>
//           <span>מאחר</span>
//         </div>
//         <div
//           className="legend-item"
//           style={{ display: 'flex', alignItems: 'center' }}
//         >
//           <div
//             className="absent"
//             style={{ width: '20px', height: '20px', marginRight: '5px' }}
//           ></div>
//           <span>לא הגיע</span>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default AttendanceJournal

// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'
// import './AttendanceJournal.css'

// const AttendanceJournal = ({ events, selectedDate, onDateChange }) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0]
//     const dayEvent = events.find((event) => event.date === formattedDate)

//     if (dayEvent) {
//       return `${dayEvent.status}`
//     } else {
//       return ''
//     }
//   }

//   return (
//     <div className="c-div-s">
//       <h2 className="h2-s">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//       />
//     </div>
//   )
// }

// export default AttendanceJournal

// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// const AttendanceJournal = ({ events, selectedDate, onDateChange }: Props) => {
//   const tileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     const dayEvent = events.find((event) => event.date === formattedDate);

//     if (dayEvent) {
//       return `border border-gray-300 rounded-md p-4 m-4 bg-white ${getColorClass(
//         dayEvent.status
//       )}`;
//     } else {
//       return "border border-gray-300 rounded-md p-4 m-4 bg-white";
//     }
//   };

//   const getColorClass = (status) => {
//     switch (status) {
//       case "present":
//         return "bg-green-200";
//       case "late":
//         return "bg-blue-200";
//       case "absent":
//         return "bg-red-200";
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="c-div-s">
//       <h2 className="h2-s">Attendance Journal</h2>
//       <Calendar
//         onChange={onDateChange}
//         value={selectedDate}
//         tileClassName={tileClassName}
//         className="border-none w-full"
//       />
//     </div>
//   );
// };

// export default AttendanceJournal;
