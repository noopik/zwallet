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

const AddPhoneNumberPage = () => {
  const [handleDisabledButton, setHandleDisabledButton] = useState(true);

  // START = HANDLE FORM
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // history.push('/createpin');
    return;
  };
  // END = HANDLE FORM

  useEffect(() => {
    document.title = 'Username | Add phone number';
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

          <Button type="submit" primary="primary">
            Add Phone Number
          </Button>
        </form>
      </StyledPhone>
    </Cardwrapper>
  );
};

export default AddPhoneNumberPage;
