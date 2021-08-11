import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  AlertValidationForm,
  Button,
  Input,
  SidebarAuth,
} from '../../components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { patternEmail } from '../../utils';
import { registerUser } from '../../config/Redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);

  //   START = TITLE DOCUMENT
  useEffect(() => {
    document.title = 'Zwallet | Sign Up';
  });
  //   END = TITLE DOCUMENT
  // START = HANDLE FORM
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    dispatch(registerUser(data, history));
    // history.push('/createpin');
  };
  // END = HANDLE FORM

  //   START = HANDLE INPUT ACTIVE
  const [inputActive, setInputActive] = useState(false);
  //   END = HANDLE INPUT ACTIVE

  //   START = HANDLE BUTTON DISABLE AND INPUT ACTIVE
  useEffect(() => {
    const value = getValues();
    // Button Active
    if (value.email && value.password && value.username) {
      setHandleDisabledButton(false);
    } else {
      setHandleDisabledButton(true);
    }
    // INPUT ACTIVE
    if (value.email || value.password || value.username) {
      setInputActive(true);
    } else {
      setInputActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('username'), watch('email'), watch('password')]);
  //   END =HANDLE BUTTON DISABLE

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <Input
                icon="person"
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className={inputActive && 'active'}
                {...register('username', {
                  required: true,
                })}
              />
              {errors.username && (
                <AlertValidationForm message="Required Username" />
              )}
            </div>
            <div className="form-input">
              <Input
                icon="mail"
                type="text"
                id="mail"
                name="email"
                placeholder="Enter your e-mail"
                className={inputActive && 'active'}
                {...register('email', {
                  required: true,
                  pattern: patternEmail,
                })}
              />
              {errors.email && <AlertValidationForm message="Email invalid" />}
            </div>
            <div className="form-input">
              <Input
                icon="lock"
                type={isShowPassword ? 'text' : 'password'}
                showPassword={isShowPassword}
                actionShowPassword={actionShowPassword}
                id="pass"
                name="password"
                placeholder="Create your password"
                className={inputActive && 'active'}
                {...register('password', {
                  required: true,
                })}
              />
              {errors.password && (
                <AlertValidationForm message="Required Password" />
              )}
            </div>
            <Button
              primary
              disabled={handleDisabledButton}
              className="button-login"
              type="submit"
            >
              Sign up
            </Button>
          </form>
          <div className="register-link">
            Already have an account ? Let's{' '}
            <Link
              to="/login"
              classname="link"
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
