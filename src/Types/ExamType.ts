interface StudentGrade {
  Grade: number;
  student_id: string;
}

export interface ExamType {
  examName: string;
  exam_id: string;
  studentGrades: StudentGrade[];
  _id: string;
}
