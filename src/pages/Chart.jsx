import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Innova",
    "Mobil Mr.Bean",
    "Avanza",
    "Innova Venturer",
    "Escudo",
    "Tesla 3",
    "Toyota Supra",
    "Jazz",
    "APV",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 10, 8, 25, 5, 15, 12, 3, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 255, 255, 1)",
        "rgba(165, 42, 42, 1)",
        "rgba(220, 20, 60, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 255, 255, 1)",
        "rgba(165, 42, 42, 1)",
        "rgba(220, 20, 60, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <>
      <h4 className="text-center font-weight-bold mb-3">The Most Desirable Car</h4>
      <Pie className="w-25 h-25 mx-auto" data={data} />
    </>
  );
}
