import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AttendanceJournal = ({ events, selectedDate, onDateChange }: Props) => {
  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const dayEvent = events.find((event) => event.date === formattedDate);

    if (dayEvent) {
      return `border border-gray-300 rounded-md p-4 m-4 bg-white ${getColorClass(
        dayEvent.status
      )}`;
    } else {
      return "border border-gray-300 rounded-md p-4 m-4 bg-white";
    }
  };

  const getColorClass = (status) => {
    switch (status) {
      case "present":
        return "bg-green-200";
      case "late":
        return "bg-blue-200";
      case "absent":
        return "bg-red-200";
      default:
        return "";
    }
  };

  return (
    <div className="c-div-s">
      <h2 className="h2-s">Attendance Journal</h2>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
        className="border-none w-full"
      />
    </div>
  );
};

export default AttendanceJournal;
