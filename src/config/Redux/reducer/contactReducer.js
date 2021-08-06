import { dispatchTypes } from '../../../utils/dispatchType';

const initialData = {
  meta: {},
  data: [],
};

export const contactReducer = (state = { initialData }, action) => {
  if (action.type === dispatchTypes.setAllContacts) {
    return {
      meta: action.value.meta,
      data: action.value.data,
    };
  }

  return state;
};
