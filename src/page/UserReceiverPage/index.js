import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AVAJessicaMera } from '../../assets';
import { Cardwrapper, Input } from '../../components';
import Button from '../../components/atoms/Button';

const UserReceiverPage = () => {
  useEffect(() => {
    document.title = 'Tranfer to Samuel Suhu';
  });
  return (
    <Cardwrapper>
      <StyledUserReceiverPage>
        <div className="heading-section">
          <h2 className="text-heading">Transfer Money</h2>
        </div>
        <Cardwrapper>
          <div className="user-profile-receiver">
            <div className="avatar">
              <img src={AVAJessicaMera} alt="username" />
            </div>
            <div className="description">
              <h2 className="text-heading">Samuel Suhu</h2>
              <p className="text-regular">+62 897 897 88</p>
            </div>
          </div>
        </Cardwrapper>
        <div className="body-section">
          <form>
            <p className="text-regular">
              Type the amount you want to transfer and then press continue to
              the next steps.
            </p>
            <div className="input-wrapper">
              <input className="amount" type="text" placeholder="0.00" />
            </div>
            <p className="text-heading summary">Rp. 120.000 Available</p>
            <div className="notes-wrapper">
              <Input
                icon="pen"
                className="input"
                placeholder="Add some notes"
              />
            </div>
            <div className="btn-wrapper">
              <Button primary className="btn-action">
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
        }
      }
    }
  }
`;
