import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICDownGreen, ICUpRed } from '../../assets';
// import PropTypes from 'prop-types';
import { CardProfileUser } from '../../components';
import Button from '../../components/atoms/Button';
import { StyledDashboard } from './styled';
import {Bar} from 'react-chartjs-2'

const Homepage = () => {

  useEffect(() => {
    document.title = 'Nopik | Dashboard';
  });

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

    <StyledDashboard>
      <div className="header-section">
        <div className="balance-wrapper">
          <h3 className="text-section">Balance</h3>
          <h1 className="balance-amount">Rp120.000</h1>
          <p className="text-section">+62 813-987-7890</p>
        </div>
        <div className="button-action-wrapper">
          <Button icon="transfer" />
          <Button icon="top-up" />
        </div>
      </div>
      <div className="transaction-history-wrapper">
        <div className="chart card">
          <div className="header">
            <div className="text-green-wrapper">
              <img src={ICDownGreen} alt="icon down" />
              <h4 className="text">text-green</h4>
              <h4 className="text-heading">Rp.2.120.000</h4>
            </div>
            <div className="text-green-wrapper">
              <img src={ICUpRed} alt="icon" />
              <h4 className="text">Expense</h4>
              <h4 className="text-heading">Rp.2.120.000</h4>
            </div>
          </div>
          {/* Ini yang aku tambahin ya mas nopik */}
            <div className="body-chart">

              <Bar data={chartData} options={options}/>

            </div>
          {/* Kalau mau lihat kodingan yang jelasnya bisa dilihat di
              file page/ChartBar, nanti dihapus aja mas */}
        </div>
        <div className="history-wrapper card">
          <div className="heading">
            <h2 className="text-heading">Transaction History</h2>
            <Link className="anchor" to="/username/history">
              <p className="text-link">See all</p>
            </Link>
          </div>
          <div className="body">
            <CardProfileUser />
            <CardProfileUser />
            <CardProfileUser />
            <CardProfileUser />
            <CardProfileUser />
            <CardProfileUser />
            <CardProfileUser />
          </div>
        </div>
      </div>
      {/* testing */}
    
    </StyledDashboard>

  );
};

Homepage.propTypes = {};

export default Homepage;

// NEEDED REFRACTOR TO REUSABLE COMPONENT
