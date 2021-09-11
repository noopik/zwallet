import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  let b = require(logger);
  middleware = [...middleware, b];
} else {
  middleware = [...middleware];
}

const createStoreWithMiddleware = applyMiddleware(...middleware);

const store = createStore(persistedReducer, createStoreWithMiddleware);

const persistor = persistStore(store);

export { store, persistor };
