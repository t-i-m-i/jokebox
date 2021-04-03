import React, { useState } from 'react';
import './App.css';

function App() {
  const password = [1,2,3];
  const [digits, setDigits] = useState([0,0,0]);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const setDigitsAtIndex = (digit: number, idx: number) => {
    setDigits((currentDigits) => [
      ...currentDigits.slice(0, idx),
      digit,
      ...currentDigits.slice(idx + 1)
    ])
  }

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
      <div>
        <input type="number" value={digits[0]} onChange={(event) => setDigitsAtIndex(parseInt(event.target.value), 0)} />
        <input type="number" value={digits[1]} onChange={(event) => setDigitsAtIndex(parseInt(event.target.value), 1)} />
        <input type="number" value={digits[2]} onChange={(event) => setDigitsAtIndex(parseInt(event.target.value), 2)} />
      </div>
      <button onClick={() => checkPassword()}>Press me to open</button>
      { isUnlocked && <p>Unlocked!</p> }
    </div>
  );
}

export default App;
