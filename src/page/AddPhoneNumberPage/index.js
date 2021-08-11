import React, { useEffect, useState } from 'react';
import {
  AlertValidationForm,
  Button,
  Cardwrapper,
  HeadingContent,
  Input,
} from '../../components';
import { StyledPhone } from './StyledPhone';
import { useForm } from 'react-hook-form';
import { patternNumber } from '../../utils';
import { updatePhoneNumber } from '../../config/Redux/actions/userActions';
import { ICTrash } from '../../assets';
import axios from 'axios';
import { toastify } from '../../../src/utils';

const AddPhoneNumberPage = () => {
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);
  const idUser = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const phone = localStorage.getItem('phone');

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
    updatePhoneNumber(idUser, data, token);
  };
  // END = HANDLE FORM

  useEffect(() => {
    document.title = username | 'Add phone number';
  });

  useEffect(() => {
    const value = getValues();
    if (value.phone) {
      setHandleDisabledButton(false);
    } else {
      setHandleDisabledButton(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch('phone')]);

  const actionTrash = () => {
    localStorage.removeItem('phone');
    const sendData = {
      phone: '',
    };
    axios
      .patch(`${process.env.REACT_APP_BACKEND_API}/${idUser}`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return toastify('Success', 'success');
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
        {!phone && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
              <Input
                icon="phone"
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                {...register('phone', {
                  required: true,
                  minLength: 11,
                  pattern: patternNumber,
                })}
              />
              {errors.phone && (
                <AlertValidationForm message="Number phone must be a number and min 11 character" />
              )}
            </div>
            <div className="btn-wrapper">
              <Button
                type="submit"
                primary="primary"
                className="btn"
                disabled={handleDisabledButton}
              >
                Add Phone Number
              </Button>
            </div>
          </form>
        )}
        {phone && (
          <Cardwrapper>
            <div className="manage-phone-exist">
              <div className="desc">
                <p className="text-heading">Primary</p>
                <p>{phone}</p>
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
