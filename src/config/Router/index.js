// import { Public } from '@material-ui/icons';
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
  ConfirmationTransferPage,
  ProfileUserPage,
  TopupPage,
  PersonalInfo,
  StatusTransferPage,
  ChangePasswordPage,
  ManagePhoneNumber,
  ChangePinPage,
  AddPhoneNumberPage,
  NewPinPage,
  AdminHomePage,
  AdminListUserPage,
  VerifiedEmailSuccess,

  //  END = nisa
} from '../../page';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landingpage} />
        {/* START = AUTHENTICATION PAGE */}
        <PublicRoute exact path="/login" component={LoginPage} />
        <Route path="/create-pin/:id" component={CreatePinPage} />
        <PublicRoute path="/sign-up" component={SignupPage} />
        <PublicRoute path="/success-pin" component={SuccessPinPage} />
        <PublicRoute
          path="/new-password/:token"
          component={ForgotPasswordPage}
        />
        <PublicRoute
          path="/reset-password"
          component={ResetPasswordEmailPage}
        />
        <PublicRoute path="/email-success" component={VerifiedEmailSuccess} />

        {/* END = AUTHENTICATION PAGE */}
        {/* START = USER PAGE */}

        <PrivateRoute path="/:username/dashboard" component={Homepage} />
        <PrivateRoute path="/:username/history" component={HistoryPage} />

        <PrivateRoute
          exact
          path="/:username/search-receiver"
          component={SearchReceiverPage}
        />
        <PrivateRoute
          exact
          path="/:username/search-receiver/:toUser"
          component={UserReceiverPage}
        />

        <PrivateRoute
          path="/:username/search-receiver/:toUser/confirmation"
          component={ConfirmationTransferPage}
        />
        <PrivateRoute
          path="/:username/status-transfer"
          component={StatusTransferPage}
        />
        <PrivateRoute
          exact
          path="/:username/profile"
          component={ProfileUserPage}
        />
        <PrivateRoute path="/:username/profile/info" component={PersonalInfo} />
        <PrivateRoute
          path="/:username/profile/password"
          component={ChangePasswordPage}
        />
        <PrivateRoute
          path="/:username/profile/phone-number"
          component={ManagePhoneNumber}
        />
        <PrivateRoute
          path="/:username/profile/change-pin"
          component={ChangePinPage}
        />
        <PrivateRoute
          path="/:username/profile/new-pin"
          component={NewPinPage}
        />
        <PrivateRoute
          path="/:username/profile/add-phone-number"
          component={AddPhoneNumberPage}
        />
        <PrivateRoute path="/:username/topup" component={TopupPage} />
        {/* START = USER PAGE */}
        {/* START = Admin Page */}
        <PrivateRoute exact path="/admin/dashboard" component={AdminHomePage} />
        <PrivateRoute path="/admin/user" component={AdminListUserPage} />
        {/* END = Admin Page */}
      </Switch>
    </Router>
  );
};

export default Routes;
