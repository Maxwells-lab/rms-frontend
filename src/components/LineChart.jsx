import Chart from 'chart.js/auto'

import { Line } from "react-chartjs-2";
import { mockLineData as DataLine } from '../DummyData/mockData';


Chart.register();

const data = {

  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Looping tension",
      data: [
        { x: 93, y: 70 },
        { x: 43, y: 60 },
        { x: 23, y: 10 },
        { x: 53, y: 80 },
        { x: 23, y: 10 },
        { x: 23, y: 10 },
        { x: 10, y: 100 },
      ],
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor:"gold",
      
    },
    {
      label: "Looping Easing",
      data: [
        { x: 73, y: 70 },
        { x: 23, y: 60 },
        { x: 13, y:90 },
        { x: 93, y: 80 },
        { x: 63, y: 20 },
        { x: 73, y: 10 },
        { x: 50, y: 100 },
      ],
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor:"yellow"
    },
  ],
};

const config = {
  type: "line",
  chart: Chart,
  currentStep: 3,
  initial: true,
  numberSteps: 2,
  data: data,
  options: {
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    devicePixelRatio: 44,
    interaction: {
      mode: "x",
      intersect: true,
      includeInvisible: true,
    },
    animations: {
      onprogress: (animation) =>
        (ProgressEvent.value =
          animation.currentStep / animation / animation.numberSteps),
      tension: {
        duration: 1000,
        // easing: "easeInSine",
        easing: "easeInBack",
        from: 0,
        to: 1,
        loop: true,
      },
    },
    transitions: {
      active: {
        duration: 4000,
      },
      show: {
        visible: true,
        color: "red",
        properties: [
          {
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "indigo",
          },
        ],
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 4,
        max: 100,
      },
    },
  },
};

const LineChart = () => {
  return (
    <div
      class="chart-container"
      style={{
        position: "relative",
        height: "40vh",
        width: "40vw",
        alignContent: "center",
        display: "flex",
        flexWrap:'wrap',
        flex:'1 1 20rem'
        // left: "20rem",
      }}
    >
      <Line data={data} config={config} />
    </div>
  );
};

export default LineChart;

