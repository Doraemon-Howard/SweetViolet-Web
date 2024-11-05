// src/components/Button.js
import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px', margin: '10px 0', cursor: 'pointer' }}>
      {label}
    </button>
  );
};

export default Button;
