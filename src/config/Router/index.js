import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  HistoryPage,
  Homepage,
  Landingpage,
  SearchReceiverPage,
} from '../../page';
import PrivateRoute from './PrivateRoute';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <PrivateRoute exact path="/username/dashboard" component={Homepage} />
        <PrivateRoute exact path="/username/history" component={HistoryPage} />
        <PrivateRoute
          exact
          path="/username/search-receiver"
          component={SearchReceiverPage}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
