import React from 'react';
import styled from 'styled-components';
import { ZwalletApp } from '../../assets/images';

const UserLogin = () => {
  return (
    <Styles>
      <div className="right-aside">
        <h1 className="logo">ZWallet</h1>
        <div className="image-wrapper ">
          <img src={ZwalletApp} alt="" />
        </div>
        <div className="paragraph">
          <h2 className="heading">App that Covering Banking Needs.</h2>
          <p className="text">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
          <p>Teeees</p>
        </div>
      </div>
      <div className="left-aside">Kiri</div>
    </Styles>
  );
};

export default UserLogin;

const Styles = styled.div`
  display: flex;
  background-color: yellow;
  .right-aside {
    padding: 0 50px;
    padding-top: 50px;
    width: 60%;
    background-color: red;
    .logo {
      font-style: normal;
      font-weight: bold;
      font-size: 29px;
      line-height: 40px;
      color: #ffffff;
    }
  }
  .left-aside {
    width: 40%;
    background-color: blue;
  }
`;
