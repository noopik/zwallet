import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { Footer, MenuAsideLeft, Navbar } from '../../components';
import { StylingMainContent } from './StyledPrivateRoute';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("isAuth");
  const role = localStorage.getItem("role");
  // const token = localStorage.getItem('token');
  // const dispatch = useDispatch();
  // action user dari db ke redux
  const location = useLocation();

  // START = LOGIC FOR ASIDE MENU ACTIVE
  const pathNow = location.pathname;
  const listMenu = {
    '/username/dashboard': 'dashboard',
    '/username/search-receiver': 'transfer',
    '/username/topup': 'topup',
    '/username/profile': 'profile',
  };
  // END = LOGIC FOR ASIDE MENU ACTIVE

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === "true" && role === "MEMBER") {
          return (
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
          );
        } else if (isAuth === "true" && role === "ADMIN") {
          return <Redirect to="/admin/dashboard" />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
