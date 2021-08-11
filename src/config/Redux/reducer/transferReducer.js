import { dispatchTypes } from '../../../utils/dispatchType';

const initialState = {
  sender: '',
  receiver: '',
  amount: '',
  balanceLeft: '',
  date: '',
  notes: '',
  status: false,
};

export const transferReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case dispatchTypes.setTransfer:
      return {
        ...state,
        sender: action.payload.sender,
        receiver: action.payload.receiver,
        amount: action.payload.amount,
        balanceLeft: action.payload.balanceLeft,
        date: action.payload.date,
        notes: action.payload.notes,
      };
    case dispatchTypes.setStatusTransfer:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
