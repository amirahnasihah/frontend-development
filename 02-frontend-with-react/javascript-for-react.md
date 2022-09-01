# Creating Functions

Whenever you want to perform repetitive task with JavaScript, you can use a function.

Here's are the different syntax options that can be used to create a function.

## Function Declarations

Also known as function definition starts with the function keyword, followed by the function's name, e.g, `funDecl`. The JavaScript statements that are part of the function are defined between the curly braces `{}`.

``` JavaScript
function funDecl() {
  console.log("You're doing great!");
}
```

Once have declared the function, you need to invoke or call to see it execute:

```JavaScript
function funDecl() {
  console.log("You're doing great!");
}

funDecl();
```

Once invoked, you will see `You're doing great!` on the console.

## Function Expression

Create the function as a variable.

```JavaScript
const logCompliment = function() {
  console.log("You're doing great!");
};

logCompliment();
```

Once invoked, you will see the same result.

### Function Hoisting

Function Declaration are hoisted. You can invoke or call the function before you declare it.

```JavaScript
// Invoking the function before it's declared
hey();
// Function Declaration
function hey() {
  alert("hey!");
}
```

Function Expression are not hoisted. You cannot invoke a function created by a function expression. It will cause a TypeError error.

```JavaScript

```