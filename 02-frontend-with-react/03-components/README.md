#Props vs State


##React State

The state is an updatable structure that is used to contain data or information about the component. The state in a component can change over time. The change in state over time can happen as a response to user action or system event. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. They are also responsible for making a component dynamic and interactive.

A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. A state represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. To set an initial state before any interaction occurs, we need to use the getInitialState() method.

For example, if we have five components that need data or information from the state, then we need to create one container component that will keep the state for all of them.

###Defining State

To define a state, you have to first declare a default set of values for defining the component's initial state. To do this, add a class constructor which assigns an initial state using this.state. The 'this.state' property can be rendered inside render() method.

Example

The below sample code shows how we can create a stateful component using ES6 syntax.

```js
import React, { Component } from 'react';
class App extends React.Component { constructor() { 
	super(); this.state = { displayBio: true }; } render() { const bio = this.state.displayBio ? ( <div> <p><h3>Skyeagle is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p> </div> ) : null; return ( <div> <h1> Welcome to </h1> { bio } </div> );
} 
} 


export default App;
```

To set the state, it is required to call the `super()` method in the constructor. It is because `this.state` is uninitialized before the `super()` method has been called.

Output

*pic*

###Changing the State

We can change the component state by using the setState() method and passing a new state object as the argument. Now, create a new method toggleDisplayBio() in the above example and bind this keyword to the toggleDisplayBio() method otherwise we can't access this inside toggleDisplayBio() method.

this.toggleDisplayBio = this.toggleDisplayBio.bind(this); 

Example

In this example, we are going to add a button to the render() method. Clicking on this button triggers the toggleDisplayBio() method which displays the desired output.

import React, { Component } from 'react'; class App extends React.Component { constructor() { super(); this.state = { displayBio: false }; console.log('Component this', this); this.toggleDisplayBio = this.toggleDisplayBio.bind(this); } toggleDisplayBio(){ this.setState({displayBio: !this.state.displayBio}); } render() { return ( <div> <h1>Welcome to </h1> { this.state.displayBio ? ( <div> <p><h4>Skyeagle is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p> <button onClick={this.toggleDisplayBio}> Show Less </button> </div> ) : ( <div> <button onClick={this.toggleDisplayBio}> Read More </button> </div> ) } </div> ) } } export default App; 

Output:

*pic*

When you click the Read More button, you will get the below output, and when you click the Show Less button, you will get the output as shown in the above image.


----

##React Props

Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.

Props are immutable so we cannot modify the props from inside the component. Inside the components, we can add attributes called props. These attributes are available in the component as this.props and can be used to render dynamic data in our render method.

When you need immutable data in the component, you have to add props to reactDom.render() method in the main.js file of your ReactJS project and used it inside the component in which you need. It can be explained in the below example.

Example

`App.js`

import React, { Component } from 'react'; class App extends React.Component { render() { return ( <div> <h1> Welcome to { this.props.name } </h1> <p> <h4> Skyeagle is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. </h4> </p> </div> ); } } export default App; 

`Main.js`

import React from 'react'; import ReactDOM from 'react-dom'; import App from './App.js'; ReactDOM.render(<App name = "Skyeagle!!" />, document.getElementById('app')); 

Output

*pic*

###Default Props

It is not necessary to always add props in the reactDom.render() element. You can also set default props directly on the component constructor. It can be explained in the below example.

Example

`App.js`

import React, { Component } from 'react'; class App extends React.Component { render() { return ( <div> <h1>Default Props Example</h1> <h3>Welcome to {this.props.name}</h3> <p>Skyeagle is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p> </div> ); } } App.defaultProps = { name: "Skyeagle" } export default App; 

`Main.js`

import React from 'react'; import ReactDOM from 'react-dom'; import App from './App.js'; ReactDOM.render(<App/>, document.getElementById('app'));


----


#State and Props

