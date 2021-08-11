import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ICDownGreen, ICUpRed } from '../../../assets';
import { Cardwrapper } from '../../atoms';

const NotificationPopup = ({ closePopup, showPopup }) => {
  if (!showPopup) {
    return null;
  }

  return (
    <StyledNotificationPopup>
      <div className="content">
        <div>
          <h3 className="heading">Today</h3>
          <div className="item-group">
            <Cardwrapper className="item">
              <div className="icon-wrapper">
                <img src={ICDownGreen} alt="icon" />
              </div>
              <div className="description">
                <p className="contact">Transfered from Joshua Lee</p>
                <p className="amount">Rp220.000</p>
              </div>
            </Cardwrapper>
            <Cardwrapper className="item">
              <div className="icon-wrapper">
                <img src={ICUpRed} alt="icon" />
              </div>
              <div className="description">
                <p className="contact">Transfered from Joshua Lee</p>
                <p className="amount">Rp220.000</p>
              </div>
            </Cardwrapper>
            <Cardwrapper className="item">
              <div className="icon-wrapper">
                <img src={ICDownGreen} alt="icon" />
              </div>
              <div className="description">
                <p className="contact">Transfered from Joshua Lee</p>
                <p className="amount">Rp220.000</p>
              </div>
            </Cardwrapper>
          </div>
        </div>
        <div>
          <h3 className="heading">This Week</h3>
          <div className="item-group">
            <Cardwrapper className="item">
              <div className="icon-wrapper">
                <img src={ICUpRed} alt="icon" />
              </div>
              <div className="description">
                <p className="contact">Transfered from Joshua Lee</p>
                <p className="amount">Rp220.000</p>
              </div>
            </Cardwrapper>
            <Cardwrapper className="item">
              <div className="icon-wrapper">
                <img src={ICDownGreen} alt="icon" />
              </div>
              <div className="description">
                <p className="contact">Transfered from Joshua Lee</p>
                <p className="amount">Rp220.000</p>
              </div>
            </Cardwrapper>
          </div>
        </div>
      </div>
      <div className="bg-layer" onClick={closePopup}></div>
    </StyledNotificationPopup>
  );
};

NotificationPopup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};
export default NotificationPopup;

const StyledNotificationPopup = styled.div`
  .content {
    background: #ffffff;
    box-shadow: 0px 0px 70px rgba(99, 99, 99, 0.15);
    border-radius: 20px;
    position: absolute;
    right: 10rem;
    top: 150px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    z-index: 20;
    gap: 40px;
    .heading {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 27px;
      color: #7a7886;
    }
    .item-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .item {
        padding: 20px;
        display: flex;

        gap: 1rem;
        .icon-wrapper {
          width: 28px;
          height: 28px;
        }
        .description {
          .contact {
            font-size: 14px;
            line-height: 19px;
            color: #7a7a7a;
            margin-bottom: 0;
          }
          .amount {
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 25px;
            color: #43484f;
            margin-top: 8px;
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .bg-layer {
    background-color: #3a3d42;
    opacity: 0.5;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 1;
    &:hover {
      cursor: pointer;
    }
  }
`;
