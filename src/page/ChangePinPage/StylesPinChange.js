import styled from 'styled-components';
import { customMedia } from '../../components/Layouting/BreakPoints';

export const StylesPinChange = styled.div`
  padding: 30px;
  .text-wrapper {
    padding-left: 30px;
    padding-top: 30px;
  }
  .form-wrapper {
    /* width: 450px; */
    height: 250px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    overflow: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    .field-wrap {
      ${customMedia.lessThan('960px')` 
        width: 90%;
      `}
      width: 500px;
      display: flex;
      .pincode-input-container {
        display: flex;
        background: #ffffff;
        justify-content: space-between;
        width: 100%;
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
    .btn {
      width: 500px;
      ${customMedia.lessThan('960px')` 
        width: 90%;
      `}
      margin-top: 70px;
    }
  }
  .field-token {
    margin-left: 20px;
  }
`;
