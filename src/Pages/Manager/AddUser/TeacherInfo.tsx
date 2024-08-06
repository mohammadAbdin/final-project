// import { TeacherPersonalInfo } from "./TeacherPersonalInfo";
// import { TeacherClassSelector } from "./TeacherClassSelector";
// import { TeacherScheduleTable } from "./TeacherScheduleTable";
// import React, { useState } from "react";
// import { FormDataType } from "../../../Types/FormDataType";
// import { days, periods, subjects } from "./constData";
// interface ParentInfoProps {
//   formData: FormDataType;
//   handleInputChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => void;
//   AddUserRequest: (userType: string, formData: FormDataType) => Promise<void>;
//   setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
// }
// interface SyntheticEvent {
//   target: {
//     id: string;
//     value?: string;
//     textContent?: string;
//   };
// }

// function TeacherInfo({
//   formData,
//   handleInputChange,
//   setFormData,
// }: //   AddUserRequest,
// ParentInfoProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClassOpen, setIsClassOpen] = useState(false);
//   const [classNumber, setClassNumber] = useState("1");
//   const [selectedSubject, setSelectedSubject] = useState(formData.subject);

//   const toggleDropdown = () => setIsOpen(!isOpen);
//   const toggleDropdownClass = () => setIsClassOpen(!isOpen);

//   const handleClassClick = (number: number) => {
//     console.log(number);
//     const newNumber = number.toString();
//     setClassNumber(newNumber);
//     setIsClassOpen(false);
//   };
//   const handleOptionClick = (subject: string) => {
//     setSelectedSubject(subject);

//     const syntheticEvent: SyntheticEvent = {
//       target: {
//         id: "subject",
//         textContent: subject,
//       },
//     };

//     handleInputChange(syntheticEvent);
//     setIsOpen(false);
//   };
//   const handleButtonClick = (
//     day: string,
//     period: string,
//     classNumber: string
//   ) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       schedule: (prevData.schedule ?? []).concat({
//         day,
//         period,
//         class: classNumber.toString(),
//       }),
//     }));
//   };
//   return (
//     <div className="mt-4 p-2 px-2 lg:p-4 lg:px-10 border rounded-lg">
//       <h2 className="text-lg text-left font-medium">Parent Information</h2>
//       <form className="p-4 px-8 w-full flex lg:flex-row flex-col h-full">
//         <TeacherPersonalInfo
//           handleInputChange={handleInputChange}
//           toggleDropdown={toggleDropdown}
//           selectedSubject={selectedSubject}
//           isOpen={isOpen}
//           subjects={subjects}
//           handleOptionClick={handleOptionClick}
//           formData={formData}
//         />
//         <div className="w-full h-full" id="schedule">
//           <TeacherClassSelector
//             toggleDropdownClass={toggleDropdownClass}
//             classNumber={classNumber}
//             isOpen={isOpen}
//             isClassOpen={isClassOpen}
//             handleClassClick={handleClassClick}
//           />
//           <TeacherScheduleTable
//             days={days}
//             periods={periods}
//             formData={formData}
//             handleButtonClick={handleButtonClick}
//             classNumber={classNumber}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default TeacherInfo;
