// src/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
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
