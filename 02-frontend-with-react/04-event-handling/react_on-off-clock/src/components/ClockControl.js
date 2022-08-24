import { useState, useEffect } from "react";

function ClockControl() {
  const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));
  const interval = setInterval(showTime, 1000);

  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  });

  function showTime() {
    setTime(new Date().toLocaleTimeString("en-GB"));
  }
  return <h1>{time}</h1>;
}

export default ClockControl;
