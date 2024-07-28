// import React from "react";
interface TeacherClassSelectorType {
  toggleDropdownClass: () => void;
  classNumber: string | null;
  isOpen: boolean;
  isClassOpen: boolean;
  handleClassClick: (classNumber: number) => void;
}
export function TeacherClassSelector({
  toggleDropdownClass,
  classNumber,
  isOpen,
  isClassOpen,
  handleClassClick,
}: TeacherClassSelectorType) {
  return (
    <div className="relative w-2/3 mt-1">
      <div
        className="border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm cursor-pointer h-10 flex items-center justify-between px-2"
        onClick={toggleDropdownClass}
      >
        <span>{classNumber || "1"}</span>
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
      {isClassOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
          {Array.from(
            {
              length: 12,
            },
            (_, i) => {
              i++;
              return (
                <div
                  key={i}
                  id="class"
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleClassClick(i)}
                >
                  {i.toString()}
                </div>
              );
            }
          )}
        </div>
      )}
    </div>
  );
}
