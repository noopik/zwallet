import { dispatchTypes } from '../../../utils/dispatchType';
import { showLoading } from './loadingActions';
const axios = require('axios');

export const getAllActivity = () => (dispatch) => {
  dispatch(showLoading(true));
  const token = localStorage.getItem('token')
  axios
  .get(`${process.env.REACT_APP_BACKEND_API}/transactions`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((result) => {
      const allData = result.data.data
      const meta = result.data.meta
      
      dispatch({ type: dispatchTypes.getAllActivity, payload: allData, meta });
      dispatch(showLoading(false));
    })
    .catch((error) => {
      dispatch(showLoading(false));
      return error.response.data.message
    });
};