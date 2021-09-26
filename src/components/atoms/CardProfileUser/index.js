import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AVAUserDefault } from '../../../assets';

const CardProfileUser = ({
  avatar,
  username,
  typeTransaction,
  amount,
  link,
}) => {
  const history = useHistory();
  const actionRedirect = (link) => {
    history.push(link);
  };
  return (
    <StyledHistoryItem
      className="history-item"
      onClick={() => actionRedirect(link)}
      link={link}
    >
      <div className="left">
        <div className="avatar-wrapper">
          <img src={avatar} alt="User 1" />
        </div>
        <div className="user-name">
          <h4 className="text-heading">{username}</h4>
          <p className="text">{typeTransaction}</p>
        </div>
      </div>
      {amount && (
        <div className="amount-wrapper">
          <h4 className="text-heading text-red">Rp. {amount}</h4>
        </div>
      )}
    </StyledHistoryItem>
  );
};

CardProfileUser.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  typeTransaction: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  link: PropTypes.string,
};

CardProfileUser.defaultProps = {
  avatar: AVAUserDefault,
  username: '...',
  typeTransaction: '...',
};

export default CardProfileUser;

const StyledHistoryItem = styled.div`
  &:hover {
    opacity: ${({ link }) => link && 0.5};
    cursor: ${({ link }) => link && 'pointer'};
  }
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
      object-fit: cover;
      border-radius: 10px;
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
    width: 250px;
  }
`;
