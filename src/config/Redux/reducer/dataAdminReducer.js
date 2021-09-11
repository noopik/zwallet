import { dispatchTypes } from '../../../utils/dispatchType';

const initialData = {
  allData: [],
  meta: []
}

export const dataAdminReducer = (state = initialData, action) => {
  switch (action.type) {
    case dispatchTypes.getAllActivity:
      return {
        ...state,
        allData: action.payload,
        meta: action.meta
      };
    default:
      return state;
  }
};