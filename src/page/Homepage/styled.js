import styled from 'styled-components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { colors } from '../../utils';
export const StyledDashboard = styled.main`
  width: 100%;
  height: 100%;
  /* STYLING FOR HEADER IN HOMEPAGE */
  .header-section {
    background-color: ${colors.primary};
    width: 100%;
    display: flex;
    ${customMedia.lessThan('1000px')` 
    flex-direction: column;
    `}
    margin-top: 2rem;
    justify-content: space-between;
    padding: 30px;
    border-radius: 20px;

    .balance-wrapper {
      .text-section {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 31px;
        color: #e0e0e0;
        margin: 0;
        .add-phone-number {
          color: white;
        }
      }
      .balance-amount {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 55px;
        color: #ffffff;
      }
    }
    .button-action-wrapper {
      display: flex;
      ${customMedia.lessThan('1000px')` 
          margin-top: 1rem;
      `}
      gap: 1rem;
      flex-direction: column;
      .button-action {
        background: rgba(255, 255, 255, 0.2);
        border: 1px solid #ffffff;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 14px 27px;
        color: white;
        font: inherit;
        svg {
          margin-right: 1rem;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  /* STYLING FOR TRANSACTION, CHART, IN HOMEPAGE */
  .transaction-history-wrapper {
    display: flex;
    ${customMedia.lessThan('1162px')`
      flex-direction: column; 
    `}
    gap: 1rem;
    margin-top: 1rem;
    /* START = GLOBAL STYLING ONLY THIS SCOPE */
    .card {
      background: #ffffff;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
      border-radius: 25px;
      padding: 30px;
    }

    /* END = GLOBAL STYLING ONLY THIS SCOPE */
    .chart {
      width: 60%;
      ${customMedia.lessThan('1162px')` 
        width: 100%;
      `}
      .header {
        display: flex;
        justify-content: space-between;
        /* background-color: yellow; */
        .text-green-wrapper {
          /* background-color: pink; */
          h4 {
            margin: 0;
          }
        }
      }
      .body-chart {
        margin-top: 80px;
      }
    }
    .history-wrapper {
      width: 40%;
      ${customMedia.lessThan('1162px')` 
        width: 100%;
      `}
      .heading {
        display: flex;
        ${customMedia.lessThan('1265px')`
          flex-direction: column; 
          `}
        ${customMedia.lessThan('1162px')` 
           flex-direction: row;
      `}
        justify-content: space-between;
        margin-bottom: 1rem;
        h2 {
          margin: 0;
        }
        p {
          margin: 0;
          line-height: 24px;
        }
      }
      .body {
        display: flex;
        flex-direction: column;
        gap: 40px;
      }
      .body-chart {
        width: 100px;
        height: 100px;
        background: black;
      }
    }
  }
`;
