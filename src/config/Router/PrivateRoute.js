import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Footer, MenuAsideLeft, Navbar } from '../../components';
import { StylingMainContent } from './StyledPrivateRoute';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogin, setIsLogin] = useState({ check: true, passed: true });
  console.log(setIsLogin);
  // const token = localStorage.getItem('token');
  // const dispatch = useDispatch();

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
                  <MenuAsideLeft />
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
