import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
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
  const idUser = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
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
  const onSubmit = (newPassword) => {
    const dataSend = { phone: newPassword };
    axios
      .patch(`${process.env.REACT_APP_BACKEND_API}/users/${idUser}`, dataSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toastify('Success update password', 'success');
      })
      .catch(() => {
        toastify('Failed to update password', 'failed');
      });
    // history.push('/createpin');
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
            onSubmit(values.confirmNewPassword);
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
