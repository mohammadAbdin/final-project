export interface FeedbackContent {
  reportType: "Teacher" | "Parent";
  writer_id: string | undefined;
  date: string;
  title: string;
  description: string;
}
