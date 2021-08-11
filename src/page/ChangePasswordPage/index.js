import React from 'react';
import {
  Cardwrapper,
  HeadingContent,
  Button,
  AlertValidationForm,
  Input,
} from '../../components';
import { StyledChange } from './StyledChange';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useEffect } from 'react';

const ChangePasswordPage = () => {
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);

  // START = HANDLE FORM
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // history.push('/createpin');
    return;
  };
  useEffect(() => {
    const value = getValues();
    if (value.oldPassword && value.newPassword && value.repeatNewPassword) {
      setHandleDisabledButton(false);
    } else {
      setHandleDisabledButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('oldPassword'), watch('newPassword'), watch('repeatNewPassword')]);
  // END = HANDLE FORM
  // START = ACTION SHOW PASSWORD
  const [isShowPasswordOld, setIsShowPasswordOld] = useState(false);
  const [isShowPasswordNew, setIsShowPasswordNew] = useState(false);
  const [isShowPasswordNew2, setIsShowPasswordNew2] = useState(false);

  // END = ACTION SHOW PASSWORD
  useEffect(() => {
    document.title = 'Username | Change password';
  });

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
        <form className="form-field" onSubmit={handleSubmit(onSubmit)}>
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
              id="mail"
              name="password"
              placeholder="Enter your password"
              {...register('oldPassword', {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && (
              <AlertValidationForm message="Password invalid" />
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
              id="mail"
              name="password"
              placeholder="Enter your password"
              {...register('newPassword', {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && (
              <AlertValidationForm message="Password invalid" />
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
              name="password"
              placeholder="Enter your password"
              {...register('repeatNewPassword', {
                required: true,
                minLength: 6,
              })}
            />
            {errors.password && (
              <AlertValidationForm message="Password invalid" />
            )}
          </div>
          <Button
            primary
            disabled={handleDisabledButton}
            className="button-login"
          >
            LOGIN
          </Button>
        </form>
      </StyledChange>
    </Cardwrapper>
  );
};

export default ChangePasswordPage;