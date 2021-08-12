import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { transferReducer } from './transferReducer';
import { historyReducer } from './historyAction';

const reducer = combineReducers({
  loadingReducer,
  historyReducer,
  userReducer,
  transferReducer,
});

export default reducer;
