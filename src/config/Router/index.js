import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, UserLogin } from '../../page';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={UserLogin} />
      </Switch>
    </Router>
  );
};

export default Routes;
