// stories/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

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
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  disabled: false,
};

export default Button;
