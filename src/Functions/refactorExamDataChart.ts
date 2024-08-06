interface ExamData {
  examName: string;
  grade: number | string;
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
  const labels = exams.map((exam) => exam.examName);
  const data = exams.map((exam) => {
    const grade =
      typeof exam.grade === "number" ? exam.grade : parseFloat(exam.grade);
    return isNaN(grade) ? 0 : grade;
  });

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
