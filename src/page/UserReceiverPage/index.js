import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AVAJessicaMera } from '../../assets';
import { AlertValidationForm, Cardwrapper, Input } from '../../components';
import Button from '../../components/atoms/Button';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { useForm } from 'react-hook-form';
import { patternNumber, toastify } from '../../utils';
import { useDispatch } from 'react-redux';
import { dispatchTypes } from '../../utils/dispatchType';

const UserReceiverPage = () => {
  const location = useLocation();
  const getIdUserReceiver = location.pathname.split('/')[3];
  const token = localStorage.getItem('token');
  const idSender = localStorage.getItem('id');
  const [userReceiver, setUserReceiver] = useState({});
  const [amountTransfer, setAmountTransfer] = useState(0.0);
  const [amountAvailable, setAmountAvailable] = useState(false);
  const username = localStorage.getItem('username');
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.title = 'Tranfer to Samuel Suhu';
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
        // console.log(res);
        setUserReceiver(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  });
  // END = GET USER RECEIVER

  // START = HANDLE FORM
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const valueAmount = getValues('amount');
  const onSubmit = (data) => {
    const amount = localStorage.getItem('amount');
    const valueAmountRequest = valueAmount;
    if (parseInt(valueAmountRequest) > parseInt(amount)) {
      return toastify('Upps, saldo tidak mencukupi', 'error');
    }
    const dataSend = {
      sender: idSender,
      receiver: getIdUserReceiver,
      amount: data.amount,
      balanceLeft: amount - valueAmountRequest,
      date: new Date(),
      notes: data.notes,
    };
    // console.log(dataSend);
    dispatch({ type: dispatchTypes.setTransfer, payload: dataSend });
    // console.log(data);
    history.push(
      `/${username}/search-receiver/${getIdUserReceiver}/confirmation`
    );
  };

  useEffect(() => {
    if (watch('amount')) {
      setAmountTransfer(valueAmount);
    }
  }, [watch('amount')]);

  // END = HANDLE FORM

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
              <img src={userReceiver.avatar} alt="username" />
            </div>
            <div className="description">
              <h2 className="text-heading">{userReceiver.username}</h2>
              <p className="text-regular">{userReceiver.phone}</p>
            </div>
          </div>
        </Cardwrapper>
        <div className="body-section">
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="text-regular">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className="input-wrapper">
              <input
                className="amount"
                type="text"
                placeholder="0.00"
                {...register('amount', {
                  required: true,
                  pattern: patternNumber,
                })}
              />
              {errors.amount && <AlertValidationForm message="Only numbers" />}
            </div>
            <p className="text-heading summary">
              Rp. {amountTransfer} Available
            </p>
            <div className="notes-wrapper">
              <Input
                icon="pen"
                className="input"
                placeholder="Add some notes"
                {...register('notes', {})}
              />
            </div>
            <div className="btn-wrapper">
              <Button type="submit" primary className="btn-action">
                Continue
              </Button>
            </div>
          </form>
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
        object-fit: contain;
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
      }
      .notes-wrapper {
        display: flex;
        justify-content: center;
        .input {
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
