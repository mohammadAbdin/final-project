import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AttendanceJournal.css";
interface AttendanceJournalPropsType {
  events: { date: string; status: string }[];
  selectedDate: Date;
  onDateChange: (date: Date) => void;
}
interface tileClassNameProps {
  date: Date;
}
const AttendanceJournal = ({
  events,
  selectedDate,
}: AttendanceJournalPropsType) => {
  const tileClassName = ({ date }: tileClassNameProps) => {
    const formattedDate = date.toISOString().split("T")[0];

    const dayEvent = events.find((event) => event.date === formattedDate);

    return dayEvent ? `${dayEvent.status}` : "";
  };

  return (
    <div className="c-div-s">
      <h2 className="h2-s">Attendance Journal</h2>
      <div className="calendar-container">
        <Calendar
          value={selectedDate}
          tileClassName={tileClassName}
          className="calendar"
        />
      </div>

      <div className="flex justify-center mt-5 space-x-6">
        <div className="flex items-center">
          <div className="present w-4 h-4 mr-1"></div>
          <span>Present</span>
        </div>
        <div className="flex items-center">
          <div className="bg-pink-300 w-4 h-4 mr-1"></div>
          <span className="text-sm">Absent</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceJournal;
