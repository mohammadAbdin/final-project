import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  classes,
  StyledMonthViewDayScaleCell,
  StyledMonthViewTimeTableCell,
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

interface CalendarComponentType {
  calendarData: {
    students: string;
    allStudents: string;
    startDate: Date;
    endDate: Date;
  }[];
  Calendar1: ({
    data,
    ...restProps
  }: Appointments.AppointmentContentProps) => JSX.Element; // Replace with your actual calendar data structure
}
const CalendarComponent = ({
  calendarData,
  Calendar1,
}: CalendarComponentType) => {
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

          <Appointments appointmentContentComponent={Calendar1} />
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
export default CalendarComponent;
