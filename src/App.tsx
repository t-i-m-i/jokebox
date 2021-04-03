import React, { useState, useEffect } from 'react';
import './App.css';

interface PropsSpinLock {
  digit: number;
  onChange: (digit: number) => void;
}

interface PropsReveal {
  isOpen: boolean;
}

function Reveal({ isOpen }: PropsReveal) {

  const [joke, setJoke] = useState<string>('');

  useEffect(() => {
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    }).then(res => res.json())
      .then(res => res && res.joke)
      .then(joke => setJoke(joke));
  }, []);

  return (
    <div>
      {isOpen && <p className="joke">{joke}</p>}
    </div>
  )
}

// const SpinLock: React.FC<Props> = ({ digit, onChange }) => {
function SpinLock({ digit, onChange }: PropsSpinLock) {
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
  const [numTries, setNumTries] = useState(0);

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
        setNumTries((currentNumTries) => currentNumTries + 1);
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
      { !isUnlocked && numTries > 0 && <p>You've tried to unlock the jokebox <b>{numTries}</b> times.</p>}
      { isUnlocked && <p>Jokebox unlocked! Here is your joke:</p>}
      <Reveal isOpen={isUnlocked} />
    </div>
  );
}

export default App;
