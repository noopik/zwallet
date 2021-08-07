import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const index = ({ primary }) => {
  return (
    <Styles primary={primary}>
      <h1>Zwallet</h1>
    </Styles>
  );
};

index.propTypes = {
  primary: PropTypes.string,
};

export default index;

const Styles = styled.h1`
  margin: 0;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    line-height: 40px;
    color: #6379f4;
  }
`;
