import React, { useEffect, useState } from 'react';

import PinInput from 'react-pin-input';
import styled from 'styled-components';
import { Button, SidebarAuth } from '../../components';

const CreatePinPage = () => {
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);
  const [inputValuePin, setInputValuePin] = useState();

  useEffect(() => {
    document.title = 'Zwallet | Create Pin';
  }, [inputValuePin]);

  return (
    <Styles>
      <div className="row-side">
        <SidebarAuth className="sidebar" />
      </div>
      <div className="form-side">
        <div className="content">
          <h5>
            Secure Your Account, Your Wallet,
            <br />
            and Your Data With 6 Digits PIN
            <br />
            That You Created Yourself.
          </h5>
          <h6>
            Transfering money is eassier than ever, you can access <br />
            Zwallet wherever you are. Desktop, laptop, mobile phone?
            <br />
            we cover all of that for you!
          </h6>
          <form>
            <div className="token-field">
              <PinInput
                length={6}
                initialValue=""
                onChange={(value, index) => {
                  if (!value) {
                    setHandleDisabledButton(true);
                  }
                }}
                type="numeric"
                inputMode="number"
                onComplete={(value, index) => {
                  setInputValuePin(value);
                  setHandleDisabledButton(false);
                }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
            <Button
              primary
              className="button-login"
              disabled={handleDisabledButton}
            >
              Confirm
            </Button>
          </form>
        </div>
      </div>
    </Styles>
  );
};

export default CreatePinPage;
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
      height: 69%;
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
      .token-field {
        .pincode-input-container {
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
          background: #ffffff;

          .pincode-input-text {
            padding: 0 !important;
            margin: 0 2px;
            text-align: center;
            border: 1px solid;
            background: transparent;
            width: 50px;
            height: 50px;
            box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
            /* Grey/60% */
            border: 1px solid rgba(169, 169, 169, 0.6);
            box-sizing: border-box;
            border-radius: 10px;
          }
          .pincode-input-text:focus {
            outline: none;
            box-shadow: none;
            border: 1px solid #6379f4;
          }
          .pincode-input-text:valid {
            outline: none;
            box-shadow: none;
            border: 1px solid #6379f4;
          }
        }
      }
      .pin {
        padding-left: 20px;
      }
    }
  }
`;
