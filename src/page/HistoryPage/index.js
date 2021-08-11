import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CardProfileUser, Cardwrapper } from '../../components';

const HistoryPage = () => {
  const username = localStorage.getItem('username');

  useEffect(() => {
    document.title = `${username} | Transaction History`;
  });

  return (
    <Cardwrapper>
      <StyledHistoryPage>
        <div className="heading-section">
          <h1 className="text-heading">Transcation History</h1>
        </div>
        <div className="body-section">
          <div className="date-section">
            <h3 className="text-subheading">This Week</h3>
            <div className="body">
              <CardProfileUser />
              <CardProfileUser />
              <CardProfileUser />
              <CardProfileUser />
              <CardProfileUser />
            </div>
          </div>
          <div className="date-section">
            <h3 className="text-subheading">This Month</h3>
            <div className="body">
              <CardProfileUser />
              <CardProfileUser />
              <CardProfileUser />
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
