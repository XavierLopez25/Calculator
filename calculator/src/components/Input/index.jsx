import React from 'react';

const Input = ({ label, labelId, value, onChange, disabled, type = 'text' }) => {
  return (
    <div>
      {label && <label htmlFor={labelId}>{label}</label>}
      <input
        id={labelId}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={!onChange}
      />
    </div>
  );
};

export default Input;
