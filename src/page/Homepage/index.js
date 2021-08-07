import React from 'react';
import { ICDownGreen, ICUpRed } from '../../assets';
// import PropTypes from 'prop-types';
import {
  CardProfileUser,
  Footer,
  MenuAsideLeft,
  Navbar,
} from '../../components';
import Button from '../../components/atoms/Button';
import { StylingMainContent } from './styled';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <StylingMainContent>
        <MenuAsideLeft />
        {/* Styling for this element (Main, Header-setion) inside StylingMainContent component */}
        <div className="main">
          <div className="header-section">
            <div className="balance-wrapper">
              <h3 className="text-section">Balance</h3>
              <h1 className="balance-amount">Rp120.000</h1>
              <p className="text-section">+62 813-987-7890</p>
            </div>
            <div className="button-action-wrapper">
              <Button icon="transfer" />
              <Button icon="top-up" />
            </div>
          </div>
          <div className="transaction-history-wrapper">
            <div className="chart card">
              <div className="header">
                <div className="income-wrapper">
                  <img src={ICDownGreen} alt="icon down" />
                  <h4 className="text">Income</h4>
                  <h4 className="text-bold">Rp.2.120.000</h4>
                </div>
                <div className="income-wrapper">
                  <img src={ICUpRed} alt="icon" />
                  <h4 className="text">Expense</h4>
                  <h4 className="text-bold">Rp.2.120.000</h4>
                </div>
                <div className="body"></div>
              </div>
            </div>
            <div className="history-wrapper card">
              <div className="heading">
                <h2 className="text-bold">Transaction History</h2>
                <p className="text-link">See all</p>
              </div>
              <div className="body">
                <CardProfileUser />
                <CardProfileUser />
                <CardProfileUser />
                <CardProfileUser />
                <CardProfileUser />
                <CardProfileUser />
                <CardProfileUser />
              </div>
            </div>
          </div>
        </div>
      </StylingMainContent>
      <Footer />
    </>
  );
};

Homepage.propTypes = {};

export default Homepage;

// NEEDED REFRACTOR TO REUSABLE COMPONENT
