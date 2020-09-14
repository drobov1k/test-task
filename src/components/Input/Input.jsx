import React from 'react';
import './Input.scss';

function Input(props) {
  const [inputValue, setInputValue] = React.useState('');
  const { changeValue, inputRef } = props;

  const changeInputValue = (e) => {
    const { value } = e.target;

    setInputValue(value);
    changeValue(value);
  };

  return (
    <div>
      <input
        ref={inputRef}
        className="input-row"
        type="text"
        value={inputValue}
        onChange={changeInputValue}
      />
    </div>
  );
}

export default Input;
