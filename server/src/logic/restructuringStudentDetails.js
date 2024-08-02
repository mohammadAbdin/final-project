export const restructuringStudentDetails = (subjectsDetails, student_id) => {
  const restructuredDetails = subjectsDetails.reduce((acc, subjectDetails) => {
    const subject = subjectDetails.subject;
    let dataDates = [];
    if (subjectDetails.date != undefined) {
      dataDates = subjectDetails.date.map((attendance) => {
        let isAttendance = false;
        attendance.students.forEach((student) => {
          if (student.student_id == student_id) isAttendance = true;
        });
        return {
          date: attendance.date,
          attendance: isAttendance,
        };
      });
    }

    let average = 0;
    let examsNumber = 0;
    const dataExams = subjectDetails.exams
      .map((exam) => {
        let grade = "0";
        if (exam.studentGrades !== undefined && exam.examName !== undefined) {
          examsNumber++;
          exam.studentGrades.forEach((studentGrade) => {
            if (studentGrade.student_id == student_id) {
              grade = studentGrade.Grade;
              average += Number(studentGrade.Grade);
            }
          });
          return { examName: exam.examName, grade: grade };
        }
      })
      .filter((exam) => exam !== undefined);

    average = String(average / examsNumber);
    if (average === "NaN") average = "Grades unavailable";

    acc[subject] = {
      attendanceRecord: { datesRecord: dataDates },
      examRecords: dataExams,
      average: average,
    };

    return acc;
  }, {});

  console.log(restructuredDetails);
};

//attendace
// each subject all exams and grades
//reports
// [
//     {
//       subject: 'Social Studies',
//       teacher_id: '66a8cb5c62c9c4be0b482c84',
//       _id: new ObjectId('66a8cb5c62c9c4be0b482c8e'),
//       resources: [ [Object], [Object], [Object] ],
//       exams: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
//       date: [ [Object], [Object], [Object], [Object] ]
//     },
//     {
//       subject: 'English',
//       teacher_id: '66aa3199629865fd961a08d2',
//       _id: new ObjectId('66aa319a629865fd961a08dd'),
//       resources: [],
//       exams: []
//     },
//     {
//       subject: 'Math',
//       teacher_id: '66ab63bcb326bbfa91ed5318',
//       _id: new ObjectId('66ab63bcb326bbfa91ed531f'),
//       resources: [],
//       exams: [],
//       date: []
//     },
//     {
//       subject: 'Science',
//       teacher_id: '66ab63d7b326bbfa91ed546a',
//       _id: new ObjectId('66ab63d8b326bbfa91ed5471'),
//       resources: [],
//       exams: [],
//       date: []
//     },
//     {
//       subject: 'Social Studies',
//       teacher_id: '66ab63f4b326bbfa91ed55c4',
//       _id: new ObjectId('66ab63f4b326bbfa91ed55cb'),
//       resources: [],
//       exams: [],
//       date: []
//     },
//     {
//       subject: 'Social Studies',
//       teacher_id: '66ab6414b326bbfa91ed5726',
//       _id: new ObjectId('66ab6414b326bbfa91ed572d'),
//       resources: [],
//       exams: [],
//       date: []
//     },
//     {
//       subject: 'Arts',
//       teacher_id: '66ab6432b326bbfa91ed5890',
//       _id: new ObjectId('66ab6432b326bbfa91ed5897'),
//       resources: [],
//       exams: [],
//       date: []
//     },
//     {
//       subject: 'Music',
//       teacher_id: '66ab6451b326bbfa91ed5a02',
//       _id: new ObjectId('66ab6451b326bbfa91ed5a08'),
//       resources: [],
//       exams: [],
//       date: []
//     }
//   ]
