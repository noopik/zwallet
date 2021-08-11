import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../src/config/Redux/store';
import './App.css';
import { LoadingProgress } from './components';
import Routes from './config/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <LoadingProgress />
      </Provider>
      <ToastContainer />
    </>
  );
}

export default App;
