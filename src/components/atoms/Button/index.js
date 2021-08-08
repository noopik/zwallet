<<<<<<< HEAD
import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const Button = ({children, className}) => {
    return (
        <Styles>
            <button className={className}>{children}</button>
        </Styles>
    )
}

export default Button
const Styles = styled.div`
button{
  
    width: 80%;
    background: #DADADA;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    height: 57px;
    border: none;
    color: #88888F;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
}
button:hover{
    background:#6379F4;
    color: white;
}

` 
=======
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// ICON CONDITIONAL
const IconArrowUp = (
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
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83333 13.9997L14 5.83301L22.1667 13.9997"
      stroke="#ffffff"
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const IconPlus = (
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
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.83333 14H22.1667"
      stroke="#ffffff"
      stroke-opacity="0.8"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Button = ({ buttonName, icon, onClick }) => {
  return (
    <StyledButton className="button-action" onClick={onClick}>
      {icon === 'top-up' && IconPlus}
      {icon === 'transfer' && IconArrowUp}
      {buttonName}
    </StyledButton>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  icon: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: 'Type of button',
  // icon: IconArrowUp,
};

export default Button;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 14px 27px;
  color: white;
  font: inherit;
  svg {
    margin-right: 1rem;
  }
  &:hover {
    opacity: 0.8;
  }
`;
>>>>>>> 17804fa3fdb61216cba354b4203822b3a0ec45a8
