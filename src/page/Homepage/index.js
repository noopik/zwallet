import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ICDownGreen, ICUpRed } from '../../assets';
// import PropTypes from 'prop-types';
import { CardProfileUser } from '../../components';
import Button from '../../components/atoms/Button';
import { getUser } from '../../config/Redux/actions/userActions';
import { moneyFormatter } from '../../utils';
import { dispatchTypes } from '../../utils/dispatchType';
import { StyledDashboard } from './styled';

const Homepage = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { amount, phone, username, id } = userState;
  const token = localStorage.getItem('token');
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `${username} | Dashboard`;
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
    dispatch(getUser(id, token));
  }, [dispatch, id, token]);

  // START = HISTORY TRANSACTION
  const [resultHistory, setResultHistory] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/transactions/history/${id}?perPage=3`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setResultHistory(res.data.data);
        // console.log(res.data);
        const sendData = {
          data: res.data.data,
        };
        dispatch({ type: dispatchTypes.setAllHistory, payload: sendData });
      })
      .catch((err) => {
        // console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // END = HISTORY TRANSACTION
  console.log('phone:', phone);
  return (
    <StyledDashboard>
      <div className="header-section">
        <div className="balance-wrapper">
          <h3 className="text-section">Balance</h3>
          <h1 className="balance-amount">
            Rp. {moneyFormatter.format(amount)}
          </h1>
          <p className="text-section">
            {!phone ? (
              <Link
                to="/profile/add-phone-number"
                className="add-phone-number anchor"
              >
                Add phone number
              </Link>
            ) : (
              phone
            )}
          </p>
        </div>
        <div className="button-action-wrapper">
          <Button
            primary
            icon="transfer"
            onClick={() => {
              return history.push(`/search-receiver`);
            }}
          >
            Transfer
          </Button>
          <Button
            primary
            icon="top-up"
            onClick={() => {
              // return toastify(
              //   'Sorry this feature is under development :D',
              //   'warning'
              // );
              return history.push(`/topup`);
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
              <h4 className="text">Income</h4>
              <h4 className="text-heading">Rp.0</h4>
            </div>
            <div className="text-green-wrapper">
              <img src={ICUpRed} alt="icon" />
              <h4 className="text">Expense</h4>
              <h4 className="text-heading">Rp. 0</h4>
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
            <Link className="anchor" to={`/history`}>
              <p className="text-link">See all</p>
            </Link>
          </div>
          <div className="body">
            {/* <h1>History empty</h1> */}
            {resultHistory &&
              resultHistory.map((item, index) => {
                return (
                  <CardProfileUser
                    key={index}
                    username={item.username}
                    avatar={item.avatar}
                    typeTransaction={item.type}
                    amount={moneyFormatter.format(item.amount)}
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
