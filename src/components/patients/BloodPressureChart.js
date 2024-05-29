import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const BloodPressureChart = ({ diagnosisHistory }) => {
    const monthAbbreviations = {
        January: 'Jan',
        February: 'Feb',
        March: 'Mar',
        April: 'Apr',
        May: 'May',
        June: 'Jun',
        July: 'Jul',
        August: 'Aug',
        September: 'Sep',
        October: 'Oct',
        November: 'Nov',
        December: 'Dec'
    };

    const labels = diagnosisHistory.map(entry => `${monthAbbreviations[entry.month]} ${entry.year}`);
    const systolicData = diagnosisHistory.map(entry => entry.blood_pressure.systolic.value);
    const diastolicData = diagnosisHistory.map(entry => entry.blood_pressure.diastolic.value);

    function round20(x, isLarge = true) {
        const nearest10 = Math.floor(x / 10) * 10
        if(isLarge){
          return nearest10 % 20 !== 0 ? nearest10 + 10 : nearest10 > x ? nearest10 : nearest10 + 20
        } else{
          return nearest10 % 20 !== 0 ? nearest10 - 10 : x > nearest10 ? nearest10 : nearest10 - 20
        }
    }

    const chartMax = round20(Math.max(...systolicData, ...diastolicData))
    const chartMin = round20(Math.min(...systolicData, ...diastolicData), false);


    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Systolic',
                data: systolicData,
                borderColor: '#C26EB4', 
                backgroundColor: '#C26EB4', 
                tension: 0.4, 
                pointRadius: 6,
                pointBackgroundColor: '#E66FD2',
                pointBorderColor: '#E66FD2'
            },
            {
                label: 'Diastolic',
                data: diastolicData,
                borderColor: '#7E6CAB', 
                backgroundColor: '#7E6CAB',
                tension: 0.4, 
                pointRadius: 6,
                pointBackgroundColor: '#8C6FE6',
                pointBorderColor: '#8C6FE6'
            }
        ]
    };

    const options = {
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: false,
                text: 'Blood Pressure',
                color: '#000',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                align: 'start',
                padding: {
                    bottom: 20
                }
            },
            legend: {
                display: false,
                position: 'right',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    padding: 20,
                    color: '#000',
                },
            },
            tooltip: {
                backgroundColor: '#FFF',
                titleColor: '#000',
                bodyColor: '#000',
                borderColor: '#CCC',
                borderWidth: 1,
            }
        },
        scales: {
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                min: chartMin, //60,
                max: chartMax, //180,
                ticks: {
                    color: '#072635',
                },
                grid: {
                    color: '#e9e9e9'
                }
            },
            x: {
                ticks: {
                    color: '#072635',
                    maxRotation: 0,
                    minRotation: 0
                },
                grid: {
                    display: false,
                }
            }
        }
    };

    return <Line data={data} options={options} />;
};

export default BloodPressureChart;
