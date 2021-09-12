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
      // const username = result.data.data.username;
      // console.log(result);
      toastify(
        'Succes Register. Please login and check email to verification account',
        'info'
      );
      // const dataUser = {
      //   data: result.data.data,
      //   error: result.data.error,
      //   message: result.data.message,
      //   status: result.data.status,
      // };
      // localStorage.setItem("username", username);
      // dispatch({ type: dispatchTypes.postRegisterUser, payload: dataUser });
      dispatch(showLoading(false));
      history.push(`/login`);
    })
    .catch((error) => {
      // console.log(error);
      dispatch(showLoading(false));
      if (error.response.data.status === 404) {
        return toastify('Email alredy exists', 'error');
      }
      return toastify(error.response.data.message, 'error');
    });
};

export const loginUser = (data, history) => (dispatch) => {
  // console.log('data masuk', data);
  dispatch(showLoading(true));
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/auth/login`, data)
    .then((result) => {
      // console.log(result);
      dispatch(showLoading(false));
      const token = result.data.data.token;
      const id = result.data.data.id;
      const role = result.data.data.role;
      const pin = result.data.data.pin;
      const isAuth = true;
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      // console.log('CEK RESULT: ', typeof pin);
      dispatch({ type: dispatchTypes.postLoginUser, payload: dataUser });
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('isAuth', isAuth);
      if (!pin) {
        history.push(`/create-pin/${id}`);
      } else {
        if (role === 'ADMIN') {
          history.push(`/admin/dashboard`);
        } else if (role === 'MEMBER') {
          history.push(`/dashboard`);
        }
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(showLoading(false));
      toastify(error.response.data.message, 'error');
    });
};

// export const setPinUser = (data, history) => (dispatch) => {
//   // const id = localStorage.getItem('id');
//   axios
//     .post(`${process.env.REACT_APP_BACKEND_API}/auth/setpin/${id}`, data)
//     .then((result) => {
//       const dataUser = {
//         data: result.data.data,
//         error: result.data.error,
//         message: result.data.message,
//         status: result.data.status,
//       };
//       // localStorage.setItem('pin', data.pin);
//       dispatch({ type: dispatchTypes.postSetPinUser, payload: dataUser });
//       history.push(`/success-pin`);
//     })
//     .catch((error) => {
//       toastify(error.response.data.message, 'error');
//     });
// };

export const forgotPasswordUser = (data) => (dispatch) => {
  // console.log('send email', data);
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
      toastify('success sent reset password email', 'info');
    })
    .catch((error) => {
      // console.log('error', error.response);
      toastify(error.response.data.message, 'error');
    });
};
export const resetPasswordUser = (data, token, history) => (dispatch) => {
  // console.log('data masuk', data);
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
      toastify('success reset password', 'info');
      history.push(`/login`);
    })
    .catch((error) => {
      // console.log('error', error);
      toastify(error.response.data.message, 'error');
    });
};

export const updatePhoneNumber = (idUser, data, token, history, role) => {
  axios
    .patch(`${process.env.REACT_APP_BACKEND_API}/users/${idUser}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      // console.log(result);
      localStorage.setItem('phone', data.phone);
      if (role === 'ADMIN') {
        history.push(`admin/profile/info`);
        return toastify('Success updated password', 'info');
      } else {
        history.push(`/profile/info`);
        return toastify('Success updated password', 'info');
      }
    })
    .catch((err) => {
      console.log(err.response);
      return toastify(err.response.data.message, 'error');
    });
};

export const getUser = (idUser, token) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_BACKEND_API}/users/${idUser}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((result) => {
      const data = result.data.data[0];
      // console.log(data)

      dispatch({
        type: dispatchTypes.getUser,
        payload: data,
      });
    })
    .catch((err) => {
      console.log(err.response);
      return toastify(err.response.data.message, 'error');
    });
};
