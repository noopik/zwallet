import { dispatchTypes } from "../../../utils/dispatchType";
const axios = require("axios");

export const registerUser = (data, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/v1/auth/register`, data)
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: dispatchTypes.postRegisterUser, payload: dataUser });
      history.push(`/login`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const loginUser = (data, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/v1/auth/login`, data)
    .then((result) => {
      const token = result.data.data.token;
      const id = result.data.data.id;
      const role = result.data.data.role;
      const username = result.data.data.username;
      const avatar = result.data.data.avatar;
      const pin = result.data.data.pin;
      const phone = result.data.data.pin;
      const isAuth = true;
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
        //   isAuth: result.data.isAuth,
      };
      dispatch({ type: dispatchTypes.postLoginUser, payload: dataUser });
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("role", role);
      localStorage.setItem("username", username);
      localStorage.setItem("avatar", avatar);
       localStorage.setItem("pin", pin);
        localStorage.setItem("phone", phone);
      localStorage.setItem("isAuth", isAuth);
      console.log(pin);
if(pin==null){ history.push(`/create-pin/${id}`);}else{ history.push("/");}
     
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const setPinUser = (data, history) => (dispatch) => {
    const id = localStorage.getItem("id");
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/v1/auth/setpin/${id}`, data)
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: dispatchTypes.postSetPinUser, payload: dataUser });
      history.push(`/success-pin`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};

export const forgotPasswordUser = (data) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/v1/auth/forgotpassword`, data)
    .then((result) => {
      
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: dispatchTypes.postForgotPasswordUser, payload: dataUser });
    //   history.push(`/new-password`);
    alert("success sent reset password email");
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
export const resetPasswordUser = (data,token,history) => (dispatch) => {
console.log(data);
  axios
    .post(`${process.env.REACT_APP_BACKEND_API}/v1/auth/resetPassword/${token}`, data)
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
      alert("success reset password");
        history.push(`/login`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};