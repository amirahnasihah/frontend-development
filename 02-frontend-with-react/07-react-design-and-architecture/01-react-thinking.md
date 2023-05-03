React Thinking with Lifting the State Up

function Search(props) {}

export default Search;

// alright, guys in this video, we will understand about how we do the lifting of state up and before creating an example for that.
// we first have to understand how we think in the react.
// so, let me show you a slide where you will understand that how we think in react and build the components.
// so, in this slide, we can see that we have a page.
// let me do a slideshow.
// So, we have a search bar and we can type anything on this input box and based on the input whatever we are typing, we are filtering the results of the list.
// so in this case, if we want to build this functionality.
// First, we have to think that how we can break this functionality into different components.
// so you will see that now we have three different boxes with three different colors.
// the gray color is a outer box which will have both the search bar and the filtered list.
// and then the search bar is a separate Component and the filtered list is a separate Component.
// so, in order to build this functionality in react we have to create three different components and then we can create this search functionality very easily.
// so let's try to build this search functionality and here we will also see that how we are going to do the lifting up of the State.
// So, let's go back to the code.
// So, the first thing we will do is we will create a Search components.
// So, let me have a Search.js inside the components folder.
// alright, in this Search.js, im gonna have a function Search(), which is going to take some props.
// alright, and then im gonna have an export default of this Search.
function Search(props) {}

export default Search;

// alright, and then what i want is, I also want a component which will display the list.
// so, im going to create one more component and the name of the component will be the List.js
// in the List.js also im gonna have a function List(), which is going to take some props.
function List(props) {}

export default List;
// alright, now what i want is that in my App.js
// so, let's go to the App.js
// and this App.js will be the outer component which will contain the search bar and the results.
// so here I can use the search bar and the list.
// so what i will do is im gonna have the <Search/> component
// alright and below the Search component, i will have the <List /> component.

import List from "./components/List";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
 return (
   <div className="App">
     <Search />
     <List />
     <h2>Start editing to see some magic happen!</h2>
   </div>
 );
}

// alright and below the Search component, i will have the <List /> component.
// alright, im wrapping it in a fragment.
// so now let's import these Search components and this will be coming from the './components/Search'.
// alright, and im also going to import the List and this will be coming from the './components/List'.
// and i will save it and refresh the page
// And now we will have it and we should be able to see our components but we dont see anything here because we havent returned anything here or in other words we dont return the JSX.

// so, lets return a jsx in the Search component.
// so what i will do here is im gonna return a JSX.
// and this will have a <div> and inside the <div> im gonna have the input of type 'text' and then the value.
// alright and then i will have the onChange
 return (
   <div>
     <input type="text" value={} onChange={} />
   </div>
 );


// and now what we have to do is we have to create a State first
// so, in order to handle this, lets create a state.
// im going to have a constant.
// im going to have a searchTerm and i will have these setSearchTerm
// alright, and these two will be equals to the useState()
const [searchTerm, setSearchTerm] = useState();


// so, we have to import the useState()
// alright, lets import the useState hook and this useState will be coming from the react
import { useState } from "react";


// and now what we have to do is this searchTerm will become the value.
// so, let's add it input tag of value attribute
// <input type="text" value={searchTerm} onChange={} />
<input type="text" value={searchTerm} onChange={} />

// save it
// okay and since we are getting an error, let's see what the error is.
// we will have a syntax error showing JSX attributes must only be assigned a non-empty expression
// so, we will also add the onChange
// so, onChange will be an arrow function of an event and this will have a setSearchTerm
// <input type="text" value={searchTerm} onChange={setSearchTerm} />
<input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />


// alright, so now we have it and we will also have a Search here.
// so let me have a text Search.
return (
 <div>
   Search
   <input
     type="text"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
   />
 </div>
);

// so, now we have the search bar

// and the next thing is we need to have a list.
// so let's go to List.js and display the list.

List.js

function List(props) {}

export default List;


// so i will have the props here in List component and im going to pass the list from here in App.js


App.js

// alright, so i have created some more records and now we have to pass this list here in App.js

// in App.js, let me have the list and im going to pass the list as posts.
// return (
//   <div className="App">
//     <Search />
//     <List list={posts} />
//     <h2>Start editing to see some magic happen!</h2>
//   </div>
// );
return (
   <div className="App">
     <Search />
     <List list={posts} />
     <h2>Start editing to see some magic happen!</h2>
   </div>
 );


