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
import AdminPrivateRoute from "./AdminPrivateRoute";
import MemberPrivateRoute from './MemberPrivateRoute';
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
        {/* START = Admin Page */}
        <AdminPrivateRoute
          exact
          path="/admin/dashboard"
          component={AdminHomePage}
        />
        <AdminPrivateRoute path="/admin/user" component={AdminListUserPage} />
        {/* END = Admin Page */}
        {/* START = USER PAGE */}

        <MemberPrivateRoute path="/dashboard" component={Homepage} />
        <MemberPrivateRoute path="/history" component={HistoryPage} />
        <MemberPrivateRoute path="/topup" component={TopupPage} />
        <MemberPrivateRoute
          exact
          path="/search-receiver"
          component={SearchReceiverPage}
        />
        <MemberPrivateRoute
          exact
          path="/search-receiver/:toUser"
          component={UserReceiverPage}
        />

        <MemberPrivateRoute
          path="/search-receiver/:toUser/confirmation"
          component={ConfirmationTransferPage}
        />
        <MemberPrivateRoute
          path="/status-transfer"
          component={StatusTransferPage}
        />
        <MemberPrivateRoute exact path="/profile" component={ProfileUserPage} />
        <MemberPrivateRoute path="/profile/info" component={PersonalInfo} />
        <MemberPrivateRoute
          path="/profile/password"
          component={ChangePasswordPage}
        />
        <MemberPrivateRoute
          path="/profile/phone-number"
          component={ManagePhoneNumber}
        />
        <MemberPrivateRoute
          path="/profile/change-pin"
          component={ChangePinPage}
        />
        <MemberPrivateRoute path="/profile/new-pin" component={NewPinPage} />
        <MemberPrivateRoute
          path="/profile/add-phone-number"
          component={AddPhoneNumberPage}
        />
        <AdminPrivateRoute
          exact
          path="/admin/profile"
          component={ProfileUserPage}
        />
        <AdminPrivateRoute
          path="/admin/profile/info"
          component={PersonalInfo}
        />
        <AdminPrivateRoute
          path="/admin/profile/password"
          component={ChangePasswordPage}
        />
        <AdminPrivateRoute
          path="/admin/profile/phone-number"
          component={ManagePhoneNumber}
        />
        <AdminPrivateRoute
          path="/admin/profile/change-pin"
          component={ChangePinPage}
        />
        <AdminPrivateRoute
          path="/admin/profile/new-pin"
          component={NewPinPage}
        />
        <AdminPrivateRoute
          path="/admin/profile/add-phone-number"
          component={AddPhoneNumberPage}
        />

        {/* START = USER PAGE */}
      </Switch>
    </Router>
  );
};

export default Routes;
