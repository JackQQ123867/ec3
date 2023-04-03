import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(prevState => prevState + 1);
  };

  return (
    <button onClick={clickHandler}>You have clicked {count} times.</button>
  );
}

export default Counter;
