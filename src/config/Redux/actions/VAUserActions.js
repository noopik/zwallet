import { dispatchTypes } from '../../../utils/dispatchType';
import { showLoading } from './loadingActions';
const axios = require('axios');

export const getVAUser = (id) => (dispatch) => {
  dispatch(showLoading(true));
  const token = localStorage.getItem('token')
  axios
  .get(`${process.env.REACT_APP_BACKEND_API}/transactions/va/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      const data = result.data.data[0].virtualAccount
      
      dispatch({ type: dispatchTypes.getVAUser, payload: data });
      dispatch(showLoading(false));
    })
    .catch((error) => {
      dispatch(showLoading(false));
      return error.response.data.message
    });
};