import React from "react";
import { Button, Cardwrapper, HeadingContent } from "../../components";
import { StyledPhone } from "./StyledPhone";

const AddPhoneNumberPage = () => {
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
        <div className="content-wrapper">
          <input
            type="text"
            className="input-dummy"
            placeholder="Enter Your Phone number"
          />
          <Button primary="primary" className="btn" onClick="" />
        </div>
      </StyledPhone>
    </Cardwrapper>
  );
};

export default AddPhoneNumberPage;
