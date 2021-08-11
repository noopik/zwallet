import React, { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  Button,
  CardProfileUser,
  Cardwrapper,
  HeadingContent,
  Modal,
} from '../../components';
import ItemDetail from '../../components/atoms/ItemDetail';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { colors } from '../../utils';

const ConfirmationTransferPage = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.title = 'Transfer Confirmation';
  });

  const actionButton = () => {
    console.log(2);
    setIsShowModal(true);
  };

  return (
    <Cardwrapper>
      <StyledConfirmationPage>
        <HeadingContent>Transfer To</HeadingContent>
        <Cardwrapper className="profile-wrapper">
          <CardProfileUser />
        </Cardwrapper>
        <HeadingContent>Details</HeadingContent>
        <div className="detail-body">
          <ItemDetail title="Amount" description="Rp. 100.000.000" />
          <ItemDetail title="Balance Left" description="Rp. Rp20.000.000" />
          <ItemDetail title="Date & Time" description="May 11, 2020 - 12.20" />
          <ItemDetail title="Notes" description="For buying some socks" />
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
              onComplete={(value, index) => {}}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          <div className="btn-wrapper">
            <Button
              primary
              className="btn-action"
              onClick={() => {
                history.push(`/username/status-transfer`);
              }}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Modal>
    </Cardwrapper>
  );
};

export default ConfirmationTransferPage;

const Form = styled.form`
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
