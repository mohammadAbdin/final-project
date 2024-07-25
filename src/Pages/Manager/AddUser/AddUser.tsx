import React, { useEffect, useState } from "react";
import ParentInfo from "./ParentInfo";
import AddUserRequest from "../../../Api/PostAddUserRequest";
import { FormDataType } from "../../../Types/FormDataType";
import StudentInfo from "./StudentInfo";
import { getAllParentIds } from "../../../Api/GetAllParentsId";
import { ParentOptionsType } from "../../../Types/ParentOptionsType";
import TeacherInfo from "./TeacherInfo";

function AddUser() {
  const [selectedOption, setSelectedOption] = useState("Student");
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    id: "",
    age: 0,
    schedule: [],
  });
  const [parentOptions, setParentOptions] = useState<ParentOptionsType[]>([]);
  useEffect(() => {
    const fetchParentIds = async () => {
      try {
        const response = await getAllParentIds();
        console.log("response");

        setParentOptions(response);
      } catch (err) {
        console.error("Error fetching parent IDs" + err);
      }
    };

    fetchParentIds();
  }, []);

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { id, value } = e.target;
  //   if (id == "subject")
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [id]: e.target.textContent,
  //     }));
  //   else
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [id]: value,
  //     }));
  // };
  // const handleInputChange = (
  //   e:
  //     | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  //     | React.MouseEvent<HTMLDivElement>
  // ) => {
  //   const target = e.target as
  //     | HTMLInputElement
  //     | HTMLSelectElement
  //     | HTMLDivElement;
  //   const { id } = target;

  //   if (target instanceof HTMLDivElement && id === "subject") {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [id]: target.textContent || "",
  //     }));
  //   } else if (
  //     target instanceof HTMLInputElement ||
  //     target instanceof HTMLSelectElement
  //   ) {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       [id]: target.value,
  //     }));
  //   }
  // };
  interface SyntheticEvent {
    target: {
      id: string;
      value?: string;
      textContent?: string;
    };
  }
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      | React.MouseEvent<HTMLDivElement>
      | SyntheticEvent
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLDivElement
      | { id: string; value?: string; textContent?: string };
    const { id } = target;

    if ("textContent" in target && id === "subject") {
      setFormData((prevState) => ({
        ...prevState,
        [id]: target.textContent || "",
      }));
    } else if ("value" in target) {
      setFormData((prevState) => ({
        ...prevState,
        [id]: target.value,
      }));
    }
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
                onClick={() => {
                  setFormData({
                    fullName: "",
                    email: "",
                    id: "",
                    age: 0,
                    schedule: [],
                  });
                  setSelectedOption("Student");
                }}
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
                onClick={() => {
                  setFormData({
                    fullName: "",
                    email: "",
                    id: "",
                    age: 0,
                    schedule: [],
                  });
                  setSelectedOption("Parent");
                }}
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
                onClick={() => {
                  setFormData({
                    fullName: "",
                    email: "",
                    id: "",
                    age: 0,
                    schedule: [],
                  });
                  setSelectedOption("Teacher");
                }}
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
      {selectedOption === "Student" && (
        <StudentInfo
          formData={formData}
          handleInputChange={handleInputChange}
          AddUserRequest={AddUserRequest}
          parentOptions={parentOptions}
        />
      )}
      {selectedOption === "Teacher" && (
        <TeacherInfo
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
          AddUserRequest={AddUserRequest}
        />
      )}

      <div className="mt-4"></div>
    </div>
  );
}

export default AddUser;
