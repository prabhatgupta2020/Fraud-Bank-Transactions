// src/Components/BarChart/BarChart.jsx

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ totalTransactions, totalFraud, securedTransactions }) => {
  const data = {
    labels: ['Total Transactions', 'Total Fraud', 'Secured Transactions'],
    datasets: [
      {
        label: 'Number of Transactions',
        data: [totalTransactions, totalFraud, securedTransactions],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Transaction Distribution',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
