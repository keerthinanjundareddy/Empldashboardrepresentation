import React from 'react'
// helps to bring bar elements and scale has to be included to avoid errors

import {Chart as ChartJS, BarElement,CategoryScale,LinearScale} from 'chart.js'
// bar is  component down 
import {Bar}  from 'react-chartjs-2'
// to avoid errors we need to do register
    ChartJS.register(
    BarElement,
    LinearScale,
    CategoryScale
     )
const Employeedatagraph = () => {
//    all these are from the chartjs readymade code
    var data= {
        // down headings
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor:[
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1,
          barPercentage: 0.6,
          categoryPercentage: 0.6,
          // barThickness: 20,
          // maxBarThickness: 20,
          minBarLength: 2,
       }]
       }

    //    from chartjs for adding other configurations

 var options = {
        // we can add maintain aspect ration here
        maintainAspectRatio:false,
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: true, // Hide gridlines inside the chart
            },
            stacked: true,
          },
          y: {
            display: true, // Show Y axis gridlines
            beginAtZero: true,
            grid: {
              display: true, // Hide gridlines inside the chart
            },
            stacked: true,
          },
        },
        layout: {
            padding: {
              left: 80,  // Adjust the left padding to control the space between the left edge and the data
              right: 80,
              top:100,
              // Adjust the right padding to control the space between the right edge and the data
            },
          },
        // we can configure legend aswell...legend takes an object
        legend:{
            labels:{
            fontSize:26,
            }
        }
      }
  return (
    <>
    <div style={{textAlign:"center",marginTop:"20px",textTransform:"uppercase"}}>Employee weekly status </div>
    <div>
      <Bar
      height={400}
      data={data}
      options={options}
     
      />
      </div>
    </>
  )
}

export default Employeedatagraph