It is possible to combine both state and props in your app. You can set the state in the parent component and pass it in the child component using props. It can be shown in the below example.

Example

`App.js`

import React, { Component } from 'react'; class App extends React.Component { constructor(props) { super(props); this.state = { name: "Skyeagle", } } render() { return ( <div> <JTP jtpProp = {this.state.name}/> </div> ); } } class JTP extends React.Component { render() { return ( <div> <h1>State & Props Example</h1> <h3>Welcome to {this.props.jtpProp}</h3> <p>Skyeagle is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad.</p> </div> ); } } export default App; 

`Main.js

import React from 'react'; import ReactDOM from 'react-dom'; import App from './App.js'; ReactDOM.render(<App/>, document.getElementById('app'));


Props Validation

 

Props are an important mechanism for passing the read-only attributes to React components. The props are usually required to use correctly in the component. If it is not used correctly, the components may not behave as expected. Hence, it is required to use props validation in improving react components.

Props validation is a tool that will help the developers to avoid future bugs and problems. It is a useful way to force the correct usage of your components. It makes your code more readable. React components used special property PropTypes that help you to catch bugs by validating data types of values passed through props, although it is not necessary to define components with propTypes. However, if you use propTypes with your components, it helps you to avoid unexpected bugs.

Validating Props

App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.

Syntax:

class App extends React.Component { render() {} } Component.propTypes = { /*Definition */}; 

 

ReactJS Props Validator

ReactJS props validator contains the following list of validators.

PropsType

Description

PropTypes.any

The props can be of any data type.

PropTypes.array

The props should be an array.

PropTypes.bool

The props should be a boolean.

PropTypes.func

The props should be a function.

PropTypes.number

The props should be a number.

PropTypes.object

The props should be an object.

PropTypes.string

The props should be a string.

PropTypes.symbol

The props should be a symbol.

PropTypes.instanceOf

The props should be an instance of a particular JavaScript class.

PropTypes.isRequired

The props must be provided.

PropTypes.element

The props must be an element.

PropTypes.node

The props can render anything: numbers, strings, elements or an array (or fragment) containing these types.

PropTypes.oneOf()

The props should be one of several types of specific values.

PropTypes.oneOfType

([PropTypes.string,

PropTypes.number])

The props should be an object that could be one of many types.

Example

Here, we are creating an App component which contains all the props that we need. In this example, App.propTypes is used for props validation. For props validation, you must have to add this line: import PropTypes from 'prop-types' in App.js file.

App.js

import React, { Component } from 'react'; import PropTypes from 'prop-types'; class App extends React.Component { render() { return ( <div> <h1>ReactJS Props validation example</h1> <table> <tr> <th>Type</th> <th>Value</th> <th>Valid</th> </tr> <tr> <td>Array</td> <td>{this.props.propArray}</td> <td>{this.props.propArray ? "true" : "False"}</td> </tr> <tr> <td>Boolean</td> <td>{this.props.propBool ? "true" : "False"}</td> <td>{this.props.propBool ? "true" : "False"}</td> </tr> <tr> <td>Function</td> <td>{this.props.propFunc(5)}</td> <td>{this.props.propFunc(5) ? "true" : "False"}</td> </tr> <tr> <td>String</td> <td>{this.props.propString}</td> <td>{this.props.propString ? "true" : "False"}</td> </tr> <tr> <td>Number</td> <td>{this.props.propNumber}</td> <td>{this.props.propNumber ? "true" : "False"}</td> </tr> </table> </div> ); } } App.propTypes = { propArray: PropTypes.array.isRequired, propBool: PropTypes.bool.isRequired, propFunc: PropTypes.func, propNumber: PropTypes.number, propString: PropTypes.string, } App.defaultProps = { propArray: [1,2,3,4,5], propBool: true, propFunc: function(x){return x+5}, propNumber: 1, propString: "Skyeagle", } export default App; 

Main.js

import React from 'react'; import ReactDOM from 'react-dom'; import App from './App.js'; ReactDOM.render(<App/>, document.getElementById('app')); 

Output:

 

ReactJS Custom Validators

ReactJS allows creating a custom validation function to perform custom validation. The following argument is used to create a custom validation function.

props: It should be the first argument in the component.

propName: It is the propName that is going to validate.

componentName: It is the componentName that are going to validated again.

Example

var Component = React.createClass({ App.propTypes = { customProp: function(props, propName, componentName) { if (!item.isValid(props[propName])) { return new Error('Validation failed!'); } } } })



----
Props and state are related. The state of one component will often become the props of a child component. Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes.

<MyChild name={this.state.childsName} />
The parent's state value of childsName becomes the child's this.props.name. From the child's perspective, the name prop is immutable. If it needs to be changed, the parent should just change its internal state:

this.setState({ childsName: 'New name' });
and React will propagate it to the child for you. A natural follow-on question is: what if the child needs to change its name prop? This is usually done through child events and parent callbacks. The child might expose an event called, for example, onNameChanged. The parent would then subscribe to the event by passing a callback handler.

<MyChild name={this.state.childsName} onNameChanged={this.handleName} />
The child would pass its requested new name as an argument to the event callback by calling, e.g., this.props.onNameChanged('New name'), and the parent would use the name in the event handler to update its state.

handleName: function(newName) {
   this.setState({ childsName: newName });

For parent-child communication, simply pass props.

Use state to store the data your current page needs in your controller-view.

Use props to pass data & event handlers down to your child components.

These lists should help guide you when working with data in your components.

Props
are immutable
which lets React do fast reference checks
are used to pass data down from your view-controller
your top level component
have better performance
use this to pass data to child components

State
should be managed in your view-controller
your top level component
is mutable
has worse performance
should not be accessed from child components
pass it down with props instead



----------

#Props vs State (demo)

Props are read-only. | State changes can be asynchronous.

1. Props are read-only. State changes can be asynchronous.

4. Props can be accessed by the child component. State cannot be accessed by child components.


What does this mean props are read only?
Props are read only means you can't change the value, but it doesn't mean you can't update it, for that you need to pass updated props back to child component and go any lifecycle methods to it.

They are readonly in the context of a component, meaning, you can't assign a new value to them.

But a parent that passes props to child, can pass different props based on some condition. In that case, the child get rendered with a different props.

Example:

```js
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div>
        <Child prop1={this.state.value} />
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>Click me</button>
      </div>
    );
  }
}
```

In my example, each click on the parent's button will change it state, therefore, React will re-render it, and then this parent will pass a new value to Child component.


Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.


Using Props in React
I will be explaining how to use Props step by step.

Firstly, define an attribute and its value(data)
Then pass it to child component(s) by using Props
Finally, render the Props Data
In my previous article, I’ve shown how to create & call a React component inside another component. So in this example, we have a ParentComponent including another component (child):

class ParentComponent extends Component {  
  render() {
    return (
      <h1>
        I'm the parent component.
        <ChildComponent />
      </h1>
    );
  }
}
And this is our ChildComponent:

const ChildComponent = () => {  
  return <p>I'm the 1st child!</p>; 
};
The problem here is that when we call the ChildComponent multiple times:

class ParentComponent extends Component {  
  render() {
    return (
      <h1>
        I'm the parent component.
        <ChildComponent />
        <ChildComponent />
        <ChildComponent />
      </h1>
    );
  }
}
It always renders the same string again and again:


But what we like to do here is to get dynamic outputs, because each child component may have different data, and let’s see how we can solve this issue by using props…


---------
sauce: 
http://home.ubalt.edu/abento/701/javascript/eventehand.html

https://www.javatpoint.com/react-state-vs-props

https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0

https://stackoverflow.com/questions/27991366/what-is-the-difference-between-state-and-props-in-react
