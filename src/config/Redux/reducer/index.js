import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';

const reducer = combineReducers({
  loadingReducer,
});

export default reducer;
