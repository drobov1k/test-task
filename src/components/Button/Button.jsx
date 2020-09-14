import React from 'react';
import './Button.scss';

function Button(props) {
  const { onClick } = props;

  return (
    <button className="btn-confirm" onClick={onClick}>
      Focus!
    </button>
  );
}

export default Button;
