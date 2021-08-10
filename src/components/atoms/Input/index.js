import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ICEyeClose, ICEyeOpen } from '../../../assets';
import { colors } from '../../../utils';

const Input = ({
  type,
  value,
  onChange,
  id,
  placeholder,
  icon,
  className,
  active,
  name,
  showPassword,
  actionShowPassword,
  ...props
}) => {
  const conditionalIcon = {
    pen: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 3.0003C17.2626 2.73766 17.5744 2.52932 17.9176 2.38718C18.2608 2.24503 18.6286 2.17188 19 2.17188C19.3714 2.17187 19.7392 2.24503 20.0824 2.38718C20.4256 2.52932 20.7374 2.73766 21 3.0003C21.2626 3.26295 21.471 3.57475 21.6131 3.91791C21.7553 4.26107 21.8284 4.62887 21.8284 5.0003C21.8284 5.37174 21.7553 5.73953 21.6131 6.08269C21.471 6.42585 21.2626 6.73766 21 7.0003L7.5 20.5003L2 22.0003L3.5 16.5003L17 3.0003Z"
          stroke="#A9A9A9"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    mail: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 5H2V19H22V5Z"
          stroke="#A9A9A9"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3 6L12 13L21 6"
          stroke="#A9A9A9"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    lock: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H5V21H19V11Z"
          stroke="#A9A9A9"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9"
          stroke="#A9A9A9"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </svg>
    ),
    person: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 20C4 17 8 17 10 15C11 14 8 14 8 9C8 5.667 9.333 4 12 4C14.667 4 16 5.667 16 9C16 14 13 14 14 15C16 17 20 17 20 20"
          stroke="#A9A9A9"
          stroke-opacity="0.6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  };

  return (
    <StyledInput className={className} active={active}>
      <label for={id}>{conditionalIcon[icon]}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {actionShowPassword && (
        <div className="icon-wrapper" onClick={actionShowPassword}>
          {showPassword && <img src={ICEyeOpen} alt="ic open" />}
          {!showPassword && <img src={ICEyeClose} alt="ic open" />}
        </div>
      )}
    </StyledInput>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.string,
};

Input.defaultProps = {
  placeholder: 'Type in here!',
};

export default Input;

const StyledInput = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  padding-bottom: 11px;
  box-sizing: content-box;
  border-bottom: 1.5px solid
    ${({ active }) => (active ? colors.primary : 'rgba(169, 169, 169, 0.6)')};

  /* Conditional Rendering */
  label {
    svg {
      path {
        stroke: ${({ active }) => active && colors.primary};
      }
    }
  }
  input {
    width: 100%;
    height: 23px;
    border: none;
    outline: none;
    /* color: ${({ active }) => active && '#3A3D42'}; */
    font-weight: ${({ active }) => active && '700'};
    /* background-color: red; */
  }
  .icon-wrapper {
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }

  &.active {
    border-bottom: 1.5px solid ${colors.primary} input {
      /* color: #3a3d42; */
      font-weight: 700;
    }
  }
`;
