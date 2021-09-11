import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  AlertValidationForm,
  Button,
  Cardwrapper,
  HeadingContent,
  Input,
} from '../../components';
import { toastify } from '../../utils';
import { StyledChange } from './StyledChange';

const ChangePasswordPage = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { username, id: idUser, email } = userState;
  const token = localStorage.getItem('token');
  const validate = Yup.object({
    currentPassword: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  // START = ACTION SHOW PASSWORD
  const [isShowPasswordOld, setIsShowPasswordOld] = useState(false);
  const [isShowPasswordNew, setIsShowPasswordNew] = useState(false);
  const [isShowPasswordNew2, setIsShowPasswordNew2] = useState(false);

  // END = ACTION SHOW PASSWORD
  useEffect(() => {
    document.title = username + ' Change password';
  });

  // START = SEND DATA FUNCTION
  const actionUpdatePassword = (currentPassword, newPassword) => {
    // START = Check Current Password
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/auth/login`, {
        email,
        password: currentPassword,
      })
      .then(() => {
        const dataSend = { phone: newPassword };
        axios
          .patch(
            `${process.env.REACT_APP_BACKEND_API}/users/${idUser}`,
            dataSend,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then(() => {
            toastify('Success update password', 'success');
          })
          .catch(() => {
            toastify('Failed to update password', 'failed');
          });
      })
      .catch((error) => {
        // console.log(error.response);
        if (error.response.data.message === 'password wrong') {
          return toastify('Current password is wrong!', 'error');
        }
        return toastify(error.response.data.message, 'error');
      });
    // END = Check Current Password
  };
  // END = SEND DATA FUNCTION

  return (
    <Cardwrapper>
      <StyledChange>
        <div className="text-wrapper">
          <HeadingContent>Change Password</HeadingContent>
          <p className="text-regular">
            You must enter your current password and then <br />
            type your new password twice.
          </p>
        </div>
        <Formik
          initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          }}
          validationSchema={validate}
          onSubmit={(values, { resetForm }) => {
            // console.log(values.confirmNewPassword);
            actionUpdatePassword(
              values.currentPassword,
              values.confirmNewPassword
            );
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
            <Form onSubmit={handleSubmit} className="form-field">
              <div className="form-input">
                <Input
                  icon="lock"
                  type={isShowPasswordOld ? 'text' : 'password'}
                  showPassword={isShowPasswordOld}
                  actionShowPassword={() => {
                    isShowPasswordOld
                      ? setIsShowPasswordOld(false)
                      : setIsShowPasswordOld(true);
                  }}
                  name="currentPassword"
                  placeholder="Current password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                />
                {errors.currentPassword &&
                  touched.currentPassword &&
                  errors.currentPassword && (
                    <AlertValidationForm message={errors.currentPassword} />
                  )}
              </div>
              <div className="form-input">
                <Input
                  icon="lock"
                  type={isShowPasswordNew ? 'text' : 'password'}
                  showPassword={isShowPasswordNew}
                  actionShowPassword={() => {
                    isShowPasswordNew
                      ? setIsShowPasswordNew(false)
                      : setIsShowPasswordNew(true);
                  }}
                  name="newPassword"
                  placeholder="New password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
                {errors.newPassword &&
                  touched.newPassword &&
                  errors.newPassword && (
                    <AlertValidationForm message={errors.newPassword} />
                  )}
              </div>
              <div className="form-input">
                <Input
                  icon="lock"
                  type={isShowPasswordNew2 ? 'text' : 'password'}
                  showPassword={isShowPasswordNew2}
                  actionShowPassword={() => {
                    isShowPasswordNew2
                      ? setIsShowPasswordNew2(false)
                      : setIsShowPasswordNew2(true);
                  }}
                  id="mail"
                  name="confirmNewPassword"
                  placeholder="Confirmation new password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmNewPassword}
                />
                {errors.confirmNewPassword &&
                  touched.confirmNewPassword &&
                  errors.confirmNewPassword && (
                    <AlertValidationForm message={errors.confirmNewPassword} />
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
                SAVE
              </Button>
            </Form>
          )}
        </Formik>
      </StyledChange>
    </Cardwrapper>
  );
};

export default ChangePasswordPage;
