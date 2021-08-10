import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldWithIcon = ({
  className,
  placeholder,
  icon,
  type,
  onChange,
  value,
  name,
}) => {
  return (
    <Styles>
      <i class={icon} aria-hidden="true"></i>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Styles>
  );
};

FieldWithIcon.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default FieldWithIcon;
const Styles = styled.div`
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  padding-top: 10px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  .fa {
    margin-right: 5px;
    color: #adadad;
    width: 20px;
    /* padding-top: 35px; */
    background-color: pink;
    display: flex;
    align-self: center;
    justify-content: c;
  }

  input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
  }
  .input-box.focus .fa {
    color: #6379f4;
  }
`;