// alright lets go to the List component and inside the search list
// we are going to display the information
// so what i will do is im gonna have a return jsx here
// and what this is going to return is this will, lets have the <ul> tag first
return (
 <ul>
  
 </ul>
)

// alright, and inside the ul tag i will have the or what i can do is a destruture of the list
// let's have a destructure and im gonna have the list here
// alright and inside ul tag will be a list.map() and this is going to have an individual item.
return <ul>{list.map((item) => {})}</ul>;

// and here im gonna a <li> tag and i have to give a key so we have to pass a key.
// and the key will be item.id
// and then what we will do is we are simply going to have the item.title and i will save it.
function List({ list }) {
 return (
   <ul>
     {list.map((item) => {
       <li key={item.id}>{item.title}</li>;
     })}
   </ul>
 );
}

export default List;

<li key={item.id}>{item.title}</li>;


// alright, we dont see the list because we have to return the list from this function
// return <li key={item.id}>{item.title}</li>;
return <li key={item.id}>{item.title}</li>;

// alright, so now we have the list.
// we also have the search here but,
 
// BUT, now if i try to type anything in the search bar then, what i have to do is based on this searchTerm i have to filter my list
// and now in order to do that,
// If you will see here in Search.js that i have a search in this local component.
// const [searchTerm, setSearchTerm] = useState();
Search.js
const [searchTerm, setSearchTerm] = useState();

// but, i want to pass this state into my App.js and then in this App.js, I have to do the filtering on this list.
// So, that's why i have to do a State Lifting Up.


// I have to lift up my state from the search and put it in my parent component.
// the parent component is the App.js
// so, what i will do here is let's go in the App.js and in the App.js, I will create a state.

App.js

import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
 const [searchTerm, setSearchTerm] = useState();

 const posts = [
   {
     id: 1,
     title: "buildspace web3 demo showcase!",
     content:
       "Last night's buildspace demo day was a blast, as was go-karting around the map on gather.town dressed as a pumpkin. It's a massive web3 display! Over…"
   },
   {
     id: 2,
     title: "ReactJS - Introduction",
     content:
       "What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
   },
   {
     id: 4,
     title: "Props vs State",
     content:
       "What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
   },
   {
     id: 5,
     title: "Forms Handling",
     content:
       "What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
   },
   {
     id: 3,
     title: "Build Metaverse with Gather.Town for Free",
     content:
       "Gather.Town Looking for more interactive web-conferencing software like Zoom, but with more fun virtual interactions just like in real life. Then, you…"
   }
 ];

 return (
   <div>
     <Search />
     <List list={posts} />
     <h2>Start editing to see some magic happen!</h2>
   </div>
 );
}


// the parent component is the App.js
// so, what i will do here is let's go in the App.js and in the App.js, I will create a state.

// so, let's have a state here in the App.js
// so, im gonna cut the state from here in Search.js
// cut this const [searchTerm, setSearchTerm] = useState();
const [searchTerm, setSearchTerm] = useState();

// and put in the App.js and also need to import useState hook in order to use the state.
// and let's lift up the state in the parent component.

// alright, so now we have the state here in the App.js
// and now we have to pass this information; [searchTem] in my Search component.
// so, let's pass that so i will go here in <Search /> and what i will do im gonna have a searchTerm and this will be a searchTerm.
return (
 <div>
   <Search searchTem={searchTerm} />
   <List list={posts} />
   <h2>Start editing to see some magic happen!</h2>
 </div>
);

// alright, then i will also have to manage the state so i will get term from here in the Search.js.
// so, this will become, I can destructure and I can have a searchTerm. So, let's have a searchTerm.
// function Search({searchTerm}) {...}
// alright, but since we also have to update the searchTerm, so for that i will do is i will
// i will just remove this arrow function inside the onChange and removing this instead of that??


 
Search.js
// i will have a handleSearch.
// alright, and i have to pass the handleSearch from my prop.
// so, i will have one more prop here which will be a handleSearch.

export default function Search({ searchTerm, handleSearch }) {
 return (
   <div>
     Search
     <input type="text" value={searchTerm} onChange={handleSearch} />
   </div>
 );
}

