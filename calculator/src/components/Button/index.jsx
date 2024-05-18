// src/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick, className, disabled }) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
