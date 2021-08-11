import React, { useState } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { Footer, MenuAsideLeft, Navbar } from '../../components';
import { StylingMainContent } from './StyledPrivateRoute';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogin, setIsLogin] = useState({ check: true, passed: true });
  console.log(setIsLogin);
  // const token = localStorage.getItem('token');
  // const dispatch = useDispatch();
  // action user dari db ke redux
  const location = useLocation();

  // START = LOGIC FOR ASIDE MENU ACTIVE
  const pathNow = location.pathname;
  const listMenu = {
    '/username/dashboard': 'dashboard',
    '/username/history': 'dashboard',
    '/username/search-receiver': 'transfer',
    '/username/search-receiver/to-username': 'transfer',
    '/username/status-transfer': 'transfer',
    '/username/search-receiver/to-username/confirmation': 'transfer',
    '/username/topup': 'topup',
    '/username/profile': 'profile',
    '/username/profile/info': 'profile',
    '/username/profile/password': 'profile',
    '/username/profile/change-pin': 'profile',
  };
  // END = LOGIC FOR ASIDE MENU ACTIVE
  console.log(location);
  return (
    <>
      {isLogin.check && (
        <Route
          {...rest}
          render={(props) => {
            return isLogin.passed ? (
              <>
                <Navbar />
                <StylingMainContent>
                  <MenuAsideLeft active={listMenu[pathNow]} />
                  {/* Styling for this element (Main, Header-setion) inside StylingMainContent component */}
                  <div className="main">
                    <Component {...props} />
                  </div>
                </StylingMainContent>
                <Footer />
              </>
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      )}
    </>
  );
};

export default PrivateRoute;
