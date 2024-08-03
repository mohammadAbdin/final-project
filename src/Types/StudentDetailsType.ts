import { ScheduleEntry } from "./ScheduleEntry";

export interface StudentDetailsType {
  reports: reportType[];
  details: { [subject: string]: detailsType };
  schedule: ScheduleEntry[];
}

export interface detailsType {
  attendanceRecord: {
    datesRecord: Array<{
      date: string;
      attendance: boolean;
    }>;
  };
  examRecords: Array<{
    examName: string;
    grade: string | number;
  }>;
  average: string;
}

export interface reportType {
  date: string;
  reportType: string;
  description: string;
  teacherName: string;
  title: string;
  writer_id: string;
  _id: string;
}
