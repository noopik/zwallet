import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AlertValidationForm = ({ className, message }) => {
  return (
    <Styles className={className}>
      <InfoIcon className="alert" color="error" />
      <span>{message}</span>
    </Styles>
  );
};

AlertValidationForm.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
};
AlertValidationForm.defaultProps = {
  // className: PropTypes.string,
  message: 'Error message',
};

export default AlertValidationForm;

const Styles = styled.div`
  width: 100%;
  padding-top: 4px;
  margin: 0;
  .alert {
    margin: 0;
    padding: 0;
    margin-right: 4px;
    width: 1.2rem;
    height: 1.2rem;
  }
  span {
    color: red;
    font-size: 1rem;
  }
`;
