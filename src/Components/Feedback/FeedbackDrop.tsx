import { FeedBackModal } from "./FeedBackModal";
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
    if (isLoading || !user || !studentReports) {
      if (user?._id != undefined) getStudentReports();
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

  const handleFormSubmit = async () => {
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
    await AddNewReport(newFeedback, student_id);
    handleModalClose();
    setIsLoading(true);
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
        <FeedBackModal
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
          handleModalClose={handleModalClose}
          formData={formData}
        />
      )}
    </div>
  );
};

export default FeedbackDrop;
