import React, { useState } from "react";
import { ExamType } from "../../../Types/ExamType";
import UserType from "../../../Types/UserType";
import { PutExamMarks } from "../../../Api/PutExamGrades";
import { StudentFeedbackDetailsType } from "../../../Types/StudentFeedbackDetailsType";

interface ClassExamsProps {
  students: StudentFeedbackDetailsType[];
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
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface modifiedStudent {
  Grade: string;
  examName: string;
  student_id: string;
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
  setIsLoading,
}: ClassExamsProps) {
  const [expandedExam, setExpandedExam] = useState<string | null>(null);
  const [modifiedStudents, setModifiedStudents] = useState<modifiedStudent[]>(
    []
  );
  const [editingStudent, setEditingStudent] = useState<string | null>(null);
  const [newGrade, setNewGrade] = useState<string>("");

  const toggleExamDetails = (examId: string) => {
    setExpandedExam(expandedExam === examId ? null : examId);
  };

  const handleInputChange = (
    studentId: string,
    examName: string,
    newGrade: string
  ) => {
    setModifiedStudents((prev) => {
      const existing = prev.find(
        (mod) => mod.student_id === studentId && mod.examName === examName
      );
      if (existing) {
        return prev.map((mod) =>
          mod.student_id === studentId && mod.examName === examName
            ? { ...mod, Grade: newGrade }
            : mod
        );
      } else {
        return [...prev, { student_id: studentId, examName, Grade: newGrade }];
      }
    });
  };

  const handleSave = async () => {
    await PutExamMarks(modifiedStudents, user?._id, classNumber);
    setIsLoading(true);
  };

  return (
    <div className="bg-white p-4 rounded-md">
      <ul>
        {exams.map((exam) => (
          <li
            key={exam._id}
            className="border-b p-2 last:border-b-0 hover:bg-blue-100 rounded-md"
          >
            <div className="flex justify-between items-center">
              <span
                onClick={() => toggleExamDetails(exam._id)}
                className="cursor-pointer text-gray-700"
              >
                {exam.examName}
              </span>
            </div>
            {expandedExam === exam._id && (
              <div>
                {students.map((student) => {
                  const studentGrade = exam.studentGrades.find(
                    (sg) => sg.student_id === student.student_id
                  );
                  const modifiedStudent = modifiedStudents.find(
                    (mod) =>
                      mod.student_id === student.student_id &&
                      mod.examName === exam.examName
                  );
                  const Grade = modifiedStudent
                    ? modifiedStudent.Grade
                    : studentGrade
                    ? studentGrade.Grade
                    : 0;

                  return (
                    <div
                      key={student.student_id}
                      className="flex items-center my-2 justify-between"
                    >
                      <span className="w-1/3 text-left">{student.name}</span>
                      {editingStudent === student.student_id ? (
                        <input
                          type="number"
                          className="bg-white"
                          value={newGrade}
                          onChange={(e) => setNewGrade(e.target.value)}
                          onBlur={() => {
                            handleInputChange(
                              student.student_id,
                              exam.examName,
                              newGrade
                            );
                            setEditingStudent(null);
                          }}
                          autoFocus
                        />
                      ) : (
                        <>
                          <span className="mx-2">{Grade}</span>
                          <button
                            onClick={() => {
                              setEditingStudent(student.student_id);
                              setNewGrade(Grade.toString());
                            }}
                            className="px-2 bg-blue-500 text-white rounded"
                          >
                            Edit
                          </button>
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
        <div className="flex justify-center mb-4">
          <input
            type="text"
            className="px-4 py-2 border rounded-l w-1/2 bg-white"
            value={newExamName}
            onChange={(e) => setNewExamName(e.target.value)}
            placeholder="Enter exam name"
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-sm"
            onClick={async () => {
              if (classNumber && user && user._id) {
                await AddNewExam(newExamName, classNumber, user._id);
                setIsLoading(true);
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
