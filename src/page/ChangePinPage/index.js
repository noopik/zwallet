import React from "react";
import {
  Button,
  Cardwrapper,
  FieldToken,
  HeadingContent,
} from "../../components";

import { StylesPinChange } from "./StylesPinChange";

const ChangePinPage = () => {
  const handleSubmit = () => {
    window.open("/username/profile/new-pin");
  };
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
          <form action="">
            <div className="field-wrap">
              <FieldToken />
              {/* <FieldToken {...pin, ('pin', {required: true, maxlength:1})}  className="field-token"/> */}
              <FieldToken className="field-token" />
              <FieldToken className="field-token" />
              <FieldToken className="field-token" />
              <FieldToken className="field-token" />
            </div>
            <Button primary="primary" className="btn" onClick={handleSubmit}>
              {" "}
              Continue{" "}
            </Button>
          </form>
        </div>
      </StylesPinChange>
    </Cardwrapper>
  );
};

export default ChangePinPage;
