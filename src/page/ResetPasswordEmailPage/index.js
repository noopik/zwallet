import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {
  AlertValidationForm,
  Button,
  Input,
  SidebarAuth,
} from '../../components';
import { patternEmail } from '../../utils';
import { customMedia } from "../../components/Layouting/BreakPoints";
import { forgotPasswordUser } from "../../config/Redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const ResetPasswordEmailPage = () => {
      const dispatch = useDispatch();
      const history = useHistory();
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.title = 'Zwallet | Reset Password';
  });

  useEffect(() => {
    const value = getValues();
    if (value.email) {
      setHandleDisabledButton(false);
    } else {
      setHandleDisabledButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('email')]);

  //   BUTTON ACTION HANDLING
  const onSubmit = (data) => {
     dispatch(forgotPasswordUser(data, history));
    // history.push('/createpin');
    return;
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
            To reset your password, you must type your e-mail and we <br />
            will send a link to your email <br />
            and you will be directed to the reset password screens. <br />
          </h6>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <Input
                icon="mail"
                type="text"
                id="mail"
                name="email"
                placeholder="Enter your e-mail"
                {...register('email', {
                  required: true,
                  pattern: patternEmail,
                })}
              />
              {errors.email && <AlertValidationForm message="Email invalid" />}
            </div>
            <Button
              primary
              disabled={handleDisabledButton}
              className="button-login"
            >
              Confirm
            </Button>
          </form>
        </div>
      </div>
    </Styles>
  );
};

export default ResetPasswordEmailPage;
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
