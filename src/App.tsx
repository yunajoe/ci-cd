import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>증가하기</button>
      <button onClick={handleDecrease}>감소하기</button>
    </>
  );
}

export default App;
