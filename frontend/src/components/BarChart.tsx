import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top' as const
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart'
    }
  }
};

const responseData = {
  labels: ['2000', '2001', '20002', '20003', '2004', '2005'],
  data: [
    {
      label: 'aprima',
      data: [300, 400, 500, 200, 400, 900],
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'agam',
      data: [900, 300, 400, 500, 300, 300],
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
      label: 'wardani',
      data: [600, 450, 500, 800, 300, 500],
      backgroundColor: 'rgba(255, 206, 86, 1)'
    }
  ]
};

const faker = (num1: number, num2: number) => {
  return Math.floor(Math.random() * num2) + num1;
};

export const data = {
  labels: responseData.labels,
  datasets: responseData.data
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}
