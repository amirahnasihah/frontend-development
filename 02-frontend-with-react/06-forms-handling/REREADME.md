# Handling Forms in React: A Guide to Controlled Components

When working with forms in React, handling user input requires a different approach compared to other DOM elements. HTML form elements have built-in internal state management, and in React, it's convenient to have a JavaScript function that handles form submission while providing access to the user-entered data. This is where "controlled components" come into play. In this article, we'll explore how to handle forms using controlled components in React.

For example, this form in plain HTML accepts a single name:

```javascript
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

# Capturing Name, Email, and Password Fields

To illustrate the concepts, let's create a simple form component named `Form.js`. The form will include **fields for name, email, and password**.

In the below code, we import the `useState` hook from React, which allows us to create a state variable to store the form data. The `initialValue` constant represents the initial state of the form fields, with all values set to empty strings.

We use the `useState` hook to define the `formData` state variable and its corresponding setter function, `setFormData`. The initial value of `formData` is set to `initialValue`. Here's the initial structure of the component:

```javascript
import { useState } from "react";

function Form() {
  const initialValue = {
    name: "",
    email: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialValue);

  return (
      <form>
        <label>Name</label>
        <input type="text" value={} onChange={} />
        <br />
        <label>Email</label>
        <input type="email" value={} onChange={} />
        <br />
        <label>Password</label>
        <input type="password" value={} onChange={} />
      </form>
    );

}

export default Form;
```

## To Submit the Form

To handle form submission, we define the `handleSubmit` function. This function is called when the user submits the form. We prevent the default form behavior of refreshing the page by calling `e.preventDefault()`. Instead, we display an alert with the stringified form data using `JSON.stringify(formData)`.

```javascript
import { useState } from "react";

function Form() {
    // existing code

    const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    };
}

export default Form;
```

## The `value` attribute

Within the `return` statement, we define the javascript structure of the form. **Each input element is associated with a specific property in the `formData` object**. The `value` attribute of each input element is set to the value stored in the `formData` state.

> Here are the other different input types you can use in HTML: [HTML Input Types element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

```javascript
import { useState } from "react";

function Form() {
    // existing code

    return (
    <form>
      <label>NAME: </label>
      <input type="text" placeholder="enter name" value={formData.name} /> 

      <label>EMAIL: </label>
      <input type="email" placeholder="enter email" value={formData.email} />

      <label>PASSWORD: </label>
      <input
        type="password"
        placeholder="enter password"
        value={formData.password} // add this
      />
    </form>
  );
}

export default Form;
```

To update the form data in response to user input, we **define an `onChange` event handler for each input element**. The event handler receives an `e` event object containing the new value entered by the user. We use the setter function `setFormData` to update the `formData` state with the new value while maintaining the existing form data. This is done by spreading the previous `formData` object using the spread syntax (`{ ...formData }`) and overriding the specific property with the new value (`{ ...formData, name: e.target.value }`).

By following this approach, we create controlled components where the input values are managed by the React state. As a result, whenever the user types in an input field, the state is updated, and the corresponding input element reflects the new value.

```javascript
import { useState } from "react";

function Form() {
    // existing code

    return (
    <form>
      <label>NAME: </label>
      <input
        type="text"
        placeholder="enter name"
        value={formData.name}
        onChange={(e) => { // add this
          setFormData(e.target.value);
        }}
      />

      <label>EMAIL: </label>
      <input
        type="email"
        placeholder="enter email"
        value={formData.email}
        onChange={(e) => {
          setFormData(e.target.value);
        }}
      />

      <label>PASSWORD: </label>
      <input
        type="password"
        placeholder="enter password"
        value={formData.password}
        onChange={(e) => {
          setFormData(e.target.value);
        }}
      />
    </form>
  );
}

export default Form;
```

## Submitting the form

To display the current form data, we can use the `JSON.stringify(formData)` method within a `<p>` element. This will show a string representation of the `formData` object, allowing us to verify that the state is being updated correctly.

When the user submits the form by clicking the "Submit" button, the `handleSubmit` function is called. We prevent the default form submission behavior using `e.preventDefault()` to avoid page refresh. Instead, we can perform any necessary form processing or send the form data to a server.

In the example above, an alert is shown with the stringified `formData` object when the form is submitted. You can replace the `alert` function with your own logic, such as making an API request or updating a database.

To use the `Form` component in your application, import it and render it within another component:

```javascript
import React from "react";
import Form from "./Form";

function App() {
  return (
    <div>
      <h1>Form Example</h1>
      <Form />
    </div>
  );
}

export default App;
```

In the `App` component, we import and render the `Form` component within a `<div>`. You can modify the surrounding javascript and add additional components as needed.

By implementing controlled components in React, you can easily handle form input and manage the form state using React's state management capabilities. This approach provides a reliable way to capture user input and perform actions based on the submitted form data.


# Full Code

```javascript
import { useState } from "react";

function Form() {
  const initialValue = {
    name: "",
    email: "",
    password: ""
  };

  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <br />
      <label>Password</label>
      <input
        type="password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
      <br />
      <button type="submit">Submit</button>
      <p>{JSON.stringify(formData)}</p>
    </form>
  );
}

export default Form;
```

---

👉 Please share my posts with the community at [**daily.dev**](http://daily.dev) / social media by adding the article's URL to the feed. By adding my article's URL to the feed, I can share my insights and knowledge with other tech enthusiasts and contribute to the passionate community.

`Cheers✨`

> <mark>Thank you</mark> for your continued support and for sticking around even though I've been away for a bit. I've been busy with some exciting projects, but I'm thrilled to be back and writing again!