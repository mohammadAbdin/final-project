import { FormDataType } from "../../../Types/FormDataType";

interface UserTypeOptionsType {
  selectedOption: string;
  setFormData: (formData: FormDataType) => void;
  setSelectedOption: (option: string) => void;
}
export function UserTypeOptions({
  selectedOption,
  setFormData,
  setSelectedOption,
}: UserTypeOptionsType) {
  return (
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
  );
}
