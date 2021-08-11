import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ICArrowLeft } from '../../assets';
import { Cardwrapper } from '../../components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { toastify } from '../../utils';

const ProfileUserPage = () => {
  const history = useHistory();
  const avatar = localStorage.getItem('avatar');
  const username = localStorage.getItem('username');
  const phone = localStorage.getItem('phone');
  const userId = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  useEffect(() => {
    document.title = `Zwallet | ${username}`;
  }, [avatar]);

  // START = HANDLE FORM
  const {
    register,
    // handleSubmit,
    watch,
    getValues,
    // formState: { errors },
  } = useForm();

  const updateAvatar = (data) => {
    const changeImage = getValues('avatar')[0];
    const formData = new FormData();
    formData.append('avatar', changeImage);
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_API}/users/avatar/${userId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((result) => {
        toastify('Success update image', 'info');
        axios
          .get(`${process.env.REACT_APP_BACKEND_API}/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const dataResponse = res.data.data[0];
            // console.log(dataResponse);
            return localStorage.setItem('avatar', dataResponse.avatar);
          })
          .catch((err) => {
            console.log(err.response);
          });
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 400) {
          return null;
        }
        return toastify(err.response.data.message, 'error');
      });
  };

  useEffect(() => {
    if (getValues('avatar')) {
      // updateAvatar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('avatar')]);
  // END = HANDLE FORM

  // START = LOGOUT ACTION
  const logoutAction = () => {
    localStorage.removeItem('isAuth');
    history.push('/');
  };
  // END
  return (
    <Cardwrapper>
      <StyledProfileUserPage>
        <div className="content">
          <div className="header-avatar">
            <div className="avatar-wrapper">
              <img src={avatar} alt="user" />
            </div>
            <form className="edit-wrapper">
              <svg
                className="icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
                  stroke="#A9A9A9"
                  stroke-opacity="0.6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <input type="file" {...register('avatar')} />
            </form>
          </div>
          <div className="description-user">
            <h2 className="text-heading-bold">{username}</h2>
            <p className="text-regular">{phone}</p>
          </div>
          <div className="body">
            <div
              className="item-menu"
              onClick={() => {
                history.push(`/${username}/profile/info`);
              }}
            >
              <p className="text-heading">Personal Information</p>
              <img src={ICArrowLeft} alt="icon arrow" />
            </div>
            <div
              className="item-menu"
              onClick={() => {
                history.push(`/${username}/profile/password`);
              }}
            >
              <p className="text-heading">Change Password</p>
              <img src={ICArrowLeft} alt="icon arrow" />
            </div>
            <div
              className="item-menu"
              onClick={() => {
                history.push(`/${username}/profile/change-pin`);
              }}
            >
              <p className="text-heading">Change PIN</p>
              <img src={ICArrowLeft} alt="icon arrow" />
            </div>
            <div className="item-menu" onClick={logoutAction}>
              <p className="text-heading">Logout</p>
            </div>
          </div>
        </div>
      </StyledProfileUserPage>
    </Cardwrapper>
  );
};

export default ProfileUserPage;

const StyledProfileUserPage = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header-avatar {
      .avatar-wrapper {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .edit-wrapper {
        margin-top: 10px;
        display: flex;
        gap: 1rem;
        &:hover {
          opacity: 0.5;
          cursor: pointer;
        }
        p {
          margin-bottom: 0;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 27px;
          text-align: center;
          color: #7a7886;
        }
      }
    }
    .description-user {
      margin-top: 1rem;
      .text-heading-bold {
        margin-bottom: 0;
      }
      .text-regular {
        margin-bottom: 0;
        text-align: center;
      }
    }
    .body {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      gap: 20px;
      .item-menu {
        padding: 18px 20px;
        display: flex;
        background: #e5e8ed;
        border-radius: 10px;
        width: 50%;
        ${customMedia.lessThan('1200px')`
          width: 80%; 
        `}
        justify-content: space-between;
        &:hover {
          opacity: 0.7;
          cursor: pointer;
        }
      }
    }
  }
`;
