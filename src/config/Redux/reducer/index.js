import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { userReducer } from './userReducer';
import { transferReducer } from './transferReducer';

const reducer = combineReducers({
  loadingReducer,
  userReducer,
  transferReducer,
});

export default reducer;
