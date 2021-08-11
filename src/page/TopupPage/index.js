import React from 'react';
import styled from 'styled-components';
import { Cardwrapper, HeadingContent } from '../../components';

const TopupPage = () => {
  return (
    <Cardwrapper>
      <StyledTopupPage>
        <HeadingContent>How To Top Up</HeadingContent>
        <div className="body-content">
          <Cardwrapper className="item">
            <p className="number">1</p>
            <p className="text-regular">
              Go to the nearest ATM or you can use E-Banking.
            </p>
          </Cardwrapper>
          <Cardwrapper className="item">
            <p className="number">2</p>
            <p className="text-regular">
              Type your security number on the ATM or E-Banking.
            </p>
          </Cardwrapper>
          <Cardwrapper className="item">
            <p className="number">3</p>
            <p className="text-regular">Select “Transfer” in the menu</p>
          </Cardwrapper>
          <Cardwrapper className="item">
            <p className="number">4</p>
            <p className="text-regular">
              Type the virtual account number that we provide you at the top.
            </p>
          </Cardwrapper>
          <Cardwrapper className="item">
            <p className="number">5</p>
            <p className="text-regular">
              Type the amount of the money you want to top up.
            </p>
          </Cardwrapper>
          <Cardwrapper className="item">
            <p className="number">6</p>
            <p className="text-regular">Read the summary details</p>
          </Cardwrapper>
          <Cardwrapper className="item">
            <p className="number">7</p>
            <p className="text-regular">Press transfer / top up</p>
          </Cardwrapper>
          <Cardwrapper className="item">
            <p className="number">8</p>
            <p className="text-regular">
              You can see your money in Zwallet within 3 hours.
            </p>
          </Cardwrapper>
        </div>
      </StyledTopupPage>
    </Cardwrapper>
  );
};

export default TopupPage;

const StyledTopupPage = styled.div`
  padding: 30px;
  .body-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .item {
      padding: 30px 20px;
      display: flex;
      gap: 1rem;
      p {
        margin-bottom: 0;
      }
      .number {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        color: #6379f4;
      }
    }
  }
`;
