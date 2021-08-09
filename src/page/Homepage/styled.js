import styled from 'styled-components';
import { colors } from '../../utils';
export const StyledDashboard = styled.main`
  width: 100%;
  height: 100%;
  /* STYLING FOR HEADER IN HOMEPAGE */
  .header-section {
    background-color: ${colors.primary};
    width: 100%;
    display: flex;
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
    }
    .history-wrapper {
      width: 40%;
      .heading {
        display: flex;
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
    }
  }
`;
