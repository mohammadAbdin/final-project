import { ExamType } from "./ExamType";
import { StudentFeedbackDetailsType } from "./StudentFeedbackDetailsType";

export interface ClassInfoDetails {
  exams: ExamType[];
  students: StudentFeedbackDetailsType[];
}
