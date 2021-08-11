import { toastify } from '../../../utils';
import { dispatchTypes } from '../../../utils/dispatchType';
import { showLoading } from './loadingActions';
const axios = require('axios');

export const registerUser = (data, history) => (dispatch) => {
  dispatch(showLoading(true));
  // console.log(data);
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/auth/register`, data)
    .then((result) => {
      toastify(
        'Succes Register. Please login and check email to verification account',
        'info'
      );
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: dispatchTypes.postRegisterUser, payload: dataUser });
      dispatch(showLoading(false));
      history.push(`/login`);
    })
    .catch((error) => {
      dispatch(showLoading(false));
      if (error.response.data.status === 404) {
        return toastify('Email alredy exists', 'error');
      }
      return toastify(error.response.data.message, 'error');
    });
};

export const loginUser = (data, history) => (dispatch) => {
  // console.log(data);
  dispatch(showLoading(true));
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/auth/login`, data)
    .then((result) => {
      dispatch(showLoading(false));
      const token = result.data.data.token;
      const id = result.data.data.id;
      const role = result.data.data.role;
      const username = result.data.data.username;
      const avatar = result.data.data.avatar;
      // console.log('TEST AVATAR', avatar);
      const pin = result.data.data.pin;
      const phone = result.data.data.phone;
      const amount = result.data.data.amount;
      const email = result.data.data.email;
      const isAuth = true;
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
        //   isAuth: result.data.isAuth,
      };
      // console.log('CEK RESULT: ', typeof pin);
      dispatch({ type: dispatchTypes.postLoginUser, payload: dataUser });
      localStorage.setItem('token', token);
      localStorage.setItem('id', id);
      localStorage.setItem('role', role);
      localStorage.setItem('username', username);
      localStorage.setItem('avatar', avatar);
      localStorage.setItem('pin', pin);
      localStorage.setItem('phone', phone);
      localStorage.setItem('isAuth', isAuth);
      localStorage.setItem('amount', amount);
      localStorage.setItem('email', email);
      // console.log(typeof pin);
      if (!pin) {
        history.push(`/create-pin/${id}`);
      } else {
        history.push(`/${username}/dashboard`);
      }
    })
    .catch((error) => {
      dispatch(showLoading(false));
      toastify(error.response.data.message, 'error');
    });
};

export const setPinUser = (data, history) => (dispatch) => {
  const id = localStorage.getItem('id');
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/auth/setpin/${id}`, data)
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      localStorage.setItem('pin', data.pin);
      dispatch({ type: dispatchTypes.postSetPinUser, payload: dataUser });
      history.push(`/success-pin`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const forgotPasswordUser = (data) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/auth/forgotpassword`, data)
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({
        type: dispatchTypes.postForgotPasswordUser,
        payload: dataUser,
      });
      //   history.push(`/new-password`);
      alert('success sent reset password email');
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
export const resetPasswordUser = (data, token, history) => (dispatch) => {
  // console.log(data);
  axios
    .post(
      `${process.env.REACT_APP_BACKEND_API}/auth/resetPassword/${token}`,
      data
    )
    .then((result) => {
      const dataUser = {
        data: result.data.data.password,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({
        type: dispatchTypes.postResetPasswordUser,
        payload: dataUser,
      });
      //   history.push(`/new-password`);
      alert('success reset password');
      history.push(`/login`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const updatePhoneNumber = (idUser, data, token) => {
  axios
    .patch(`${process.env.REACT_APP_BACKEND_API}/users/${idUser}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      // console.log(result);
      localStorage.setItem('phone', data.phone);
      return toastify('Success updated password', 'info');
    })
    .catch((err) => {
      console.log(err.response);
      return toastify(err.response.data.message, 'error');
    });
};
