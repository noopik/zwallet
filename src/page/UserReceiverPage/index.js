import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import { AVAUserDefault } from '../../assets';
import { AlertValidationForm, Cardwrapper, Input } from '../../components';
import Button from '../../components/atoms/Button';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { toastify, moneyFormatter } from '../../utils';
import { dispatchTypes } from '../../utils/dispatchType';

const UserReceiverPage = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { amount: saldo } = userState;
  const location = useLocation();
  const getIdUserReceiver = location.pathname.split('/')[2];
  // console.log('getIdUserReceiver', getIdUserReceiver);
  const token = localStorage.getItem('token');
  const idSender = localStorage.getItem('id');
  const [userReceiver, setUserReceiver] = useState({});
  // const [amountAvailable, setAmountAvailable] = useState(false);
  // const username = localStorage.getItem('username');
  const dispatch = useDispatch();
  const history = useHistory();
  const validate = Yup.object({
    amount: Yup.number()
      .required('The number is required!')
      .test(
        'Is positive?',
        'The number must be greater than 1000  IDR!',
        (value) => value > 1000
      )
      .nullable(),
    notes: Yup.string().required('Notes Required').nullable(),
  });
  useEffect(() => {
    document.title = 'Tranfer';
  });

  // START = GET USER RECEIVER
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/users/${getIdUserReceiver}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log('USER RECEIVER:', res);
        setUserReceiver(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // END = GET USER RECEIVER

  // START = HANDLE FORM

  const actionSubmitForm = (data) => {
    const valueAmountRequest = data.amount;
    if (parseInt(valueAmountRequest) > parseInt(saldo)) {
      return toastify(
        'Upps, your balance is not enough to make a transaction',
        'error'
      );
    }
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const dataSend = {
      sender: idSender,
      receiver: getIdUserReceiver,
      amount: data.amount,
      balanceLeft: saldo - valueAmountRequest,
      date: today,
      notes: data.notes,
    };
    dispatch({ type: dispatchTypes.setTransfer, payload: dataSend });
    // console.log(data);
    history.push(`/search-receiver/${getIdUserReceiver}/confirmation`);
  };

  if (!userReceiver) {
    return null;
  }

  return (
    <Cardwrapper>
      <StyledUserReceiverPage>
        <div className="heading-section">
          <h2 className="text-heading">Transfer Money</h2>
        </div>
        <Cardwrapper>
          <div className="user-profile-receiver">
            <div className="avatar">
              <img
                src={
                  userReceiver?.avatar ? userReceiver?.avatar : AVAUserDefault
                }
                alt="username"
              />
            </div>
            <div className="description">
              <h2 className="text-heading">{userReceiver.username}</h2>
              <p className="text-regular">{userReceiver.phone}</p>
            </div>
          </div>
        </Cardwrapper>
        <div className="body-section">
          <Formik
            initialValues={{
              amount: 0,
              notes: '',
            }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              // console.log(values);
              actionSubmitForm(values);
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
            }) => (
              <Form onSubmit={handleSubmit}>
                <p className="text-regular">
                  Type the amount you want to transfer and then press continue
                  to the next steps.
                </p>
                <div className="input-wrapper">
                  <input
                    className="amount"
                    type="text"
                    placeholder="0.00"
                    name="amount"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.amount}
                  />
                  {errors.amount && touched.amount && errors.amount && (
                    <AlertValidationForm message={errors.amount} />
                  )}
                </div>
                <p
                  className={`text-heading summary ${
                    errors.amount && touched.amount && errors.amount
                      ? 'error'
                      : ''
                  }`}
                >
                  Rp. {moneyFormatter.format(values.amount)}{' '}
                  {errors.amount && touched.amount && errors.amount
                    ? 'Not Available'
                    : 'Available'}
                </p>
                <div className="notes-wrapper">
                  <Input
                    icon="pen"
                    className="input"
                    placeholder="Add some notes"
                    name="notes"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.notes}
                  />
                  {errors.notes && touched.notes && errors.notes && (
                    <AlertValidationForm
                      className="error"
                      message={errors.notes}
                    />
                  )}
                </div>
                <div className="btn-wrapper">
                  <Button
                    type="submit"
                    disabled={
                      !isValid ||
                      (Object.keys(touched).length === 0 &&
                        touched.constructor === Object)
                    }
                    primary
                    className="btn-action"
                  >
                    Continue
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </StyledUserReceiverPage>
      ;
    </Cardwrapper>
  );
};

export default UserReceiverPage;

const StyledUserReceiverPage = styled.div`
  padding: 30px;
  .heading-section {
    margin-bottom: 25px;
  }
  .user-profile-receiver {
    display: flex;
    gap: 1rem;
    padding: 15px;
    box-sizing: content-box;
    .avatar {
      width: 70px;
      height: 70px;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin-bottom: 0;
      }
    }
  }
  .body-section {
    margin-top: 50px;
    form {
      .text-regular {
        max-width: 400px;
        margin-bottom: 50px;
      }
      .input-wrapper {
        text-align: center;
        margin-bottom: 39px;
        .amount {
          font-family: Nunito Sans;
          font-style: normal;
          font-weight: bold;
          font-size: 42px;
          line-height: 56px;
          text-align: center;
          border: 0;
          background-color: transparent;
          width: 100%;
          &::placeholder {
            color: #b5bdcc;
          }
          &:focus {
            outline: none;
          }
          &:valid {
            color: #6379f4;
          }
        }
      }
      p.summary {
        text-align: center;
        margin-bottom: 60px;
        &.error {
          color: red;
        }
      }
      .notes-wrapper {
        /* background-color: yellow; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .error {
          width: max-content;
        }
        .input {
          /* background-color: pink; */
          width: 30%;
        }
      }
      .btn-wrapper {
        margin-top: 58px;
        display: flex;
        justify-content: flex-end;
        .btn-action {
          width: 170px;
          ${customMedia.lessThan('620px')`
            width: 100%; 
          `}
        }
      }
    }
  }
`;
