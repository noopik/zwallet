import React from 'react'
import styled from 'styled-components'

const Pagecoba = () => {
    return (
        <Style>
            {/* Kalo mau styling ganti ini */}
            <h1 className="title">Haloo</h1>
        </Style>
    )
}

export default Pagecoba
const Style = styled.div`
    .title{
        background-color: aquamarine;
    }
`