import React from 'react'
import PropTypes from 'prop-types'

const ButtonCoba = ({children, className}) => {
    return (
        <div className={className}>
            {
                children
            }

        </div>
    )
}
//untuk props
ButtonCoba.propTypes = {
    children : PropTypes.string
}                                                                                                                                                                            
export default ButtonCoba
