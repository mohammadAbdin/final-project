import Calendar from "./Calendar";
import { Appointments } from "@devexpress/dx-react-scheduler-material-ui";
import {
  classes,
  StyledAppointmentsAppointmentContent,
} from "./CalendarStyles";

export default function EventClanedar() {
  const eventsData = [
    {
      event_id: "ev1234",
      eventName: "Annual Science Fair",
      date: "2024/06/15", // Date in DD/MM/YYYY format
      period: "morning",
    },
    {
      event_id: "ev5678",
      eventName: "Math Olympiad",
      date: "2024/07/15",
      period: "afternoon",
    },
    {
      event_id: "ev9101",
      eventName: "School Play",
      date: "2024/07/18",
      period: "evening",
    },
    {
      event_id: "ev1121",
      eventName: "Parent-Teacher Conference",
      date: "2024/06/18",
      period: "morning",
    },
  ];
  const calendarData = eventsData.map((data) => {
    const parts = data.date.split("/");

    // Convert the parts into numbers
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const obj = {
      event: data.eventName,
      students: "",
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
      <>
        <StyledAppointmentsAppointmentContent {...restProps} data={data}>
          <div className={classes.container}>
            <div className="mt-6 text-sm">{data.event}</div>
          </div>
        </StyledAppointmentsAppointmentContent>
      </>
    );
  };
  return <Calendar Calendar1={Calendar1} calendarData={calendarData} />;
}
