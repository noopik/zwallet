import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Homepage, LoginPage, SignupPage, CreatePinPage, SuccessPinPage} from '../../page';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/createpin" component={CreatePinPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/successpin" component={SuccessPinPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
