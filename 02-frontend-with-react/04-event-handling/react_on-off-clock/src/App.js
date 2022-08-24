import "./styles.css";
import ClockControl from "./components/ClockControl";
import { useState } from "react";
import ButtonControl from "./components/ButtonControl";

export default function App() {
  const [isClockOn, setIsClockOn] = useState(true);

  return (
    <div className="App">
      <h1>Time Now:</h1>
      <div
        onClick={() => {
          setIsClockOn(!isClockOn);
        }}
      >
        <ButtonControl />
      </div>
      {isClockOn ? <ClockControl /> : <h1>Clock is off</h1>}
    </div>
  );
}
