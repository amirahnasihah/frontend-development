Sectiin 2 - Composition & Inheritance

```javascript
export default function WelcomeDialog() {
 return <FancyBorder></FancyBorder>;
}

function FancyBorder(props) {
 return <div>{props.children}</div>;
}
```

// alright, now in this video we will understand what is composition versus inheritance in react.
// so, react has very powerful composition model and it is recommended to use composition instead of inheritance to reuse the code between components.
// so, let's understand this with the help of of an example.

// so, what im going to do is im going to create a new component and i will name the component as WelcomeDialog.js
// this is something kind of a dialogue box that we are going to create.

// so, in WelcomeDialog.js
// im gonna have a function which will have a WelcomeDialog()
// alright, and then lets export this function.
// so, im gonna export default WelcomeDialog
// and now im going to do is im gonna create another component which will be a FancyBorder
// so lets have a FancyBorder function and will have a props.
// and its gonna return <div> tag and sometimes we dont know what props we are going to get.
function FancyBorder(props) {
 return <div></div>;
}

// so, there is another one thing which we can do is we can simply use prop.children.
// so, this children will give us whatever we pass inside the FancyBorder box, its gonna take it as a children
// so, let me show you how it happens.
function FancyBorder(props) {
 return <div>props.children</div>;
}

// so, if we go here inside the WelcomeDialog() function and this is going to return a JSX here
// and im gonna return a JSX as FancyBorder
// alright, and now whatever i pass inside in  between this FancyBorder component, will be taken as a children prop.
// so, now if i pass something .. before i pass something, let's do one thing
// lets go to App.js and import the WelcomeDialog component
// import WelcomeDialog from "./components/WelcomeDialog";

// alirght, save it
// Now you will see that I have a props.children in WelcomeDialog component
// so, what i have to do is i have to use the brackets
function FancyBorder(props) {
 return <div>{props.children}</div>;
}

// and now, if i do the brackets, i dont see anything

// and now, if i do the brackets, i dont see anything, but i need t o give some additional information here in App.js

// so, what i will do here in WelcomeDialog component is im gonna have `<h1>` tag and inside the h1 tag will have className and on the className is "Dialog-title"
// and the title will be Welcome
<h1 className="Dialog-title">Welcome</h1>

// alright, then we have a paragraph in the title
// so, lets have a paragraph and the paragraph is Thankyou for visiting our spacecraft.
<p>Thankyou for visiting our spacecraft</p>
<p>Thankyou for visiting our spacecraft</p>

// and i save it

// now, as soon as i save it, you will see that automatically whatever the children's are present in the FancyBorder component, will be taken as a prop.children
// so this way you actually can do the containment when sometimes you dont know dont know what the props will be passed.
export default function WelcomeDialog() {
 return (
   <FancyBorder>
     <h1 className="Dialog-title">Welcome</h1>
     <p>Thankyou for visiting our spacecraft</p>
   </FancyBorder>
 );
}

function FancyBorder(props) {
 return <div>{props.children}</div>;
}


// now, lets take another example how this actually helps in reusability.
// so, what i will do is im gonna create a new component in WelcomeDialog.js

// so, im gonna have a function Dialog() and im going to create a Dialog
// so, this Dialog will be a generic dialog and im gonna pass the props in  the diaalog and inside the Dialog() im gonna return a JSX.
// so, im gonna cut inside the WelcomeDialog component and put in the Dialog component
function Dialog(props) {
 return (
   <FancyBorder>
     <h1 className="Dialog-title">Welcome</h1>
     <p>Thankyou for visiting our spacecraft</p>
   </FancyBorder>
 );
}


// alright, now what i can do in Dialog component is i can actually have the props.
// so, whatever i have the props, i can use this as props.title
// and for <p> tag im going to make use of props.content
<FancyBorder>
<h1 className="Dialog-title">{props.title}</h1>
<p>{props.content}</p>
</FancyBorder>
// alright, so now we can pass the title and the content as a prop

// so now lets go to the WelcomeDialog component and in the WelcomeDialog, what i will do is im gonna return a JSX and this JSX will have the Dialog component.




// and in this Dialog component, what i can actually do is i can have the title as Welcome to React Course. and then i can have the content as This is React Course.
export default function WelcomeDialog() {
 return (
   <Dialog title="Welcome to React Course" content="This is React Course" />
 );
}
// and now we will see on the screen that we Welcome to React Course. This is React Course.


// but now what if i want to reuse this same.

// so, what i can do is i can use the same thing again. I will copy this
// <Dialog title="Welcome to React Course" content="This is React Course" />
// alright, and the im going to add it here.

// so, i have to pass an empty fragment because now i have a multi-line JSX.
export default function WelcomeDialog() {
 return (
   <>
     <Dialog title="Welcome to React Course" content="This is React Course" />
     <Dialog title="Welcome to React Course" content="This is React Course" />
   </>
 );
}

// alright, and lets change the title.
// <Dialog title="Welcome to JS Course" content="This is JS Course" />
<Dialog title="Welcome to JS Course" content="This is JS Course" />

// and i will save it

//and now you see that we have a special dialog box, which will take the title and the content and it can be reused.
// so, this is called composition in react where you can use the props.children for containment and then you can create some specialized dialog box where you can reuse them.

// so, with the help of this composition:
// <Dialog title="Welcome to React Course" content="This is React Course" />
// <Dialog title="Welcome to JS Course" content="This is JS Course" />
<Dialog title="Welcome to React Course" content="This is React Course" />
     <Dialog title="Welcome to JS Course" content="This is JS Course" />

// you can solve all the problems and thats where is no inheritance required in the react


## FULL

App.js

```javascript
import WelcomeDialog from "./components/WelcomeDialog";
import "./styles.css";

export default function App() {
 return (
   <div>
     <WelcomeDialog />
   </div>
 );
}
```

WelcomeDialog.js

```javascript
export default function WelcomeDialog() {
 return (
   <>
     <Dialog title="Welcome to React Course" content="This is React Course" />
     <Dialog title="Welcome to JS Course" content="This is JS Course" />
   </>
 );
}

function FancyBorder(props) {
 return <div>{props.children}</div>;
}

function Dialog(props) {
 return (
   <FancyBorder>
     <h1 className="Dialog-title">{props.title}</h1>
     <p>{props.content}</p>
   </FancyBorder>
 );
}
```