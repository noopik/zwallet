import AttachFileIcon from '@material-ui/icons/AttachFile';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { AVAUserDefault, ICArrowLeft } from '../../assets';
import { Cardwrapper } from '../../components';
import { customMedia } from '../../components/Layouting/BreakPoints';
import { toastify } from '../../utils';
import { dispatchTypes } from '../../utils/dispatchType';

const ProfileUserPage = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { avatar, username, phone, id: userId } = userState;
  const history = useHistory();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const dispatch = useDispatch();
  const [updateAvatar, setUpdateAvatar] = useState();

  useEffect(() => {
    document.title = `Zwallet | ${username}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // START = LOGOUT ACTION
  const logoutAction = () => {
    dispatch({ type: dispatchTypes.setUserLogout });
    localStorage.removeItem('isAuth');
    history.push('/');
  };
  // END

  // START = LOGIC UPLOAD PHOTO
  const [changeAvatar, setChangeAvatar] = useState(false);
  const actionUpload = () => {
    changeAvatar ? setChangeAvatar(false) : setChangeAvatar(true);
  };
  const actionUpdateAvatar = () => {
    // console.log(updateAvatar);
    const formData = new FormData();
    formData.append('avatar', updateAvatar);
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
            localStorage.setItem('avatar', dataResponse.avatar);
            const sendData = {
              data: dataResponse,
            };
            dispatch({ type: dispatchTypes.setUserProfile, payload: sendData });
          })
          .catch((err) => {
            // console.log(err.response);
          });
      })
      .catch((err) => {
        // console.log(err.response);
        if (err.response.status === 400) {
          return toastify(err.response.data.message, 'error');
        }
        return toastify(err.response.data.message, 'error');
      });
  };
  const actionPreviewAvatar = (e) => {
    if (
      e.target.files[0].type === 'image/jpeg' ||
      e.target.files[0].type === 'image/jpg' ||
      e.target.files[0].type === 'image/png' ||
      e.target.files[0].type === 'image/gif'
    ) {
      if (e.target.files[0].size > 1048576 * 2) {
        toastify('max size file is 2mb', 'error');
      } else {
        setUpdateAvatar(e.target.files[0]);
      }
    } else {
      toastify('Only image is allowed', 'error');
    }
    // (e) => setUpdateAvatar(e.target.files[0])
  };
  // END = LOGIC UPLOAD PHOTO
  return (
    <Cardwrapper>
      <StyledProfileUserPage>
        <div className="content">
          <div className="header-avatar">
            <div className="edit-wrapper">
              <div className="avatar-wrapper">
                {!updateAvatar && (
                  <img src={avatar ? avatar : AVAUserDefault} alt={username} />
                )}
                {updateAvatar && (
                  <img src={URL.createObjectURL(updateAvatar)} alt="images" />
                )}
              </div>
            </div>
            <div className="edit-wrapper">
              <div className="action-upload" onClick={actionUpload}>
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
                    strokeOpacity="0.6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>Change Profile</div>
              </div>
              {changeAvatar && (
                <div className="form-input-avatar">
                  <input
                    type="file"
                    name="avatar"
                    onChange={(e) => actionPreviewAvatar(e)}
                  />
                  <div className="custom-row">
                    <AttachFileIcon />
                    <p>Select Image</p>
                  </div>
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="btn-upload"
                      onClick={actionUpdateAvatar}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="description-user">
            <h2 className="text-heading-bold">{username}</h2>
            <p className="text-regular">{phone}</p>
          </div>
          <div className="body">
            <div
              className="item-menu"
              onClick={() => {
                if (role === 'ADMIN') {
                  history.push(`/admin/profile/info`);
                } else if (role === 'MEMBER') {
                  history.push(`/profile/info`);
                }
              }}
            >
              <p className="text-heading">Personal Information</p>
              <img src={ICArrowLeft} alt="icon arrow" />
            </div>
            <div
              className="item-menu"
              onClick={() => {
                if (role === 'ADMIN') {
                  history.push(`/admin/profile/password`);
                } else if (role === 'MEMBER') {
                  history.push(`/profile/password`);
                }
              }}
            >
              <p className="text-heading">Change Password</p>
              <img src={ICArrowLeft} alt="icon arrow" />
            </div>
            <div
              className="item-menu"
              onClick={() => {
                if (role === 'ADMIN') {
                  history.push(`/admin/profile/change-pin`);
                } else if (role === 'MEMBER') {
                  history.push(`/profile/change-pin`);
                }
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
  position: relative;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header-avatar {
      .edit-wrapper {
        margin-top: 10px;
        display: flex;
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar-wrapper {
          width: 80px;
          height: 80px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        .action-upload {
          display: flex;
          justify-content: center;
          margin: 0;
          gap: 1rem;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 27px;
          color: #7a7886;
          &:hover {
            opacity: 0.5;
            cursor: pointer;
          }
        }
        .form-input-avatar {
          width: 250px;
          display: flex;
          gap: 1rem;
          flex-direction: column;
          .custom-row {
            display: flex;
            justify-content: center;
            &:hover {
              opacity: 0.5;
              cursor: pointer;
            }
          }
          .btn-wrapper {
            text-align: center;
            .btn-upload {
              border-radius: 25px;
              width: 100px;
              border: 0;
              padding: 6px 8px;
              &:hover {
                opacity: 0.5;
                cursor: pointer;
              }
            }
          }

          input[type='file'] {
            position: absolute;
            opacity: 0.001;
            border: 0;
            background-color: transparent;
            color: #7a7886;
          }
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
