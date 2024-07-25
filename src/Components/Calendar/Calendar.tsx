import { styled, alpha } from "@mui/material/styles";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  classes,
  StyledMonthViewDayScaleCell,
  StyledMonthViewTimeTableCell,
  StyledAppointmentsAppointmentContent,
} from "./CalendarStyles";
import {
  Scheduler,
  Appointments,
  MonthView,
  Toolbar,
  DateNavigator,
  ViewSwitcher,
  TodayButton,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";

import Paper from "@mui/material/Paper";
import classNames from "clsx";
export default ({ eventsData }) => {
  // const apidata = [data1, data2];

  // const calendarData1 = [
  //   {
  //     students: "Holiday",
  //     allStudents: "",
  //     startDate: new Date(2024, 6, 7, 12, 0),
  //     endDate: new Date(2024, 6, 9, 12, 1),
  //   },
  //   {
  //     students: 24,
  //     allStudents: 24,
  //     startDate: new Date(2024, 6, 17, 12, 0),
  //     endDate: new Date(2024, 6, 17, 12, 1),
  //   },
  //   {
  //     students: 22,
  //     allStudents: 24,
  //     startDate: new Date(2024, 6, 4, 12, 0),
  //     endDate: new Date(2024, 6, 4, 12, 1),
  //   },
  // ];
  const calendarData = eventsData.map((data) => {
    const parts = data.date.split("/");

    // Convert the parts into numbers
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const obj = {
      students: data.eventName,
      allStudents: "",
      startDate: new Date(year, month - 1, day, 12, 0),
      endDate: new Date(year, month - 1, day, 12, 1),
    };
    return obj;
  });
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

      // `attendance` is optional and will default to `false`
    },
    {
      date: "2024/07/21",
      attendance: true,
    },
  ];
  // const date = "2024/6/8";

  // console.log(year, month, day);

  // const attendanceRecords = [
  //   {
  //     date: "2024/07/24", // Format: 'year/month/day'
  //     attendance: true,
  //     students: "Holiday",
  //     allStudents: "",
  //     startDate: new Date(year, month, day, 12, 0),
  //     endDate: new Date(2024, 6, 9, 12, 1),
  //   },
  // ];

  const isWeekEnd = (date: Date): boolean => date.getDay() === 6;

  const DayScaleCell = ({
    startDate,
    ...restProps
  }: MonthView.DayScaleCellProps) => (
    <StyledMonthViewDayScaleCell
      className={classNames({
        [classes.weekEndDayScaleCell]: isWeekEnd(startDate),
      })}
      startDate={startDate}
      {...restProps}
    />
  );

  const TimeTableCell = ({
    startDate,
    ...restProps
  }: MonthView.TimeTableCellProps) => (
    <StyledMonthViewTimeTableCell
      className={classNames({
        [classes.weekEndCell]: isWeekEnd(startDate!),
      })}
      startDate={startDate}
      {...restProps}
    />
  );
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  const handleClicked = () => {
    //navigation
  };

  const Calendar = ({
    data,
    ...restProps
  }: Appointments.AppointmentContentProps) => {
    return (
      <>
        <StyledAppointmentsAppointmentContent {...restProps} data={data}>
          <div className={classes.container}>
            <div className={classes.text} onClick={handleClicked}>
              {data.students} / {data.allStudents}
            </div>
          </div>
        </StyledAppointmentsAppointmentContent>
      </>
    );
  };

  return (
    <>
      <h1>Calendar</h1>
      <Paper>
        <Scheduler data={calendarData}>
          <ViewState />
          <MonthView
            dayScaleCellComponent={DayScaleCell}
            timeTableCellComponent={TimeTableCell}
          />

          <Appointments appointmentContentComponent={Calendar} />
          <AppointmentTooltip showCloseButton />
          <Toolbar />
          <DateNavigator />
          <ViewSwitcher />
          <TodayButton />
        </Scheduler>
      </Paper>
    </>
  );
};
