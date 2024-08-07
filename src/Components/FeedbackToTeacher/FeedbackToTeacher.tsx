import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";

interface FeedbackFormData {
  title: string;
  description: string;
}
export const FeedbackToTeacher = () => {
  const { user } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FeedbackFormData>({
    title: "",
    description: "",
  });
  const [feedbackData, setFeedbackData] = useState<FeedbackFormData[]>([]);
  const handleAddFeedbackClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({ title: "", description: "" });
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = () => {
    const newFeedback = {
      date: new Date().toISOString().split("T")[0], // ISO date format (YYYY-MM-DD)
      title: formData.title,
      description: formData.description,
    };
    setFeedbackData([...feedbackData, newFeedback]);
    handleModalClose();
  };
  //

  return (
    <div>
      {!showModal ? (
        <div>
          {" "}
          {user?.userType == "Teacher" ? (
            <button
              className="mt-4 blue-button"
              onClick={handleAddFeedbackClick}
            >
              Send Feedback To The Teacher
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </div>
  );
};
