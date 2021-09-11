import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { phoneRegExp, toastify } from '../../../src/utils';
import { ICTrash } from '../../assets';
import {
  AlertValidationForm,
  Button,
  Cardwrapper,
  HeadingContent,
  Input,
} from '../../components';
import { updatePhoneNumber } from '../../config/Redux/actions/userActions';
import { StyledPhone } from './StyledPhone';

const AddPhoneNumberPage = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { username, phone, id: idUser } = userState;
  const history = useHistory();
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const [userPhone, setUserPhone] = useState(phone);
  const validate = Yup.object({
    phone: Yup.string()
      .required('Phone number is required')
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(9, 'Password must be at least 11 charaters')
      .max(11, 'Password must be less than 13 charaters')
      .nullable(),
  });

  useEffect(() => {
    document.title = username + ' | Add phone number';
  });

  const actionTrash = () => {
    const sendData = {
      phone: '',
    };
    axios
      .patch(`${process.env.REACT_APP_BACKEND_API}/users/${idUser}`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        localStorage.removeItem('phone');
        setUserPhone('');
        return toastify('Success delete phone number', 'success');
      })
      .catch((err) => {
        console.log(err.response);
        return toastify(err.response.data.message, 'error');
      });
  };
  return (
    <Cardwrapper>
      <StyledPhone>
        <div className="text-wrapper">
          <HeadingContent>Add Phone Number</HeadingContent>
          <p className="text-regular">
            Add at least one phone number for the transfer <br />
            ID so you can start transfering your money to <br /> another user.
          </p>
        </div>
        {!userPhone && (
          <Formik
            initialValues={{
              phone: phone,
            }}
            validationSchema={validate}
            onSubmit={(values, { resetForm }) => {
              const sendDataPhone = {
                phone: `62${values.phone}`,
              };
              // console.log('sendDataPhone', sendDataPhone);
              updatePhoneNumber(idUser, sendDataPhone, token, history, role);
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
            }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form-input">
                  <Input
                    icon="phone"
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />
                  {errors.phone && touched.phone && errors.phone && (
                    <AlertValidationForm message={errors.phone} />
                  )}
                </div>
                <div className="btn-wrapper">
                  <Button
                    type="submit"
                    primary="primary"
                    className="btn"
                    // disabled={handleDisabledButton}
                  >
                    Add Phone Number
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
        {userPhone && (
          <Cardwrapper>
            <div className="manage-phone-exist">
              <div className="desc">
                <p className="text-heading">Primary</p>
                <p>{userPhone}</p>
              </div>
              <div className="icon-wrappper" onClick={actionTrash}>
                <img src={ICTrash} alt="icon" />
              </div>
            </div>
          </Cardwrapper>
        )}
      </StyledPhone>
    </Cardwrapper>
  );
};

export default AddPhoneNumberPage;
