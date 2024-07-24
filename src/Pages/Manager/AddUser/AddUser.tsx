import React, { useState } from "react";
import ParentInfo from "./ParentInfo";
import AddUserRequest from "../../../Api/PostAddUserRequest";

function AddUser() {
  const [selectedOption, setSelectedOption] = useState("Student");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    id: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="w-full lg:mr-0 mr-32 flex flex-col">
      <div className="w-full">
        <div className="flex w-full">
          <div className="border-b border-gray-200 w-full">
            <nav className="-mb-px flex flex-row justify-between w-full">
              <a
                href="#"
                className={`shrink-0 border p-3 text-sm font-medium ${
                  selectedOption === "Student"
                    ? "rounded-t-lg border-gray-300 border-b-white text-sky-600"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedOption("Student")}
              >
                Student
              </a>

              <a
                href="#"
                className={`shrink-0 border p-3 text-sm font-medium ${
                  selectedOption === "Parent"
                    ? "rounded-t-lg border-gray-300 border-b-white text-sky-600"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedOption("Parent")}
              >
                Parent
              </a>

              <a
                href="#"
                className={`shrink-0 border p-3 text-sm font-medium ${
                  selectedOption === "Teacher"
                    ? "rounded-t-lg border-gray-300 border-b-white text-sky-600"
                    : "border-transparent"
                }`}
                onClick={() => setSelectedOption("Teacher")}
              >
                Teacher
              </a>
            </nav>
          </div>
        </div>
      </div>

      {selectedOption === "Parent" && (
        <ParentInfo
          formData={formData}
          handleInputChange={handleInputChange}
          AddUserRequest={AddUserRequest}
        />
      )}

      {/* Display form data object for debugging purposes */}
      <div className="mt-4">
        {/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
      </div>
    </div>
  );
}

export default AddUser;
