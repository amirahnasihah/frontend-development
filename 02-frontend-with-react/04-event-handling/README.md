# Event Handling for React Beginners - Tutorial Example Code

This tutorial is going to give you a step-by-step guide on understanding one of the main concepts of React which is handling events in React application.

# Handling Events in React

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

*   React events are named using camelCase, rather than lowercase.
    
*   With JSX you pass a function as the event handler, rather than a string.
    

What I want is for when we click the button toggle, it will update or change it to the `Clock` component. That's why we need the `useState` hook to make that changes. And to change the button, we use the initial value of the boolean value of `true`.

# First Step

Here's a heads-up, this is the continuous tutorial of the state and lifecycle method where what I want to do is to manipulate the button from showing the Clock component that is updated every second to the No Clock component that is shown on the screen.

To begin, you can create a react app using the command line or any code editor (e.g., VSCode). You can also try using [CodeSandbox](https://codesandbox.io/) as an online code editor that is simple to use and allows you to deploy your code.

The best practice is to read through this tutorial and follow along several times to have a better understanding of handling events in React.

# Code Output

This is the result that you will achieve once you have finished the tutorial. My suggestion is to read it through, then go through it again one step at a time using the code editor and repeat until you can do it by yourself.

<iframe src="https://codesandbox.io/embed/event-handling-toggle-clock-29dh94?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

![Edit event-handling-toggle-clock](https://codesandbox.io/static/img/play-codesandbox.svg align="left")

# Create a Button

Let's create an `useState` in the `App.js` file. The initial value of state is set to `true`. We will look into it more below.

```javascript
const [flag, setFlag] = useState(true);
```

Then, we create a `<button>` tag inside the returned fragment. Like this:

```JSX
return (
    <>
      <button></button>
    </>
)
```

Then, in this button, let's have a `onClick`. And on the `onClick`, I am going to give a function name, which is a `toggle` function. And the placeholder will be `"Toggle Clock Component"`.

```JSX
<button onClick={toggle}>Toggle Clock Component</button>
```

Now, we see that we have an **error** because the toggle function is not defined.

So, let's have a function above the return, called `toggle` function.

Let's create a function `toggle()` inside the `App` component.

Let's `console.log("")` because we want to see if we clicked the button, it will appear in the console `"Toggle Clicked!"` to show that is working.

Let's have an arrow function for `toggle()`. Like this:

```JSX
 const toggle = () => {
  console.log("Toggle Clicked!");
};
```

So, this is the way how we can handle events in React.

# Change Toggle Explained

Now, what I am going to do in `App.js` the file is whenever I clicked the `toggle` function, I want to change the `[flag]`.

If I want to set the state of the `flag`, we will have a `setFlag` and with this `setFlag`, we will have just have to toggle the flag value `setFlag(!flag)`. Like this:

***App.js***

```JSX
function toggle() {
  console.log("button toggle clicked!");
  setFlag(!flag);
}
```

So, if the flag value is `true`, we going to set it as `false`, and if the flag value is `false`, it is going to be set to `true`.

> !flag === false

Now, let's have here in the App component were inside the return of the `<Clock />` tag, I am going to write a conditional component with it.

In the `Clock` component, let's write a condition and it would be that:

*   If I have a `flag` as `true`, then in that case I want to show the component which is the `Clock` component.
    
*   But if it is `false`, then in that case I don't want to show anything. Instead, I want to show the `"No Clock component"`.
    

Like this:

```js
{flag ? <Clock /> : "No Clock component"}
```

Then, I will save it is like this:

***App.js***

```JSX
const toggle = () => {
   console.log("Toggle Clicked!");
   setFlag(!flag);
 };
 
 return (
   <>
     <button onClick={toggle}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
   </>
 );
```

# Clean Up of Interval

Now, what you will see if I clicked the `toggle` the function then, you will see that we have that `"No Clock component"` on the screen.

Then, if I click the button again, you will see that we have back again a `Clock` component showing the clock ticking on the screen.

But, here what I want to show you is something from my [previous post](https://amirahnasihah.hashnode.dev/react-tutorial-beginner-usestate-and-useeffect-with-example-code) which is the lifecycle method.

So, what happened is whenever we clicked on the toggle `Clock` component, and whenever this is `false`, we don't see this `Clock` component. In that case, we want to do a cleanup.

And you see that now I am going to click on the toggle `"No Clock component"` and you will see that we have cleaned up the interval `cleanup of interval` in the console.

And we have also clicked on the toggle and now you will see that we don't have any `setInterval` running.

And as soon as I click on it again, you will see the component is rendered again and you will see that again we have the component mounted or unmounted if I click on it, it will get a toggle `"No Clock component"` and cleanup will run.

So, that is how you will handle the events in your react application.

***App.js***

```js
import "./styles.css";
import React, { useState } from "react";
import `Clock` from "./components/`Clock`";
 
function App() {
 const [flag, setFlag] = useState(true);
 
 const toggle = () => {
   console.log("Toggle Clicked!");
   setFlag(!flag);
 };
 
 return (
   <>
     <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
   </>
 );
}

export default App;
```

# Anonymous Arrow Function

Here in `App.js`, we can also do one more thing instead of calling this `toggle` function as usual:

```JSX
const toggle = () => {};
```

We can also return an **Anonymous Arrow Function** in the `onClick`:

```JSX
onClick={() => setFlag(!flag)}
```

Observe the code below to see the differences in this method code.

And in this function, what I am going to have is a `setClick()` and I am going to toggle the `flag` value and this will work as it is.

So, if you click on the button, it still works as it is.

So, in this way, you can handle the events in React application.

## First Method

***App.js***

```javascript
export default function App() {
 const [flag, setFlag] = useState(true);
 
 const toggle = () => {
   console.log("Toggle Clicked!");
   setFlag(!flag);
 };
 
 return (
   <>
     <button onClick={toggle}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
   </>
 );
```

Look at the differences between the `onClick` first method and the second method. In the second method, we removed the `toggle` function and used an anonymous arrow function.

## Second Method (Anonymous Arrow Function)

***App.js***

```JSX
export default function App() {
 const [flag, setFlag] = useState(true);

 return (
   <>
     <button onClick={() => setFlag(!flag)}>Toggle Clock Component</button>
     {flag ? <Clock /> : "No Clock component"}
   </>
 );
}
```

# Full Code

***App.js***

```JSX
import "./styles.css";
import Clock from "./components/Clock";
import { useState } from "react";

export default function App() {
  const [flag, setFlag] = useState(true);

  function toggle() {
    console.log("Toggle Clicked!");
    setFlag(!flag);
  }

  return (
    <div className="App">
      <h1>Time Now:</h1>
      <button onClick={toggle}>Toggle Clock Component</button>
      <br />
      {flag ? <Clock /> : "No Clock component"}
    </div>
  );
}
```

***Clock.js***

```JSX
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleString("en-GB"));
  const interval = setInterval(showTime, 1000);

  useEffect(() => {
    console.log("component mounted or updated");

    return () => {
      console.log("cleanup of interval");
      clearInterval(interval);
    };
  }, [time, interval]);

  function showTime() {
    setTime(new Date().toLocaleString("en-GB"));
  }
  return <h2>{time}</h2>;
}
```

# Share This Tutorial

👉 Please share my posts with the community at [**daily.dev**](http://daily.dev) / social media by adding the article's URL to the feed. By adding my article's URL to the feed, I can share my insights and knowledge with other tech enthusiasts and contribute to the passionate community.

`Cheers✨`