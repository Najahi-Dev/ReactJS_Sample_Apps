import React from 'react'
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend)

interface Props{
    data: {activity:string, hours:number}[];
}

const TimeChart = ({data}:Props) => {

    const chartData = {
        labels: data.map((d) => d.activity),
        datasets: [
            {
                label: "Hours",
                data: data.map((d) => d.hours),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#34D399', '#A78BFA', '#FF9F40',
                    '#CC66FF', '#FFFF33', '#00FF66', '#FF0033', '#0033FF', '#66FF99',
                    '#4BC0C0', '#9966FF', '#FF99CC', '#66CC33', '#FF6633', '#3366CC',
                    '#CC33FF', '#FFCC00', '#33CC99', '#FF3366', '#6633CC', '#00CCFF',
                    '#FF9933', '#33CCCC', '#CC3366', '#9933FF', '#FFCC33', '#33CC66',
                    '#FF3399', '#3333CC', '#00FFCC', '#FF9966', '#6699FF', '#CC33CC',
                    '#FFCC66', '#33FF99', '#FF0066', '#6600FF', '#00FFFF', '#FF6600',
                    '#3399FF', '#CC0099', '#FFFF00', '#00FF99', '#FF0099', '#0066FF',
                    '#99FF33', '#CC0066', '#9900FF', '#66FFCC', '#FF3300', '#0099FF',
                ],
                borderWidth: 1,
            }
        ]
    }

  return <Pie data={chartData}/>
}

export default TimeChart