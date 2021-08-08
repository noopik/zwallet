import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, FieldToken, SidebarAuth } from '../../components';

const CreatePinPage = () => {
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);

  const {
    // register,
    // handleSubmit,
    watch,
    getValues,
    // formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = 'Zwallet | Create Pin';
  }, []);

  useEffect(() => {
    const value = getValues();
    if (value.pin) {
      setHandleDisabledButton(false);
    } else {
      setHandleDisabledButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('pin')]);

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
          <div className="token-field">
            <FieldToken className="pin" name="pin" value="" />
            <FieldToken className="pin" name="pin" value="" />
            <FieldToken className="pin" name="pin" value="" />
            <FieldToken className="pin" name="pin" value="" />
            <FieldToken className="pin" name="pin" value="" />
          </div>
          <Button
            primary
            className="button-login"
            disabled={handleDisabledButton}
          >
            Confirm
          </Button>
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
        display: flex;
        flex-direction: row;
      }
      .pin {
        padding-left: 20px;
      }
    }
  }
`;
