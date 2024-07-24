import { styled, alpha } from "@mui/material/styles";
import { ViewState } from "@devexpress/dx-react-scheduler";
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

const PREFIX = "Abx";

const classes = {
  appointment: `${PREFIX}-appointment`,
  weekEndCell: `${PREFIX}-weekEndCell`,
  weekEndDayScaleCell: `${PREFIX}-weekEndDayScaleCell`,
  text: `${PREFIX}-text`,
  content: `${PREFIX}-content`,
  container: `${PREFIX}-container`,
};

const StyledMonthViewDayScaleCell = styled(MonthView.DayScaleCell)(
  ({ theme: { palette } }) => ({
    [`&.${classes.weekEndDayScaleCell}`]: {
      backgroundColor: alpha(palette.action.disabledBackground, 0.06),
    },
  })
);

const StyledMonthViewTimeTableCell = styled(MonthView.TimeTableCell)(
  ({ theme: { palette } }) => ({
    [`&.${classes.weekEndCell}`]: {
      backgroundColor: alpha(palette.action.disabledBackground, 0.04),
      "&:hover": {
        backgroundColor: alpha(palette.action.disabledBackground, 0.04),
      },
      "&:focus": {
        backgroundColor: alpha(palette.action.disabledBackground, 0.04),
      },
    },
  })
);

const StyledAppointmentsAppointmentContent = styled(
  Appointments.AppointmentContent
)(() => ({
  [`& .${classes.text}`]: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "25px",
    marginTop: "15px",
  },
  [`& .${classes.content}`]: {
    opacity: 0.7,
  },
  [`& .${classes.container}`]: {
    width: "100%",
    lineHeight: 1.2,
    height: "100%",
  },
}));
/*const date = "2024/6/8";
const parts = date.split("/");

// Convert the parts into numbers
const year = parseInt(parts[0], 10);
const month = parseInt(parts[1], 10);
const day = parseInt(parts[2], 10);
console.log(year, month, day);*/

const calendarData = [
  {
    students: 19,
    allStudents: 24,
    startDate: new Date(2024, 6, 8, 12, 0),
    endDate: new Date(2024, 6, 8, 12, 1),
  },
  {
    students: 24,
    allStudents: 24,
    startDate: new Date(2024, 6, 17, 12, 0),
    endDate: new Date(2024, 6, 17, 12, 1),
  },
  {
    students: 22,
    allStudents: 24,
    startDate: new Date(2024, 6, 4, 12, 0),
    endDate: new Date(2024, 6, 4, 12, 1),
  },
];

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

export default () => (
  <>
    <h1>Calendar</h1>
    <Paper>
      <Scheduler data={calendarData}>
        <ViewState  />
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
