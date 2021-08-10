import { dispatchTypes } from "../../../utils/dispatchType";

export const registerUser = (data, history) => (dispatch) => {
  axios
    .post(`${BASE_URL}register`, data)
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