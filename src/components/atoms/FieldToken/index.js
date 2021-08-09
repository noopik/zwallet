import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const FieldToken = ({className, type, value, name, change}) => {
    return (
        <Styles className={className}>
            <input 
            type={type}
            value={value}
            name={name}
            className="input-token"
            onChange={change}/>
        </Styles>
    )
}
export default FieldToken
FieldToken.propTypes={
    value : PropTypes.number.isRequired
}
const Styles = styled.div`

.input-token{
    width: 53px;
    height: 65px;
    margin-top: 50px;
    border: 1px solid rgba(169, 169, 169, 0.6);
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;
    text-align: center;
    outline:none;
}

`