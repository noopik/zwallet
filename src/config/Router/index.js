import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { LoginPage, 
         SignupPage, 
         CreatePinPage, 
         SuccessPinPage, 
         ForgotPasswordPage, 
         ResetPasswordEmailPage
        } from '../../page';

=======
import {
  HistoryPage,
  Homepage,
  Landingpage,
  SearchReceiverPage,
  UserReceiverPage,
} from '../../page';
import PrivateRoute from './PrivateRoute';
>>>>>>> 17804fa3fdb61216cba354b4203822b3a0ec45a8
const Routes = () => {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
    
        <Route path="/login" component={LoginPage} />
        <Route path="/createpin" component={CreatePinPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/successpin" component={SuccessPinPage} />
        <Route path="/new-password" component={ForgotPasswordPage} />
        <Route path="/reset-password" component={ResetPasswordEmailPage} />

=======
        <Route exact path="/" component={Landingpage} />
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
>>>>>>> 17804fa3fdb61216cba354b4203822b3a0ec45a8
      </Switch>
    </Router>
  );
};

export default Routes;
