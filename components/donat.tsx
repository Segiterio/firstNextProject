import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,Title,SubTitle } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend,Title,SubTitle);
const Donat = () => {
    const options:any = {
          responsive:true,
            plugins:{
              legend:{
                   position:"right" ,
                   labels:{
                     usePointStyle:true
                   },
              },
            }
    }

    const data:any = {
        labels: [
            ['Basic Tees',"55"],
            ['Custom Short Pants',"12"],
            ['Super Hoodies',"27"],
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
        
            hoverOffset: 4
          }]
          
    }
  return (
    <div className=' bg-white rounded-xlPlus shadow-lg p-4 flex flex-col justify-center'>
        <div className='flex items-center justify-between border'>
            <div className='font-bold'>Top Products</div>
            <div className='text-xxs'>may - june 2023</div>
        </div>
        <Doughnut data={data} options={options} className='border p-5' />
    </div>
  )
}

export default Donat