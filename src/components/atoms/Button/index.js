import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Button = ({name, className}) => {
    return (
        <Styles>
            <button className={className}>{name}</button>
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
