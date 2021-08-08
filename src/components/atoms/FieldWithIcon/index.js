import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'

const FieldWithIcon = ({className, placeholder, icon, type, onChange, value, name}) => {
    return (
        <Styles>
                <div className="input-box">
                    <i class={icon} aria-hidden="true"></i>
                    <input
                    type={type} 
                    className={className} 
                    
                    placeholder={placeholder}
                    onChange={onChange}/>
                </div>
        </Styles>
    )
}

export default FieldWithIcon
const Styles = styled.div`
.fa{
    margin-right: 5px;
    color: #adadad;
    width: 20px;
    padding-top: 35px;
}
.input-box{

    width: 80%;
    border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
    padding-top:10px;
    padding-bottom: 5px;
    display: flex;
    flex-direction: row;
}

.input-box input{
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
}
.input-box.focus .fa{
    color: #6379F4;
}

`