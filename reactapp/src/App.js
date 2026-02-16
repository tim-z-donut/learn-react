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
        {/* <Counter></Counter> */}
      </header>
    </div>
  );
}

export default App;




export function Counter({init}) {
  // Define a function that updates a constant variable
  var init = parseInt(init || 0)
  const [count, setCount] =useState(init);
  // use Effect to clear a value after use to prevent glitching artifacts
    function incr() {
	    setCount((count+100));
    }
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
    <div className="Appl">
    <header className="App-header">
    <h1>Hi there: count is </h1>
    <p>{count}</p>
	  <button onClick={incr}>count + 100 < /button>
    </header>
    </div>
  )
}
