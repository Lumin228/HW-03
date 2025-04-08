import { useId, useState } from "react";

import './App.css'

function App() {

  const [inputValue, setInputValue] = useState({x: "", y: ""});

  const handleChange = (evt) => {
    setInputValue({...inputValue, x: evt.target.value});
  };
  const handleChanges = (evt) => {
    setInputValue({...inputValue, y: evt.target.value});
  };

  return (
    <div>
      <input type="text" value={inputValue.x} onChange={handleChange} />
      <p>{inputValue.x}</p>
      <input type="text" value={inputValue.y} onChange={handleChanges} />
      <p>{inputValue.y}</p>
    </div>
  );
}

export default App
