import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const index = ({ primary, light }) => {
  return (
    <Styles primary={primary} light={light}>
      <Link className="anchor" to="/">
        <h1>Zwallet</h1>
      </Link>
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
    color: ${({ light }) => (light ? '#ffffff' : '#6379f4')};
  }
  .anchor {
    text-decoration: none;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;
