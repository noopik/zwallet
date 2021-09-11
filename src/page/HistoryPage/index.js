import FilterListIcon from '@material-ui/icons/FilterList';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardProfileUser, Cardwrapper } from '../../components';

const HistoryPage = () => {
  const username = localStorage.getItem('username');
  const [sorting, setSorting] = useState('ASC');
  const [dataHistory, setDataHistory] = useState();
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');

  useEffect(() => {
    document.title = `${username} | Transaction History`;
  });
  // console.log('sorting BEFORE', sorting);

  // START = SORT LOGIC
  const actionSort = () => {
    sorting === 'ASC' ? setSorting('DESC') : setSorting('ASC');
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/transactions/history/${id}?perPage=8&orderBy=ASC`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        const data = res.data.data;
        // console.log('DAATA SORT', data);
        setDataHistory(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  // END = SORT LOGIC

  // START = HISTORY TRANSACTION
  // const [resultHistory, setResultHistory] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/transactions/history/${id}?perPage=8`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data.data;
        setDataHistory(data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // END = HISTORY TRANSACTION
  return (
    <Cardwrapper>
      <StyledHistoryPage sorting={sorting}>
        <div className="heading-section">
          <h1 className="text-heading">Transcation History</h1>
          <div className="sort-btn" onClick={actionSort}>
            <FilterListIcon />
          </div>
        </div>
        <div className="body-section">
          <div className="date-section">
            <div className="body">
              {dataHistory &&
                dataHistory.map((item) => (
                  <CardProfileUser
                    avatar={item.avatar}
                    username={item.username}
                    typeTransaction={`${item.type} | ${item.description}`}
                    amount={item.amount}
                  />
                ))}
              {!dataHistory && <h1>No history transaction</h1>}
            </div>
          </div>
        </div>
      </StyledHistoryPage>
    </Cardwrapper>
  );
};

export default HistoryPage;

const StyledHistoryPage = styled.div`
  padding: 30px;
  .heading-section {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    .sort-btn {
      transform: ${({ sorting }) =>
        sorting === 'ASC' ? 'rotate(0deg)' : 'rotate(180deg)'};
      &:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }
  .body-section {
    display: flex;
    flex-direction: column;
    gap: 60px;
    .body {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  }
`;
