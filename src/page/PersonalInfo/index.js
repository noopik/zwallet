import React from 'react';
import { Link } from 'react-router-dom';
import { Cardwrapper, HeadingContent, SmallCard } from '../../components';
import { Styledpersonal } from './Styledpersonal';

const PersonalInfo = () => {
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
          <p className="title">First Name</p>
          <h4 className="content">Robert</h4>
        </SmallCard>

        <SmallCard className="card-section">
          <p className="title">Last Name</p>
          <h4 className="content">Chandler</h4>
        </SmallCard>

        <SmallCard className="card-section">
          <p className="title">Verified e-mail</p>
          <h4 className="content">pewdiepie1@gmail.com</h4>
        </SmallCard>

        <SmallCard className="card-section contact">
          <div className="contact-wrapper">
            <p className="title">Phone number</p>
            <h4 className="content">+62 813 9387 7946</h4>
          </div>
          <div className="text-right">
            <Link to="" style={{ textDecoration: 'none' }}>
              <p className="manage">Manage</p>
            </Link>
          </div>
        </SmallCard>
      </Styledpersonal>
    </Cardwrapper>
  );
};

export default PersonalInfo;
