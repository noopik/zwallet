import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { showLoading } from '../../redux/actions';

const PublicRoute = ({ component: Component, ...rest }) => {
  const [isLogin, setIsLogin] = useState({ check: false, passed: false });
  // const userState = useSelector((state) => state.userReducer);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  return (
    <>
      {isLogin.check && (
        <Route
          {...rest}
          render={(props) => {
            return isLogin.passed ? (
              <Redirect to="/" />
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
