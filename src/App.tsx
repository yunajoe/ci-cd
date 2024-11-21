import { useState } from "react";

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
      <button onClick={handleIncrease}>증가버튼</button>
      <button onClick={handleDecrease}>감소버튼</button>
    </>
  );
}

export default App;
