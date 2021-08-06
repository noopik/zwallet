import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landingpage } from '../../page';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
      </Switch>
    </Router>
  );
};

export default Routes;
