import React from 'react';
import styled from 'styled-components';
import { AVAJessicaMera } from '../../../assets';
import PropTypes from 'prop-types';

const CardProfileUser = ({ avatar, username, typeTransaction, amount }) => {
  return (
    <StyledHistoryItem className="history-item">
      <div className="left">
        <div className="avatar-wrapper">
          <img src={avatar} alt="User 1" />
        </div>
        <div className="user-name">
          <h4 className="text-heading">{username}</h4>
          <p className="text">{typeTransaction}</p>
        </div>
      </div>
      <div className="amount-wrapper">
        <h4 className="text-heading text-green">{amount}</h4>
      </div>
    </StyledHistoryItem>
  );
};

CardProfileUser.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  typeTransaction: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
};

CardProfileUser.defaultProps = {
  avatar: AVAJessicaMera,
  username: 'Samuel Eto',
  typeTransaction: 'Transfer',
  amount: '+Rp.50.000',
};

export default CardProfileUser;

const StyledHistoryItem = styled.div`
  display: flex;
  .left {
    display: flex;
    width: 100%;
  }
  .avatar-wrapper {
    width: 56px;
    height: 56px;
    margin-right: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .user-name {
    .text-heading {
      margin: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      color: #4d4b57;
      margin-bottom: 10px;
    }
    p {
      margin: 0;
    }
  }
  .amount-wrapper {
    display: flex;
    align-items: center;
  }
`;
