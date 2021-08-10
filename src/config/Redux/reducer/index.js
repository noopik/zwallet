import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { userReducer } from "./userReducer";

const reducer = combineReducers({
  loadingReducer,
  userReducer,
});

export default reducer;
