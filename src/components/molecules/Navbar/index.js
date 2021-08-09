import React, { useState } from 'react';
import styled from 'styled-components';
import { AVARobert, ICBell } from '../../../assets';
import { LogoBrand } from '../../atoms';
import NotificationPopup from '../NotificationPopup';
import PropTypes from 'prop-types';

const Navbar = ({ className }) => {
  const [setNotification, setShowNotification] = useState(false);

  return (
    <>
      <NavbarStyling>
        <div className="custom-container">
          <LogoBrand />
          <div className="navigation-user-right">
            <div className="user-profile">
              <div className="image-wrapper">
                <img src={AVARobert} alt="user" />
              </div>
              <div className="profile-identity">
                <h3 className="username">Robert Alfrido</h3>
                <p className="phone-number">+62 8139 3877 7946</p>
              </div>
            </div>
            <div
              className="icon-wrapper"
              onClick={() => setShowNotification(true)}
            >
              <img src={ICBell} alt="Icon bell" />
            </div>
            <NotificationPopup
              showPopup={setNotification}
              closePopup={() => setShowNotification(false)}
            />
          </div>
        </div>
      </NavbarStyling>
    </>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;

const NavbarStyling = styled.nav`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
  padding: 42px 0;
  .custom-container {
    position: relative;
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
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
      .profile-identity {
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
