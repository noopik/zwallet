import { dispatchTypes } from '../../../utils/dispatchType';

const isShow = false;

export const loadingReducer = (state = { isShow }, action) => {
  if (action.type === dispatchTypes.setLoading) {
    return {
      isShow: action.value,
    };
  }

  return state;
};
