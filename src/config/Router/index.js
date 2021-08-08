import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HistoryPage, Homepage, Landingpage } from '../../page';
import PrivateRoute from './PrivateRoute';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <PrivateRoute exact path="/username/dashboard" component={Homepage} />
        <PrivateRoute exact path="/username/history" component={HistoryPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
