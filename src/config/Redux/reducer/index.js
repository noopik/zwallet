import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { transferReducer } from './transferReducer';
import { historyReducer } from './historyAction';
import { dataAdminReducer } from './dataAdminReducer';

const reducer = combineReducers({
  loadingReducer,
  historyReducer,
  userReducer,
  transferReducer,
  dataAdminReducer
});

export default reducer;
