import React, { useEffect, useState } from 'react';
import PinInput from 'react-pin-input';
import { Button, Cardwrapper, HeadingContent } from '../../components';
import { StylesPinChange } from './StylesPinChange';

const ChangePinPage = () => {
  const username = localStorage.getItem('username');

  const [handleDisabledButton, setHandleDisabledButton] = useState(true);

  const handleSubmit = () => {
    window.open('/username/profile/new-pin');
  };

  useEffect(() => {
    document.title = username | 'Add phone number';
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
        <form className="form-wrapper" action="">
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
                // setInputValuePin(value);
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
        </form>
      </StylesPinChange>
    </Cardwrapper>
  );
};

export default ChangePinPage;
