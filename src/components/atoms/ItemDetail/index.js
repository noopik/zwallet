import React from 'react';
import styled from 'styled-components';
import Cardwrapper from '../CardWrapper';
import PropTypes from 'prop-types';

const ItemDetail = ({ title, description }) => {
  return (
    <StyledDetail className="detail-item">
      <p className="text-regular">{title}</p>
      <p className="text-heading-bold">{description}</p>
    </StyledDetail>
  );
};

ItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ItemDetail.defaultProps = {
  title: 'Title item',
  description: 'Description here',
};

export default ItemDetail;

const StyledDetail = styled(Cardwrapper)`
  padding: 15px;
`;
