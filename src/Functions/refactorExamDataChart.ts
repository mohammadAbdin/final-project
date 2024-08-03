interface ExamData {
  examName: string;
  grade: number | string; // Using number | string to handle both types
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  }[];
}
export default function refactorExamDataChart(exams: ExamData[]): ChartData {
  // Extracting exam names and grades
  const labels = exams.map((exam) => exam.examName);
  const data = exams.map((exam) => {
    // Convert grade to number, defaulting to 0 if it's not a valid number
    const grade =
      typeof exam.grade === "number" ? exam.grade : parseFloat(exam.grade);
    return isNaN(grade) ? 0 : grade;
  });

  // Constructing the final chart data structure
  const chartData: ChartData = {
    labels: labels,
    datasets: [
      {
        label: "First dataset",
        data: data,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return chartData;
}
