import { parentPort, workerData } from "worker_threads";

const restructuringStudentDetailsSync = (subjectsDetails, student_id) => {
  const restructuredDetails = subjectsDetails.reduce((acc, subjectDetails) => {
    const subject = subjectDetails.subject;
    // console.log(subjectDetails);

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
      resources: subjectDetails.resources,
      teacher_id: subjectDetails.teacher_id,
    };

    return acc;
  }, {});

  return restructuredDetails;
};

const { subjectsDetails, student_id } = workerData;
const restructuredDetails = restructuringStudentDetailsSync(
  subjectsDetails,
  student_id
);
parentPort?.postMessage(restructuredDetails);
