// ParentInfo.tsx
import React from "react";
import { FormDataType } from "../../../Types/FormDataType";

interface StudentProps {
  formData: FormDataType;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  AddUserRequest: (userType: string, formData: FormDataType) => Promise<void>;
  parentIds: string[]; // Add this prop to pass parent IDs
}

function StudentInfo({
  formData,
  handleInputChange,
  AddUserRequest,
  parentIds,
}: StudentProps) {
  return (
    <div className="mt-4 p-2 px-2 lg:p-4 lg:px-10 border rounded-lg">
      <h2 className="text-lg text-left font-medium">Parent Information</h2>
      <form className="p-4 px-8">
        <div className="mb-4">
          <label
            htmlFor="parent_id"
            className="block text-sm text-left font-medium text-gray-700"
          >
            Parent ID
          </label>
          <select
            id="parent_id"
            name="parent_id"
            value={formData.parent_id}
            onChange={handleInputChange}
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            required
          >
            {parentIds.map((id) => (
              <option key={id} value={id}>
                {id}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm text-left font-medium text-gray-700"
          >
            fullName
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
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
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="class"
            className="block text-sm text-left font-medium text-gray-700"
          >
            Class
          </label>
          <input
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleInputChange}
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="w-full flex justify-start">
          <button
            className="text-left ml-5 bg-gray-500 p-2 rounded hover:bg-gray-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              console.log("Student", formData);

              //   AddUserRequest("Parent", formData);
            }}
          >
            Add Parent
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentInfo;
