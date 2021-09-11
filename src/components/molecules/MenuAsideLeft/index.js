import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { dispatchTypes } from '../../../utils/dispatchType';
import { Cardwrapper } from '../../atoms';
import { customMedia } from '../../Layouting/BreakPoints';

const MenuAsideLeft = ({ active }) => {
  const history = useHistory();
  const isAdmin = localStorage.getItem('role');
  const dispatch = useDispatch();

  const actionMenu = (menu) => {
    if (isAdmin === 'MEMBER') {
      history.push(`/${menu}`);
    } else if (isAdmin === 'ADMIN') {
      history.push(`/admin/${menu}`);
    }
  };

  // START = LIST OF MENU
  const listMenu = {
    dashboard: 'dashboard',
    transfer: 'transfer',
    topup: 'topup',
    profile: 'profile',
    logout: 'logout',
  };
  // END = LIST OF MENU
  const logoutAction = () => {
    dispatch({ type: dispatchTypes.setUserLogout });
    localStorage.removeItem('isAuth');
    history.push('/');
  };
  return (
    <StyleMenuAsideLeft>
      <Cardwrapper>
        <div className="contain">
          <div className="menu-wrapper">
            <div
              className={`menu-item ${
                listMenu[active] === listMenu.dashboard ? 'active' : ''
              }`}
              onClick={() => actionMenu('dashboard')}
            >
              <div className="blox"></div>
              <div className="menu">
                <svg
                  className="icon"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z"
                    stroke="#3A3D42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5 3.5H16.3333V11.6667H24.5V3.5Z"
                    stroke="#3A3D42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5 16.333H16.3333V24.4997H24.5V16.333Z"
                    stroke="#3A3D42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z"
                    stroke="#3A3D42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h2 className="title-menu">Dashboard</h2>
              </div>
            </div>
            {isAdmin !== 'ADMIN' && (
              <div
                className={`menu-item ${
                  listMenu[active] === listMenu.transfer ? 'active' : ''
                }`}
                onClick={() => actionMenu('search-receiver')}
              >
                <div className="blox"></div>
                <div className="menu">
                  <svg
                    className="icon"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 22.1663V5.83301"
                      stroke="#3A3D42"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
                      stroke="#3A3D42"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <h2 className="title-menu">Transfer</h2>
                </div>
              </div>
            )}
            {isAdmin !== 'ADMIN' && (
              <div
                className={`menu-item ${
                  listMenu[active] === listMenu.topup && 'active'
                }`}
                onClick={() => actionMenu('topup')}
              >
                <div className="blox"></div>
                <div className="menu">
                  <svg
                    className="icon"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5.83301V22.1663"
                      stroke="#3A3D42"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.83333 14H22.1667"
                      stroke="#3A3D42"
                      strokeOpacity="0.8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <h2 className="title-menu">Top up</h2>
                </div>
              </div>
            )}

            <div
              className={`menu-item ${
                listMenu[active] === listMenu.profile && 'active'
              }`}
              onClick={() => actionMenu('profile')}
            >
              <div className="blox"></div>
              <div className="menu">
                <svg
                  className="icon"
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.3333 24.5V22.1667C23.3333 20.929 22.8417 19.742 21.9665 18.8668C21.0913 17.9917 19.9043 17.5 18.6667 17.5H9.33334C8.09566 17.5 6.90868 17.9917 6.03351 18.8668C5.15834 19.742 4.66667 20.929 4.66667 22.1667V24.5"
                    stroke="#3A3D42"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 12.8333C16.5773 12.8333 18.6667 10.744 18.6667 8.16667C18.6667 5.58934 16.5773 3.5 14 3.5C11.4227 3.5 9.33333 5.58934 9.33333 8.16667C9.33333 10.744 11.4227 12.8333 14 12.8333Z"
                    stroke="#3A3D42"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <h2 className="title-menu">Profile</h2>
              </div>
            </div>
          </div>
          <div
            className={`menu-item ${
              listMenu[active] === listMenu.logout && 'active'
            }`}
            onClick={logoutAction}
          >
            <div className="blox"></div>

            <svg
              className="icon"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5"
                stroke="#3A3D42"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.6667 19.8337L24.5 14.0003L18.6667 8.16699"
                stroke="#3A3D42"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.5 14H10.5"
                stroke="#3A3D42"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h2 className="title-menu"> Logout</h2>
          </div>
        </div>
      </Cardwrapper>
    </StyleMenuAsideLeft>
  );
};

MenuAsideLeft.propTypes = {
  active: PropTypes.string,
};

export default MenuAsideLeft;

const StyleMenuAsideLeft = styled.div`
  ${customMedia.lessThan('750px')`
    width: 200px; 
  `}
  ${customMedia.lessThan('670px')`
    width: 65px; 
  `}
  position: sticky;
  top: 160px;
  height: 70vh;
  .contain {
    height: 70vh;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
  }
  .menu-wrapper {
    width: 300px;
    ${customMedia.lessThan('625px')`
      `}
    ${customMedia.lessThan('960px')`
      width: 250px; 
    `}
    box-sizing: border-box;
    padding: 50px 0;
  }
  .menu-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    .menu {
      display: flex;
      gap: 1rem;
      .icon {
      }
    }
    .title-menu {
      ${customMedia.lessThan('670px')`
        display: none; 
      `}

      margin: 0;
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 31px;
      color: rgba(58, 61, 66, 0.8);
    }
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }

  /* START = CONDITIONAL STYLE */
  .active {
    h2 {
      font-style: normal;
      font-weight: 700 !important;
      font-size: 18px;
      line-height: 31px;
      color: #000000;
    }
    .blox {
      width: 5px;
      background: #6379f4;
      display: block;
    }
    .icon {
      path {
        stroke: #6379f4;
      }
    }
  }
`;
