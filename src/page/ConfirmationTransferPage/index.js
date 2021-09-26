import React, { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import {
  Button,
  CardProfileUser,
  Cardwrapper,
  HeadingContent,
  Modal,
} from '../../components';
import ItemDetail from '../../components/atoms/ItemDetail';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { colors, moneyFormatter, toastify } from '../../utils';
import { dispatchTypes } from '../../utils/dispatchType';

const ConfirmationTransferPage = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { pin: pinUser, username, id } = userState;
  const transferReducer = useSelector((state) => state.transferReducer);
  // console.log(transferReducer);
  const [isShowModal, setIsShowModal] = useState(false);
  const history = useHistory();
  const dispath = useDispatch();
  const token = localStorage.getItem('token');
  // const pin = localStorage.getItem('pin');
  const [userReceiver, setUserReceiver] = useState({});
  const [valuePinInput, setValuePinInput] = useState();

  useEffect(() => {
    document.title = `${username} | Confirmation`;
  });

  // START = GET USER RECEIVER
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/users/${transferReducer.receiver}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // console.log(res);
        setUserReceiver(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // END = GET USER RECEIVER
  const actionButton = () => {
    // console.log(2);
    setIsShowModal(true);
  };

  // VALIDATE PIN
  const checkPinAction = () => {
    const sendToServer = {
      idUserTransfer: id,
      idUserTopup: transferReducer.receiver,
      amount: transferReducer.amount,
      description: transferReducer.notes,
    };
    if (valuePinInput !== pinUser) {
      return toastify('Pin wrong', 'error');
    } else {
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_API}/transactions`,
          sendToServer,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          // console.log(res.data);
          // localStorage.setItem('amount', transferReducer.balanceLeft);
          dispath({
            type: dispatchTypes.updateAmountSaldo,
            payload: transferReducer.balanceLeft,
          });
          dispath({ type: dispatchTypes.setStatusTransfer, payload: true });
          history.push(`/status-transfer`);
        })
        .catch((err) => {
          if (err.response.data.message === 'description cannot be null') {
            return toastify('Sorry attach a note or message', 'error');
          }
          console.log(err.response);
        });
    }
  };
  // VALIDATE PIN
  if (!transferReducer) {
    return null;
  }

  return (
    <Cardwrapper>
      <StyledConfirmationPage>
        <HeadingContent>Transfer To</HeadingContent>
        <Cardwrapper className="profile-wrapper">
          <CardProfileUser
            avatar={userReceiver.avatar}
            username={userReceiver.username}
            typeTransaction="transfer"
          />
        </Cardwrapper>
        <HeadingContent>Details</HeadingContent>
        <div className="detail-body">
          <ItemDetail
            title="Amount"
            description={`Rp. ${moneyFormatter.format(transferReducer.amount)}`}
          />
          <ItemDetail
            title="Balance Left"
            description={`Rp. ${moneyFormatter.format(
              transferReducer.balanceLeft
            )}`}
          />
          <ItemDetail
            title="Date & Time"
            description={`${transferReducer.date}`}
          />
          <ItemDetail
            title="Notes"
            description={`${
              transferReducer?.notes
                ? transferReducer?.notes
                : 'Tidak ada pesan'
            }`}
          />
        </div>
        <div className="btn-wrapper">
          <button onClick={actionButton} className="btn-action">
            Continue
          </button>
        </div>
      </StyledConfirmationPage>
      <Modal showModal={isShowModal} closeModal={() => setIsShowModal(false)}>
        <Form>
          <div className="token-field">
            <PinInput
              length={6}
              initialValue=""
              onChange={(value, index) => {}}
              type="numeric"
              inputMode="number"
              onComplete={(value, index) => {
                setValuePinInput(value);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          <div className="btn-wrapper">
            <Button primary className="btn-action" onClick={checkPinAction}>
              Continue
            </Button>
          </div>
        </Form>
      </Modal>
    </Cardwrapper>
  );
};

export default ConfirmationTransferPage;

const Form = styled.div`
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
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    .btn-action {
      width: 170px;
    }
  }
`;

const StyledConfirmationPage = styled.div`
  padding: 30px;
  .profile-wrapper {
    padding: 20px;
    box-sizing: content-box;
    margin-bottom: 40px;
  }
  .detail-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 55px;
    .btn-action {
      width: 170px;
      ${customMedia.lessThan('603px')`
        width: 100%; 
      `}
      /* background: rgba(255, 255, 255, 0.2); */
      border: 1px solid #ffffff;
      box-sizing: border-box;
      border-radius: 10px;
      padding: 14px 27px;
      color: white;
      font: inherit;
      /* background-color: yellow; */
      background-color: ${colors.primary};
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
