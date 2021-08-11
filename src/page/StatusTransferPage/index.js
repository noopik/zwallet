import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  AVAJessicaMera,
  DownloadIcon,
  Failed,
  ShareIcon,
  Success,
} from '../../assets';
import { Button, Cardwrapper, SmallCard } from '../../components';
import { StyleStatus } from './StyleStatus';

const StatusTransferPage = () => {
  const history = useHistory();
  const transferState = useSelector((state) => state.transferReducer);
  const username = localStorage.getItem('username');

  const [statusTransfer, setStatusTransfer] = useState(true);
  // console.log(setStatusTransfer);
  return (
    <Cardwrapper>
      <StyleStatus>
        <div className="status-header">
          {transferState?.status && (
            <img src={Success} alt="" className="success-img" />
          )}
          {!transferState?.status && (
            <img src={Failed} alt="" className="fail-img" />
          )}
          <div className="status-name">
            {transferState?.status && (
              <h3 className="success-stat">Transfer Success</h3>
            )}
            {!transferState?.status && (
              <h3 className="failed-stat">Transfer Failed</h3>
            )}
            {!transferState?.status && (
              <p className="fail-message">
                We can’t transfer your money at the moment, we recommend you to
                check your internet connection and try again.
              </p>
            )}
          </div>
        </div>
        <SmallCard className="card-section-first">
          <p className="title">Amount</p>
          <h4 className="content">Rp{transferState.amount}</h4>
        </SmallCard>
        <SmallCard className="card-section">
          <p className="title">Balance left</p>
          <h4 className="content">Rp{transferState.balanceLeft}</h4>
        </SmallCard>
        <SmallCard className="card-section">
          <p className="title">Date & time</p>
          <h4 className="content">'transferState.date'</h4>
        </SmallCard>
        <SmallCard className="card-section">
          <p className="title">Notes</p>
          <h4 className="content">{transferState.notes}</h4>
        </SmallCard>

        <p className="text-transfer">Transfer to</p>

        <SmallCard className="card-profile">
          <div className="wrapper-profile">
            <div className="image-wrapper">
              <img src={AVAJessicaMera} alt="" />
            </div>
            <div className="detail-profile-wrap">
              <h5 className="text-name">Samuel Suhi</h5>
              <p>+62 813-8492-9994</p>
            </div>
          </div>
        </SmallCard>

        <div className="button-wrap">
          <button className="share-button">
            <img src={ShareIcon} alt="" />
          </button>

          <button className="download-button">
            <img className="download-icon" src={DownloadIcon} alt="" />
            Download PDF
          </button>

          <Button
            className="button-back"
            primary="primary"
            children="Back to Home"
            onClick={() => {
              return history.push(`/${username}/dashboard`);
            }}
          />
        </div>
      </StyleStatus>
    </Cardwrapper>
  );
};

export default StatusTransferPage;
