# How To Use Components & Props in React with Example Code

In this tutorial, I'm going to give you a step-by-step guide on understanding one of the main concepts of React, which is components and props in React applications, with example code.

# Components & Props in React

Now, let's understand the Components and the Props in React.

You can think of a component as a simple JavaScript function, and it will take the props as an argument, and you can use those props in your component. And then that component is going to return a `JSX` which is going to display it on the screen.

# The First Step

To begin, you can create react app using the command line or any code editor (e.g., VSCode). You can also try using [CodeSandbox](https://codesandbox.io/) for an online code editor that is simple to use and allows you to deploy your code.

To have a better understanding of how components and properties are used in React, read through this tutorial and follow along several times.

# Code Output

This is the result that you will achieve once you have finished the tutorial. My suggestion is to read this guide closely, then go through it again one step at a time using code editor and repeat the process until you can do it by yourself.

<iframe src="https://codesandbox.io/embed/components-and-props-hello-diff-users-cctbhl?autoresize=1&fontsize=14&hidenavigation=1&theme=dark" style="width:100%;height:500px;border:0;border-radius:4px;overflow:hidden" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

![Edit components-and-props-hello-diff-users](https://codesandbox.io/static/img/play-codesandbox.svg align="left")

# A Simple JavaScript Function

So, let's do this with an example. So, what I'm going to do here in `App.js` file is that I'm just simply roll back everything. We don't want anything on our screen.

Now, if we go to `App.js` file and in this App component, you will see that this `App.js` is a simple function of JavaScript.

So, what I will do is I will have this constant `userInfo` and let's also have a string here inside the `<div>` tag. Let's have a string of `Hello World`. Let's do it like this:

***App.js***

```JSX
function App() {
 const userInfo = {
   firstName: "Ludwig",
   lastName: "Beethoven"
 };
 
 return <div>Hello World</div>;
}
 
export default App;
```

Alright, and we have this `App` as a function, a simple javascript function, which is actually returning a `JSX`, and the `JSX` is the `Hello World` which is being displayed on the screen.

# Understanding Components & Props

So, this `App` is called an `App component` and in React, each of the component you can think of that you want to split your UI into different components.

And each of the component will have it's data in the form of a `prop`.

Let's take an example. So, what I'm going to do is I'm going to go here in `src folder`.

And then, I will create a folder named `components` inside the `src folder` where in here I can create my own components.

Then, inside the `components folder` I will have a component called `Welcome.js`. Let's create a `.js` file which contained a component call `Welcome.js`.

Alright, and you should make sure that whenever you create a component, you should always start a component with a capital letter.

***Welcome.js***

Here in the `Welcome.js` file, I want to create a component.

So, what I will do here is that I'm going to create a function and the name of the function will be `Welcome`. Like this:

```JSX
function Welcome() {}
```

Alright, then at the end of the `Welcome` function, I will have to export this Welcome component.

So, I will have a:

```JSX
export default Welcome;
```

Then, this Welcome component should return some kind of a `JSX`. Let's return a JSX where I'm going to return `<h1>` tag and I will have a `Hello from Welcome Component`. Like this:

```JSX
function Welcome() {
 return <h1>Hello from Welcome Component</h1>;
}
 
export default Welcome;
```

Then, I will save it.

As soon as we save it, you will not see anything on the screen because we have created a component but we are not using this component.

# To Use The Component

In order to use the Welcome component, we need to import the component.

So, let's go to the `App.js` file and at the top of the code, I will import the Welcome component.

Let's import the Welcome component like so:

***App.js***

```JSX
import Welcome from "./components/Welcome";
```

Alright, now the Welcome component is imported.

And then, if you want to use this Welcome component, what you need to do here is remove this `<div>` element. From this:

```JSX
<div>Hello World</div>;
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

> An empty tag `<></>` is a shortcut syntax for fragment components. While it is available in the JSX syntax, it is not part of the HTML standard and hence is not natively supported by browsers.

Now, you will see that as soon as we save it, you will see on the screen that `Hello from Welcome Component`.

Now, what I want is I want to pass the props to this component which is the App component. I want to pass some information. So, I will go here in App component on return `<Welcome />` and I'm going to pass the `user`.

The prop name is `user` and I'm going to have the `userInfo`. It will be like this:

***App.js***

```JSX
function App() {
 const userInfo = {
   firstName: "Ludwig",
   lastName: "Beethoven"
 };
 
  return (
    <>
      <Welcome user={userInfo} />;
    </>
  );
}
 
export default App;
```

So, I will pass the `userInfo` and this `userInfo`, I will save it.

Now, I have passed the props.

# To Use Props in React

Now, I want to use this `props`.

To use the props, you will need to go here in Welcome component, and whenever you pass a prop in a component, you will take it as an argument.

Like this:

***Welcome.js***

```JSX
function Welcome(props) {}
```

Alright, let's do a simple `console.log` on the Welcome component.

I'm going to have a `console.log` of the props because I want to see what props that I have. Then, I will save it.

```JSX
function Welcome(props) { 
    console.log(props) 
}
```

And next, let's have the inspect element.

I will go to the console. And in the console, you will see that I have an `Object`.

If I expand this Object, I will see that I have the information of the `user` and the `name`.

So, if I want to use it, what I can do is I can simply have here the `props.name`. Like this:

***Welcome.js***

```JSX
function Welcome(props) { 
    console.log(props)
    return <h1>Hello {props.name} from Welcome Component</h1>;
}

export default Welcome;
```

Alright, and I will save it now.

As soon as I save it, you will see that I don't see name displayed on the screen.

That is because I made a mistake where it supposed to be `props.user.firstName`. Let's have it like this:

***Welcome.js***

```JSX
function Welcome(props) { 
    console.log(props)
    return <h1>Hello {props.user.firstName} from Welcome Component</h1>;
}

export default Welcome;
```

Alright, and when I save it we will see the `Hello Ludwig from Welcome Component` on the screen.

Hence, in this way, you can actually create a component and you can pass the prop.

# Reusable Component

Now, I want to show you that how you can make this on it as a reusable component.

So, let's remove this here inside the `<h1>` tag and I'm going to simply have the `name` here again. Like this:

***Welcome.js***

```JSX
function Welcome(props) { 
    console.log(props)
    return <h1>Hello {props.name} from Welcome Component</h1>;
}

export default Welcome;
```

Alright, and what I want is that this Welcome component to be repeated three (3) times with a different name.

***App.js***

I will go to the `App.js` file and I'm going to repeat this three times because I want to use this three times. Like this:

```JSX
<Welcome user={userInfo} />
<Welcome user={userInfo} />
<Welcome user={userInfo} />
```

Alright, and let's change the information first.

I'm going to pass the first information as `Ludwig`. Next, I'm going to pass the second information as `Beethoven` and for the third information, I will pass this as `Johann`.

Alright, now I have the three users like below:

```JSX
<Welcome user="Ludwig" />
<Welcome user="Beethoven" />
<Welcome user="Johann" />
```

You will see that we have three different users but, you will see that we don't have the username displayed on the screen.

So, that means we made a mistake and the mistake is we are using `props.name` in Welcome component.

***Welcome.js***

```JSX
return <h1>Hello {props.name} from Welcome Component</h1>;
```

The problem of our prop is the `name`. I'm going to go and I will simply going to change this as `user` and I will save it and you will see that we have that `Hello Ludwig from Welcome Component` along with all of the other users been displayed on the screen.

***Welcome.js***

```JSX
function Welcome(props) {
  console.log(props);
  return <h1>Hello {props.user} from Welcome Component</h1>;
}

export default Welcome;
```

Now, try thinking and practice on how to display the `lastName` on the screen.

# Class Based Component

So, this is how you can use the components and the props and this component is called a `function component` because you are writing it as a JavaScript function.

And another way of writing a component which is using a `class based component`.

But, I'm not going to show the `class based component` because the class based component is mostly used on the Legacy (outdated or obsolete) application and any modern React application is going to use the `function component`.

So, you can relate this article of components and props with my another [article about understanding the state and the lifecycle with examples](https://amirahnasihah.hashnode.dev/react-tutorial-beginner-usestate-and-useeffect-with-example-code).

# Full Code

***App.js***

```JSX
import Welcome from "./components/Welcome";

function App() {
  const userInfo = {
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

***Welcome.js***

```JSX
function Welcome(props) {
  console.log(props);
  return <h1>Hello {props.user} from Welcome Component</h1>;
}

export default Welcome;
```

# Share This Tutorial

👉 Please share my posts with the community at [**daily.dev**](http://daily.dev) / social media by adding the article's URL to the feed. By adding my article's URL to the feed, I can share my insights and knowledge with other tech enthusiasts and contribute to the passionate community.

`Cheers✨`