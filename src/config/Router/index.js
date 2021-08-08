import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  HistoryPage,
  Homepage,
  Landingpage,
  SearchReceiverPage,
  UserReceiverPage,
  //  START = nisa
  LoginPage,
  SignupPage,
  CreatePinPage,
  SuccessPinPage,
  ForgotPasswordPage,
  ResetPasswordEmailPage,
  //  END = nisa
} from '../../page';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        {/* START = AUTHENTICATION PAGE */}
        <Route exact path="/login" component={LoginPage} />
        <Route path="/create-pin" component={CreatePinPage} />
        <Route path="/sign-up" component={SignupPage} />
        <Route path="/success-pin" component={SuccessPinPage} />
        <Route path="/new-password" component={ForgotPasswordPage} />
        <Route path="/reset-password" component={ResetPasswordEmailPage} />
        {/* END = AUTHENTICATION PAGE */}
        {/* START = USER PAGE */}
        <PrivateRoute path="/username/dashboard" component={Homepage} />
        <PrivateRoute path="/username/history" component={HistoryPage} />
        <PrivateRoute
          exact
          path="/username/search-receiver"
          component={SearchReceiverPage}
        />
        <PrivateRoute
          path="/username/search-receiver/to-username"
          component={UserReceiverPage}
        />
        {/* START = USER PAGE */}
      </Switch>
    </Router>
  );
};

export default Routes;
