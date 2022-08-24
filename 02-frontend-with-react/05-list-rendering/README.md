# Lists and Keys

First, let’s review how you transform lists in JavaScript.

```js
function Blog(props) {
 const body = props.posts.map((post) => {
   return (
     <>
       <li>{post.id}</li>
       <li>{post.title}</li>
       <li>{post.body}</li>
     </>
   );
 });

 return (
   <>
     <h1>List of Objects</h1>
     <h3>{body}</h3>
   </>
 );
}

export default Blog;
```

// how to handle the list and keys in react application.
// so, goto App.js, we have a simple [{key:value}, {key:value}] array of objects and that is the const "posts" and in this object you have an ID, title, body
// now what we will do is we want to display all the post on our screen.
// What im going to do is lets create a new component
// so, a new file name Blog.js
// then inside Blog.js gonna have a function name Blog and its gonna take a props
// function Blog(props)
// then, export default this Blog
// now, we have to use this Blog in App component
// import Blog component from 'react' then, use the Blog
// <Blog />
 
// # inside App.js
// now, when I have to use it, I want to pass the data and the data is the const 'posts.
// so we are going to pass this post with the help of props.
// so, lets go here <Blog /> at App component and pass this posts with the help of props
// <Blog posts={}/>
// what i will do is im gonna have all the posts and this value of the posts is the array of the post.
// so, lets go here in <Blog /> and here we dont have anything. saved,
// <Blog posts={posts}/>
 
// # goto Blog.js
//so, thats why we are not able to see here anything.
// in Blog function, lets do return a jsx
// lets have a div and inside the div gonna write the {body}
// return <div>{body}</div>
// got error. need to define this 'body' variables
// so, lets have a constant body and we need to now look all the 'posts' and need to display the data.
// so if we go to the props then inside the props we are going to have the posts
// const body = props.posts
// the force??? we need to map all the posts.
// so lets use the map() and this map is going to give us an individual post
// props.posts.map(post)
// and im going to create an arrow function here as well.
// props.posts.map((post) => {})
// I want to display. So, what i will do is im gonna have a return here arrow function, and inside the return i will do a list <li> and then what i can do i can have here the "post.id"
// return <li>post.id</li>
// alright and then i can have a similar, can have the post.title and have post.body and saved it
// return (
//   <>
//     <li>post.id</li>
//     <li>post.title</li>
//     <li>post.body</li>
//   </>
// now, you will see that what we are able to see here is we have the post.id, but since its a variable so we have to add curly braces. then saved it
// return (
//   <>
//     <li>{post.id}</li>
//     <li>{post.title}</li>
//     <li>{post.body}</li>
//   </>
 
// now, we will see that we have the id, title, and body to the react and we are able to display all this information
// alright, now let refresh it
// then in console, you will see that we get a warning
// Warning: Each child in a list should have a unique "key" prop.
// Check the render method of `Blog`. See https://reactjs.org/link/warning-keys for more information.
// at Blog (https://1571uj.csb.app/src/components/Blog.js:13:22)
// at div
// at App
 
// so, here we have a multiple list <li>.
// but each of the child should be have a unique key
// so, what im going to do is going to do a little bit of restructuring here
// so gonna change the list to
 
// change this to <Post /> so i will have a post
// inside the Post, im going to pass the individual post
// okay, so let me have a key as well
// so im gonna give a key and this key should be unique.
// so, what we can do is we can have the post.id because the id will be a unique and then gonna pass the post as well.
// so, let me have an individual post and this individual post will be equals to the {post}
// now we have this and now
 
// return (
//   <>
//     <Post key={post.id} post={post}/>
//     <li>{post.id}</li>
//     <li>{post.title}</li>
//     <li>{post.body}</li>
//   </>
// );
 
// now we have this and now im going to cut multiple <li>,
// return (
//   <>
//     <Post key={post.id} post={post}/>
//   </>
// );
 
// and we can create a new component of the post.
// so lets go down outside the Blog component
// im going to create a function Post which going to take the props.
// function Post(props) {}
// And then we return a list <li>
 
// function Post(props) {
//     <li>{post.id}</li>
//     <li>{post.title}</li>
//     <li>{post.body}</li>
// }
 
// so, what i will do i will change <li> to <div>
// can remove the fragment in <Post key={} post={} />
 
// then what we can do is we can have a <div> here, then inside the <div> gonna have {post.id}. will change <li> to <div>
 
// function Post(props) {
//   return (
//     <div>
//       <div>{post.id}</div>
//       <div>{post.title}</div>
//       <div>{post.body}</div>
//     </div>
//   )
// }
 
// then, what we can do here since we have the props, so we can restructure the props and on this prop. we have the ID we have the title, body
 
// function Post({id, title, body}) {
//   return (
//     <div>
//       <div>{id}</div>
//       <div>{title}</div>
//       <div>{body}</div>
//     </div>
//   )
// }

// so, we can directly use the ID here inside the `<div>`
// so let me have the id, title, content
// then save it

```js
function Blog(props) {
 const body = props.posts.map((post) => {
   return (
     <>
       <Post key={post.id} post={post} />
     </>
   );
 });
 
 return (
   <>
     <h1>List of Objects</h1>
     <h3>{body}</h3>
   </>
 );
}
 
function Post({ id, title, body }) {
 return (
   <div>
     <div>{id}</div>
     <div>{title}</div>
     <div>{body}</div>
   </div>
 );
}
 
export default Blog;
```

// we dont see anything and here we made a mistake.
// so, im gonna have a constant and on the constant, we can remove the restructuring we did before
// so, let add to the const and this will be equals to the props.post because we have a post and lets have a props in Post function
// now i will save it and we will see

// function Post(props) {
//   const { id, title, body } = props.post;

//   return (
//     <div>
//       <div>{id}</div>
//       <div>{title}</div>
//       <div>{body}</div>
//     </div>
//   );
// }

// now we see we have all the information now, we dont even see the warning
// so if we want to see the warning again, just remove the return <Post post={post} />;

// then we see that functionality work as it is but you will see a warning which is that each child in the list should have a unique key
// so thats where you need to give a unique key whenever you use a list and thats where its a list and a keys.
// so this how you can do the rendering of the list and you have to add a keys

// so in the next, we are going to see how we can handle forms in react application.



FULL
Blog.js

```js
function Blog(props) {
 const body = props.posts.map((post) => {
   return <Post key={post.id} post={post} />;
 });
 
 return (
   <>
     <h1>List of Objects</h1>
     <h3>{body}</h3>
   </>
 );
}
 
function Post(props) {
 const { id, title, body } = props.post;
 
 return (
   <div>
     <div>{id}</div>
     <div>{title}</div>
     <div>{body}</div>
   </div>
 );
}
 
export default Blog;
```

App.js

```js
import "./styles.css";
import Blog from "./components/Blog";
 
export default function App() {
 const posts = [
   {
     userId: 8,
     id: 71,
     title: "et iusto veniam et illum aut fuga",
     body:
       "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
   },
   {
     userId: 8,
     id: 72,
     title: "sint hic doloribus consequatur eos non id",
     body:
       "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
   },
   {
     userId: 8,
     id: 73,
     title: "consequuntur deleniti eos quia temporibus ab aliquid at",
     body:
       "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
   }
 ];
 
 return (
   <div className="App">
     <Blog posts={posts} />
     <h2>Start editing to see some magic happen!</h2>
   </div>
 );
}
```
