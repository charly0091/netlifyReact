import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export const Button = (props) => {
    return (
        <button className={props.className} onClick={props.handleClick} >{props.text} </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func
}