import { dispatchTypes } from '../../../utils/dispatchType';

const initialData = {};

export const userReducer = (state = { initialData }, action) => {
  if (action.type === dispatchTypes.setUserProfile) {
    return {
      ...action.value,
    };
  }

  return state;
};
