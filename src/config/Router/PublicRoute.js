import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
  const [isLogin, setIsLogin] = useState({ check: true, passed: false });
  // const userState = useSelector((state) => state.userReducer);
  // const token = localStorage.getItem('token');
  // const dispatch = useDispatch();
  console.log(setIsLogin);
  return (
    <>
      {isLogin.check && (
        <Route
          {...rest}
          render={(props) => {
            return isLogin.passed ? (
              <Redirect to="/username/dashboard" />
            ) : (
              <Component {...props} />
            );
          }}
        />
      )}
    </>
  );
};

export default PublicRoute;
