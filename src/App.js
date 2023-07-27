import React, { useState } from 'react';
import './App.css';

function App() {

  const [num, numState] = useState(0);
  const [count, countState] = useState(8377);

  // TODO: Increases the Girokonto
  const increase = () => {
    countState(count + num);
  }
  // TODO: Decreases the Girokonto
  const decrease = () => {
    countState(count - num);
  }
  // TODO: The actual value in the Account
  const actualVal = (e) => {
    numState(Number(e.target.value));
  }


  return (
    <div className="App">
      <section>
      <div id="notch"></div>
      <h1>BANK-ING DiBa</h1>
      <p>Lang: EN - Location: Den Haag</p>
      <div>
        <h2>Your Balance</h2>
        <h3>{count}€</h3>
        <input type="number" id="numberValue" onChange={actualVal} /> <br />
        <button onClick={increase}>Einzahlen</button>
        <button onClick={decrease}>Auszahlen</button> 
      </div>
      <div id="app-bar">
        <span>BACK</span>
        <span>HOME</span>
        <span>LOGOUT</span>
      </div>
      </section>
    </div>
  );
}

export default App;


