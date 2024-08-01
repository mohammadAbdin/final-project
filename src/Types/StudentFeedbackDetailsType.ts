export interface StudentFeedbackDetailsType {
  class: string;
  gender: string;
  name: string;
  parent_id: string;
  report: any[]; // or you can define a specific type if you know what `report` contains
  student_id: string;
  __v: number;
  _id: string;
}
