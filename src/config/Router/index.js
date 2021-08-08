import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import {
  HistoryPage,
  Homepage,
  Landingpage,
  SearchReceiverPage,
  UserReceiverPage,
} from '../../page';
import PrivateRoute from './PrivateRoute';
=======
import { LoginPage, 
         SignupPage, 
         CreatePinPage, 
         SuccessPinPage, 
         ForgotPasswordPage, 
         ResetPasswordEmailPage
        } from '../../page';

>>>>>>> bf755654d988f6cc142ab2acd454a126f155b310
const Routes = () => {
  return (
    <Router>
      <Switch>
<<<<<<< HEAD
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
=======
    
        <Route path="/login" component={LoginPage} />
        <Route path="/createpin" component={CreatePinPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/successpin" component={SuccessPinPage} />
        <Route path="/new-password" component={ForgotPasswordPage} />
        <Route path="/reset-password" component={ResetPasswordEmailPage} />

>>>>>>> bf755654d988f6cc142ab2acd454a126f155b310
      </Switch>
    </Router>
  );
};

export default Routes;