// alright, and now here in App.js what i will do is im gonna pass one more props which will be handleSearch.
return (
 <div>
   <Search searchTem={searchTerm} handleSearch={handleSearch} />
   <List list={posts} />
   <h2>Start editing to see some magic happen!</h2>
 </div>
);

// this will be a handleSearch but since we dont have any fucntion with the handleSearch, so lets create that function.
// so, im going to have a constant handleSearch and this will be an arrow function
// and its gonna have an event and then what i will do is im gonna have a setSearchTerm and then here we can have the e.target.value
// alright, i will save it.

const handleSearch = (e) => {
 setSearchTerm(e.target.value);
};

// alright now we see that nothing is changed on the UI, but we have lift up our state from a Search to the parent component which is the App.js and now based on that what we can do is we can actually filter out.

// so to filter out the results what we have to do is we have to create a constant.
// so, let's have a constant and i'm going to have the constant filterList.
// alright, and this list will be equals to will filter out all the posts here.
// so, filter out the post based on im going to use a filter method and in this filter mehthod.
// what i will get is im gonna get the item
// alright, and then i have to have the item.title.toLowerCase
// so, we are going to make a search on a lowercase and this should includes, so let's have the includes and then in the includes i can have my term.
// so, let's have a searchTerm
// alright, and this is going to give me the filter results.
// and what i can do is i can pass this filtered results into my list.
//so that will going to give me all the filtered results.
const filterList = posts.filter((item) => {
 item.title.toLowerCase().includes(searchTerm);
});

// but, since there is an error
// let me refresh, and check the error.
// so i have an Cannot access 'posts' before initialization, that is because we have added this constant filterList here but we have initialized the post here.

// so lets cut the constant filterList and put it below the constant posts
// alright, i will save it.

// but we dont see anything here because we have passed the filterList, but
// lets go and see we have to return this
// so, lets return here in the constant filterList
// so im gonna do a return and i will save it
// and as soon as i save it
const filterList = posts.filter((item) => {
 return item.title.toLowerCase().includes(searchTerm);
});

App.js
const filterList = posts.filter((item) => {
 return item.title.toLowerCase().includes(searchTerm);
});

return (
 <div>
   <Search searchTem={searchTerm} handleSearch={handleSearch} />
   <List list={filterList} />
   <h2>Start editing to see some magic happen!</h2>
 </div>
);

// and as soon as i save it and now lets try it
// so, i want to search something with r, so you will see that we have a results which contains 'r' in it
// so, this is a free search and we can now build a search functioanlity
// so this way you can do the how you think in the react
// you build the components and break down the functionality and how you lift up the state

// next, we are going to see about the composition and inheritence in react


# FULL CODE

App.js

```jsx
import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
 const [searchTerm, setSearchTerm] = useState();
 const handleSearch = (e) => {
   setSearchTerm(e.target.value);
 };

 const posts = [
   {
     id: 1,
     title: "buildspace web3 demo showcase!",
     content:
       "Last night's buildspace demo day was a blast, as was go-karting around the map on gather.town dressed as a pumpkin. It's a massive web3 display! Over…"
   },
   {
     id: 2,
     title: "ReactJS - Introduction",
     content:
       "What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
   },
   {
     id: 4,
     title: "Props vs State",
     content:
       "What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
   },
   {
     id: 5,
     title: "Forms Handling",
     content:
       "What is ReactJS? ➡️declarative, efficient, and flexible JavaScript library for building reusable UI components. ➡️an open-source, component-based…"
   },
   {
     id: 3,
     title: "Build Metaverse with Gather.Town for Free",
     content:
       "Gather.Town Looking for more interactive web-conferencing software like Zoom, but with more fun virtual interactions just like in real life. Then, you…"
   }
 ];

 const filterList = posts.filter((item) => {
   return item.title.toLowerCase().includes(searchTerm);
 });

 return (
   <div>
     <Search searchTem={searchTerm} handleSearch={handleSearch} />
     <List list={filterList} />
     <h2>Start searching to see some magic happen!</h2>
   </div>
 );
}
```

Search.js
```jsx
export default function Search({ searchTerm, handleSearch }) {
 return (
   <div>
     Search
     <input type="text" value={searchTerm} onChange={handleSearch} />
   </div>
 );
}
```

List.js
```jsx
function List({ list }) {
 return (
   <ul>
     {list.map((item) => {
       return <li key={item.id}>{item.title}</li>;
     })}
   </ul>
 );
}

export default List;
```