import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AttendanceJournal.css";

interface Props {
  events?: any;
  selectedDate: any;
  onDateChange: any;
}

const AttendanceJournal = ({ events, selectedDate, onDateChange }: Props) => {
  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const dayEvent = events.find((event) => event.date === formattedDate);

    if (dayEvent) {
      return `${dayEvent.status}`;
    } else {
      return "";
    }
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 m-4 bg-white calendar-container">
      <h2 className="text-lg font-semibold mb-2">Attendance Journal</h2>
      <Calendar
        onChange={onDateChange}
        value={selectedDate}
        tileClassName={tileClassName}
      />
    </div>
  );
};

export default AttendanceJournal;
