// // ParentInfo.tsx
// import React from "react";
// import { FormDataType } from "../../../Types/FormDataType";
// import { ParentOptionsType } from "../../../Types/ParentOptionsType";

// interface StudentProps {
//   formData: FormDataType;
//   handleInputChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => void;
//   AddUserRequest: (userType: string, formData: FormDataType) => Promise<void>;
//   parentOptions: ParentOptionsType[];
// }

// function StudentInfo({
//   formData,
//   handleInputChange,
//   AddUserRequest,
//   parentOptions,
// }: StudentProps) {
//   console.log(parentOptions);

//   return (
//     <div className="mt-4 p-2 px-2 lg:p-4 lg:px-10 border rounded-lg">
//       <h2 className="text-lg text-left font-medium">Parent Information</h2>
//       <form className="p-4 px-8">
//         <div className="mb-4">
//           <label
//             htmlFor="parent_id"
//             className="block text-sm text-left font-medium text-gray-700"
//           >
//             Parent ID
//           </label>
//           <select
//             id="parent_id"
//             name="parent_id"
//             value={formData.parent_id}
//             onChange={handleInputChange}
//             className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//             required
//           >
//             {parentOptions.length > 1 ? (
//               parentOptions.map((parentOption, index) => (
//                 <option key={index} value={parentOption.parent_id}>
//                   {parentOption.userPassword}
//                 </option>
//               ))
//             ) : (
//               <option></option>
//             )}
//           </select>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="fullName"
//             className="block text-sm text-left font-medium text-gray-700"
//           >
//             fullName
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleInputChange}
//             className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm text-left font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium text-left text-gray-700"
//           >
//             ID number
//           </label>
//           <input
//             type="tel"
//             id="id"
//             name="id"
//             value={formData.id}
//             onChange={handleInputChange}
//             className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="gender"
//             className="block text-sm text-left font-medium text-gray-700"
//           >
//             Gender
//           </label>
//           <select
//             id="gender"
//             name="gender"
//             value={formData.gender}
//             onChange={handleInputChange}
//             className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label
//             htmlFor="class"
//             className="block text-sm text-left font-medium text-gray-700"
//           >
//             Class
//           </label>
//           <select
//             id="class"
//             name="class"
//             value={formData.class}
//             onChange={handleInputChange}
//             className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
//             required
//           >
//             {Array.from({ length: 12 }, (_, i) => (
//               <option key={i + 1} value={i + 1}>
//                 {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="w-full flex justify-start">
//           <button
//             className="text-left ml-5 bg-gray-500 p-2 rounded hover:bg-gray-700 text-white"
//             onClick={(e) => {
//               e.preventDefault();
//               console.log("Student", formData);

//               AddUserRequest("Student", formData);
//             }}
//           >
//             Add Student
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default StudentInfo;
