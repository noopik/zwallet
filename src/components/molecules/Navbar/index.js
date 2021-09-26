import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AVAUserDefault, ICBell } from '../../../assets';
import { LogoBrand } from '../../atoms';
import { customMedia } from '../../Layouting/BreakPoints';
import NotificationPopup from '../NotificationPopup';

const Navbar = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { avatar, username, phone } = userState;
  const [setNotification, setShowNotification] = useState(false);
  const history = useHistory();

  return (
    <NavbarStyling>
      <div className="custom-container">
        <LogoBrand />
        <div className="navigation-user-right">
          <div
            className="user-profile"
            onClick={() => {
              return history.push(`/profile`);
            }}
          >
            <div className="image-wrapper">
              <img src={avatar ? avatar : AVAUserDefault} alt="user" />
            </div>
            <div className="profile-identity">
              <h3 className="username">{username}</h3>
              <p className="phone-number">{phone === 'null' ? '' : phone}</p>
            </div>
          </div>
          <div
            className="icon-wrapper"
            onClick={() => setShowNotification(true)}
          >
            <img src={ICBell} alt="Icon bell" />
          </div>
        </div>
      </div>
      <NotificationPopup
        showPopup={setNotification}
        closePopup={() => setShowNotification(false)}
      />
    </NavbarStyling>
  );
};

Navbar.propTypes = {};

export default Navbar;

const NavbarStyling = styled.nav`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 42px 0;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 99;
  .custom-container {
    position: relative;
    ${customMedia.lessThan('1000px')`
      width: 90%; 
  `}
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .navigation-user-right {
      display: flex;
      align-items: center;
      gap: 20px;
      .user-profile {
        display: flex;
        gap: 1rem;
        flex-direction: row;
        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      }
      .image-wrapper {
        width: 52px;
        height: 52px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px;
        }
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
      .profile-identity {
        ${customMedia.lessThan('430px')`
            display: none; 
        `}
        .username {
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 18px;
          line-height: 31px;
          text-align: center;
          color: #3a3d42;
          margin: 0;
        }
        .phone-number {
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: normal;
          font-size: 13px;
          line-height: 24px;
          color: rgba(58, 61, 66, 0.9);
          margin: 0;
        }
      }
      .icon-wrapper {
        display: flex;
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
    }
  }
`;
