import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, UserLogin, Pagecoba } from '../../page';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/coba" component={Pagecoba} />
      </Switch>
    </Router>
  );
};

export default Routes;
