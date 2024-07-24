// ParentInfo.js
import React from "react";
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  id: string;
}

interface ParentInfoProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  AddUserRequest: (userType: string, formData: FormData) => Promise<void>;
}

function ParentInfo({
  formData,
  handleInputChange,
  AddUserRequest,
}: ParentInfoProps) {
  return (
    <div className="mt-4 p-2 px-2 lg:p-4 lg:px-10 border rounded-lg">
      <h2 className="text-lg text-left font-medium">Parent Information</h2>
      <form className="p-4 px-8">
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
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
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
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-left text-gray-700"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
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
            className="mt-1 block w-1/3 border border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-gray-600 focus:ring focus:ring-gray-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="w-full flex justify-start">
          <button
            className="text-left ml-5 bg-gray-500 p-2 rounded hover:bg-gray-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              //   console.log("formData", formData);
              AddUserRequest("Parent", formData);
            }}
          >
            Add Parent
          </button>
        </div>
      </form>
    </div>
  );
}

export default ParentInfo;
