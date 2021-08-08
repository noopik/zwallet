import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  CardProfileUser,
  Cardwrapper,
  HeadingContent,
  Modal,
} from '../../components';
import ItemDetail from '../../components/atoms/ItemDetail';

const ConfirmationTransferPage = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    document.title = 'Transfer Confirmation';
  });

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
          <Button primary className="btn-action">
            Continue
          </Button>
        </div>
      </StyledConfirmationPage>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <Form>
          <div className="group-input">
            <InputPin placeholder="0" maxlength={1} />
            <InputPin placeholder="0" />
            <InputPin placeholder="0" />
            <InputPin placeholder="0" />
            <InputPin placeholder="0" />
            <InputPin placeholder="0" />
            <InputPin placeholder="0" />
          </div>
          <div className="btn-wrapper">
            <Button primary className="btn-action">
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
  .group-input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }
  .btn-wrapper {
    display: flex;
    justify-content: flex-end;
    .btn-action {
      width: 170px;
    }
  }
`;

const InputPin = styled.input`
  border: 0;
  /* background-color: transparent; */
  background: #ffffff;
  border: 1px solid rgba(169, 169, 169, 0.6);
  box-sizing: border-box;
  box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
  border-radius: 10px;
  height: 65px;
  padding: 10px;
  width: 30px;
  box-sizing: content-box;
  &:focus {
    outline: none;
  }
  &:valid {
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 41px;
    /* identical to box height */

    color: #3a3d42;
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
    }
  }
`;
