import React, { useState } from 'react';
import './App.css';

const morseCode = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
  'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
  'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
  'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', '0': '-----', ' ': '/'
};

export default function App() {
  const [input, setInput] = useState('');
  const [morse, setMorse] = useState('');

  const convertToMorse = (text) => {
    return text.toUpperCase().split('').map(char => morseCode[char] || '').join(' ');
  };

  const handleChange = (event) => {
    const text = event.target.value;
    setInput(text);
    setMorse(convertToMorse(text));
  };

  return (
    <div className="App">
      <h1>Convertisseur</h1>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Ecrivez votre texte"
      />
      <div>
        <h2>Code Morse:</h2>
        <p>{morse}</p>
      </div>
    </div>
  );
}