Handling Events
Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:
React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.
import "./styles.css";
import React, { useState } from "react";
import Clock from "./components/Clock";
 
export default function App() {
 const [flag, setFlag] = useState(true);
 
// i want when we click the button toggle, it will update/change to the Clock component. Thats why need the useState hook to make that changes
// to change the button, use initial value is true (boolean)
 
 const toggle = () => {
   console.log("Toggle Clicked");
   setFlag(!flag);
 };
 
 return (
   <>
     <button onClick={toggle}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
     <h5>Start editing to see some magic happen!</h5>
   </>
 );
}
 
// create useState in the App.js
// const [flag, setFlag] = useState(true);
// then, create a <button> tag inside the return fragment
// <button>Toggle Clock Component</button>
// Then, in this button, lets have an onClick
// and on the onClick, im gonna give a function name, which is a toggle function. and placeholder is Toggle Clock
// <button onClick={toggle}>Toggle Clock Component</button>
// now, we see that have an error because toggle function is not defined
// so, lets have a function called toggle
// lets create a function toggle() inside the App component.
// lets console.log("") we want to see if we clicked the button, it appear in the console "Toggle Clicked"
// lets have an arrow function for toggle()
//  const toggle = () => {
//   console.log("Toggle Clicked");
// };
// so this way you can handle events
 
// now, what im going to is whenever i clicked the toggle, i want to change the [flag]
// if want to set the state of the flag, we will have a `setFlag`
// and with this setFlag,we will have to , just have to toggle the flag value
// setFlag(!flag)
// so, if the flag value is true, we gonna set as false, and if the flag value is false, is gonna set it true
// we have a component here called Clock
// and gonna write a condition
 
// conditional component with
// in clock component lets write a condition
// the condition would be that
// if i have a [flag] as true, then in that case i want to show the Component which is the Clock component
// but if its is false, then in that case i dont want to show anything
// i want to show "No Clock Component"
// then, save.
 
// now you will see if i clicked the toggle function
 
// now you will see if i clicked the toggle function
// then, you will see that we have "no clock component" on th screen
// then, if i click that again, will see that we have back again a Clock component

// but, here what i want to show you something are the previous video which is lifecycle method

// so what happened is whenever i clicke the toggle clock component,

import "./styles.css";
import React, { useState } from "react";
import Clock from "./components/Clock";
 
function App() {
 const [flag, setFlag] = useState(true);
 
 // const toggle = () => {
 //   console.log("Toggle Clicked");
 //   setFlag(!flag);
 // };
 
 return (
   <>
     <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
     <h5>Start editing to see some magic happen!</h5>
   </>
 );
}
 
export default App;
 
// create useState in the App.js
// const [flag, setFlag] = useState(true);
// then, create a <button> tag inside the return fragment
// <button>Toggle Clock Component</button>
// Then, in this button, lets have an onClick
// and on the onClick, im gonna give a function name, which is a toggle function. and placeholder is Toggle Clock
// <button onClick={toggle}>Toggle Clock Component</button>
// now, we see that have an error because toggle function is not defined
// so, lets have a function called toggle
// lets create a function toggle() inside the App component.
// lets console.log("") we want to see if we clicked the button, it appear in the console "Toggle Clicked"
// lets have an arrow function for toggle()
//  const toggle = () => {
//   console.log("Toggle Clicked");
// };
// so this way you can handle events
 
// now, what im going to is whenever i clicked the toggle, i want to change the [flag]
// if want to set the state of the flag, we will have a `setFlag`
// and with this setFlag,we will have to , just have to toggle the flag value
// setFlag(!flag)
// so, if the flag value is true, we gonna set as false, and if the flag value is false, is gonna set it true
// [flag, setFlag] = useState(true); => flag initial value is true here inside the useState(true)
// we have a component here called Clock
// and gonna write a condition
 
// conditional component with
// in clock component lets write a condition
// the condition would be that
// if i have a [flag] as true, then in that case i want to show the Component which is the Clock component
// but if its is false, then in that case i dont want to show anything
// i want to show "No Clock Component"
// then, save.
 
// now you will see if i clicked the toggle function
// then, you will see that we have "no clock component" on the screen
// then, if i click that again, will see that we have back again a Clock component
 
// but, here what i want to show you something are the previous video which was the lifecycle method
 
// so what happened is whenever i clicked on the toggle clock component,
// alright, and whenever this is false, we dont see this clock component in that case, we want to do a cleanup
// be still dont want to run our interval and if i cancel this and if you see that now im gonna click on the toggle to No Clock component
// and you will see that we have cleaned up the interval `cleanup of interval` in console
// and we have also played on the toggle and now you will see that we dont have any set interval running.
// and as soon as I click on it again and you will see the component is rendered again and you will see that again.
// We have the component mounted or unmounted and
// if i click on it, it will get toggle 'No Clock component' and a cleanup will run.
// so thats how you will handle the events in your react application.
 
// 'Anonymous Arrow Function'
// can also do one more thing instead of calling this toggle function,
// 'const toggle = () =>'
// i will return a Anonymous Arrow Function in the onClick
// 'onClick={() => setFlag(!flag)}'
// and in this what im gonna have a setFlag() and im gonna toggle the flag value
// alright, and this will work as it is.
// so, if i click on it, it still work as it is
// so, in this way, you can handle the events in react application.
 
// so in the next one, we will see how we can do the conditional rendering in react.
 







First result
import "./styles.css";
import React, { useState } from "react";
import Clock from "./components/Clock";
 
export default function App() {
 const [flag, setFlag] = useState(true);
 
// i want when we click the button toggle, it will update/change to the Clock component. Thats why need the useState hook to make that changes
// to change the button, use initial value is true (boolean)
 
 const toggle = () => {
   console.log("Toggle Clicked");
   setFlag(!flag);
 };
 
 return (
   <>
     <button onClick={toggle}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
     <h5>Start editing to see some magic happen!</h5>
   </>
 );

 
Second result
 
import "./styles.css";
import React, { useState } from "react";
import Clock from "./components/Clock";
 
function App() {
 const [flag, setFlag] = useState(true);
 
 // const toggle = () => {
 //   console.log("Toggle Clicked");
 //   setFlag(!flag);
 // };
 
 return (
   <>
     <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
     <h5>Start editing to see some magic happen!</h5>
   </>
 );
}
 
export default App;
