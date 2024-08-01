import React, { useContext } from 'react'
import { ScheduleEntry } from '../../Types/ScheduleEntry'
import { UserContext } from '../../Context/UserContext'

const Schedule: React.FC<{ schedule: ScheduleEntry[] }> = ({ schedule }) => {
  const { user } = useContext(UserContext)

  const scheduleMap: Record<string, Record<string, string>> = {}

  schedule.forEach((entry) => {
    if (!scheduleMap[entry.period]) {
      scheduleMap[entry.period] = {}
    }
    scheduleMap[entry.period][entry.day] = entry.class
  })

  const days = Array.from(new Set(schedule.map((entry) => entry.day)))

  return (
    <div className="border border-gray-300 rounded-md p-2 m-2 bg-white overflow-x-auto shadow-lg">
      <div className={user?.userType === 'Parent' ? 'w-5/10' : 'w-full'}>
        <h2 className="h2-s">schedule</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-1 text-xs font-semibold text-gray-700"></th>{' '}
              {days.map((day) => (
                <th
                  key={day}
                  className="border border-gray-300 p-1 text-center text-xs font-semibold text-gray-700"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(scheduleMap).map((period) => (
              <tr key={period} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-1 font-semibold text-xs text-gray-800">
                  {period}
                </td>
                {days.map((day) => (
                  <td
                    key={`${period}-${day}`}
                    className="border border-gray-300 p-1 text-center text-xs"
                  >
                    {scheduleMap[period][day] ? (
                      <div className="bg-gray-200 rounded-md font-semibold p-1 text-xs text-gray-800 shadow-sm">
                        <p className="text-xs font-normal">
                          {scheduleMap[period][day]}
                        </p>
                      </div>
                    ) : (
                      <div className="text-gray-400 text-xs">-</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Schedule

// import React, { useContext } from 'react'
// import { ScheduleEntry } from '../../Types/ScheduleEntry'
// import { UserContext } from '../../Context/UserContext'

// const Schedule: React.FC<{ schedule: ScheduleEntry[] }> = ({ schedule }) => {
//   const { user } = useContext(UserContext)

//   // מיפוי שיעורים לפי שעות וימים
//   const scheduleMap: Record<string, Record<string, string>> = {}

//   schedule.forEach((entry) => {
//     if (!scheduleMap[entry.period]) {
//       scheduleMap[entry.period] = {}
//     }
//     scheduleMap[entry.period][entry.day] = entry.class
//   })

//   // קבלת רשימת הימים
//   const days = Array.from(new Set(schedule.map((entry) => entry.day)))

//   return (
//     <div className="border border-gray-300 rounded-md p-2 m-2 bg-white overflow-x-auto">
//       <div className={user?.userType === 'Parent' ? 'w-5/10' : 'w-full'}>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 p-1 text-xs"></th>{' '}
//               {/* הסרה של המילה "שעות" */}
//               {days.map((day) => (
//                 <th
//                   key={day}
//                   className="border border-gray-300 p-1 text-center text-xs"
//                 >
//                   {day}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(scheduleMap).map((period) => (
//               <tr key={period}>
//                 <td className="border border-gray-300 p-1 font-semibold text-xs">
//                   {period}
//                 </td>
//                 {days.map((day) => (
//                   <td
//                     key={`${period}-${day}`}
//                     className="border border-gray-300 p-1 text-center text-xs"
//                   >
//                     {scheduleMap[period][day] ? (
//                       <div className="text-white bg-blue-500 rounded-md font-semibold p-1 text-xs">
//                         <p className="text-xs font-normal">
//                           {scheduleMap[period][day]}
//                         </p>
//                       </div>
//                     ) : (
//                       <div className="text-gray-400 text-xs">-</div> // אם אין שיעור, מציג "-"
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Schedule

// import React, { useContext } from 'react'
// import { ScheduleEntry } from '../../Types/ScheduleEntry'
// import { UserContext } from '../../Context/UserContext'

// const Schedule: React.FC<{ schedule: ScheduleEntry[] }> = ({ schedule }) => {
//   const { user } = useContext(UserContext)

//   // מיפוי שיעורים לפי שעות וימים
//   const scheduleMap: Record<string, Record<string, string>> = {}

//   schedule.forEach((entry) => {
//     if (!scheduleMap[entry.period]) {
//       scheduleMap[entry.period] = {}
//     }
//     scheduleMap[entry.period][entry.day] = entry.class
//   })

//   // קבלת רשימת הימים
//   const days = Array.from(new Set(schedule.map((entry) => entry.day)))

//   return (
//     <div className="border border-gray-300 rounded-md p-4 m-4 bg-white">
//       <div className={user?.userType === 'Parent' ? 'w-5/10' : 'w-full'}>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 p-2">שעות</th>
//               {days.map((day) => (
//                 <th
//                   key={day}
//                   className="border border-gray-300 p-2 text-center"
//                 >
//                   {day}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(scheduleMap).map((period) => (
//               <tr key={period}>
//                 <td className="border border-gray-300 p-2 font-semibold">
//                   {period}
//                 </td>
//                 {days.map((day) => (
//                   <td
//                     key={`${period}-${day}`}
//                     className="border border-gray-300 p-2 text-center"
//                   >
//                     {scheduleMap[period][day] ? (
//                       <div className="text-white bg-blue-500 rounded-md font-semibold p-1">
//                         <p className="text-sm font-normal">
//                           {scheduleMap[period][day]}
//                         </p>
//                       </div>
//                     ) : (
//                       <div className="text-gray-400">-</div> // אם אין שיעור, מציג "-"
//                     )}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Schedule

//
//
//
//

// import React, { useContext } from 'react'
// import { ScheduleEntry } from '../../Types/ScheduleEntry'
// import { UserContext } from '../../Context/UserContext'

// const Schedule: React.FC<{ schedule: ScheduleEntry[] }> = ({ schedule }) => {
//   const { user } = useContext(UserContext)

//   // נבנה אובייקט לקבץ את השיעורים לפי שעות וימים
//   const scheduleMap: Record<string, Record<string, string>> = {}

//   schedule.forEach((entry) => {
//     if (!scheduleMap[entry.period]) {
//       scheduleMap[entry.period] = {}
//     }
//     scheduleMap[entry.period][entry.day] = entry.class
//   })

//   // הימים המופיעים במערכת
//   const days = Array.from(new Set(schedule.map((entry) => entry.day)))

//   return (
//     <div className="border border-gray-300 rounded-md p-4 m-4 bg-white">
//       <div className={user?.userType === 'Parent' ? 'w-5/10' : 'w-full'}>
//         <table className="w-full border-collapse">
//           <thead>
//             <tr>
//               <th className="border border-gray-300 p-2">שעות</th>
//               {days.map((day) => (
//                 <th
//                   key={day}
//                   className="border border-gray-300 p-2 text-center"
//                 >
//                   {day}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(scheduleMap).map((period) => (
//               <tr key={period}>
//                 <td className="border border-gray-300 p-2">{period}</td>
//                 {days.map((day) => (
//                   <td
//                     key={`${period}-${day}`}
//                     className="border border-gray-300 p-2 text-center"
//                   >
//                     {scheduleMap[period][day] || '-'}{' '}
//                     {/* הצגת סימן "-" אם אין שיעור */}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default Schedule
//
//
//
//
//

// import React, { useContext } from 'react'
// import { ScheduleEntry } from '../../Types/ScheduleEntry'
// import { UserContext } from '../../Context/UserContext'

// const Schedule: React.FC<{ schedule: ScheduleEntry[] }> = ({ schedule }) => {
//   const generateScheduleJSX = (schedule: ScheduleEntry[]): JSX.Element[] => {
//     const groupedByDay: Record<string, ScheduleEntry[]> = {}

//     schedule.forEach((entry) => {
//       if (!groupedByDay[entry.day]) {
//         groupedByDay[entry.day] = []
//       }
//       groupedByDay[entry.day].push(entry)
//     })

//     return Object.keys(groupedByDay).map((day) => (
//       <div
//         key={day}
//         className="flex-shrink-0 w-full md:text-2xl md:w-1/2 lg:w-1/3 xl:w-1/5 p-2"
//       >
//         <h2 className="text-lg md:text-3xl font-semibold mb-2 text-grey-400">
//           <p className="text-xl font-normal">{day}</p>
//         </h2>
//         <div className="border border-gray-300 rounded-md p-4 m-4 bg-white">
//           {groupedByDay[day].map((entry) => (
//             <div
//               onClick={() => {}}
//               key={`${day}-${entry.period}`}
//               className="p-4 border-b border-gray-400 last:border-b-0"
//             >
//               <div className="text-xs md:text-lg text-gray-400">
//                 <p className="text-xs font-normal">{entry.period}</p>
//               </div>
//               <div className="text-white bg-blue-400 rounded-sm font-semibold  p-1">
//                 <p className="text-sm font-normal ">{entry.class}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ))
//   }

//   const scheduleJSX = generateScheduleJSX(schedule)

//   const { user } = useContext(UserContext)

//   return (
//     <div className="border border-gray-300 rounded-md p-4 m-4 bg-white">
//       <div className={user?.userType === 'Parent' ? 'w-5/10' : 'w-full'}>
//         <div className="flex flex-row  gap-10   mb-6 ml-7 w-full overflow-x-auto whitespace-nowrap text-xs"></div>
//         {/* <div className="flex flex-row  gap-24 mb-6 ml-14 w-full overflow-x-auto whitespace-nowrap">
//           {Object.keys(
//             schedule.reduce((acc, curr) => ({ ...acc, [curr.day]: true }), {})
//           ).map((day, index) => (
//             <div
//               key={day}
//               className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm m-2 "
//             >
//               Day {index + 1}: {day}
//             </div>
//           ))}
//         </div> */}
//         <div className="flex flex-wrap ">{scheduleJSX}</div>
//       </div>
//     </div>
//   )
// }

// export default Schedule
