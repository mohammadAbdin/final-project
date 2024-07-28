import Calendar from "../../../Components/Calendar/Calendar";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import {
  classes,
  StyledAppointmentsAppointmentContent,
} from "../../../Components/Calendar/CalendarStyles";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

export default function TeacherAbsentCalendar() {
  const calendarData1: unknown[] = [
    {
      students: 20,
      allStudents: 24,
      date: "2024/07/29",
    },
    {
      students: 24,
      allStudents: 24,
      date: "2024/07/28",
    },
    {
      students: 22,
      allStudents: 24,
      date: "2024/07/30",
    },
  ];

  const calendarData = calendarData1.map((data: any) => {
    const parts = data.date.split("/");

    // Convert the parts into numbers
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const obj = {
      students: data.students,
      allStudents: data.allStudents,
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
      <div>
        <StyledAppointmentsAppointmentContent {...restProps} data={data}>
          <div className={classes.container}>
            {data.students == data.allStudents ? (
              <CheckIcon sx={{ color: "white", fontSize: 20 }} />
            ) : (
              <ClearIcon sx={{ color: "white", fontSize: 20 }} />
            )}
            <div className=" text-lg">
              {data.students} / {data.allStudents}
            </div>
          </div>
        </StyledAppointmentsAppointmentContent>
      </div>
    );
  };
  return <Calendar Calendar1={Calendar1} calendarData={calendarData} />;
}
