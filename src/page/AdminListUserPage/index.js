import React from 'react';
import { StylesAdmin } from './StylesAdmin';
import { Cardwrapper, HeadingContent, CardProfileUser } from '../../components';
const AdminListUserPage = () => {
  return (
    <StylesAdmin>
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
          <HeadingContent>Search Our Users</HeadingContent>
        </div>
        <div className="search-section" onClick="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
          >
            <path
              d="M15 16L20 21"
              stroke="#A9A9A9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 18C13.866 18 17 14.866 17 11C17 7.13401 13.866 4 10 4C6.13401 4 3 7.13401 3 11C3 14.866 6.13401 18 10 18Z"
              stroke="#A9A9A9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <form onSubmit="">
            <input
              className="input-search"
              placeholder="Mencari saya?"
              type="text"
            />
          </form>
        </div>
        <div className="body-section">
          <CardProfileUser
            typeTransaction="samuelsuhi@gmail.com | +65 789 7897 77"
            link="Samuela"
          />
          <CardProfileUser
            typeTransaction="samuelsuhi@gmail.com | +65 789 7897 77"
            link="Samuela"
          />
          <CardProfileUser
            typeTransaction="samuelsuhi@gmail.com | +65 789 7897 77"
            link="Samuela"
          />
          <CardProfileUser
            typeTransaction="samuelsuhi@gmail.com | +65 789 7897 77"
            link="Samuela"
          />
          <CardProfileUser
            typeTransaction="samuelsuhi@gmail.com | +65 789 7897 77"
            link="Samuela"
          />
        </div>
      </Cardwrapper>
    </StylesAdmin>
  );
};

export default AdminListUserPage;
