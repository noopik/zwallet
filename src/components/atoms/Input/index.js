import { useField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ICEyeClose, ICEyeOpen } from '../../../assets';
import { colors } from '../../../utils';

const Input = (props) => {
  // const { ...rest } = props;
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
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 6L12 13L21 6"
          stroke="#A9A9A9"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 9V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V9"
          stroke="#A9A9A9"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="square"
          strokeLinejoin="round"
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
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    phone: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9994 16.9201V19.9201C22.0006 20.1986 21.9435 20.4743 21.832 20.7294C21.7204 20.9846 21.5567 21.2137 21.3515 21.402C21.1463 21.5902 20.904 21.7336 20.6402 21.8228C20.3764 21.912 20.0968 21.9452 19.8194 21.9201C16.7423 21.5857 13.7864 20.5342 11.1894 18.8501C8.77327 17.3148 6.72478 15.2663 5.18945 12.8501C3.49942 10.2413 2.44769 7.27109 2.11944 4.1801C2.09446 3.90356 2.12732 3.62486 2.21595 3.36172C2.30457 3.09859 2.44702 2.85679 2.63421 2.65172C2.82141 2.44665 3.04925 2.28281 3.30324 2.17062C3.55722 2.05843 3.83179 2.00036 4.10945 2.0001H7.10945C7.59475 1.99532 8.06524 2.16718 8.43321 2.48363C8.80118 2.80008 9.04152 3.23954 9.10944 3.7201C9.23607 4.68016 9.47089 5.62282 9.80945 6.5301C9.94399 6.88802 9.97311 7.27701 9.89335 7.65098C9.8136 8.02494 9.62831 8.36821 9.35944 8.6401L8.08945 9.9101C9.513 12.4136 11.5859 14.4865 14.0894 15.9101L15.3594 14.6401C15.6313 14.3712 15.9746 14.1859 16.3486 14.1062C16.7225 14.0264 17.1115 14.0556 17.4694 14.1901C18.3767 14.5286 19.3194 14.7635 20.2794 14.8901C20.7652 14.9586 21.2088 15.2033 21.526 15.5776C21.8431 15.9519 22.0116 16.4297 21.9994 16.9201Z"
          stroke="#A9A9A9"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  const [field] = useField(props);

  return (
    // <div {...rest}>
    <StyledInput className={props.className} active={props.active}>
      <label htmlFor={field.name}>{conditionalIcon[props.icon]}</label>
      {props.icon === 'phone' && <p className="idphone">+62</p>}
      <input {...field} {...props} />
      {props.actionShowPassword && (
        <div className="icon-wrapper" onClick={props.actionShowPassword}>
          {props.showPassword && <img src={ICEyeOpen} alt="ic open" />}
          {!props.showPassword && <img src={ICEyeClose} alt="ic open" />}
        </div>
      )}
    </StyledInput>
    // </div>
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
    width: 100% !important;
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
    border-bottom: 1.5px solid ${colors.primary};
    input {
      color: #3a3d42;
      font-weight: 700;
    }
  }

  .idphone {
    font-weight: 600;
    font-size: 16px;
    line-height: 23px;
    color: #3a3d42;
    margin: 0;
  }
`;
