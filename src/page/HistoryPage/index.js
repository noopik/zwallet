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
          <div className="sort-btn">
              <button className="upward"><i class="fa fa-sort-asc" aria-hidden="true"></i></button>
              <button  className="downward"><i class="fa fa-sort-desc" aria-hidden="true"></i></button>
          </div>
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
    display: flex;

      .sort-btn{   
        margin-left: 445px;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        height: 50px;
        width: 20px;
        .upward{
         
          outline: none;
          height: 9px;
          width: 20px;
          background: none;
          border: none;
        }
        .downward{
      
          outline: none;
          background: none;
          height: 5px;
          width: 20px;
          border: none;
        }
        .fa{
          color: #7A7886
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
