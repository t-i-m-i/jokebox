import React, { useState } from 'react';
import './App.css';

interface Props {
  digit: number;
  onChange: (digit: number) => void;
}

// const SpinLock: React.FC<Props> = ({ digit, onChange }) => {
function SpinLock({ digit, onChange }: Props) {
  const incrementDigit = (digit + 1) % 10;
  const decrementDigit = digit > 0 ? digit - 1 : 9;
  return (
    <div className="control">
      <button onClick={() => onChange(incrementDigit)}>+</button>
      { digit }
      <button onClick={() => onChange(decrementDigit)}>-</button>
    </div>
  )
}

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
        {
          digits.map((digit, idx) => <SpinLock key={idx} digit={digit} onChange={(newDigit: number) => setDigitAtIndex(newDigit, idx)} />)
        }
      </div>
      <button onClick={() => checkPassword()}>Press me to open</button>
      { !isUnlocked && <p>Sry, wrong code.</p> }
      { isUnlocked && <p>Unlocked!</p> }
    </div>
  );
}

export default App;
