import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ICDownGreen, ICUpRed } from '../../assets';
// import PropTypes from 'prop-types';
import { CardProfileUser } from '../../components';
import Button from '../../components/atoms/Button';
import { StyledDashboard } from './styled';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Homepage = () => {
  const history = useHistory();
  const amount = localStorage.getItem('amount');
  const phone = localStorage.getItem('phone');
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  useEffect(() => {
    document.title = 'Nopik | Dashboard';
  });

  const [chartData, setChartData] = useState({});
  const chart = () => {
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
        },
      ],
    });
  };
  const options = {
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
  };

  useEffect(() => {
    chart();
  }, []);

  // START = HISTORY TRANSACTION
  const [resultHistory, setResultHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/transactions/history/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setResultHistory(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  // END = HISTORY TRANSACTION
  console.log('resultHistory:', resultHistory);
  return (
    <StyledDashboard>
      <div className="header-section">
        <div className="balance-wrapper">
          <h3 className="text-section">Balance</h3>
          <h1 className="balance-amount">Rp. {amount}</h1>
          <p className="text-section">{phone}</p>
        </div>
        <div className="button-action-wrapper">
          <Button
            primary
            icon="transfer"
            onClick={() => {
              return history.push(`/${username}/search-receiver`);
            }}
          >
            Transfer
          </Button>
          <Button
            primary
            icon="top-up"
            onClick={() => {
              return history.push(`/${username}/topup`);
            }}
          >
            Top Up
          </Button>
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
            <Bar data={chartData} options={options} />
          </div>
          {/* Kalau mau lihat kodingan yang jelasnya bisa dilihat di
              file page/ChartBar, nanti dihapus aja mas */}
        </div>
        <div className="history-wrapper card">
          <div className="heading">
            <h2 className="text-heading">Transaction History</h2>
            <Link className="anchor" to={`/${username}/history`}>
              <p className="text-link">See all</p>
            </Link>
          </div>
          <div className="body">
            {/* <h1>History empty</h1> */}
            {resultHistory &&
              resultHistory.map((item) => {
                return (
                  <CardProfileUser
                    username={item.username}
                    avatar={item.avatar}
                    typeTransaction={item.type}
                  />
                );
              })}
            {!resultHistory && <h1>No data</h1>}
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
