import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { Button, Cardwrapper, HeadingContent } from '../../components';
import { StylesPinChange } from './StylesPinChange';
import { toastify } from '../../utils';
import { dispatchTypes } from '../../utils/dispatchType';
import { useDispatch, useSelector } from 'react-redux';

const ChangePinPage = () => {
  const userState = useSelector((state) => state.userReducer.data);
  const { username, id: idUser } = userState;
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);
  const [inputValuePin, setInputValuePin] = useState();

  const handleSubmit = () => {
    const sendData = {
      pin: inputValuePin,
    };
    axios
      .patch(`${process.env.REACT_APP_BACKEND_API}/users/${idUser}`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        dispatch({ type: dispatchTypes.updatePinUser, payload: sendData });
        return toastify('Success Change Pin', 'success');
      })
      .catch((err) => {
        console.log(err.response);
        return toastify('Success Change Pin', 'success');
      });
    // window.open('/username/profile/new-pin');
  };

  useEffect(() => {
    document.title = username + ' | Add phone number';
  });
  // console.log(handleDisabledButton);

  return (
    <Cardwrapper>
      <StylesPinChange>
        <div className="text-wrapper">
          <HeadingContent>Change Pin</HeadingContent>
          <p className="text-regular">
            Enter your current 6 digits Zwallet PIN below to <br />
            continue to the next steps.
          </p>
        </div>
        <div className="form-wrapper">
          <div className="field-wrap">
            <PinInput
              length={6}
              initialValue=""
              onChange={(value, index) => {
                if (!value) {
                  setHandleDisabledButton(true);
                }
              }}
              type="numeric"
              inputMode="number"
              onComplete={(value, index) => {
                setInputValuePin(value);
                setHandleDisabledButton(false);
              }}
              autoSelect={true}
              regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
            />
          </div>
          <Button
            primary="primary"
            className="btn"
            onClick={handleSubmit}
            disabled={handleDisabledButton}
          >
            Continue
          </Button>
        </div>
      </StylesPinChange>
    </Cardwrapper>
  );
};

export default ChangePinPage;
