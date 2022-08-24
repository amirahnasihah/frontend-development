import { useState } from "react";

function ButtonControl() {
  const [isButtonOn, setIsButtonOn] = useState(false);

  const handleOnClick = () => {
    setIsButtonOn(true);
  };
  const handleOffClick = () => {
    setIsButtonOn(false);
  };

  let button;
  if (isButtonOn) {
    button = <OnButton onClick={handleOffClick} />;
  } else {
    button = <OffButton onClick={handleOnClick} />;
  }
  return <div>{button}</div>;
}

function OffButton(props) {
  return <button onClick={props.onClick}>Turn off clock</button>;
}

function OnButton(props) {
  return <button onClick={props.onClick}>Turn on clock</button>;
}

export default ButtonControl;
