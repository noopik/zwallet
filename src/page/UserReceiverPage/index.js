import React from 'react';
import styled from 'styled-components';
import { AVAJessicaMera } from '../../assets';
import { Cardwrapper } from '../../components';
import Button from '../../components/atoms/Button';

const UserReceiverPage = () => {
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
            <input className="amount" type="text" />
            <p className="text-heading">Rp. 120.000 Available</p>
            <div className="notes-wrapper">
              {/* icon pen */}
              <input type="text" className="input notes" />
            </div>
            <Button>Continue</Button>
          </form>
        </div>
      </StyledUserReceiverPage>
      ;
    </Cardwrapper>
  );
};

export default UserReceiverPage;

const StyledUserReceiverPage = styled.div`
  background-color: yellow;
`;
