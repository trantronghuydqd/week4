import React, { useState } from 'react';

function App() {
  const [diceRolls, setDiceRolls] = useState([]);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceRolls(prevRolls => [...prevRolls, randomNumber]);
  };

  return (
    <div>
      <button onClick={rollDice}>Roll Dice</button>
      <ul>
        {diceRolls.map((roll, index) => (
          <li key={index}>{roll}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
