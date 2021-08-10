import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import {Bar} from 'react-chartjs-2'
import { Cardwrapper } from '../../components'

const ChartaBar = () => {
    const [chartData, setChartData] = useState({})
    const chart = () =>{
        setChartData({
            labels: ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'],
            datasets: [
                {
                data: [14, 5, 6, 12, 11, 5, 9],
                backgroundColor: [
                    'rgba(99, 121, 244, 1)',
                    'rgba(99, 121, 244, 1)',
                    'rgba(157, 166, 181, 1)',
                    'rgba(157, 166, 181, 1)',
                    'rgba(157, 166, 181, 1)',
                    'rgba(99, 121, 244, 1)',
                    'rgba(157, 166, 181, 1)',
                ],
                borderWidth: 1,
                borderRadius: 15,
                borderSkipped: false,
                barPercentage: 0.5,
                categoryPercentage: 0.5,
                }
        ]
        })
    }

    const options = {
        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        }
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <Styled>
            <Cardwrapper className="card">

                <Bar data={chartData} options={options} />

            </Cardwrapper>
        </Styled>
    )
}

export default ChartaBar
const Styled = styled.div`
.card{
    padding: 30px;
}

`


// import React, {useState, useEffect} from 'react'
// import {Bar} from 'react-chartjs-2'


// const Trybar = () => {
//     const [chartData, setChartData] = useState({})

//     const chart = () =>{
//         setChartData({
//             labels: ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'],
//             datasets: [
//                 {
//                     label: 'day',
//                     data: [14, 5, 9, 12, 11, 5, 9],
//                     backgroundColor: [
//                         `rgba(99, 121, 244, 1)`,
//                         `rgba(99, 121, 244, 1)`,
//                         `rgba(157, 166, 181, 1)`,
//                         `rgba(157, 166, 181, 1)`,
//                         `rgba(157, 166, 181, 1)`,
//                         `rgba(99, 121, 244, 1)`,
//                         `rgba(157, 166, 181, 1)`,
                        
//                     ],
//                     borderWidth: 1,
//                     borderRadius: 15,
//                     borderSkipped: false,
//                     barPercentage: 0.5,
//                     categoryPercentage: 0.5,
//                 }
//             ]
//         })
//     }
//     useEffect(()=>{
//         chart()
//     }, [])
    
//     return (
//         <>
//             {/* <div>
//                 <Bar data={chartData} options={{ 
//                     responsive: true,

//                 }}/>
//             </div> */}
//         </>
//     )
// }

// export default Trybar
