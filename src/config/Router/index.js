import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, Landingpage } from '../../page';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route exact path="/username" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default Routes;
