import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, ModalBank, SidebarAuth } from '../../components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { dispatchTypes } from '../../utils/dispatchType';

const CreatePinPage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer.data);
  const { id } = userState;

  const history = useHistory();
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);
  const [inputValuePin, setInputValuePin] = useState();
  const [isShowModal, setIsShowModal] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    document.title = 'Zwallet | Create Pin';
  }, [inputValuePin]);

  // START = SEND ACTION PIN
  const actionPin = () => {
    const data = {
      pin: inputValuePin,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/auth/setpin/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch({ type: dispatchTypes.updatePinUser, payload: data });
        setIsShowModal(true);
      })
      .catch((err) => {
        // console.log('NO');
      });
  };
  // END = SEND ACTION PIN
  // START = SEND ACTION PIN
  const actionChooseBank = (bankName) => {
    // console.log('bankName', bankName);
    const sendBank = {
      codeBank: bankName,
    };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_API}/transactions/addvirtualaccount`,
        sendBank,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        // return;
        history.push(`/dashboard`);
      })
      .catch((err) => {
        history.push(`/dashboard`);
        console.log(err.response);
      });
  };
  // END = SEND ACTION PIN

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
          <div>
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
              onClick={actionPin}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>

      <ModalBank
        showModal={isShowModal}
        closeModal={() => setIsShowModal(false)}
      >
        <Formik
          initialValues={{
            bank: '',
          }}
          onSubmit={(values, { resetForm }) => {
            // const bankName = values.bank;
            actionChooseBank(values.bank);
            // console.log(bankName);
            resetForm();
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit, isValid }) => (
            <Form onSubmit={handleSubmit}>
              <div className="bank-choice">
                <select
                  className="custom-select"
                  name=""
                  id="bank"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bank}
                >
                  <option selected>Choose your bank</option>
                  <option value="MANDIRI">MANDIRI</option>
                  <option value="BNI">BNI</option>
                  <option value="BRI">BRI</option>
                  <option value="PERMATA">PERMATA</option>
                  <option value="BCA">BCA</option>
                </select>
              </div>
              <div className="btn-wrapper">
                <Button primary className="btn-action">
                  Continue
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </ModalBank>
    </Styles>
  );
};

export default CreatePinPage;
const Styles = styled.div`
  display: flex;
  height: 100vh;
  /* background: orange; */
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
  .sidebar {
    width: 100%;
  }

  .form-side {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${customMedia.lessThan('tablet')`
 width: 100%;
  `}
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
  .bank-choice {
    margin-top: 30px;
    .custom-select {
      width: 100%;
      height: 35px;
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    .btn-action {
      width: 170px;
      height: 57px;
    }
  }
`;
