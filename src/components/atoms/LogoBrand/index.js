import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const index = ({ primary }) => {
  return <Styles primary={primary}>Zwallet</Styles>;
};

index.propTypes = {
  primary: PropTypes.string,
};

export default index;

const Styles = styled.h1`
  background-color: yellow;
`;
