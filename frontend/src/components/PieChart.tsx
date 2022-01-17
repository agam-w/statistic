import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['aprima', 'agam', 'wardani'],
  datasets: [
    {
      label: '# of Votes',
      data: [2000, 2532, 2403],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(53, 162, 235, 0.5)',
        'rgba(255, 206, 86, 1)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(53, 162, 235)',
        'rgba(255, 206, 86)'
      ],
      borderWidth: 1
    }
  ]
};

export const options = {
  plugins: {
    legend: {
      display: false
    }
  }
};

export function PieChart() {
  return <Pie data={data} options={options} />;
}
