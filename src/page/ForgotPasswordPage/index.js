import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  AlertValidationForm,
  Button,
  Input,
  SidebarAuth,
} from '../../components';
import { customMedia } from "../../components/Layouting/BreakPoints";
import { resetPasswordUser } from "../../config/Redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const ForgotPasswordPage = () => {
      const dispatch = useDispatch();
      const history = useHistory();
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowVerifyPassword, setIsShowVerifyPassword] = useState(false);

 let { token } = useParams()

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = 'Zwallet | Create New Password';
  });

  useEffect(() => {
    const value = getValues();
    if (value.password && value.verifyPassword) {
      setHandleDisabledButton(false);
    } else {
      setHandleDisabledButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('password'), watch('verifyPassword')]);

  //   BUTTON ACTION HANDLING
  const onSubmit = (data) => {
    // CHECKING PASSWORD MUST BE SAME
    if (data.password !== data.verifyPassword) {
      alert('Tidak sama');
      return;
    }
    console.log("sama");
    const setPassword={newPassword: data.password}
   dispatch(resetPasswordUser(setPassword, token, history));

    return;
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <Input
                icon="lock"
                name="password"
                id="password"
                placeholder="Create new password"
                type={isShowNewPassword ? 'text' : 'password'}
                showPassword={isShowNewPassword}
                actionShowPassword={actionNewPassword}
                {...register('password', {
                  required: true,
                })}
              />
              {errors.password && (
                <AlertValidationForm message="Required Password" />
              )}
            </div>
            <div className="form-input">
              <Input
                icon="lock"
                type={isShowVerifyPassword ? 'text' : 'password'}
                showPassword={isShowVerifyPassword}
                actionShowPassword={actionVerifyPassword}
                name="verifyPassword"
                placeholder="Create new password"
                {...register('verifyPassword', {
                  required: true,
                })}
              />
              {errors.password && (
                <AlertValidationForm message="Email invalid" />
              )}
            </div>
            <Button
              type="submit"
              primary
              disabled={handleDisabledButton}
              className="button-login"
            >
              Reset password
            </Button>
          </form>
        </div>
      </div>
    </Styles>
  );
};

export default ForgotPasswordPage;

const Styles = styled.div`
  height: 100vh;
  display: flex;
  ${customMedia.lessThan("tablet")`
  flex-direction: column
  `}
  .row-side {
    width: 55%;
    ${customMedia.lessThan("tablet")`
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
    ${customMedia.lessThan("tablet")`
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
