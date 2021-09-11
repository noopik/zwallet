import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { transferReducer } from './transferReducer';
import { historyReducer } from './historyAction';
import { dataAdminReducer } from './dataAdminReducer';
import { VAUserReducer } from './VAUserReducer';

const reducer = combineReducers({
  loadingReducer,
  historyReducer,
  userReducer,
  transferReducer,
  dataAdminReducer,
  VAUserReducer
});

export default reducer;
