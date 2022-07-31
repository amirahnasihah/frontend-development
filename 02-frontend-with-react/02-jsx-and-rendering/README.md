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

## Empty Fragment <></> & Other  Ways to return `jsx`

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

Want to return multiple <div>. You can only return one single HTML tag.

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


