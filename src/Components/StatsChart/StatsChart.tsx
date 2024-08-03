import React, { useEffect, useRef } from "react";
// import { Line } from "react-chartjs-2";
import Chart, { ChartData, ChartOptions } from "chart.js/auto";

interface LineChartProps {
  chartData: ChartData<"line"> | null;
}

const LineChart: React.FC<LineChartProps> = ({ chartData }) => {
  const chartRef = useRef<Chart | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (canvasRef.current) {
      const newChartInstance = new Chart(canvasRef.current, {
        type: "line",
        data: chartData,
        options: {
          scales: {
            y: {
              min: 0,
              max: 100,
            },
          },
          plugins: {
            title: {
              display: true,
              // text: "Student's Exams Statistics",
            },
            legend: {
              display: false,
            },
          },
        } as ChartOptions<"line">,
      });

      chartRef.current = newChartInstance;
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className="c-div-s flex flex-col items-center">
      {/* <h2 className="h2-s">Line Chart</h2> */}
      <h2 className="h2-s"> Student's Exams Statistics</h2>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default LineChart;
