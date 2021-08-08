import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const SmallCard = ({className, children}) => {
    return (
        <StyledSmallCard className={className}>
          {children}
        </StyledSmallCard>
    )
}
SmallCard.prototype = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string
}

export default SmallCard
const StyledSmallCard = styled.div`
background: white;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
border-radius: 10px;

`
