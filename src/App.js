import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from '../src/config/Redux/store';
import './App.css';
import { LoadingProgress } from './components';
import Routes from './config/Router';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
          <LoadingProgress />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
