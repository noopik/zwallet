import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cardwrapper = ({ children }) => {
  return <StyledCardWrapper>{children}</StyledCardWrapper>;
};

Cardwrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Cardwrapper;

const StyledCardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
`;
