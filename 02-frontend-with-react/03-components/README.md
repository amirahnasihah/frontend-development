- [React Tutorial Beginner - Components and Props with Example Code](#react-tutorial-beginner---components-and-props-with-example-code)
- [Components & Props in React](#components--props-in-react)
- [First Step](#first-step)
- [Code Output](#code-output)
- [A Simple JavaScript Function](#a-simple-javascript-function)
- [Understanding Components & Props](#understanding-components--props)
- [To Use The Component](#to-use-the-component)
- [To Use Props in React](#to-use-props-in-react)
- [Reusable Component](#reusable-component)
- [Full Code](#full-code)
- [Share This Tutorial](#share-this-tutorial)

# React Tutorial Beginner - Components and Props with Example Code

In this tutorial, I'm going to give you a step-by-step guide on understanding the main concepts of React which introduce the concept of components and props in a React.

# Components & Props in React

Now, let's understand about Components and Props in React.

You can think of a component as a simple JavaScript function and it will take the props as an argument and you can use those props in your component. And then that component is going to return a `JSX` which is going to display it on the screen.

# First Step

To begin, you can start creating your own react app using the command line or using any code editor (e.g., VSCode). For an online code editor, you can directly have a [CodeSandbox](https://codesandbox.io/) which easy to use and faster.

CodeSandbox is an online code editor and prototype tool that speeds up the creation and sharing of web apps where you can also directly deploy your app without hustle.

# Code Output

These are the code that you will achieve once you are done with the tutorial. My advice is, to read it, imagine it and start doing it again and again until you are able to do it by yourself. 

[Code Output](https://codesandbox.io/embed/components-and-props-cctbhl?fontsize=14&hidenavigation=1&theme=dark)

# A Simple JavaScript Function

So, let's do this with an example.
So, what I'm going to do here in `App.js` is that I'm just simply roll back everything. We don't want anything on our screen.

Now, here if we go to `App.js` file and in this App component, you will see that this `App.js` is a simple function of JavaScript.

So, what I will do is I will keep only this constant `user` and let's have a string here inside the `<div>` tag. Let's have a string of `Hello World`. Like this:

`App.js`

```JSX
function App() {
 const user = {
   firstName: "Ludwig",
   lastName: "Beethoven"
 };
 
 return <div> Hello World </div>;
}
 
export default App;
```

Alright, and we have this `App` as a function, a simple javascript function, which is actually returning a `JSX`, and the `JSX` is the `Hello World` which is being displayed on the screen.

# Understanding Components & Props

So, this `App` is called an `App component` and in React, each of the component you can think of that you want to split your UI into different components.

And each of the component will have it's data in the form of a `prop`.

So, let's take an example.

So, what  I'm going to do is I'm going to go here of `src folder`.

Alright, I will create a folder named `components` inside the `src folder` where in here I can create my own components.

Then, inside the `components folder` I will have a component called `Welcome.js`. Let's create a `.js` file which contained a component call `Welcome.js`.

Alright, and you should make sure that whenever you create a component, you should always start a component with a capital letter.

`Welcome.js`

Here in the `Welcome.js`, I want to create a component.

So, what I will do here is that I'm going to create a function and the name of the function will be `Welcome`. Like this:

```JSX
function Welcome() {}
```

Alright, then at the end of the `Welcome` function, I will have to export this Welcome component.

so, I will have an `export default Welcome`.

Then, this Welcome component should return some kind of a `JSX`.
Let's return a JSX where I'm going to return `<h1>` tag and I will have a `Hello from Welcome Component`. Then, I will save it.

As soon as we save it, you will not see anything on the screen because we have created a component but we are not using this component.

```JSX
function Welcome() {
 return <h1>Hello from Welcome Component</h1>;
}
 
export default Welcome;
```

# To Use The Component

In order to use the Welcome component, we need to import the component.

So, let's go to the `App.js` and at the top of the code, I will import the Welcome component.

Let's import the Welcome component like so:

**App.js**

```JSX
import Welcome from "./components/Welcome";
```

Alright, now the Welcome component is imported.

And then, if you want to use this Welcome component, what you need to do here is remove this `<div>` element.

```JSX
<div> Hello, World </div>;
```

And, what I'm going to have is an empty fragment `<> </>`.

So, let's have an empty fragment and inside this empty fragment, I will have the Welcome component. Like this:

```JSX
return (
  <>
    <Welcome />;
  </>
);
```

So, in this way, you can use the component and let's save it.

Now, you will see that as soon as we save it, you will see on the screen that `Hello from Welcome Component`.

Now, what I want is I want to pass the props to this component which is the App component.
I want to pass some information. So, I will go here App component on return <Welcome /> and I'm going to pass the `user`.

The prop name is `user` and I'm going to have the `userInfo`. Like this:

```JSX
return (
  <>
    <Welcome user={userInfo} />;
  </>
);
```

So, I will pass the `userInfo` and this `userInfo`, I will save it.

Now, I have passed the props.

# To Use Props in React

Now, I want to use this `props`.

To use the props, you will need to go here in Welcome component, and whenever you pass a prop in a component, you will take it as an argument.

Like this:

`Welcome.js`

```JSX
function Welcome(props) {}
```

Alright, let's do a simple `console.log` on Welcome component.

I'm going to have a `console.log` of the props because I want to see what props that I have. Then, I will save it.

```JSX
function Welcome(props) { 
    console.log(props) 
}
```

Then, let's have the inspect element.

I will go to the console.

And in the console, you will see that I have an Object.

If I expand this Object, I will see that I have the information of the user and and the lastName.

So, if I want to use it, what I can do is I can I simply have here `props.name`

```JSX
return <h1>Hello {props.name} from Welcome Component</h1>;
```

Alright, and I will save it now.

As soon as I save it, you will see that I don't see anything.

That is because I made a mistake because it supposed to be `props.user.firstName`

```JSX
return <h1>Hello {props.user.firstName} from Welcome Component</h1>;
```

Alright, and when I save it we will see the `Hello Ludwig from Welcome Component` on the screen.

Hence, in this way, you can actually create a component and you can pass the prop.


# Reusable Component

Now, I want to show you that how you can make this on it as a reusable component.

So, let's remove this on `<h1>` tag.

And I'm going to simply have the `name` here.

```JSX
return <h1>Hello {props.name} from Welcome Component</h1>;
```

Alright, and what I want is this Welcome component to be repeated three (3) times with a different name.

**`App.js`**

I will go to the `App.js` and I'm going to repeat this three times because I want to use this three times. Like this:

```JSX
<Welcome user={userInfo} />
<Welcome user={userInfo} />
<Welcome user={userInfo} />
```

Alright, and let's change the information first.

I'm going to pass the first information as `Beethoven`. Next, I'm going to pass the second information as `Mozart` and for the third information, I will pass this as `Johann`.

Alright, now I have the three users.

```JSX
<Welcome user="Ludwig" />
<Welcome user="Beethoven" />
<Welcome user="Johann" />
```

You will see that we have three different users but, you will see that we don't have the username here on the screen.

So, that means we made a mistake and the mistake is we are using `props.name`

So, the problem of our prop is the `name`. I'm going to go and either I will change it here.

Or I will simply going to change this as `user` and I will save it and you will see that we have `Hello Ludwig from Welcome Component` along with all of the other users we are able to see on the screen.

So, this is how you can use the components and the props and this component is called a `function component` because you are writing it as a JavaScript function.

And another way of writing a component which is using a `class based component`.

But, I'm not going to cover the `class based component` because the class based component is mostly used on the Legacy application and any modern React application is going to use the `function component`.

So, you can relate this article of components and props with my another [article about understanding the state and the lifecycle with examples](https://amirahnasihah.hashnode.dev/react-tutorial-beginner-usestate-and-useeffect-with-example-code).

next, we are going to understand about the state and the lifecycle of the component.

# Full Code

**`App.js`**

```JSX
import Welcome from "./components/Welcome";

function App() {
  const user = {
    firstName: "Ludwig",
    lastName: "Beethoven"
  };

  return (
    <>
      <Welcome user="Ludwig" />
      <Welcome user="Beethoven" />
      <Welcome user="Johann" />
    </>
  );
}

export default App;
```

**`Welcome.js`**

```JSX
function Welcome(props) {
  console.log(props);
  return <h1>Hello {props.user} from Welcome Component</h1>;
}

export default Welcome;
```

# Share This Tutorial

Do share it with the community at [daily.dev](https://app.daily.dev/) or at anyplace by entering the article's URL / link to add it to the feed.

[GO UP](#components--props-in-react)
