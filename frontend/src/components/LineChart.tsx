import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false
  },
  stacked: false,
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Line Chart - Multi Axis'
    },
    legend: {
      display: true
    }
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false
      }
    }
  }
};

const responseData = {
  labels: [2000, 2001, '20002', '20003', '2004', '2005'],
  data: [
    {
      label: 'aprima',
      data: [300, 400, 500, 200, 400, 1200],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
    {
      label: 'agam',
      data: [900, 300, 400, 500, 300, 300],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
      label: 'wardani',
      data: [600, 450, 500, 800, 300, 500],
      borderColor: 'rgba(255, 206, 86)',
      backgroundColor: 'rgba(255, 206, 86, 0.5)'
    }
  ]
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const faker = (num1: number, num2: number) => {
  return Math.floor(Math.random() * num2) + num1;
};

export const data = {
  labels: responseData.labels,
  datasets: responseData.data
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
