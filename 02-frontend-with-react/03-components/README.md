# Props

"Props" stands for "Properties." They are read-only components. It is an object which stores the value of the attributes of a tag and works similarly to the HTML attributes. It gives a way to pass data from one component to another component. It is similar to function arguments. Props are passed to the component in the same way as arguments are passed in a function.

Props are immutable, so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as `this.props` and can be used to render dynamic data in our render method.

When you need immutable data in the component, you have to add props to the `reactDom.render()` method in the main.js file of your ReactJS project and use it inside the component in which you need it. It can be explained in the below example.

# State

The state is an updatable structure that is used to contain data or information about the component. The state of a component can change over time. The change in state over time can happen as a response to user action or a system event. A component with the state is known as a "stateful component." It is the heart of the react component that determines the behavior of the component and how it will render. They are also responsible for making a component dynamic and interactive.

A state must be kept as simple as possible. It can be set by using the setState() method, and calling the setState() method triggers UI updates. A state represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. To set an initial state before any interaction occurs, we need to use the getInitialState() method.

For example, if we have five components that need data or information from the state, then we need to create one container component that will hold the state for all of them.

## Defining State

To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside the render() method.

example

The below sample code shows how we can create a stateful component using ES6 syntax.


```js
import React, { Component } from "react";
class App extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: true };
    }
    render() {
        const bio = this.state.displayBio ? (
            <div>
                {" "}
                <p>
                    <h3>
                        Skyeagle is one of the best Java training institute in
                        Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have
                        a team of experienced Java developers and trainers from
                        multinational companies to teach our campus students.
                    </h3>
                </p>{" "}
            </div>
        ) : null;
        return (
            <div>
                {" "}
                <h1> Welcome to </h1> {bio}{" "}
            </div>
        );
    }
}
export default App;

``` 


To set the state, it is required to call the `super()` method in the constructor. It is because `this.state` is uninitialized before the `super()` method has been called.

Output

 

## Changing the State

We can change the component state by using the `setState()` method and passing a new state object as the argument. Now, create a new method `toggleDisplayBio()` in the above example and bind this keyword to the` toggleDisplayBio()` method otherwise we can't access this inside `toggleDisplayBio()` method.

`this.toggleDisplayBio = this.toggleDisplayBio.bind(this); `

Example

In this example, we are going to add a button to the render() method. Clicking on this button triggers the toggleDisplayBio() method which displays the desired output.


```js
import React, { Component } from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        console.log("Component this", this);
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }
    toggleDisplayBio() {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                {" "}
                <h1>Welcome to </h1>{" "}
                {this.state.displayBio ? (
                    <div>
                        {" "}
                        <p>
                            <h4>
                                Skyeagle is one of the best Java training
                                institute in Noida, Delhi, Gurugram, Ghaziabad
                                and Faridabad. We have a team of experienced
                                Java developers and trainers from multinational
                                companies to teach our campus students.
                            </h4>
                        </p>{" "}
                        <button onClick={this.toggleDisplayBio}>
                            {" "}
                            Show Less{" "}
                        </button>{" "}
                    </div>
                ) : (
                    <div>
                        {" "}
                        <button onClick={this.toggleDisplayBio}>
                            {" "}
                            Read More{" "}
                        </button>{" "}
                    </div>
                )}{" "}
            </div>
        );
    }
}

export default App;
``` 


Output:

 

When you click the Read More button, you will get the below output, and when you click the Show Less button, you will get the output as shown in the above image.



# Combination of State and Props

It is possible to combine both state and props in your app. You can set the state in the parent component and pass it in the child component using props. It can be shown in the below example.

Example

App.js

```js
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Skyeagle" };
    }
    render() {
        return (
            <div>
                {" "}
                <JTP jtpProp={this.state.name} />{" "}
            </div>
        );
    }
}
class JTP extends React.Component {
    render() {
        return (
            <div>
                {" "}
                <h1>State & Props Example</h1>{" "}
                <h3>Welcome to {this.props.jtpProp}</h3>{" "}
                <p>
                    Skyeagle is one of the best Java training institute in
                    Noida, Delhi, Gurugram, Ghaziabad and Faridabad.
                </p>{" "}
            </div>
        );
    }
}
export default App;

```

Main.js

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("app"));

```

# Differences between State vs. Props

State

The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.

Props

Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.
