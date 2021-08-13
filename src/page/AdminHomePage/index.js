import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cardwrapper, HeadingContent, SmallCard } from '../../components';
import { getAllActivity } from '../../config/Redux/actions/dataAdminActions';
import { StyledAdmin } from './StyledAdmin';

const AdminHomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivity());
  }, [dispatch]);

  const { allData, meta } = useSelector((state) => state.dataAdminReducer);

  let date = new Date();
  date =
    date.getDate() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getFullYear() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds();

  return (
    <StyledAdmin>
      <div className="card-header">
        <div className="status-transaction">
          <p className="text-section">
            Total Transaction
            <br />
            Update: {date}
            <h4 className="balance-amount">{meta ? meta.allData : 0}</h4>
            Successfully transaction
          </p>
        </div>
        <div className="amount-transaction">
          <p className="text-section">
            Amount Total Transaction <br />
            Update: {date}
            <h4 className="balance-amount">
              Rp. {meta ? meta.totalAmount : 0}
            </h4>
            Rp {meta ? meta.totalAmount : 0}
          </p>
        </div>
        <div className="user-verified">
          <p className="text-section">
            User Verified <br />
            1K
            <h4 className="balance-amount">1K</h4>
            Total user Verified
          </p>
        </div>
      </div>
      <Cardwrapper className="content-wrapper">
        <div className="text-wrapper">
          <HeadingContent>Total Transaction History</HeadingContent>
        </div>
        {allData &&
          allData.map((item) => (
            <SmallCard className="card-profile account">
              <div className="wrapper-profile">
                <div className="image-wrapper">
                  <img src={item.avatar} alt="" />
                </div>
                <div className="detail-profile-wrap">
                  <h5 className="text-name">{item.usernameTransfer}</h5>
                  <p className="detail">
                    Transfer to <b>Rp. {item.amount}</b> to {item.username} at{' '}
                    {item.updatedAt}{' '}
                  </p>
                </div>
                <div className="status-transfer">
                  <mark>
                    {item.status === 'success' ? 'Success' : 'Failed'}
                  </mark>
                </div>
              </div>
            </SmallCard>
          ))}
      </Cardwrapper>
    </StyledAdmin>
  );
};

export default AdminHomePage;
