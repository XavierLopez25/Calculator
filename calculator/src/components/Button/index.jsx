import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonText, onClick }) => {
  return <button onClick={onClick}>{buttonText}</button>;
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
