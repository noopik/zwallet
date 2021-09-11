import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import {
  AlertValidationForm,
  Button,
  Input,
  SidebarAuth,
} from '../../components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { registerUser } from '../../config/Redux/actions/userActions';

const SignupPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const validate = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
  });
  //   START = TITLE DOCUMENT
  useEffect(() => {
    document.title = 'Zwallet | Sign Up';
  });
  //   END = TITLE DOCUMENT

  // START = ACTION SHOW PASSWORD
  const [isShowPassword, setIsShowPassword] = useState(false);

  const actionShowPassword = () => {
    isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
  };
  // END = ACTION SHOW PASSWORD

  return (
    <Styles>
      <div className="row-side">
        <SidebarAuth />
      </div>
      <div className="form-side">
        <div className="content">
          <h5>
            Start Accessing Banking Needs
            <br />
            With All Devices and All Platforms
            <br />
            With 30.000+ Users
            <br />
          </h5>
          <h6>
            Transfering money is eassier than ever, you can access <br />
            Zwallet wherever you are. Desktop, laptop, mobile phone?
            <br />
            we cover all of that for you!
          </h6>
          <Formik
            initialValues={{
              username: '',
              email: '',
              password: '',
            }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              // console.log(values);
              dispatch(registerUser(values, history));
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
                    icon="person"
                    type="text"
                    name="username"
                    label="username"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                  />
                  {errors.username && touched.username && errors.username && (
                    <AlertValidationForm message={errors.username} />
                  )}
                </div>
                <div className="form-input">
                  <Input
                    icon="mail"
                    type="text"
                    name="email"
                    label="email"
                    placeholder="Enter your e-mail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email && (
                    <AlertValidationForm message={errors.email} />
                  )}
                </div>
                <div className="form-input">
                  <Input
                    icon="lock"
                    type={isShowPassword ? 'text' : 'password'}
                    showPassword={isShowPassword}
                    actionShowPassword={actionShowPassword}
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
                <Button
                  primary
                  disabled={
                    !isValid ||
                    (Object.keys(touched).length === 0 &&
                      touched.constructor === Object)
                  }
                  className="button-login"
                  type="submit"
                >
                  Sign up
                </Button>
              </Form>
            )}
          </Formik>
          <div className="register-link">
            Already have an account ? Let's{' '}
            <Link
              to="/login"
              className="link"
              style={{ textDecoration: 'none' }}
            >
              {' '}
              Login{' '}
            </Link>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SignupPage;
const Styles = styled.div`
  height: 100vh;
  display: flex;
  ${customMedia.lessThan('tablet')`
  flex-direction: column
  `}
  /* background: orange; */

  .row-side {
    /* height: 100%; */
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
  .register-link {
    margin-top: 40px;
    display: flex;
    gap: 5px;
    justify-content: center;
    p {
      margin-bottom: 0;
    }
  }
`;
