import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

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

Input.defaultProps = {
  disabled: false,
  className: '',
};

export default Input;
