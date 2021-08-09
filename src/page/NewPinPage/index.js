import React from 'react';
import {
  Button,
  Cardwrapper,
  FieldToken,
  HeadingContent,
} from '../../components';
import { StyleNewPin } from './StyleNewPin';

const NewPinPage = () => {
  return (
    <Cardwrapper>
      <StyleNewPin>
        <div className="text-wrapper">
          <HeadingContent>Change Pin</HeadingContent>
          <p className="text-regular">
            Type your new 6 digits security PIN to use in <br /> Zwallet..
          </p>
        </div>
        <div className="form-wrapper">
          <form action="">
            <div className="field-wrap">
              <FieldToken />
              {/* <FieldToken {...pin, ('pin', {required: true, maxlength:1})}  className="field-token"/> */}
              <FieldToken className="field-token" />
              <FieldToken className="field-token" />
              <FieldToken className="field-token" />
              <FieldToken className="field-token" />
            </div>
            <Button primary="primary" className="btn">
              Continue
            </Button>
          </form>
        </div>
      </StyleNewPin>
    </Cardwrapper>
  );
};

export default NewPinPage;
