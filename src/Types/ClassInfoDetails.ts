import { ExamType } from "./ExamType";
import { StudentFeedbackDetailsType } from "./StudentFeedbackDetailsType";
import { Topic } from "./TopicsTypes";

export interface ClassInfoDetails {
  exams: ExamType[];
  students: StudentFeedbackDetailsType[];
  resources: Topic[];
}
