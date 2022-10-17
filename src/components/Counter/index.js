// For class component

// import React from 'react';

// class Counter extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   render(){
//     return (
//       <>
//       <h1>{this.state.count}</h1>
//       <button onClick={() => this.setState({ count: this.state.count + 1})}>Add</button>
//       </>
//     );
//   }
// }


// For function component

import { useState } from "react";
import "./Counter.css"

const Counter = () => {
const [count, setCount] = useState(0);
const [text, setText] = useState("");

const addHandler = () => {
  setCount((prev) => prev + 1);
};

const decreaseButton = () => {
  setCount((prev) => prev - 1);
};

const changeText = () => {
  setText("Hello");
};

return (
  <div className="counter">
  <h1 id="header">{count}</h1>
  <button onClick={addHandler}>+</button>
  <br></br>
  <button onClick={decreaseButton}>-</button>
  <h2>{text}</h2>
  <button onClick={changeText}>Click Me</button>
  </div>
);

}
export default Counter;