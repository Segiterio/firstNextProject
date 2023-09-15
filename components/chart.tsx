import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
);

export const options: any = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      align: "end",
      labels: {
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: ["Activities"],
      position: "top",
      align: "start",
      font: { weight: "bold", size: 20 },
      color: "black",
      
    },
    subtitle: {
        display: true,
        text: 'May - June 2023',
        color:"black",
        align:"start",
    }
  },
};

const labels = ["week1", "week2", "week3", "week4"];

export const data = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      backgroundColor: "#98D89E",
      borderRadius: 5,
     
    },
    {
      label: "User",
      data: labels.map(() => faker.number.int({ min: 0, max: 500 })),
      backgroundColor: "#EE8484",
      borderRadius: 5,
    },
  ],
};

export default function Chart() {
  return <Bar options={options} data={data} className="max-h-[350px] bg-white p-4 rounded-xlPlus shadow-xl mt-4" />;
}
