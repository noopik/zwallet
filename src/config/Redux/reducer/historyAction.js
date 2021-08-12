import { dispatchTypes } from '../../../utils/dispatchType';

const initialState = {
  data: [],
  meta: {},
};

export const historyReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case dispatchTypes.setAllHistory:
      return {
        ...state,
        data: action.payload.data,
        meta: action.payload.meta,
      };

    default:
      return state;
  }
};
