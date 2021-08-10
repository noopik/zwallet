import { dispatchTypes } from '../../../utils/dispatchType';

const initialData = {};

export const userReducer = (state = { initialData }, action) => {
  switch (action.type) {
    case dispatchTypes.setUserProfile:
      return {
        ...action.value,
      };

    default:
      return state;
  }
};
