import { Provider } from 'react-redux';
import './App.css';
import Routes from './config/Router';
import store from '../src/config/Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
