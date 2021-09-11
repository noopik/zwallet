import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Cardwrapper = ({ children, className }) => {
  return (
    <StyledCardWrapper className={className}>{children}</StyledCardWrapper>
  );
};

Cardwrapper.propTypes = {
  className: PropTypes.string,
};

export default Cardwrapper;

const StyledCardWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 25px;
`;
