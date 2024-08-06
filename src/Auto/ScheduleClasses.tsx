// function ScheduleClasses() {
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
//   const periods = [
//     "08:00-09:00",
//     "09:00-10:00",
//     // "10:00-11:00",
//     "11:00-12:00",
//     "12:00-13:00",
//   ];
//   const allSubjects = [
//     "Math",
//     "Science",
//     "English",
//     "Social Studies",
//     "Arts",
//     "Music",
//     "History",
//     "Physics",
//     "Chemistry",
//     "Biology",
//     "Geography",
//   ];

//   const restrictedSubjects = [
//     "History",
//     "Physics",
//     "Chemistry",
//     "Geography",
//     "Biology",
//   ];
//   const elementarySubjects = allSubjects.filter(
//     (subject) => !restrictedSubjects.includes(subject)
//   );

//   const generateGradeSchedules = (grades) => {
//     const generateScheduleForGrade = (grade) => {
//       const schedule = [];
//       const availableSubjects =
//         grade <= 7 ? [...elementarySubjects] : [...allSubjects]; // Copy array to avoid mutation

//       for (const day of days) {
//         const daySchedule = [];
//         let daySubjects = [...availableSubjects]; // Fresh copy for each day

//         for (const period of periods.slice(0, 4)) {
//           // Only take first 4 periods
//           if (daySubjects.length === 0) break; // Break if no subjects are left

//           // Randomly pick a subject for each period
//           const subjectIndex = Math.floor(Math.random() * daySubjects.length);
//           const subject = daySubjects.splice(subjectIndex, 1)[0]; // Remove chosen subject from list
//           daySchedule.push({ day, period, subject });
//         }
//         schedule.push(daySchedule);
//       }

//       return schedule;
//     };

//     return grades.map((grade) => ({
//       grade,
//       schedule: generateScheduleForGrade(grade),
//     }));
//   };

//   // Usage Example
//   const grades = Array.from({ length: 12 }, (_, i) => i + 1); // Grades 1 to 12
//   const gradeSchedules = generateGradeSchedules(grades);

//   return (
//     <div>
//       {gradeSchedules.map(({ grade, schedule }) => (
//         <div key={grade} style={{ marginBottom: "20px" }}>
//           <h2>Grade {grade} Schedule</h2>
//           <table
//             border="1"
//             style={{ borderCollapse: "collapse", width: "100%" }}
//           >
//             <thead>
//               <tr>
//                 <th>Period</th>
//                 {days.map((day) => (
//                   <th key={day}>{day}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {periods.slice(0, 4).map((period) => (
//                 <tr key={period}>
//                   <td>{period}</td>
//                   {days.map((day) => {
//                     const daySchedule = schedule.find((daySched) =>
//                       daySched.some(
//                         (entry) => entry.day === day && entry.period === period
//                       )
//                     );
//                     const periodEntry = daySchedule
//                       ? daySchedule.find(
//                           (entry) =>
//                             entry.day === day && entry.period === period
//                         )
//                       : { subject: "Free" };

//                     return <td key={day}>{periodEntry.subject || "Free"}</td>;
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ScheduleClasses;
