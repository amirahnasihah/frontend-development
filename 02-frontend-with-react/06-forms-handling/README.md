Forms

HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

```javascript
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

This form has the default HTML form behavior of browsing to a new page when the user submits the form. If you want this behavior in React, it just works. But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called “controlled components”.

// Going to see how we can handle forms on reactjs.
// so, what im gonna to do here is
// first, let me create a simple form.
// so, im going to create a new component and name it as Form.js
// and here in Form.js Im gonna have a function Form() and then im gonna export this form
// so let me have it form, export default form
// and then what i will do is im gonna create a form.

## Create Form Component

// so, im gonna create a form
// lets create a form so we will to return a jsx.
// alright, inside the jsx Im gonna have a form and then im gonna have a label and the label will be the name. Then, I will have the input element.
// So, let me have the input type equals to text <input type='text'> and then im gonna have a value here.
// So, i will show you how we set the value and then im going to have in onChange handler
// so, whenever you type something we have to get the final value.
// So, this is the simple form and what im going to do is im going to have a break tag here.
// so let me have a break tag and then im gonna copy the same thing for my email as well.
// so let me have the email then im gonna have a breaktag again.
// then im gonna have a same thing and this time will be a password. alright, the type will be password and email. so let me change it

// function Form() {
//   return (
//     <form>
//       <label>Name</label>
//     </form>
//   );
// }

// export default Form;
function Form() {
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



// alright, the type will be password and email. so let me change it
// and then in the end we need to have a button, which will be a submit button
// so, what i will do here is that im gonna have a button and gonna have a type of submit and then here im gonna add Submit.
// <button type="submit">Submit</button>
<button type="submit">Submit</button>

## 

// and then what i will do here is that im going to create a local state for my forms.
// so what i will do the initial value of my form should be empty.
// so, i will create an initial
// so lets a constant and im going to have the initialValue
// alright, and the initial value of the name would be empty.
// and then, im gonna have the email, the email would be empty string
// and then im gonna have the password, the password will also be an empty.
// const initialValue = {
//   name: "",
//   email: "",
//   password: ""
// };

 const initialValue = {
   name: "",
   email: "",
   password: ""
 };


// so, this is my initial form values which i want and then what i will do is im gonna create a state variable using useState
// so let me have a state variable of formData and im gonna have the setFormData and this will be equals to a useState()
// and then im gonna give the initialValue as the initial state
// so let me have the initial value.

// const [formData, setFormData] = useState(initialValue);
const [formData, setFormData] = useState(initialValue);

## Display the initial values

// and now what we will do is we want to display the name first
// so, if we want to display the name, so what i will do is im going to use this as {formData.name}
// alright, so this will be a {formData.email}
// and this will be a {formData.password}
// so these are the initial values

// and now what i will do here is that for the onChange is
// so, lets remove the onChange first
// we will add it later on.

   <form>
     <label>Name</label>
     <input type="text" value={formData.name} />
     <br />
     <label>Email</label>
     <input type="email" value={formData.email} />
     <br />
     <label>Password</label>
     <input type="password" value={formData.password} />
     <br />
     <button type="submit">Submit</button>
   </form>
// and now lets see what actually we can see when we are displayed this form or render this form.
// so, i'm gonna go to App.js and lets import the form and gonna display the form. so lets add the Form and save it.

// as soon as i saved it, you will see that we have the form and we have submit button
// so lets go back to Form.js
// so, let me type something. so before typing something, what i want to show you that initially we dont have anything
// we have everything as empty
// now, if i make change as 'ludwig' in name and if i save it,
// and it now if refresh then you will see that i have the ludwig value here showing on the screen
// but lets give this name an empty string we dont want it.
// and now if i refresh again, then we will not see anything here.
// now that what i want is that as soon as i type somthing here on the screen, im not able to see anything here

# Controlled Component

// controlled components
// so thats where what we have to do is we have to add a onChange because this is called a 'controlled components'
// so, for a control components you manage the input data with the help of the state.
// now what i want is that as soon as i type something i need to feed the value in my state.

// so what i will i do is im gonna have onChange.
// so let me add the onChange and on this onChange, i will have an arrow function()
// alright, this will have an event (e) and then i have to set my form data with setFormData
// so to set the form data first, i need to have all the initial value in my formData
// so im gonna have the formData here
// alright, then i want to update only the name, so i will have the name and the new value of the name will be event.target.value
// <input type="text" value={formData.name} onChange={(e) => {setFormData(...formData, name: e.target.value)}} />

<input type="text" value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value});}} />

     <input
       type="text"
       value={formData.name}
       onChange={(e) => {
         setFormData({...formData, name: e.target.value});
       }}
     />
// alright, im going add the brackets here
// so its an object so i need to add a brackets here
// so now i have that and i have to do a very similar thing for my email and the password
// so, im going to copy what we did just now the onChange
// and im gonna add it to email and password
// i will just change this name to email and password.

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
dsdas

// and what i want is whenever i fill in my form and then i submit my form i need to have the values.
// so, in order to print the values, what i will do is im gonna simply have a paragraph tag here below the submit button
// and then im gonna have here a JSON.stringify and im gonna print the formData.
// alrightt, i have the form data here
// <p>{JSON.stringify(formData)}</p>
<p>{JSON.stringify(formData)}</p>
// and now currently its empty
// so, what i want is whenever i click on the submit
// i need to have the values

// so, what i will do here is lets go and add an onSubmit here inside the form tag,
// so, i will an onSubmit and on the onSubmit i will have a function called handleSubmit
// <form onSubmit={handleSubmit}>

// alright, i need to define the handleSubmit
// so, lets go here above the return method and i want to have a constant handleSubmit
// this will be an arrow function and its gonna have an event.
// const handleSubmit = (e) => {};
// alright, but now if you notice here when i click on the submit, my page gets refresh and i dont want to do that
// so, im gonna use event.preventDefault
// e.preventDefault
// alright, this will prevent the refresh of my page

// now, you'll see we dont have any refresh and now lets have an alert
// so, im gonna have an alert and inside the alert what i will do is maybe i can write this JSON.stringify()
// alert(JSON.stringify(formData));
// and here im gonna have to beautify it.
// so im gonna have an undefined and im going to give the space as 2
// alert(JSON.stringify(formData, undefined, 2));
 const handleSubmit = (e) => {
   e.preventDefault();
   alert(JSON.stringify(formData));
 };


// alright, i will save it and now lets give it a try
// so, im gonna type 'ludwig' here on the screen for Name
// lets have an email address
// im going to give a random password
// and when i click on the submit button, will see an alert with the values
// so, you will see that when i click on the submit, i see the value of my form
// the name, the email address, and the password

// so, in this way you can actually handle the forms
// actually, the controlled component of the forms in the react application

// so, in the next one, we are going to see how we can do the lifting of the state up in react application

# Full Code

`**Form.js**`

```jsx
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
