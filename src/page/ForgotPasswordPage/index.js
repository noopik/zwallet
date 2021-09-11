import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import {
  AlertValidationForm,
  Button,
  Input,
  SidebarAuth,
} from '../../components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { resetPasswordUser } from '../../config/Redux/actions/userActions';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowVerifyPassword, setIsShowVerifyPassword] = useState(false);
  const validate = Yup.object({
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });
  let { token } = useParams();

  useEffect(() => {
    document.title = 'Zwallet | Create New Password';
  });

  // ACTION SHOW PASSWORD
  const actionNewPassword = () => {
    isShowNewPassword
      ? setIsShowNewPassword(false)
      : setIsShowNewPassword(true);
  };
  const actionVerifyPassword = () => {
    isShowVerifyPassword
      ? setIsShowVerifyPassword(false)
      : setIsShowVerifyPassword(true);
  };

  return (
    <Styles>
      <div className="row-side">
        <SidebarAuth />
      </div>
      <div className="form-side">
        <div className="content">
          <h5>
            Did You Forgot Your Password? <br />
            Don’t Worry, You Can Reset Your <br />
            Password In a Minutes. <br />
          </h5>
          <h6>
            Now you can create a new password for your Zwallet <br />
            account. Type your password twice so we can confirm your <br />
            new passsword.
          </h6>
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              // console.log(values);
              const setPassword = { newPassword: values.password };
              dispatch(resetPasswordUser(setPassword, token, history));
              resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isValid,
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-input">
                  <Input
                    icon="lock"
                    type={isShowNewPassword ? 'text' : 'password'}
                    showPassword={isShowNewPassword}
                    actionShowPassword={actionNewPassword}
                    label="password"
                    name="password"
                    placeholder="Create your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.password && touched.password && errors.password && (
                    <AlertValidationForm message={errors.password} />
                  )}
                </div>
                <div className="form-input">
                  <Input
                    icon="lock"
                    type={isShowVerifyPassword ? 'text' : 'password'}
                    showPassword={isShowVerifyPassword}
                    actionShowPassword={actionVerifyPassword}
                    label="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword && (
                      <AlertValidationForm message={errors.confirmPassword} />
                    )}
                </div>
                <Button
                  type="submit"
                  primary
                  disabled={
                    !isValid ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                  className="button-login"
                >
                  Reset password
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Styles>
  );
};

export default ForgotPasswordPage;

const Styles = styled.div`
  height: 100vh;
  display: flex;
  ${customMedia.lessThan('tablet')`
  flex-direction: column
  `}
  .row-side {
    width: 55%;
    ${customMedia.lessThan('tablet')`
 width: 100%;
  `}
  }
  .sidebar {
    width: 100%;
  }
  .form-side {
    /* width: 50%; */
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${customMedia.lessThan('tablet')`
 width: 100%;
  `}
    .content {
      width: 80%;
      h5 {
        font-family: Nunito Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #3a3d42;
      }
      h6 {
        font-style: normal;
        margin-bottom: 0;
        margin-top: 30px;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        color: rgba(58, 61, 66, 0.6);
      }
      form {
        margin-top: 60px;
        .form-input {
          width: 100%;
          margin-bottom: 40px;
        }
        .forgot-pass {
          margin-top: 20px;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          text-align: right;
          &:hover {
            opacity: 0.5;
          }
        }
        .button-login {
          margin-top: 80px;
        }
      }
    }
  }
`;
