// import React from "react";
interface TeacherSelectedSubjectType {
  toggleDropdown: () => void;
  selectedSubject: string | null | undefined;
  isOpen: boolean;
  subjects: string[];
  handleOptionClick: (subject: string) => void;
}
export function TeacherSelectedSubject({
  toggleDropdown,
  selectedSubject,
  isOpen,
  subjects,
  handleOptionClick,
}: TeacherSelectedSubjectType) {
  return (
    <div className="relative w-2/3 mt-1">
      <div
        className="border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm cursor-pointer h-10 flex items-center justify-between px-2"
        onClick={toggleDropdown}
      >
        <span>{selectedSubject || "Select Subject"}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {subjects.map((subject) => (
            <div
              key={subject}
              id="subject"
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleOptionClick(subject)}
            >
              {subject}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
