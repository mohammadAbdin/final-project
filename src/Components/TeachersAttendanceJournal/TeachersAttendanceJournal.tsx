import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

export const TeachersAttendanceJournal = ({
  classNumber,
}: {
  classNumber: string | undefined;
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  // Update the type to match the expected value type from react-calendar
  const handleDateChange = (date: Date | Date[] | null) => {
    if (date instanceof Date) {
      setSelectedDate(date);
      const formattedDate = formatDate(date);
      navigate(`/student-list/${classNumber}`, {
        state: { selectedDate: formattedDate },
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teachers Attendance Journal</h1>
      <div className="border border-gray-300 rounded-md p-4 m-4 bg-white calendar-container">
        <h2 className="text-lg font-semibold mb-2">Attendance Journal</h2>
        <Calendar onClickDay={handleDateChange} value={selectedDate} />
      </div>
    </div>
  );
};
