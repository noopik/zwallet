import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../../utils';

const Button = ({
  children,
  icon,
  onClick,
  className,
  primary,
  disabled,
  type,
}) => {
  // ICON CONDITIONAL
  const Icon = {
    transfer: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 22.1663V5.83301"
          stroke="#ffffff"
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
          stroke="#ffffff"
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    'top-up': (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5.83301V22.1663"
          stroke="#ffffff"
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.83333 14H22.1667"
          stroke="#ffffff"
          strokeOpacity="0.8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  return (
    <StyledButton
      disabled={disabled}
      className={className}
      onClick={onClick}
      primary={primary}
    >
      {Icon[icon]}
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: 'Type of button',
  // icon: IconArrowUp,
};

export default Button;

const StyledButton = styled.button`
  /* background: rgba(255, 255, 255, 0.2); */
  width: 100%;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 27px;
  color: white;
  font: inherit;
  /* background-color: yellow; */
  background-color: ${({ primary }) => (primary ? colors.primary : '#ffffff')};
  background-color: ${({ disabled }) => disabled && '#DADADA'};
  color: ${({ disabled }) => disabled && '#88888F'};
  svg {
    margin-right: 1rem;
  }
  &:hover {
    opacity: ${({ disabled }) => (disabled ? '' : 0.8)};
  }
`;
