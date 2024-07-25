import { useState, useEffect } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notifications/Notification";

function App() {
  const [count, setCount] = useState(() => {
    const savedObject = window.localStorage.getItem("feedbacks");
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("feedbacks", JSON.stringify(count));
  }, [count.good, count.bad, count.neutral]);

  const feedbackButtons = Object.keys(count);
  const feedbackItems = [...feedbackButtons];
  const countsState = { ...count };
  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100
  );
  const updateFeedback = (nameButton) => {
    setCount({ ...count, [nameButton]: count[nameButton] + 1 });
  };
  const handleResetButton = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        buttonNames={feedbackButtons}
        hanleClick={updateFeedback}
        isReset={totalFeedback}
        handleReset={handleResetButton}
      />
      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          names={feedbackItems}
          countState={countsState}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
