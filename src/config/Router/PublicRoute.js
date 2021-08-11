import React from 'react';
// import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => {
   const isAuth = localStorage.getItem("isAuth");
   const role = localStorage.getItem("role");
   const username = localStorage.getItem("username");
   console.log(role);
  // const userState = useSelector((state) => state.userReducer);
  // const token = localStorage.getItem('token');
  // const dispatch = useDispatch();
  
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === 'false') {
          return <Component {...props} />;
        } else if (isAuth === 'true' && role === "MEMBER") {
          return <Redirect to={`/${username}/dashboard`} />;
        } else if (isAuth === 'true' && role === "ADMIN") {
          return <Redirect to={`/admin/dashboard`} />;
        }
      }}
    />
  );
};

export default PublicRoute;
