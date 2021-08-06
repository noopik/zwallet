import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLogin, setIsLogin] = useState({ check: false, passed: false });
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  return (
    <>
      {isLogin.check && (
        <Route
          {...rest}
          render={(props) => {
            return isLogin.passed ? (
              <Component {...props} />
            ) : (
              <Redirect to="/customer-login" />
            );
          }}
        />
      )}
    </>
  );
};

export default PrivateRoute;
