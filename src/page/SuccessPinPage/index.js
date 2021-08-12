import React, { useEffect } from 'react';
import styled from 'styled-components';
import { SidebarAuth, Button } from '../../components';
import { Success } from '../../assets';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { useHistory } from 'react-router-dom';

const SuccessPinPage = () => {
  const history = useHistory();
  // const username = localStorage.getItem('username');
  setTimeout(() => {
    history.push(`/dashboard`);
  }, 3000);
  useEffect(() => {
    document.title = 'Zwallet | Create Pin Success';
  });

  return (
    <Styles>
      <div className="row-side">
        <SidebarAuth />
      </div>

      <div className="form-side">
        <div className="image">
          <img src={Success} alt="" />
        </div>
        <h5>Your PIN Was Successfully Created</h5>
        <h6>
          Your PIN was successfully created and you can now access <br />
          all the features in Zwallet. Login to your new account and <br />
          start exploring!
        </h6>
        <Button children="Login" className="button-login" />
      </div>
    </Styles>
  );
};

export default SuccessPinPage;
const Styles = styled.div`
  height: 100vh;
  display: flex;
  ${customMedia.lessThan('tablet')`
  flex-direction: column
  `}
  .row-side {
    height: 100%;
    width: 55%;
    /* background-color: black; */
    ${customMedia.lessThan('tablet')`
 width: 100%;
  `}
  }

  .form-side {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    ${customMedia.lessThan('tablet')`
 width: 100%;
  `}
    /* background-color: red; */
    h5 {
      font-family: Nunito Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 33px;
      color: #3a3d42;
      margin-top: 50px;
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
    .image {
      margin-top: 121px;

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
  }
`;
