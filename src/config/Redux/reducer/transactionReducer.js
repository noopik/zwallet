import { dispatchTypes } from '../../../utils/dispatchType';

const initialData = {
  history: [],
  transaction: {}
}

export const transactionReducer = (state = { initialData }, action) => {
  if (action.type === dispatchTypes.setHistory) {
    return {
      history: action.payload
    };
  }

  return state
}