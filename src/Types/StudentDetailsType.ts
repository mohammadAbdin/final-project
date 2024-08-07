import { ScheduleEntry } from "./ScheduleEntry";

export interface StudentDetailsType {
  reports: reportType[];
  details: { [subject: string]: detailsType };
  schedule: ScheduleEntry[];
  personalDetails: PersonalDetails;
}
export interface PersonalDetails {
  name: string;
  classNumber: string;
  average: number;
  gender: string;
}
export interface detailsType {
  attendanceRecord: {
    datesRecord: Array<{
      date: string;
      attendance: boolean;
    }>;
  };
  teacher_id: string;
  examRecords: Array<{
    examName: string;
    grade: string | number;
  }>;
  average: string;
  resources: resourcesType[];
}
export interface resourcesType {
  title: string;
  videos: videoType[];
}
export interface videoType {
  description: string;
  title: string;
  url: string;
}

export interface reportType {
  date: string;
  reportType: string;
  teacher_id: string;
  description: string;
  teacherName: string;
  title: string;
  writer_id: string;
  _id: string;
}
