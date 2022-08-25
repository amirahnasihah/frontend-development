FULL TUTORIAL CODE

```js
import React, { useState, useEffect } from "react";
 
function Clock() {
 const [time, setTime] = useState(new Date().toString());
 const [flag, setFlag] = useState(true);
 
 useEffect(() => {
   console.log("component mounted or updated");
   const interval = setInterval(showDate, 1000);
 
   return () => {
     console.log("cleanup of Interval");
     clearInterval(interval);
   };
 }, [time]);
 
 function showDate() {
   //console.log(new Date().toString());
   //return <h1>{new Date().toString()}</h1>;
   setTime(new Date().toString());
 }
 //setInterval(showDate, 1000); cut to above
 
 return <div>{time}</div>;
}
 
export default Clock;
```

# State is Memory of a Component

As a result of an interaction, components frequently need to update what's on the screen.
Typing into the form updates the input box, clicking "next" on an image carousel changes the picture displayed, and clicking "purchase" adds a product to the shopping cart. Components must "remember" information such as the current input value, the current picture, and the shopping cart. This type of component-specific memory is referred to as state in React.

## First Step

To begin, you can start create your own react app using command line or can directly go to [CodeSandbox](https://codesandbox.io/) if you want to skip using the command line which more faster. CodeSandbox is an online code editor and prototype tool that speeds up the creation and sharing of web apps where you can directly deploy your app without a hustle.

First, create a new folder inside the src folder named components. Then, create a JavaScript file called Clock.js which in React is the component of Clock.

Create a function Clock Component.

Export this component by type `export default Clock` below the function.

In this component lets create a function and this function will be the `showDate()` function.

After have showDate(), we'll have a `<h1>` tag to make it large or other tags you prefer and this `<h1>` will have the date of `{new Date().toString()}`
`return <h1>{new Date().toString()}</h1>;`
then we call this function with the setInterval(). and have the setInterval as let's call the function first

```js
function showDate() {
 return <h1>{new Date().toString()}</h1>;
}
setInterval(showDate, 1000);
```

`setInterval(showDate, 1000);`` and this function will be called in every one second.

alright, and another thing gonna do is also console.log() above the return method. we console.log the Date() function to see whether its running or not in our console.

```js
function showDate() {
 console.log(new Date().toString());
 return <h1>{new Date().toString()}</h1>;
}
setInterval(showDate, 1000);
```

// also have to also return a jsx bcs every component return a JSX
// return a jsx below the setInterval() method
// type return (<div> </div>)
// and gonna call the showDate() function inside the <div> jsx
function Clock() {
 return (
   <>
     <h1>Hello from Clock component!</h1>
     <div>{showDate()}</div>
   </>
 );
}



// If not see anything happening, go to App.js and import our Clock Component, then use the Clock Component by adding the <Clock />

// now we will see that what is actually happening when we use the Clock component. We see the time and here in the clock component, you will see that we have a setInterval which is being called every one second.
// So, if i go to the inspect element (f12 hotkey) and if i go to console, then in the console you will see that the time is getting updated every second.



# Time not updated on the screen?

// But then, why is this time not getting updated on my screen? Inside the console it gets updated every one second
// and that's where we have to use the State
// So a state will be a local state of a component. So, whenever a state is changed, a component will re-render and it will render the updated jsx.
// so what we can do is, need to import a state.
// what to do is in Clock.js Component
// have an `import React from 'react';` at the top
// and in order to use a State, there is a hook called useState. => {useState}
// `import React, { useState } from "react";`
// alright, now going to create a constant.

// how you will use a state in a function component??
// so you create a constant that you have to use array [] like structure and then you will have a useState()
// and here you need to give the initial value of your state. so, my initial value will be the same which is the Date() function.
// const [] = useState(new Date().toString())
// put inside useState(), and here i will have the time and i will have a setTime. Whenever you use a useState(), it actually gives you a time Variable and it also gives a function to update that variable.
// const [time, setTime] = useState(new Date().toString())

// so now, we going to change line 12: return <div>{showDate()}</div>;
// and have a {time} here and save it. then start seeing a time on the screen and this is the time.
// now, going to do is I need to update that time.
// so whenever this setInterval makes a call to the showDate() in every one second instead of, returning this `return <h1>{new Date().toString()}</h1>;`
// Im going to update my state.

IMPORTANT: UPDATE THE STATE
// So want to update my state, im gonna do a setTime() and this setTime() is going to update the state.
// So, let type `setTime(new Date().toString())` and save it.
// So, in every one second my showDate() function is being called `function showDate() {` and whenever it is called I change the state variable.
// So, you change the state variable with the help of `set` function `, setTime] = ..` This is a set function `setTime(new Date().toString());` and as soon as i do a setTime() with a new updated time `new Date().toString()`, so my state `useState()` gets changed and whenever the states get change, the component is re-rendered and that's where we will see that the screen is now updating.
// we can see now on the screen the time is running every one second and also from the console.

// if error occurs, make sure that the showDate() is inside the Clock() function
import React, { useState } from "react";
 
function Clock() {
 const [tick, setTick] = useState(new Date().toString());
 setInterval(showDate, 1000);
 
 return (
   <>
     <h1>Hello from Clock component!</h1>
     <div>{tick}</div>
   </>
 );
 
 function showDate() {
   //console.log(new Date().toString());
   setTick(new Date().toString());
 }
}
 
export default Clock;
 


// This showDate() function works as updating in every one second, and we use showDate() function iniside the Clock function to update the time every one second, to do that, we use state variable which is `setTime(new Date().toString())`. Earlier in showDate() function we put `return <h6>{date}</h6>;` but because whenever you use a useState(), it actually gives you a time Variable and it also gives a function to update that variable.
// thats why we change from `return <h6>{date}</h6>;` to `setTime(new Date().toString())`
//  now on the screen, the time is running every one second and also from the console.

// cannot make it in global variable when using State
import React, { useState } from "react";
 
function Clock() {
 const [time, setTime] = useState(new Date().toLocaleTimeString("en-GB"));
 setInterval(updateTime, 1000);
 
 return (
   <>
     <h2>{time}</h2>
   </>
 );
 
 // this function called every one second
 function updateTime() {
   // console.log(new Date().toLocaleTimeString("en-GB"));
   setTime(new Date().toLocaleTimeString("en-GB"));
 }
}
 
export default Clock;

USE EFFECT

// min 05:03
// { useState }
// now, what is this useState() is and what this time and setTime() is.
// so whenever you want to create a state, lets have a state
// im gonna have a constant and now im going to create a state variable of name.
// so, you will give it as a `name` and then whenever you want  to update this name, you will update with the help of a setName function.
// `const [name, setName] `
// Ex; you can also do the same thing is whenever you want to have a flag. Alright, and now you want to update this flag value so you will have a `setFlag`,
// `const [flag, setFlag] `
// Alright, so you will use the `useState()` as
// `const [flag, setFlag] = useState()`
// and then you will set the initial value.
// So, my initial value of the flag is `true`. so lets have a `useState(true)`
// so in this way you will use the State

USE EFFECT / LIFE CYCLE

// now what is the lifecycle?
// so whenever you have a component the component also have the life cycles.
// so the lifecycles will be that you want to execute something whenever your component is *mounted* or whenever your component is first time rendered or you want to do something whenever your component is getting updated or whenever you component is destroyed.

// > Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM). This method is called just before a component mounts on the DOM or the render method is called. After this method, the component gets mounted.

// ex; Clock component is inserted into the DOM

// we use lifecycle because we want the clock keeps updating. So, need to use the useEffect() function

// so, in those cases, you will use a life cycle | to use a lifecycle
// to use a life cycle method in the function component.
// we make a use of a useEffect hook.
// `import React, { useState, useEffect } from "react";`
// so, this way i will use and useEffect hook. and now what im going to do here is that im gonna write a `useEffect` and this `useEffect` will have two arguments.
// `useEffect(args1, args2)`
// the first arguments will be a `function` or a side effect that you want to run and the second argument will be dependency array.
// `useEffect(() => {})`
// and the second argument will be dependency array. so this dependency array will depend on these State variable.
// so, now what im gonna do here is that let's have a console.log() and im gonna have here "component mounted or updated"
// `console.log("component mounted or updated")`
// alright, and remove the dependency array and save it.
// `useEffect(() => {console.log("component mounted or updated");});`
 useEffect(() => {
   console.log("component mounted or updated");
 });

// i'll save it and now lets go to the inspect element and i will go to the console and here i will just remove this function because we dont want and its polluting our console
// comment out //console.log(new Date().toString());
// alright, now i will just refresh my page. and you will see that as soon as a refresh my page. my component is mounted and my state is also getting updated.
// so since the state is getting updated because this state variable is getting updated.

// so, if i dont want that this get updated every time, what i can do here is that i have a dependency array []
// `useEffect(() => {console.log("component mounted or updated");}, []);`
// and if i give it dependency in this array of a state where able then in that case the `useEffect()` will run only if the state variable changes.
// so what im going to do is im going to have a flag here:
// `useEffect( ... ;}, [flag]);`
// then, save it and now will refresh the page
// so now you will see that eventhough my time is getting changed in every one second, my useEffect() `useEffect( ... ;}, [flag]);` is not running because my useEffect() is now dependent on another state variable which is a `flag`.
// so that means whenever a flag is changed in that case, the useEffect() will run.
// so, if the flag is changing from `true` to `false`, then you will see that the useEffect will run if i change this flag to `true` again, then you will see that the useEffect will run.
// so this way this is a lifecycle of a component, that whenever a component is mounted or whenever a component is updated. you want to run some side effects.

// Now, there is a scenario that whenever a component is destroyed you want to run effect of unmount that whenever the component is unmounted you want to do something.
// so, in that case, what we can do is that lets have a constant and gonna have an interval and  i will remove/cut the setInterval()
// so now i have the interval here and this interval depends on the time.
// so, im gonna copy this {time} and gonna have the {time} here at useEffect dependency array:
// `useEffect( ... ;}, [time]);`
// so, you can see that every time this showDate() function is running my component is getting updated.
// so thats why we see a lot component updated on console logs.
// now, lets assume that you have a subscription of this interval.
// now, you want to clear this subscription whenever your component is unmounted or whenever your component is not visible on your screen.
// so what we can do here (inside a useEffect() function ) is that here we can have a clean of function.
// which will have a return and this will be an arrow function
// alright and here (inside arrow function) you can do your cleanup
// so, let me have a console.log("cleanup of Interval")
// and below gonna have the `clearInterval` method
// and lets gonna clear this interval. gonna add the constant interval into the `clearInterval(interval)` ; line 11-12
// now see that whenever a component is mounted. the first thing will happen is the `cleanup function` will run whenever this component mounted or whenever a component is unmounted.
() => {
     console.log("cleanup every one second");
     clearInterval(setInterval(showDate, 1000));
   };


// so, this is how you will do the states and the life cycle in the react components.

// so, next will handling of events in react

 useEffect(() => {
   console.log("component keep mounted or updated");
 
   return () => {
     console.log("cleanup of Interval");
     clearInterval(setInterval(updateTime, 1000));
   };
 }, [time]);

If remove the dependency, which is [time], in console will look 

component keep mounted or updated
cleanup of Interval
component keep mounted or updated

Like this only.
is not running because my useEffect() is now dependent on another state variable which is a `flag`



But if put [time], then
cleanup of Interval
component keep mounted or updated
cleanup of Interval
component keep mounted or updated
cleanup of Interval
component keep mounted or updated
cleanup of Interval
component keep mounted or updated
cleanup of Interval

 then in that case the `useEffect()` will run ony if the state variable changes.
second argument will be dependency array. so this dependency array will depend on these State variable
