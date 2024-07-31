import React, { useEffect, useState } from "react";
import { ExamType } from "../../../Types/ExamType";
import UserType from "../../../Types/UserType";
interface ClassExamsProps {
  students: string[];
  exams: ExamType[];
  isAddingExam: boolean;
  newExamName: string;
  setNewExamName: React.Dispatch<React.SetStateAction<string>>;
  classNumber: string | undefined;
  user: UserType | undefined;
  AddNewExam: (
    examName: string,
    classNumber: string,
    userId: string
  ) => Promise<void>;
  addExam: () => void;
}
export function ClassExams({
  students,
  exams,
  isAddingExam,
  newExamName,
  setNewExamName,
  classNumber,
  user,
  AddNewExam,
  addExam,
}: ClassExamsProps) {
  const [expandedExam, setExpandedExam] = useState<number | null>(null);
  const [mergedStudents, setMergedStudents] = useState([]);
  const [modifiedStudents, setModifiedStudents] = useState([]);

  useEffect(() => {
    const merged = students.map((student) => {
      let studentGrade = 0;
      let hasGrade = false;

      exams.forEach((exam) => {
        exam.studentGrades.forEach((grade) => {
          if (grade.student_id === student.student_id) {
            studentGrade = grade.Grade;
            hasGrade = true;
          }
        });
      });

      return {
        ...student,
        Grade: hasGrade ? studentGrade : 0,
        isEditing: false,
      };
    });
    console.log(merged);

    setMergedStudents(merged);
  }, []);

  const handleGradeChange = (id, value) => {
    setMergedStudents(
      mergedStudents.map((student) =>
        student.student_id === id
          ? { ...student, grade: value, isEditing: true }
          : student
      )
    );
  };

  const handleSave = () => {
    // Save the updated students
    console.log("Saving updated students:", mergedStudents);
    // You can send this data to your backend here
  };

  const handleToggleExpand = (examId) => {
    setExpandedExam(expandedExam === examId ? null : examId);
  };

  const toggleExamDetails = (id: number) => {
    setExpandedExam(expandedExam === id ? null : id);
  };

  return (
    <div>
      <ul className="border border-gray-300 bg-white rounded-md p-4 mb-4">
        {exams.map((exam) => (
          <li
            key={exam._id}
            className="border-b py-2 last:border-b-0 hover:bg-gray-100"
          >
            <div className="flex justify-between items-center">
              <span
                onClick={() => toggleExamDetails(exam._id)}
                className="cursor-pointer text-blue-500"
              >
                {exam.examName}
              </span>
            </div>
            {expandedExam === exam._id && (
              <div>
                {mergedStudents.map((student) => {
                  console.log("student", student);

                  return (
                    <div
                      key={student.student_id}
                      className="my-2 flex flex-row justify-between"
                    >
                      <p className="w-1/3 text-left">{student.name}</p>
                      {student.Grade === 0 ? (
                        <div>
                          <input
                            className="px-4  border rounded-l  bg-white"
                            value={student.grade}
                            onChange={(e) => {
                              // handleGradeChange(
                              //   student.student_id,
                              //   e.target.value
                              // );
                            }}
                          />
                        </div>
                      ) : (
                        <>
                          <div>
                            <p>{student.Grade}</p>
                          </div>
                          {student.isEditing ? (
                            <input
                              className="px-4  border rounded-l  bg-white"
                              value={student.Grade}
                              onChange={(e) => {
                                // handleGradeChange(
                                //   student.student_id,
                                //   e.target.value
                                // );
                              }}
                            />
                          ) : (
                            <button
                              onClick={() => {
                                // student.isEditing = true;
                                // console.log(student);
                                handleGradeChange(
                                  student.student_id,
                                  student.grade
                                );
                              }}
                            >
                              Edit
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
                <div className="flex justify-center items-center my-3">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      {isAddingExam ? (
        <div className="flex justify-center mb-4 ">
          <input
            type="text"
            className="px-4 py-2 border rounded-l w-1/2 bg-white"
            value={newExamName}
            onChange={(e) => {
              setNewExamName(e.target.value);
            }}
            placeholder="Enter exam name"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-sm"
            onClick={async () => {
              console.log(newExamName);

              if (classNumber && user && user._id) {
                await AddNewExam(newExamName, classNumber, user?._id);
                window.location.reload();
              }
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-sm"
          onClick={addExam}
        >
          Add Exam
        </button>
      )}
    </div>
  );
}
