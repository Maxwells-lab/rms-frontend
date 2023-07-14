// import { ResponsivePie } from "@nivo/pie";
// import { tokens } from "../theme";
// import { useTheme } from "@mui/material";
// import { mockPieData as data } from "../DummyData/DummyData";

// const PieChart = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   return (
//     <ResponsivePie
//       data={data}
//       theme={{
//         axis: {
//           domain: {
//             line: {
//               stroke: colors.grey[100],
//             },
//           },
//           legend: {
//             text: {
//               fill: colors.grey[100],
//             },
//           },
//           ticks: {
//             line: {
//               stroke: colors.grey[100],
//               strokeWidth: 1,
//             },
//             text: {
//               fill: colors.grey[100],
//             },
//           },
//         },
//         legends: {
//           text: {
//             fill: colors.grey[100],
//           },
//         },
//       }}
//       margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={3}
//       activeOuterRadiusOffset={8}
//       borderColor={{
//         from: "color",
//         modifiers: [["darker", 0.2]],
//       }}
//       arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor={colors.grey[100]}
//       arcLinkLabelsThickness={2}
//       arcLinkLabelsColor={{ from: "color" }}
//       enableArcLabels={false}
//       arcLabelsRadiusOffset={0.4}
//       arcLabelsSkipAngle={7}
//       arcLabelsTextColor={{
//         from: "color",
//         modifiers: [["darker", 2]],
//       }}
//       defs={[
//         {
//           id: "dots",
//           type: "patternDots",
//           background: "inherit",
//           color: "rgba(255, 255, 255, 0.3)",
//           size: 4,
//           padding: 1,
//           stagger: true,
//         },
//         {
//           id: "lines",
//           type: "patternLines",
//           background: "inherit",
//           color: "rgba(255, 255, 255, 0.3)",
//           rotation: -45,
//           lineWidth: 6,
//           spacing: 10,
//         },
//       ]}
//       legends={[
//         {
//           anchor: "bottom",
//           direction: "row",
//           justify: false,
//           translateX: 0,
//           translateY: 56,
//           itemsSpacing: 0,
//           itemWidth: 100,
//           itemHeight: 18,
//           itemTextColor: "#999",
//           itemDirection: "left-to-right",
//           itemOpacity: 1,
//           symbolSize: 18,
//           symbolShape: "circle",
//           effects: [
//             {
//               on: "hover",
//               style: {
//                 itemTextColor: "#000",
//               },
//             },
//           ],
//         },
//       ]}
//     />
//   );
// };

// export default PieChart;

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { mockPieData as dataPie } from "../DummyData/mockData";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June"],

  options: {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  },

  datasets: [
    {
      label: "Transation Tracks",
      data: { ...dataPie },
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(155, 206, 86, 1)",
        "rgba(45, 192, 192, 1)",
        "rgba(153, 102, 100, 1)",
        "rgba(155, 159, 64, 1)",
      ],
      borderWidth: 10,
    },
    {
      label: "Transation Tracks",
      data: { ...dataPie },
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(155, 206, 86, 1)",
        "rgba(45, 192, 192, 1)",
        "rgba(153, 102, 100, 1)",
        "rgba(155, 159, 64, 1)",
      ],
      borderWidth: 10,
    },
    {
      label: "Transation Tracks",
      data: { ...dataPie },
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(155, 206, 86, 1)",
        "rgba(255,215,0, 1)",
      ],
      borderWidth: 10,
    },
  ],
};

export function PieChart() {
  return (
    <div
      class="chart-container"
      style={{
        position: "relative",
        // top:"-4.9rem"
      }}
    >
      <Doughnut data={data} id={data.id} value={data.value} />
    </div>
  );
}
