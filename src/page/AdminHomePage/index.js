import React from 'react';
import { Cardwrapper, SmallCard, HeadingContent } from '../../components';
import { StyledAdmin } from './StyledAdmin';
import { AVAJessicaMera } from '../../assets';

const AdminHomePage = () => {
  return (
    <StyledAdmin>
      <div className="card-header">
        <div className="status-transaction">
          <p className="text-section">
            Total Transaction
            <br />
            Update: 03.03, 30-xx-2xxx
            <h4 className="balance-amount">130</h4>
            Successfully transaction
          </p>
        </div>
        <div className="amount-transaction">
          <p className="text-section">
            Amount Total Transaction <br />
            Update: 03.03, 30-xx-2xxx
            <h4 className="balance-amount">Rp. 390m</h4>
            Rp 39.000.000.000.000
          </p>
        </div>
        <div className="user-verified">
          <p className="text-section">
            User Verified <br />
            1K
            <h4 className="balance-amount">Rp. 390m</h4>
            Total user Verified
          </p>
        </div>
      </div>
      <Cardwrapper className="content-wrapper">
        <div className="text-wrapper">
          <HeadingContent>Total Transaction History</HeadingContent>
        </div>
        <SmallCard className="card-profile account">
          <div className="wrapper-profile">
            <div className="image-wrapper">
              <img src={AVAJessicaMera} alt="" />
            </div>
            <div className="detail-profile-wrap">
              <h5 className="text-name">Samuel Suhi</h5>
              <p className="detail">
                Transfer to <b>Rp. 50.000</b> to Nisa at July 20, 2021 : 05.03{' '}
              </p>
            </div>
            <div className="status-transfer">
              <mark>Success</mark>
            </div>
          </div>
        </SmallCard>
        <SmallCard className="card-profile account">
          <div className="wrapper-profile">
            <div className="image-wrapper">
              <img src={AVAJessicaMera} alt="" />
            </div>
            <div className="detail-profile-wrap">
              <h5 className="text-name">Samuel Suhi</h5>
              <p className="detail">
                Transfer to <b>Rp. 50.000</b> to Nisa at July 20, 2021 : 05.03{' '}
              </p>
            </div>
            <div className="status-transfer failed">
              <mark>Failed</mark>
            </div>
          </div>
        </SmallCard>
        <SmallCard className="card-profile account">
          <div className="wrapper-profile">
            <div className="image-wrapper">
              <img src={AVAJessicaMera} alt="" />
            </div>
            <div className="detail-profile-wrap">
              <h5 className="text-name">Samuel Suhi</h5>
              <p className="detail">
                Transfer to <b>Rp. 50.000</b> to Nisa at July 20, 2021 : 05.03{' '}
              </p>
            </div>
            <div className="status-transfer">
              <mark>Success</mark>
            </div>
          </div>
        </SmallCard>
        <SmallCard className="card-profile account">
          <div className="wrapper-profile">
            <div className="image-wrapper">
              <img src={AVAJessicaMera} alt="" />
            </div>
            <div className="detail-profile-wrap">
              <h5 className="text-name">Samuel Suhi</h5>
              <p className="detail">
                Transfer to <b>Rp. 50.000</b> to Nisa at July 20, 2021 : 05.03{' '}
              </p>
            </div>
            <div className="status-transfer pending">
              <mark>Pending</mark>
            </div>
          </div>
        </SmallCard>
      </Cardwrapper>
    </StyledAdmin>
  );
};

export default AdminHomePage;
