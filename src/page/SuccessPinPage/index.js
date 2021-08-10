import React from 'react';
import styled from 'styled-components';
import { SidebarAuth, Button } from '../../components';
import { Success } from '../../assets';

const SuccessPinPage = () => {
  return (
    <Styles>
      <div className="row-side">
        <SidebarAuth />
      </div>
      <div className="form-side">
        <div className="content">
          <div className="image">
            <img src={Success} alt="" />
          </div>
          <h5>Your PIN Was Successfully Created</h5>
          <h6>
            Your PIN was successfully created and you can now access <br />
            all the features in Zwallet. Login to your new account and <br />
            start exploring!
          </h6>
          <Button primary className="button-login">
            Login Now
          </Button>
        </div>
      </div>
    </Styles>
  );
};

export default SuccessPinPage;
const Styles = styled.div`
  display: flex;
  /* background: orange; */

  .row-side {
    height: 100%;
    width: 69%;
    /* background-color: black; */
  }
  .sidebar {
    width: 100%;
  }

  .form-side {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .image {
        margin-bottom: 50px;
      }
      h5 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #3a3d42;
        margin-bottom: 0;
      }
      h6 {
        font-style: normal;
        margin-top: 30px;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color: rgba(58, 61, 66, 0.6);
      }
      .field {
        margin-top: 30px;
        width: 100%;
      }
      .link:hover {
        color: coral;
      }
      .button-login {
        margin-top: 80px;
        /* margin: 0 auto; */
      }

      .pin {
        padding-left: 20px;
      }
    }
  }
`;
