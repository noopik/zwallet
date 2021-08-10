import AxiosInstance from "../../Axios";
import { dispatchTypes } from "../../../utils/dispatchType";

export const setHistory = (userId) => async (dispatch) => {
  try {
    const response = await AxiosInstance().get(
      `v1/transactions/history/${userId}`
    );

    console.log(response.data.data);

    dispatch({ type: dispatchTypes.setHistory, payload: response.data });
    return response;
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
