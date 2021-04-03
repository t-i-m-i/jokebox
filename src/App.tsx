import React, { useState } from 'react';
import './App.css';

function App() {
  const password = [1,2,3];
  const [digits, setDigits] = useState([0,0,0]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const setDigitAtIndex = (digit: number, idx: number) => {
    setDigits((currentDigits) => [
      ...currentDigits.slice(0, idx),
      digit,
      ...currentDigits.slice(idx + 1)
    ])
  }

  const increment = (idx: number) => {
    const newDigit = (digits[idx] + 1) % 10;
    setDigitAtIndex(newDigit, idx);
  };

  const decrement = (idx: number) => {
    const newDigit = digits[idx] > 0 ? digits[idx] - 1 : 9;
    setDigitAtIndex(newDigit, idx);
  };

  const checkPassword = () => {
    for (let i = 0; i < password.length; i++) {
      if (password[i] !== digits[i]) {
        return;
      }
    }
    setIsUnlocked(true);
  }

  return (
    <div>
      <h1>Unlockme please 🙏🏻 to get the joke 😁</h1>
      <div className="doorlock">
        <div className="control">
          <button onClick={() => increment(0)}>+</button>
          { digits[0] }
          <button onClick={() => decrement(0)}>-</button>
        </div>
        <div className="control">
          <button onClick={() => increment(1)}>+</button>
          { digits[1] }
          <button onClick={() => decrement(1)}>-</button>
        </div>
        <div className="control">
          <button onClick={() => increment(2)}>+</button>
          { digits[2] }
          <button onClick={() => decrement(2)}>-</button>
        </div>
        {/* <input type="number" value={digits[0]} onChange={(event) => setDigitAtIndex(parseInt(event.target.value), 0)} />
        <input type="number" value={digits[1]} onChange={(event) => setDigitAtIndex(parseInt(event.target.value), 1)} />
        <input type="number" value={digits[2]} onChange={(event) => setDigitAtIndex(parseInt(event.target.value), 2)} /> */}
      </div>
      <button onClick={() => checkPassword()}>Press me to open</button>
      { !isUnlocked && <p>Sry, wrong code.</p> }
      { isUnlocked && <p>Unlocked!</p> }
    </div>
  );
}

export default App;
