import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import AddNewReport from "../../Api/PostReportRequest";
import { FeedbackContent } from "../../Types/FeedbackContent";
import UseGetStudentReports from "../../Hooks/UseGetStudentReports";

interface FeedbackFormData {
  title: string;
  description: string;
}

// const reports: FeedbackContent[] = [
//   {
//     reportType: "Teacher",
//     writer_id: "12345",
//     date: "2024-07-25",
//     title: "Math Exam Report",
//     description:
//       "The math exam for Class 10 was conducted smoothly. The majority of students performed well.",
//   },
//   {
//     reportType: "Parent",
//     writer_id: "67890",
//     date: "2024-07-26",
//     title: "PTA Meeting Feedback",
//     description:
//       "Parents expressed concerns about the recent changes in the curriculum. They appreciated the teachers' efforts.",
//   },
//   {
//     reportType: "Teacher",
//     writer_id: "54321",
//     date: "2024-07-27",
//     title: "Field Trip Update",
//     description:
//       "The planned field trip to the science museum has been postponed due to unforeseen weather conditions.",
//   },
//   {
//     reportType: "Parent",
//     writer_id: "98765",
//     date: "2024-07-28",
//     title: "Student Progress Inquiry",
//     description:
//       "Inquiring about the academic progress of my child, particularly in science and mathematics subjects.",
//   },
// ];

const FeedbackDrop: React.FC = () => {
  const { student_id } = useParams();

  const [feedbackData, setFeedbackData] = useState<FeedbackContent[]>();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FeedbackFormData>({
    title: "",
    description: "",
  });
  const [feedbackType, setFeedbackType] = useState<"Teacher" | "Parent">(
    "Teacher"
  );
  const { user } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);

  const { getStudentReports, studentReports } = UseGetStudentReports(
    setIsLoading,
    student_id
  );

  useEffect(() => {
    if (isLoading && user && !studentReports) {
      if (user._id != undefined) getStudentReports();
    }
  }, [isLoading, user, getStudentReports, studentReports]);
  useEffect(() => {
    if (studentReports) {
      setFeedbackData(studentReports);
    }
  }, [studentReports, feedbackData]);

  if (isLoading || studentReports === null || feedbackData == null) {
    return (
      <div
        className="spinner mt-20 inline-block h-8 w-8 animate-spin rounded-full border-4 border-t-4 border-red-200 border-t-black"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
  const handleFeedbackTypeChange = (type: "Teacher" | "Parent") => {
    setFeedbackType(type);
  };

  const handleAddFeedbackClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({ title: "", description: "" }); // Reset form data
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = () => {
    const newFeedback: FeedbackContent = {
      reportType: feedbackType,
      writer_id: user?._id,
      date: new Date().toISOString().split("T")[0].split("-").join("/"), // ISO date format (YYYY-MM-DD)
      title: formData.title,
      description: formData.description,
    };
    setFeedbackData((prevData) => {
      if (prevData) {
        return [...prevData, newFeedback];
      } else {
        return [newFeedback];
      }
    });
    AddNewReport(newFeedback, student_id);
    handleModalClose();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={() => handleFeedbackTypeChange("Teacher")}
        >
          Teacher Feedback
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={() => handleFeedbackTypeChange("Parent")}
        >
          Parent Feedback
        </button>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">{feedbackType} Feedback</h3>
        <ul className="space-y-4">
          {feedbackData
            .filter((fb) => fb.reportType === feedbackType)
            .map((fb, index) => (
              <li key={index} className="p-4 border border-gray-200 rounded-lg">
                <strong className="block text-lg font-bold">{fb.title}</strong>
                <span className="text-sm text-gray-500">{fb.date}</span>
                <p className="mt-2">{fb.description}</p>
              </li>
            ))}
        </ul>
        {feedbackType == "Teacher" ? (
          <button
            className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            onClick={handleAddFeedbackClick}
          >
            Add Feedback
          </button>
        ) : (
          <></>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Feedback</h2>
            <label className="block mb-2">
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </label>
            <label className="block mb-4">
              Description:
              <textarea
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                className="mt-1 block w-full border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                rows={4}
              />
            </label>
            <div className="flex justify-end space-x-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={handleModalClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackDrop;
