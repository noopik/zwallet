import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HeadingContent = ({ className, children }) => {
  return (
    <StyledHeadingContent className={className}>
      <h2 className="text-heading">{children}</h2>
    </StyledHeadingContent>
  );
};

HeadingContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

HeadingContent.defaultProps = {
  children: <p>'Title Hading'</p>,
};

export default HeadingContent;

const StyledHeadingContent = styled.div`
  margin-bottom: 25px;
`;
