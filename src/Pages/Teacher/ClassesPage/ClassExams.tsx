import React, { useState } from "react";
import { ExamType } from "../../../Types/ExamType";
import UserType from "../../../Types/UserType";
interface ClassExamsProps {
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

  const toggleExamDetails = (id: number) => {
    setExpandedExam(expandedExam === id ? null : id);
  };

  return (
    <div>
      <ul className="bg-white shadow-md rounded-lg p-4 mb-4">
        {exams.map((exam) => (
          <li key={exam._id} className="border-b py-2 last:border-b-0">
            <div className="flex justify-between items-center">
              <span
                onClick={() => toggleExamDetails(exam._id)}
                className="cursor-pointer text-blue-500 hover:underline"
              >
                {exam.examName}
                {/* Unit {index + 1} : {topic.title} */}
              </span>
            </div>
            {expandedExam === exam._id && (
              <div>
                <div></div>

                <div className="flex justify-center items-center my-3">
                  <button className="px-4 py-2 bg-green-500 text-white rounded">
                    save
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
            className="px-4 py-2 bg-green-500 text-white rounded-r"
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
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={addExam}
        >
          Add Exam
        </button>
      )}
    </div>
  );
}
