import React from 'react';
import styled from 'styled-components';
import { SplashBackground, SplashLine, ZwalletApp } from '../../../assets';

const SidebarAuth = ({ className }) => {
  return (
    <Styles>
      <div className={className}>
        <div className="side-right">
          <div className="image-line">
            <img src={SplashLine} alt="" />
          </div>
          <div className="image-background">
            <img src={SplashBackground} alt="" />
          </div>
          <div className="wrapper">
            <div className="position-changer">
              <h1 className="logo">Zwallet</h1>
              <div className="image-wrapper">
                <img src={ZwalletApp} alt="" />
              </div>
              <div className="paragraph">
                <h2 className="title-paragraph">
                  App that Covering Banking Needs.
                </h2>
                <div className="text">
                  Zwallet is an application that focussing in banking needs for
                  all users
                  <br />
                  in the world. Always updated and always following world
                  trends.
                  <br />
                  5000+ users registered in Zwallet everyday with worldwide
                  <br />
                  users coverage.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SidebarAuth;

const Styles = styled.div`
  .side-right {
    background: #6379f4;
    width: 89%;
    height: 100%;

    .image-background {
      height: 100%;
      position: absolute;
      top: 61px;
      /* padding-top: 7%; */
    }
    .image-background .image-line img {
      width: 100px;
    }
    .image-line {
      position: relative;
      top: 69px;
    }
    .wrapper {
      padding: 0 100px;
      padding-top: 50px;
      /* width: 750px; */
      height: 450px;
    }
    .logo {
      padding-top: 10px;
      position: absolute;
      top: 27px;
      font-style: normal;
      font-weight: bold;
      font-size: 29px;
      line-height: 40px;
      color: #ffffff;
    }
    .image-wrapper {
      position: absolute;
      top: 120px;
      width: 278.51px;
    }
    .paragraph {
      padding-top: 30%;
    }
    .title-paragraph {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      color: #ffffff;
      top: 20px;
    }
    .text {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      padding-top: 30px;
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
