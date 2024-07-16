import "./GraphContainer.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Legend, ArcElement, Tooltip } from "chart.js";
// import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Legend, Tooltip);

function GraphContainer({ principleAmount, totalInterest, monthlyPayment }) {
  // const [chartData, setChartData] = useState({
  //   labels: ["Principal", "Interest"],
  //   datasets: [
  //     {
  //       label: "Ratio of Principal and Interest",
  //       data: [principleAmount, Number(totalInterest)],
  //       backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
  //       borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
  //       borderWidth: 1,
  //     },
  //   ],
  // });

  // useEffect(() => {
  //   setChartData((prevChartData) => ({
  //     ...prevChartData,
  //     datasets: [
  //       {
  //         ...prevChartData.datasets[0],
  //         data: [principleAmount, Number(totalInterest)],
  //       },
  //     ],
  //   }));
  // }, [principleAmount, totalInterest]);

  const chartData = {
    labels: ["Principal", "Interest"],
    datasets: [
      {
        label: "Ratio of Principal and Interest",
        data: [principleAmount, Number(totalInterest)],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="graphContainer">
      <p className="mp">Monthly Payment: ${monthlyPayment}</p>
      <div className="chart-wrapper">
        <Pie data={chartData} options={options} />
      </div>
    </div>
  );
}

export default GraphContainer;
