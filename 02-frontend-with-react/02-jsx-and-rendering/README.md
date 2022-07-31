# JSX

This variable declaration:

```js
const element = <h1>Hello, world!</h1>;
```

This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. Recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

## Why JSX?

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.

React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

## Empty Fragment <></> & Other  Ways to return `jsx`.

Declare a variable called `element` and then use it inside JSX by wrapping it in {curly braces}:

```js
function App() {
  const element = <h1>Hello World and Welcome to first react app!</h1>;
  return (
    <></> /*return empty fragment*/
    <>{element}</> /*return Hello World and ...*/
    <div>{element}</div> /* return Hello World and ...*/
  );
}

export default App;
```

## Return Multiple JSX Expression

inside the `<div>{expression}</div>` you are writing something kind of an expression and this expression is actually called a JSX. So, you can use a Expressions inside the HTML which will be looking very similar to the HTML but, they are not the HTML. They are the extended version of the JavaScript.

Want to return multiple `<div>`. You can only return one single HTML tag.

```js
function App() {
  const name = "Amirah Nasihah";
  const element = <h1>Hello World and Welcome to first react app!</h1>;
  return (
    <div>
      <div>{element}</div>
      <div>{name}</div>
    </div>
  );
}

export default App;
```
  
## Embedding Expressions in JSX

In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces:

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.
```

In the example below, we embed the result of calling a JavaScript function, formatName(user), into an `<h1>` element.

```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

We split JSX over multiple lines for readability. While it isn’t required, when doing this, we also recommend wrapping it in parentheses to avoid the pitfalls of automatic semicolon insertion.

## Conditional Rendering

```js
function App() {
    function formatName(user) {
        return user.firstName + " " + user.lastName;
    }

    function getGreeting(user) {
        if (user) {
            return <h1>Hello and welcome, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger!</h1>;
    }

    const user = {
        firstName: "Amirah",
        lastName: "Nasihah",
    };

    // const element = <h1>Hello World and Welcome to first react app!</h1>;
    return (
        <div>
            <div>{getGreeting(user)}</div>  /*if not passed the user, it return Hello, Stranger!*/
        </div>
    );
}

export default App;
```

>🍝 Read More: [JSX](https://reactjs.org/docs/introducing-jsx.html)

# Render Elements

Elements are the smallest building blocks of React apps. What you see on the browsers are elements.

An element describes what you want to see on the screen:

```js
const element = <h1>Hello, world</h1>;
```

Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.

>💡Note:
>One might confuse elements with a more widely known concept of “components”. Elements are what components are “made of”. They are different.

## Rendering an Element into the DOM

First, is to create a root elements, which is the `ReactDOM.createRoot()`. And this is going to ceate a root and you can inject that root into your DOM element. Try go to inspect element in your browser then this is our DOM element. Inside the DOM, you see only have with an ID of root. Now, if you want to embed something into the DOM, you can do first, you have to createRoot (`ReactDOM.createRoot`) and you can take the reference of the element which is already in the DOM (`document.getElementById("root")`). This root is alreay in the DOM. We have taken a reference and we have this reference of the root to the ReactDOM.createRoot().

We have the root and now whatever we want to render on the screen, we can actually pass in this render function.

Example inside the src\index.js;

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

Let’s say there is a `<div>` somewhere in your HTML file:

```html
<div id="root"></div>
```

We call this a `root` DOM node because everything inside it will be managed by React DOM.

Applications built with just React usually have a single root DOM node. If you are integrating React into an existing app, you may have as many isolated root DOM nodes as you like.

To render a React element, first pass the DOM element to `ReactDOM.createRoot()`, then pass the React element to `root.render()`:

```js
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
const element = <h1>Hello, world</h1>;    // It displays “Hello, world” on the page.
root.render(element);
```

