import React from 'react';
import Button from './Button/Button';
import Input from './Input/Input';
import './App.scss';

function App() {
  const ref = React.useRef(null);

  const [title, setTitle] = React.useState('');

  const changeInputValue = (value) => setTitle(value);
  const onButtonClick = () => ref.current.focus();

  return (
    <div className="container">
      <h1>{title}</h1>
      <Input inputRef={ref} changeValue={changeInputValue} />
      <Button onClick={onButtonClick} />
    </div>
  );
}

export default App;
