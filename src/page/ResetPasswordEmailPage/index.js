import { Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as Yup from 'yup';
import {
  AlertValidationForm,
  Button,
  Input,
  SidebarAuth,
} from '../../components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { forgotPasswordUser } from '../../config/Redux/actions/userActions';

const ResetPasswordEmailPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
  });

  useEffect(() => {
    document.title = `Zwallet | Reset Password`;
  });

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
            To reset your password, you must type your e-mail and we <br />
            will send a link to your email <br />
            and you will be directed to the reset password screens. <br />
          </h6>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              // console.log(values);
              dispatch(forgotPasswordUser(values, history));
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
            }) => (
              <Form onSubmit={handleSubmit}>
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
                  {errors.email && touched.email && (
                    <AlertValidationForm message={errors.email} />
                  )}
                </div>
                <Button primary className="button-login">
                  Confirm
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Styles>
  );
};

export default ResetPasswordEmailPage;
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
