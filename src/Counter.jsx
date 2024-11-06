import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <span className="counterCount">{count}</span>
      <div className="counter-operations">
        <button
          onClick={() => {
            setCount(count - 1);
            // Have to Update and ReRender...useState comes into play.
          }}
          className="minus"
        >
          -
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
            // Have to Update and ReRender...useState comes into play.
          }}
          className="plus"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
