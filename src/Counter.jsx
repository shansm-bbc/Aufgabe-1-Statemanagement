import { useState } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [Count, setCount] = useState(10);

  function Increment() {
    setCount(Count + 1);
  }

  function Decrement() {
    setCount(Count - 1);
  }

  function Reset() {
    setCount(10);
  }

  return (
    <>
      <p>Count: {Count}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
}

export default Counter;
