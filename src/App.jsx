import { useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";

function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleGoodButton = () => {
    setCount({ ...count, good: count.good + 1 });
  };

  const handleNeutralButton = () => {
    setCount({ ...count, neutral: count.neutral + 1 });
  };

  const handleBadButton = () => {
    setCount({ ...count, bad: count.bad + 1 });
  };

  const handleResetButton = () => {
    setCount({ ...count, bad: count.bad + 1 });
  };

  return (
    <>
      <Description />
      <Options name="good" hanleClick={handleGoodButton} />
      <p>{count.good}</p>
    </>
  );
}

export default App;
