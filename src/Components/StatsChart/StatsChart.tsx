// import React, { useEffect, useRef } from "react";
// import { Line } from "react-chartjs-2";
// function LineChart({ chartData }) {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     return () => {
//       if (chartRef.current) {
//         chartRef.current.destroy();
//       }
//     };
//   }, []);
//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Line Chart</h2>
//       <Line
//         ref={chartRef}
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Student's Exams Statistics",
//             },
//             legend: {
//               display: false,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }
// export default LineChart;
// import React, { useEffect, useRef } from "react";
// import { Line } from "react-chartjs-2";

// function LineChart({ chartData }) {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     return () => {
//       if (chartRef.current) {
//         chartRef.current.destroy();
//       }
//     };
//   }, []);

//   return (
//     <div className="chart-container">
//       <h2 style={{ textAlign: "center" }}>Line Chart</h2>
//       <Line
//         ref={chartRef}
//         data={chartData}
//         options={{
//           plugins: {
//             title: {
//               display: true,
//               text: "Student's Exams Statistics",
//             },
//             legend: {
//               display: false,
//             },
//           },
//         }}
//       />
//     </div>
//   );
// }

// export default LineChart;
import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

function LineChart({ chartData }) {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

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
            text: "Student's Exams Statistics",
          },
          legend: {
            display: false,
          },
        },
      },
    });

    chartRef.current = newChartInstance;

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default LineChart;
