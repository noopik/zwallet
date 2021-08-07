import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextTitleAuth = ({text}) => {
    return (
        <Styles>
            <h4 className="header">{text}</h4>
        </Styles>
    )
}

export default TextTitleAuth
const Styles = styled.div`
.header::text{
   
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #3A3D42;
}
`