import { Provider } from 'react-redux';
import './App.css';
import Routes from './config/Router';
import store from '../src/config/Redux/store';
import { LoadingProgress } from './components';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
        <LoadingProgress />
      </Provider>
    </>
  );
}

export default App;
