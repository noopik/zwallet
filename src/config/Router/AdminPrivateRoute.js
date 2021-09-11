import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { Footer, MenuAsideLeft, Navbar } from '../../components';
import { StylingMainContent } from './StyledPrivateRoute';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem('isAuth');
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');
  // const token = localStorage.getItem('token');
  // const dispatch = useDispatch();
  // action user dari db ke redux
  const location = useLocation();

  // START = LOGIC FOR ASIDE MENU ACTIVE
  const pathNow = location.pathname;
  const listMenu = {
    [`/admin/dashboard`]: "dashboard",
    [`/admin/history`]: "dashboard",
    // [`/admin/search-receiver`]: "transfer",
    // [`/admin/search-receiver/to-username`]: "transfer",
    // [`/admin/status-transfer`]: "transfer",
    // [`/admin/search-receiver/to-username/confirmation`]: "transfer",
    // [`/admin/topup`]: "topup",
    [`/admin/profile`]: "profile",
    [`/admin/profile/info`]: "profile",
    [`/admin/profile/password`]: "profile",
    [`/admin/profile/change-pin`]: "profile",
    [`/admin/profile/add-phone-number`]: "profile",
  };
  // console.log(listMenu);
  // END = LOGIC FOR ASIDE MENU ACTIVE
  // console.log(location);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === 'true' && role === 'MEMBER') {
         return <Redirect to="/dashboard" />;
        } else if (isAuth === 'true' && role === 'ADMIN') {
          return (
            <>
              <Navbar />
              <StylingMainContent>
                <MenuAsideLeft active={listMenu[pathNow]} username={username} />
                {/* Styling for this element (Main, Header-setion) inside StylingMainContent component */}
                <div className="main">
                  <Component {...props} />
                </div>
              </StylingMainContent>
              <Footer />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
