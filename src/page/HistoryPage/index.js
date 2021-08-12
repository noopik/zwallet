import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CardProfileUser, Cardwrapper } from '../../components';

const HistoryPage = () => {
  const username = localStorage.getItem('username');
  const historyState = useSelector((state) => state.historyReducer);

  console.log('historyState', historyState?.data);

  useEffect(() => {
    document.title = `${username} | Transaction History`;
  });
  console.log(historyState);
  return (
    <Cardwrapper>
      <StyledHistoryPage>
        <div className="heading-section">
          <h1 className="text-heading">Transcation History</h1>
        </div>
        <div className="body-section">
          <div className="date-section">
            <div className="body">
              {historyState?.data &&
                historyState?.data.map((item) => (
                  <CardProfileUser
                    avatar={item.avatar}
                    username={item.username}
                    typeTransaction={`${item.type} | ${item.description}`}
                    amount={item.amount}
                  />
                ))}
              {!historyState?.data && <h1>No history transaction</h1>}
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
