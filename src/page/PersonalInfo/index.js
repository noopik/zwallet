import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Cardwrapper, HeadingContent, SmallCard } from '../../components';
import { Styledpersonal } from './Styledpersonal';

const PersonalInfo = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { username, phone, email } = userState;
  const history = useHistory();
  const role = localStorage.getItem('role');
  const onPhone = () => {
    if (role === 'ADMIN') {
      history.push(`/admin/profile/add-phone-number`);
    } else if (role === 'MEMBER') {
      history.push(`/profile/add-phone-number`);
    }
  };
  return (
    <Cardwrapper>
      <Styledpersonal>
        <div className="text-wrapper">
          <HeadingContent>Personal Information</HeadingContent>
          <p className="text-regular">
            We got your personal information from the sign <br />
            up proccess. If you want to make changes on <br />
            your information, contact our support.
          </p>
        </div>

        <SmallCard className="card-section-first">
          <p className="title">Name</p>
          <h4 className="content">{username}</h4>
        </SmallCard>

        <SmallCard className="card-section">
          <p className="title">Verified e-mail</p>
          <h4 className="content">{email}</h4>
        </SmallCard>

        <SmallCard className="card-section contact">
          <div className="contact-wrapper">
            <p className="title">Phone number</p>
            <h4 className="content">{phone}</h4>
          </div>
          <div className="text-right">
            <p className="manage" onClick={() => onPhone()}>
              Manage
            </p>
          </div>
        </SmallCard>
      </Styledpersonal>
    </Cardwrapper>
  );
};

export default PersonalInfo;
