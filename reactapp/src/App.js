import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const bacon = "Wendry Baconator"



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js {bacon}</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;




function Counter() {
  // Define a function that updates a constant variable
  const [count, setCount] =useState(0);
  // use Effect to clear a value after use to prevent glitching artifacts
  useEffect(function() {
    
    // main logic
    var timer = setInterval(function() {
      setCount(count+1);
      console.log("count =", count);

    }, 1000);
    // clear timer value before next component update
    return function() {
      clearInterval(timer);
    }
  })
  return (
    <div className="Counter">
    <h1>Hi there: count is </h1>
    <p>{count}</p>
  </div>
  )
}