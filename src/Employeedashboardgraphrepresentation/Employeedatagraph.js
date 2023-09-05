import React, { useState,useEffect } from 'react';
import './Employeedatagraph.css'

import imageone from '../Assets/240_F_403181548_94NP0b7ooowJRzB2srpIewpYI0rYTCsS.jpg'
import imagetwo from '../../src/Assets/up-arrow.png'
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
const optionstwo = [
 'rachana',
 'keerthana',
 'kavya',
 'bhavya',
 'pradeepthi',
 'naghma',
 'suneel',
 'pannaga',
 'digant',
 'swaroop',
 'bharat',
 'nahusha',
 'sharan ',
 'nandan',
 'nandeesha',
 'madhan',

  // Add more options here
];
const [selectedOption, setSelectedOption] = useState('');
const [popupopen, setPopupopen] = useState(false);

const toggleDropdown = () => {
  setPopupopen(!popupopen);
};

const handleOptionClick = (option) => {
  setSelectedOption(option);
  console.log("selected option",selectedOption)
  setPopupopen(false); // Close the dropdown
};


useEffect(() => {
  console.log("selected option in useeffect", selectedOption);
}, [selectedOption]);

    var data= {
        // down headings
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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
          borderRadius: 4,
          categoryPercentage: 0.6,
          barPercentage: 0.5,
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
              left: 40,  // Adjust the left padding to control the space between the left edge and the data
              right:40,
              top:100,
              // Adjust the right padding to control the space between the right edge and the data
            },
          },
        // we can configure legend aswell...legend takes an object
        legend:{
            labels:{
            fontSize:0.1,
            }
        }
      }
  return (
    <>
    <div style={{textAlign:"center",marginTop:"20px",textTransform:"uppercase"}}><b>Employee weekly status</b> </div>
   

    <div style={{ position: 'relative',marginTop:"10px" ,marginLeft:"10px"}}>
  <div onClick={toggleDropdown} style={{ border: '1px solid grey', width: '200px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
    <div>{selectedOption || 'Select'}</div>
    <div>{popupopen ? <div style={{ width: '20px', height: '20px' }}><img src={imagetwo} alt="cc" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div> : <div style={{ width: '20px', height: '20px' }}> <img src={imageone} alt="cc" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> </div>}</div>
  </div>
  {popupopen && (
    <div className="scrollable-options">
      <div className="options-container">
        <ul className="options-list">
          {optionstwo.map((option, index) => (
            <li key={index} className="option" onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}
</div>



    <div style={{marginTop:"130px"}}>
      <Bar
      height={400}
      width={100}
      data={data}
      options={options}
      
     
      
    
     
      />
      </div>
    </>
  )
}

export default Employeedatagraph
