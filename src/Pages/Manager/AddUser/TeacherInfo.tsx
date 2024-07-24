import React, { useState } from "react";
import { FormDataType } from "../../../Types/FormDataType";

interface ParentInfoProps {
  formData: FormDataType;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  AddUserRequest: (userType: string, formData: FormDataType) => Promise<void>;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}
interface SyntheticEvent {
  target: {
    id: string;
    value?: string;
    textContent?: string;
  };
}
const subjects = [
  "Math",
  "Science",
  "English",
  "Social Studies",
  "Arts",
  "Music",
  "History",
  "Physics",
  "Chemistry",
  "Biology",
  "Geography",
];
function TeacherInfo({
  formData,
  handleInputChange,
  setFormData,
}: //   AddUserRequest,
ParentInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClassOpen, setIsClassOpen] = useState(false);
  const [classNumber, setClassNumber] = useState("1");
  const [selectedSubject, setSelectedSubject] = useState(formData.subject);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDropdownClass = () => setIsClassOpen(!isOpen);

  const handleClassClick = (number: number) => {
    console.log(number);
    const newNumber = number.toString();
    setClassNumber(newNumber);
    setIsClassOpen(false);
  };
  const handleOptionClick = (subject: string) => {
    setSelectedSubject(subject);

    const syntheticEvent: SyntheticEvent = {
      target: {
        id: "subject",
        textContent: subject,
      },
    };

    handleInputChange(syntheticEvent);
    setIsOpen(false);
  };
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
  const periods = [
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
  ];
  const handleButtonClick = (
    day: string,
    period: string,
    classNumber: string
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      schedule: (prevData.schedule ?? []).concat({
        day,
        period,
        class: classNumber.toString(),
      }),
    }));
  };
  return (
    <div className="mt-4 p-2 px-2 lg:p-4 lg:px-10 border rounded-lg">
      <h2 className="text-lg text-left font-medium">Parent Information</h2>
      <form className="p-4 px-8 w-full flex lg:flex-row flex-col h-full">
        <div className="w-full">
          <div className="mb-4 ">
            <label
              htmlFor="fullName"
              className="block text-sm text-left font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 block w-2/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-left font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-2/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-left text-gray-700"
            >
              ID number
            </label>
            <input
              type="tel"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className="mt-1 block w-2/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm text-left font-medium text-gray-700"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="mt-1 block w-2/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm text-left font-medium text-gray-700"
            >
              Subject
            </label>
            {/* <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="mt-1 block w-2/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50 h-10 overflow-y-auto"
              required
            >
              <option value="">Select Subject</option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select> */}
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
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-left text-gray-700"
            >
              age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="mt-1 block w-2/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
              required
            />
          </div>

          <div className="w-full flex justify-start">
            <button
              className="text-left ml-5 bg-gray-500 p-2 rounded hover:bg-gray-700 text-white"
              onClick={(e) => {
                e.preventDefault();
                console.log("formData", formData);
                //   AddUserRequest("Teacher", formData);
              }}
            >
              Add Teacher
            </button>
          </div>
        </div>
        <div className="w-full h-full" id="schedule">
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
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={i}
                    id="class"
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleClassClick(i)}
                  >
                    {i.toString()}
                  </div>
                ))}
                {/* ))} */}
              </div>
            )}
          </div>
          <table>
            <thead>
              <tr>
                <th>Period/Day</th>
                {days.map((day) => (
                  <th key={day}>{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {periods.map((period) => (
                <tr key={period}>
                  <td>{period}</td>
                  {days.map((day) => (
                    <td key={day}>
                      <button
                        className="bg-gray-700 p-1"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(formData);

                          console.log(day, period);

                          handleButtonClick(day, period, classNumber);
                        }}
                      >
                        Add
                      </button>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default TeacherInfo;
