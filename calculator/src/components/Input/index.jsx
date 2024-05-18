// src/Input.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, disabled, className }) => {
  return (
    <div className={className}>
      <input type="text" value={value} onChange={onChange} disabled={disabled} />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
