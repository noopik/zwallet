import { dispatchTypes } from '../../../utils/dispatchType';

const initialData = {
  data: '',
}

export const VAUserReducer = (state = initialData, action) => {
  switch (action.type) {
    case dispatchTypes.getVAUser:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};