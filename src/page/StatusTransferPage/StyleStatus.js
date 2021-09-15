import styled from 'styled-components';
import { customMedia } from '../../components/Layouting/BreakPoints';
export const StyleStatus = styled.div`
  padding: 30px;
  .status-header {
    height: 100px;
    /* width: 500px; */
    margin-left: auto;
    margin-right: auto;
  }
  .success-img {
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .status-name {
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .fail-img {
    margin-top: 14px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
  .card-section {
    height: 92px;
    margin-top: 20px;
  }
  .card-section-first {
    height: 92px;
    margin-top: 120px;
  }
  .card-profile {
    height: 110px;
    padding-top: 20px;
    margin-top: 25px;
  }
  .success-stat {
    margin-top: 30px;
    font-weight: bold;
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #4d4b57;
  }
  .failed-stat {
    font-weight: bold;
    font-style: normal;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #4d4b57;
    top: 0;
  }
  .fail-message {
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #7a7886;
    margin-top: 20px;
  }
  .title {
    padding-left: 15px;
    padding-top: 15px;
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: #7a7886;
  }
  h4 {
    padding-left: 15px;
    /* padding-top: 10px; */
    font-family: Nunito Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    color: #514f5b;
  }
  .text-transfer {
    padding-top: 40px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #514f5b;
  }
  .wrapper-profile {
    display: flex;
    flex-direction: row;
  }
  .image-wrapper {
    width: 70px;
    height: 70px;
    margin-left: 20px;
    border-radius: 10px;
  }
  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
  .detail-profile-wrap {
    padding-top: 10px;
    margin-left: 20px;
    height: 69px;
    /* width: 200px; */
  }
  .text-name {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #4d4b57;
  }
  .button-wrap {
    margin-top: 90px;
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    flex-flow: wrap;
    ${customMedia.lessThan('1115px')` 
    `}
    .share-button {
      background: rgba(99, 121, 244, 0.15);
      box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
      border-radius: 12px;
      width: 57px;
      height: 57px;
      border: none;
      outline: none;
    }
    .download-button {
      background: rgba(99, 121, 244, 0.15);
      box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
      border-radius: 12px;
      height: 57px;
      display: flex;
      cursor: pointer;
      border: none;
      outline: none;
      font-weight: bold;
      font-size: 18px;
      color: #6379f4;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0 1rem;
      .download-icon {
        width: 22px;
        height: 22px;
      }
    }
    .button-back {
      width: 200px;
      height: 57px;
      font-weight: bold;
      font-size: 18px;
      line-height: 25px;
    }
    .download-button:hover,
    .share-button:hover {
      background: #d0d6fc;
    }
  }
`;
