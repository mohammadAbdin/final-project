import React from "react";
import { TeacherSelectedSubject } from "./TeacherSelectedSubject";
import { FormDataType } from "../../../Types/FormDataType";
import AddUserRequest from "../../../Api/PostAddUserRequest";

interface TeacherPersonalInfoType {
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  toggleDropdown: () => void;
  selectedSubject: string | null | undefined;
  isOpen: boolean;
  subjects: string[];
  handleOptionClick: (subject: string) => void;
  formData: FormDataType;
}
export function TeacherPersonalInfo({
  handleInputChange,
  toggleDropdown,
  selectedSubject,
  isOpen,
  subjects,
  handleOptionClick,
  formData,
}: TeacherPersonalInfoType) {
  return (
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
          htmlFor="id"
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

        <TeacherSelectedSubject
          toggleDropdown={toggleDropdown}
          selectedSubject={selectedSubject}
          isOpen={isOpen}
          subjects={subjects}
          handleOptionClick={handleOptionClick}
        />
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
            AddUserRequest("Teacher", formData);
          }}
        >
          Add Teacher
        </button>
      </div>
    </div>
  );
}
