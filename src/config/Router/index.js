import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage, 
         SignupPage, 
         CreatePinPage, 
         SuccessPinPage, 
         ForgotPasswordPage, 
         ResetPasswordEmailPage
        } from '../../page';

const Routes = () => {
  return (
    <Router>
      <Switch>
    
        <Route path="/login" component={LoginPage} />
        <Route path="/createpin" component={CreatePinPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/successpin" component={SuccessPinPage} />
        <Route path="/new-password" component={ForgotPasswordPage} />
        <Route path="/reset-password" component={ResetPasswordEmailPage} />

      </Switch>
    </Router>
  );
};

export default Routes;
