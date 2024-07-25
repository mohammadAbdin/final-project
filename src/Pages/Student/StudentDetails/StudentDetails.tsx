import Calendar from "../../../Components/Calendar/Calendar";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import {
  classes,
  StyledAppointmentsAppointmentContent,
} from "../../../Components/Calendar/CalendarStyles";
export default function StudentDetails() {
  const attendanceRecords = [
    {
      date: "2024/07/24", // Format: 'year/month/day'
      attendance: true,
    },
    {
      date: "2024/07/23",
      attendance: false,
    },
    {
      date: "2024/07/22",
      attendance: false,
    },
    {
      date: "2024/07/21",
      attendance: true,
    },
  ];

  const calendarData = attendanceRecords.map((data) => {
    const parts = data.date.split("/");

    // Convert the parts into numbers
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const students = data.attendance ? "True" : "False";
    const obj = {
      students: students,
      allStudents: "",
      startDate: new Date(year, month - 1, day, 12, 0),
      endDate: new Date(year, month - 1, day, 12, 1),
    };
    return obj;
  });
  const Calendar1 = ({
    data,
    ...restProps
  }: Appointments.AppointmentContentProps) => {
    return (
      <div className="w-full bg-white">
        <StyledAppointmentsAppointmentContent {...restProps} data={data}>
          <div className={classes.container}>
            <div className={`${classes.text} text-gray-600`}>
              {data.students == "True" ? <p>he came</p> : <p>he did not</p>}
              {/* here to add an x and a green check  */}
            </div>
          </div>
        </StyledAppointmentsAppointmentContent>
      </div>
    );
  };
  return <Calendar Calendar1={Calendar1} calendarData={calendarData} />;
}
