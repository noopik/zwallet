import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage } from '../../page';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
